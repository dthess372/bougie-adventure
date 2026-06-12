import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Bougie Adventure: Luxury Adventure Travel for Women 50+';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1D3557',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Subtle top accent bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, backgroundColor: '#C5A059' }} />

        {/* Logo */}
        <img
          src="https://bougieadventure.com/logo.png"
          width={120}
          height={120}
          style={{ marginBottom: 32 }}
        />

        <p style={{ color: '#C5A059', fontSize: 14, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: 16 }}>
          Adventure · Wellness · Sisterhood
        </p>

        <h1 style={{ color: '#fdfaf5', fontSize: 64, fontWeight: 700, margin: 0, marginBottom: 16, textAlign: 'center', lineHeight: 1.1 }}>
          Bougie Adventure
        </h1>

        <p style={{ color: 'rgba(253,250,245,0.75)', fontSize: 24, margin: 0, textAlign: 'center', maxWidth: 700 }}>
          Luxury adventure travel for women 50+ who refuse to choose between comfort and thrill.
        </p>

        {/* Bottom accent bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 6, backgroundColor: '#C5A059' }} />
      </div>
    ),
    { ...size },
  );
}
