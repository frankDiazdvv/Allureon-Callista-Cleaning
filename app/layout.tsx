import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Allureon Callista",
  description: "The Art of Refined Transformation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-background text-dark`}
      >
        {children}
      </body>
    </html>
  );
}
