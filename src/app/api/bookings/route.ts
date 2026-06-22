import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const bookingSchema = z.object({
  patientName: z.string().min(2, "Name must be at least 2 characters"),
  patientPhone: z.string().min(10, "Valid phone number required"),
  service: z.string().min(2, "Service required"),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  timeSlot: z.string().regex(/^\d{2}:\d{2}$/, "Invalid time format"),
  notes: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = bookingSchema.parse(body);

    // Check if slot is taken
    const existingBooking = await prisma.booking.findFirst({
      where: {
        date: data.date,
        timeSlot: data.timeSlot,
        status: {
          not: "CANCELLED"
        }
      }
    });

    if (existingBooking) {
      return NextResponse.json(
        { error: "This time slot is already booked." },
        { status: 400 }
      );
    }

    const booking = await prisma.booking.create({
      data: {
        patientName: data.patientName,
        patientPhone: data.patientPhone,
        service: data.service,
        date: data.date,
        timeSlot: data.timeSlot,
        notes: data.notes,
      }
    });

    // Mock Email sending
    console.log(`[EMAIL MOCK] Sending confirmation email for booking ${booking.id}...`);

    return NextResponse.json({ success: true, booking });
  } catch (error) {
    if (error instanceof z.ZodError) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return NextResponse.json({ error: (error as any).errors[0].message }, { status: 400 });
    }
    console.error("Booking error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
