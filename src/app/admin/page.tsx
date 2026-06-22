import { prisma } from "@/lib/prisma";
import { AnimatedCard } from "@/components/reactbits/AnimatedCard";
import { DashboardCharts } from "@/components/dashboard-charts";
import { format, subDays } from "date-fns";

export default async function AdminDashboard() {
  const totalBookings = await prisma.booking.count();
  const confirmedBookings = await prisma.booking.count({ where: { status: "CONFIRMED" } });
  const pendingBookings = await prisma.booking.count({ where: { status: "PENDING" } });

  // Get last 7 days trends
  const sevenDaysAgo = format(subDays(new Date(), 7), "yyyy-MM-dd");
  
  const recentBookings = await prisma.booking.groupBy({
    by: ['date'],
    _count: { id: true },
    where: { date: { gte: sevenDaysAgo } },
    orderBy: { date: 'asc' }
  });

  const chartData = recentBookings.map(item => ({
    date: item.date,
    bookings: item._count.id
  }));

  // Service distribution
  const serviceDistribution = await prisma.booking.groupBy({
    by: ['service'],
    _count: { id: true }
  });

  const pieData = serviceDistribution.map(item => ({
    name: item.service,
    value: item._count.id
  }));

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
      
      <div className="grid gap-6 md:grid-cols-3">
        <AnimatedCard>
          <div className="text-sm font-medium text-muted-foreground">Total Bookings</div>
          <div className="text-3xl font-bold">{totalBookings}</div>
        </AnimatedCard>
        <AnimatedCard>
          <div className="text-sm font-medium text-muted-foreground">Confirmed</div>
          <div className="text-3xl font-bold text-primary">{confirmedBookings}</div>
        </AnimatedCard>
        <AnimatedCard>
          <div className="text-sm font-medium text-muted-foreground">Pending Action</div>
          <div className="text-3xl font-bold text-destructive">{pendingBookings}</div>
        </AnimatedCard>
      </div>

      <DashboardCharts lineData={chartData} pieData={pieData} />
    </div>
  );
}
