import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { Resend } from 'resend';

export const dynamic = "force-dynamic";

// Provide a fallback dummy instance if env var is missing during development
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { subject, content } = body;

    if (!subject || !content) {
      return NextResponse.json({ error: 'Missing subject or content' }, { status: 400 });
    }

    const subscribers = await prisma.subscriber.findMany({
      select: { email: true }
    });

    if (subscribers.length === 0) {
      return NextResponse.json({ error: 'No subscribers found' }, { status: 400 });
    }

    const emailList = subscribers.map(s => s.email);

    if (!resend) {
      // Simulate sending in dev mode without API key
      console.log(`[SIMULATED EMAIL] To: ${emailList.length} subscribers`);
      console.log(`Subject: ${subject}`);
      console.log(`Content: ${content}`);
      return NextResponse.json({ success: true, simulated: true });
    }

    // In a production scenario, you would use batching for large lists.
    // Here we send a single bcc to avoid exposing emails to each other.
    const data = await resend.emails.send({
      from: 'Holistic Health Clinic <newsletter@holistichealth.com>', // You must verify this domain in Resend
      to: ['newsletter@holistichealth.com'], // Send to yourself
      bcc: emailList,
      subject: subject,
      text: content,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Failed to send newsletter:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
