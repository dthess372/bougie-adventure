import { NextResponse } from 'next/server';
import { escapeHtml } from '@/lib/escapeHtml';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, trip, groupSize, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY not set');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : '';
    const safeTrip = trip ? escapeHtml(trip) : '';
    const safeGroupSize = groupSize ? escapeHtml(groupSize) : '';
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    const html = `
      <h2>New inquiry from ${safeName}</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      ${safePhone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ''}
      ${safeTrip ? `<p><strong>Trip interest:</strong> ${safeTrip}</p>` : ''}
      ${safeGroupSize ? `<p><strong>Group size:</strong> ${safeGroupSize}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${safeMessage}</p>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Bougie Adventure <info@bougieadventure.com>',
        to: ['laurelhess57@gmail.com', 'pulick.n@gmail.com'],
        reply_to: email,
        subject: `New inquiry from ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
