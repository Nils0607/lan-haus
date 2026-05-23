import type { Metadata } from "next";
import { DM_Sans, Rajdhani } from "next/font/google";

import { SiteNavigation } from "@/components/layout/site-navigation";
import { SiteFooter } from "@/components/layout/site-footer";

import "./globals.css";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NEXUS LAN · Gaming LAN Haus",
  description:
    "High-End Gaming LAN: Arena, 240 Hz, symmetrische Anbindung — Sessions für Teams, Creator und Community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`dark ${rajdhani.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteNavigation />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
