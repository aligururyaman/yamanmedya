import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: {
    default: "Yaman Medya",
    template: "%s | Yaman Medya",
  },
  description:
    "Yaman Medya; video, sosyal medya ve web tasarımda net sonuç üreten kreatif ajans.",
  metadataBase: new URL("https://yamanmedya.com"),
  openGraph: {
    title: "Yaman Medya",
    description:
      "Video, sosyal medya ve web tasarımda net sonuç üreten kreatif ajans.",
    type: "website",
    url: "https://yamanmedya.com",
    siteName: "Yaman Medya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yaman Medya",
    description:
      "Video, sosyal medya ve web tasarımda net sonuç üreten kreatif ajans.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${sora.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
