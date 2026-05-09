import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/footer";
import WhatsAppFloat from "@/components/WhatsApp";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eustacepoxy.com"),
  title: {
    default: "Epoxy Flooring Nairobi | Waterproofing Contractor | Microcement Services in Kenya",
    template: "%s | Eustace Epoxy Ltd"
  },
  description: "Transform your residential, commercial, and industrial spaces with high-quality epoxy flooring and waterproofing solutions designed for beauty, durability, and long-lasting performance.",
  keywords: ["epoxy flooring nairobi", "waterproofing contractor kenya", "microcement services nairobi", "venetian plaster kenya", "industrial flooring nairobi", "decorative finishes kenya"],
  authors: [{ name: "Eustace Epoxy Ltd" }],
  creator: "Eustace Epoxy Ltd",
  publisher: "Eustace Epoxy Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://eustacepoxy.com",
    siteName: "Eustace Epoxy Ltd",
    title: "Epoxy Flooring & Waterproofing Specialists in Nairobi, Kenya",
    description: "Premium epoxy flooring, microcement, and waterproofing solutions for residential and commercial spaces.",
    images: [
      {
        url: "/about.webp",
        width: 1200,
        height: 630,
        alt: "Eustace Epoxy Ltd - Premium Flooring Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Epoxy Flooring & Waterproofing Specialists in Nairobi",
    description: "Durable and elegant flooring solutions in Kenya.",
    images: ["/about.webp"],
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
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      
        <FooterSection />
      </body>
        <WhatsAppFloat />
    </html>
  );
}
