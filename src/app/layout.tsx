import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Dinara Dental Care | Banjarmasin",
  description: "Klinik Gigi Premium di Banjarmasin dengan layanan terbaik. Keunggulan layanan gigi dengan teknologi modern.",
  icons: {
    icon: "/favicon-final.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased text-foreground",
          outfit.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
