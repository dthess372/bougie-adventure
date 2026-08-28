import { NextResponse } from 'next/server';
import { escapeHtml } from '@/lib/escapeHtml';

// Adds the subscriber to the Emma (Email+) audience. Returns false on any
// failure so the Resend notification below still captures the lead.
async function addToEmma(email: string, name?: string): Promise<boolean> {
  const accountId = process.env.EMMA_ACCOUNT_ID;
  const publicKey = process.env.EMMA_PUBLIC_KEY;
  const privateKey = process.env.EMMA_PRIVATE_KEY;
  if (!accountId || !publicKey || !privateKey) return false;

  const [firstName, ...rest] = (name ?? '').trim().split(/\s+/);
  const fields: Record<string, string> = {};
  if (firstName) fields.first_name = firstName;
  if (rest.length) fields.last_name = rest.join(' ');

  const groupId = process.env.EMMA_GROUP_ID;

  try {
    const res = await fetch(`https://api.e2ma.net/${accountId}/members/add`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`${publicKey}:${privateKey}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        fields,
        ...(groupId ? { group_ids: [Number(groupId)] } : {}),
      }),
    });
    if (!res.ok) {
      console.error('Emma error:', res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error('Emma request failed:', err);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const addedToEmma = await addToEmma(email, name);

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY not set');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const safeName = name ? escapeHtml(name) : '';
    const safeEmail = escapeHtml(email);

    const html = `
      <h2>New Bougie email signup</h2>
      ${safeName ? `<p><strong>Name:</strong> ${safeName}</p>` : ''}
      <p><strong>Email:</strong> ${safeEmail}</p>
      ${addedToEmma
        ? '<p>Already added to your Email+ audience automatically. No action needed.</p>'
        : '<p>Could not add this contact to Email+ automatically. Add them manually.</p>'}
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
        subject: `New email signup: ${name || email}`,
        html,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
