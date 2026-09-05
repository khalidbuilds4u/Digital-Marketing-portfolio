import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, company, budget, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Connect to Resend API
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      // If no API key is set, log to console and return success for development/testing
      console.log('--- NEW CONTACT FORM SUBMISSION ---');
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Company: ${company || 'N/A'}`);
      console.log(`Budget: ${budget || 'N/A'}`);
      console.log(`Message: ${message}`);
      console.log('-----------------------------------');
      console.log('NOTE: Email not sent because RESEND_API_KEY is missing in .env.local');
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      return NextResponse.json({ success: true, mocked: true });
    }

    // If API key exists, send the email
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Acme <onboarding@resend.dev>', // Change this to your verified domain (e.g. hello@youragency.com)
        to: ['your-email@example.com'], // Change this to your actual email address
        subject: `New Lead: ${name} from ${company || 'Unknown Company'}`,
        html: `
          <h2>New Lead from SIGNAL. Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Budget:</strong> ${budget || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    if (res.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorData = await res.json();
      return NextResponse.json({ error: errorData.message || 'Failed to send email' }, { status: 500 });
    }
  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
