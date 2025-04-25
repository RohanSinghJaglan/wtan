import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Using Inter font as a common modern font for clean UI
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Franchise Dashboard",
  description: "Franchise Management Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
