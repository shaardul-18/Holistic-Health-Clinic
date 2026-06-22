import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { status } = body;

    if (!["PENDING", "CONFIRMED", "CANCELLED"].includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    const booking = await prisma.booking.update({
      where: { id },
      data: { status }
    });

    console.log(`[EMAIL MOCK] Sending status update email to ${booking.patientName}. New Status: ${status}`);

    return NextResponse.json({ success: true, booking });
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json({ error: "Failed to update booking" }, { status: 500 });
  }
}
