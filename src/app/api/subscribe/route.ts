import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Resend } from 'resend';

export const dynamic = "force-dynamic";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 });
    }

    // Check if subscriber already exists
    const existing = await prisma.subscriber.findUnique({
      where: { email },
    });

    // Try to create/upsert the subscriber
    const subscriber = await prisma.subscriber.upsert({
      where: { email },
      update: {},
      create: { email },
    });

    // If it's a new subscriber, send a welcome email
    if (!existing) {
      if (resend) {
        try {
          await resend.emails.send({
            from: 'Holistic Health Clinic <newsletter@holistichealth.com>', // Verify domain in Resend
            to: [email],
            subject: 'Welcome to Holistic Health Clinic!',
            html: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
                <h2 style="color: #1886C6; margin-bottom: 10px;">Welcome to Holistic Health Clinic!</h2>
                <p style="font-size: 16px; color: #334155; line-height: 1.5;">
                  Thank you for subscribing to our newsletter. You will now receive updates on our clinical services, wellness tips, and community events.
                </p>
                <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
                <h3 style="color: #1FA44B; margin-top: 0;">Our Clinical Offerings:</h3>
                <ul style="font-size: 14px; color: #475569; padding-left: 20px; line-height: 1.6;">
                  <li><strong>Advanced Physiotherapy:</strong> Dedicated rehabilitation for joint issues, sports injuries, and custom post-surgical plans.</li>
                  <li><strong>Professional Counselling:</strong> Comprehensive psychological support, anxiety management, and relationship guidance.</li>
                  <li><strong>Clinical Diet & Nutrition:</strong> Custom-tailored medical nutrition plans for gut health, weight management, and diabetic recovery.</li>
                </ul>
                <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
                <p style="font-size: 14px; color: #334155; margin-bottom: 5px;"><strong>Visit or Contact Us:</strong></p>
                <p style="font-size: 13px; color: #475569; margin: 3px 0;">📍 Ground Floor, A-Wing, Sai Shraddha Rd, besides Pillai Dental Care, Ashok Nagar, Vikhroli East, Mumbai - 400083</p>
                <p style="font-size: 13px; color: #475569; margin: 3px 0;">📞 Phone: +91 8591180090</p>
                <p style="font-size: 13px; color: #475569; margin: 3px 0;">🕒 Mon - Sat: 9:00 AM - 1:00 PM &amp; 6:00 PM - 9:00 PM (Sunday by Appointment Only)</p>
                <div style="margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 15px; font-size: 12px; color: #94a3b8; text-align: center;">
                  &copy; ${new Date().getFullYear()} Holistic Health Clinic. All rights reserved.
                </div>
              </div>
            `,
          });
        } catch (emailError) {
          console.error('Failed to send welcome email:', emailError);
        }
      } else {
        // Dev mode simulation log
        console.log(`[SIMULATED WELCOME EMAIL] Sent to: ${email}`);
      }
    }

    return NextResponse.json(subscriber);
  } catch (error) {
    console.error('Failed to subscribe:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
