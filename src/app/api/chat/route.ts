import { google } from '@ai-sdk/google';
import { generateText } from 'ai';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const maxDuration = 30;

// Simple in-memory sliding-window rate limiter
const rateLimitMap = new Map<string, number[]>();

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const oneMinuteAgo = now - 60 * 1000;
  
  // Get timestamps for this key and filter out expired ones (> 1 min old)
  const timestamps = rateLimitMap.get(key) || [];
  const recentTimestamps = timestamps.filter(ts => ts > oneMinuteAgo);
  
  if (recentTimestamps.length >= 5) {
    return true;
  }
  
  recentTimestamps.push(now);
  rateLimitMap.set(key, recentTimestamps);
  return false;
}

export async function POST(req: Request) {
  try {
    const { messages, sessionId } = await req.json();

    // Determine rate limit key: session ID if available, otherwise IP
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || '127.0.0.1';
    const rateLimitKey = sessionId && sessionId !== 'unknown' ? sessionId : ip;

    if (checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        { error: 'Too many messages. Please limit to 5 messages per minute.' },
        { status: 429 }
      );
    }

    // Log chat analytics events
    if (sessionId && sessionId !== 'unknown') {
      try {
        await prisma.analyticsEvent.create({
          data: {
            eventType: 'CHAT_MESSAGE',
            sessionId,
          },
        });

        // Record a CHAT_START event on the first message
        if (messages && messages.length === 1) {
          await prisma.analyticsEvent.create({
            data: {
              eventType: 'CHAT_START',
              sessionId,
            },
          });
        }
      } catch (analyticsError) {
        console.error('Failed to log chatbot analytics:', analyticsError);
      }
    }

    const systemPrompt = `You are a friendly, professional, and empathetic AI assistant for the Holistic Health Clinic in Vikhroli, Mumbai.
Your goal is to answer questions about the clinic's services (physiotherapy and counselling), operating hours, and general wellness.

CLINIC INFORMATION (Use this to answer user questions):
- Address: Ground floor, besides Pillai dental care, A WING, Sai Shraddha Rd, behind Trillium dental care, Ashok Nagar, Vikhroli East, Mumbai, Maharashtra 400083.
- Phone Number: +91 8591180090 (No email available right now).
- Operating Hours: Monday to Saturday (Morning: 9:00 AM to 1:00 PM, Evening: 6:00 PM to 9:00 PM). Sunday is by Appointment only.
- Services: Physiotherapy and Professional Counselling.

IMPORTANT RULES:
1. Refer to the clinic as "we" or "Holistic Health Clinic". Do not explicitly mention "Dr. Shreya Ghag" unless asked.
2. NEVER provide medical diagnoses or prescribe treatments. Advise the user to consult the doctor in person.
3. Keep your answers concise and conversational (2-3 sentences max).
4. If a patient wants to book an appointment or asks a complex question, always encourage them to use the "Chat on WhatsApp" button on the website.
5. You don't have access to real-time booking schedules.`;

    const { text } = await generateText({
      model: google('gemini-1.5-flash'),
      system: systemPrompt,
      messages,
    });

    return NextResponse.json({ text });
  } catch (error: any) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: error.message || "Failed to generate text" }, { status: 500 });
  }
}
