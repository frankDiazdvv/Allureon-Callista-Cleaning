import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://allureoncallista.com"),

  title: {
    default: "Allureon Callista | The Art of Refined Transformation",
    template: "%s | Allureon Callista",
  },

  description: 
    "The Art of Refined Transformation. Compliance-driven janitorial services for corporate offices, banks, retail spaces, and luxury buildings. Documented standards. Verified QA. Central Florida.",

  keywords: [
    "commercial cleaning Orlando",
    "janitorial services Central Florida",
    "corporate office cleaning",
    "bank cleaning services",
    "luxury building cleaning",
  ],
  openGraph: {
    title: "Allureon Callista | The Art of Refined Transformation",
    description:
      "Executive-ready cleaning with documented standards and verified QA.",
    url: "https://allureoncallista.com",
    siteName: "Allureon Callista",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Allureon Callista Commercial Cleaning",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Allureon Callista | The Art of Refined Transformation",
    description:
      "Compliance-driven janitorial partner for premium commercial spaces.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
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
