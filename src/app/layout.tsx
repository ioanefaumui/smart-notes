import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const DMSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SmartNotes",
  description: "Intelligent cloud-based note-taking and collaboration tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${DMSans.className} has-[dialog[open]]:overflow-hidden text-gray-light bg-jetblack`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
