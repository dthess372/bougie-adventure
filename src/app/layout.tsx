import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import EmailCapturePopup from "@/components/ui/EmailCapturePopup";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/site";

const description =
  "Curated luxury adventure trips for women 50+. White water rafting, river kayaking, and more, with the comfort and camaraderie you deserve.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: '/logo.png',
    apple: '/apple-icon.png',
  },
  title: {
    default: "Bougie Adventure | Luxury Adventure Travel for Women 50+",
    template: "%s | Bougie Adventure",
  },
  description,
  openGraph: {
    title: "Bougie Adventure",
    description: "Luxury adventure travel for women who refuse to choose between comfort and thrill.",
    url: SITE_URL,
    siteName: "Bougie Adventure",
    locale: "en_US",
    type: "website",
  },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Bougie Adventure",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description,
  email: "info@bougieadventure.com",
  sameAs: ["https://instagram.com/bougieadventure"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        <JsonLd data={organization} />
        <ScrollReveal />
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <EmailCapturePopup />
      </body>
    </html>
  );
}
