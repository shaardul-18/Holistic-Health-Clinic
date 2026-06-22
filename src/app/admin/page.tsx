import { prisma } from "@/lib/prisma";
import { AnimatedCard } from "@/components/reactbits/AnimatedCard";
import { DashboardCharts } from "@/components/dashboard-charts";
import { format, subDays } from "date-fns";

export default async function AdminDashboard() {
  const totalPageViews = await prisma.analyticsEvent.count({ where: { eventType: "PAGE_VIEW" } });
  const totalWhatsAppClicks = await prisma.analyticsEvent.count({ where: { eventType: "WHATSAPP_CLICK" } });
  const totalSubscribers = await prisma.subscriber.count();

  // Get last 7 days trends for PAGE_VIEWS
  const sevenDaysAgoDate = subDays(new Date(), 7);
  
  // We fetch all events from the last 7 days and group them in JS since SQLite doesn't have a simple DATE() function for grouping in Prisma natively without raw query.
  const recentEvents = await prisma.analyticsEvent.findMany({
    where: {
      eventType: "PAGE_VIEW",
      createdAt: { gte: sevenDaysAgoDate }
    },
    select: { createdAt: true }
  });

  const dailyCounts: Record<string, number> = {};
  for (let i = 6; i >= 0; i--) {
    const d = format(subDays(new Date(), i), "yyyy-MM-dd");
    dailyCounts[d] = 0;
  }

  recentEvents.forEach(event => {
    const d = format(event.createdAt, "yyyy-MM-dd");
    if (dailyCounts[d] !== undefined) {
      dailyCounts[d]++;
    }
  });

  const chartData = Object.keys(dailyCounts).map(date => ({
    date,
    views: dailyCounts[date]
  }));

  // Top Pages
  const pageViews = await prisma.analyticsEvent.groupBy({
    by: ['path'],
    where: { eventType: "PAGE_VIEW", path: { not: null } },
    _count: { id: true },
    orderBy: { _count: { id: 'desc' } },
    take: 5
  });

  const barData = pageViews.map(item => ({
    path: item.path || "/",
    views: item._count.id
  }));

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Analytics Overview</h1>
      
      <div className="grid gap-6 md:grid-cols-3">
        <AnimatedCard>
          <div className="text-sm font-medium text-muted-foreground">Total Page Views</div>
          <div className="text-3xl font-bold">{totalPageViews}</div>
        </AnimatedCard>
        <AnimatedCard>
          <div className="text-sm font-medium text-muted-foreground">WhatsApp Clicks</div>
          <div className="text-3xl font-bold text-[#25D366]">{totalWhatsAppClicks}</div>
        </AnimatedCard>
        <AnimatedCard>
          <div className="text-sm font-medium text-muted-foreground">Newsletter Subscribers</div>
          <div className="text-3xl font-bold text-primary">{totalSubscribers}</div>
        </AnimatedCard>
      </div>

      <DashboardCharts lineData={chartData} barData={barData} />
    </div>
  );
}
