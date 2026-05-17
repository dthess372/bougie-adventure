import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://bougieadventure.com'),
  title: {
    default: "Bougie Adventure | Luxury Adventure Travel for Women 50+",
    template: "%s | Bougie Adventure",
  },
  description:
    "Curated luxury adventure trips for women 50+. White water rafting, river kayaking, and more, with the comfort and camaraderie you deserve.",
  openGraph: {
    title: "Bougie Adventure",
    description: "Luxury adventure travel for women who refuse to choose between comfort and thrill.",
    url: "https://bougieadventure.com",
    siteName: "Bougie Adventure",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
