import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@components/components/Header"
import Footer from "@components/components/Footer";
import { Analytics } from "@vercel/analytics/react"
import ContactInfo  from "@components/components/ui/ContactInfo"
import { SpeedInsights } from "@vercel/speed-insights/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ujamaa Foundation",
  description: "This is a Non Profit Organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics/>
        <SpeedInsights/>
        <ContactInfo/>
        <Header/>
        
       <main>{children}</main> 
       <Footer/>
      </body>
    </html>
  );
}
