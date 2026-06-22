import { prisma } from "@/lib/prisma";
import { BookingsTable } from "@/components/bookings-table";
import { AnimatedCard } from "@/components/reactbits/AnimatedCard";

export default async function AdminBookings() {
  const bookings = await prisma.booking.findMany({
    orderBy: [
      { date: 'desc' },
      { timeSlot: 'asc' }
    ]
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Manage Bookings</h1>
      </div>

      <AnimatedCard className="p-0 overflow-hidden border-none shadow-lg">
        <BookingsTable initialData={bookings} />
      </AnimatedCard>
    </div>
  );
}
