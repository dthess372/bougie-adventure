import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, trip, groupSize, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // TODO: Replace with Resend email delivery once API key is set up
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'contact@bougieadventure.com',
    //   to: 'hello@bougieadventure.com',
    //   subject: `New inquiry from ${name}`,
    //   html: `<p>Name: ${name}</p><p>Email: ${email}</p>...`
    // });

    console.log('Contact form submission:', { name, email, phone, trip, groupSize, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
