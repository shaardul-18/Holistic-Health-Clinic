import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { format, parse } from "date-fns";

// 9:30 AM to 1:00 PM
const morningSlots = ["09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30"];
// 6:00 PM to 9:30 PM
const eveningSlots = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];

const allSlots = [...morningSlots, ...eveningSlots];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const dateStr = searchParams.get("date");

  if (!dateStr) {
    return NextResponse.json({ error: "Date is required" }, { status: 400 });
  }

  try {
    const existingBookings = await prisma.booking.findMany({
      where: {
        date: dateStr,
        status: {
          not: "CANCELLED"
        }
      },
      select: {
        timeSlot: true
      }
    });

    const bookedSlots = new Set(existingBookings.map(b => b.timeSlot));
    const availableSlots = allSlots.filter(slot => !bookedSlots.has(slot));

    // Also filter out past times if the date is today
    const todayStr = format(new Date(), "yyyy-MM-dd");
    let finalSlots = availableSlots;

    if (dateStr === todayStr) {
      const now = new Date();
      finalSlots = availableSlots.filter(slot => {
        const slotTime = parse(slot, "HH:mm", new Date());
        return slotTime > now;
      });
    }

    return NextResponse.json({ slots: finalSlots });
  } catch (error) {
    console.error("Slots error:", error);
    return NextResponse.json({ error: "Failed to fetch slots" }, { status: 500 });
  }
}
