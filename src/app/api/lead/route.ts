import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Send the lead magnet email
    // Note: Replace 'onboarding@resend.dev' with your verified domain once you add one in Resend dashboard
    const { data, error } = await resend.emails.send({
      from: 'Business Hub <onboarding@resend.dev>', 
      to: [email],
      subject: 'Your Free Download: The 2024 Digital Ecosystem Report',
      html: `
        <div style="font-family: 'Inter', sans-serif; color: #111111; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #C1121F; font-family: 'Space Grotesk', sans-serif;">Welcome to Business Hub</h1>
          <p style="font-size: 16px; line-height: 1.6;">Thank you for subscribing. Here is your requested asset:</p>
          
          <div style="background-color: #F2EDE3; padding: 20px; border-left: 4px solid #C1121F; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold;">📥 Download Link:</p>
            <a href="#" style="color: #C1121F; text-decoration: none; font-weight: bold;">Click here to download your guide</a>
          </div>

          <p style="font-size: 16px; line-height: 1.6;">We will keep you updated with the latest opportunities, jobs, and market insights.</p>
          
          <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
          <p style="font-size: 12px; color: #666;">Business Hub | Build. Connect. Discover.</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}