import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coinpulse",
  description: "Built for Crypto Screener application",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html
          lang="en"
          className={cn(
              "dark h-full antialiased",
              geistSans.variable,
              geistMono.variable,
              jetbrainsMono.variable
          )}
      >
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-900 text-black dark:text-white">
      <Header /> {/* ✅ MUST BE HERE */}
      {children}
      </body>
      </html>
  );
}