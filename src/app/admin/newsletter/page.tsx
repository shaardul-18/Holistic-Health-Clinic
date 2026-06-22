import { prisma } from "@/lib/prisma";
import { NewsletterClient } from "./newsletter-client";

export const dynamic = "force-dynamic"; // Ensures fresh data when navigating

export default async function NewsletterAdminPage() {
  const subscribers = await prisma.subscriber.findMany({
    orderBy: {
      subscribedAt: 'desc'
    }
  });

  return <NewsletterClient subscribers={subscribers} />;
}
