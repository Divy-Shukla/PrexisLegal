import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const jost = Jost({ 
  subsets: ["latin"],
  variable: "--font-jost",
});

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CallbackWidget from "@/components/CallbackWidget";

export const metadata: Metadata = {
  title: "PrexisLegal — Premier Law Firm, Lucknow | Advocates & Solicitors",
  description: "PrexisLegal is a top-tier law firm in Lucknow handling Litigation, Criminal, Family, Real Estate, Employment & Arbitration matters across Allahabad High Court and UP courts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "PrexisLegal",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "70 Point Law Tower, Connaught Place",
                "addressLocality": "New Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110001",
                "addressCountry": "IN"
              },
              "telephone": "+91 90000 00000",
              "url": "https://prexislegal.com"
            })
          }}
        />
      </head>
      <body className={`${cormorant.variable} ${jost.variable} font-sans bg-navy text-cream antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
        <CallbackWidget />
        <AIChatWidget />
      </body>
    </html>
  );
}
