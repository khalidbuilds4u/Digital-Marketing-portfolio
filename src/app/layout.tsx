import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://signal-agency.com"),
  title: {
    default: "SIGNAL. — Cut Through The Noise.",
    template: "%s | SIGNAL."
  },
  description: "Strategy, creativity, and digital craft for brands that refuse to be ignored.",
  openGraph: {
    title: "SIGNAL. — Cut Through The Noise.",
    description: "Strategy, creativity, and digital craft for brands that refuse to be ignored.",
    url: "https://signal-agency.com",
    siteName: "SIGNAL. Agency",
    images: [
      {
        url: "/assets/images/og-image.jpg", // This will fallback to a generic image or should be added
        width: 1200,
        height: 630,
        alt: "SIGNAL. Agency Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIGNAL. — Cut Through The Noise.",
    description: "Strategy, creativity, and digital craft for brands that refuse to be ignored.",
    creator: "@signalagency",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
