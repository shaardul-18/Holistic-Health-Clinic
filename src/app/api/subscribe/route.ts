import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 });
    }

    // Try to create the subscriber, ignore if it already exists
    const subscriber = await prisma.subscriber.upsert({
      where: { email },
      update: {},
      create: { email },
    });

    return NextResponse.json(subscriber);
  } catch (error) {
    console.error('Failed to subscribe:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
