import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vanhyam | Premium Organic Farm Products Direct from Nature",
  description:
    "Authentic farm-to-home organic products. Raw forest honey, A2 Bilona ghee, cold pressed oils, organic millets. Sourced directly from trusted Indian farmers.",
  keywords: [
    "organic honey",
    "raw honey",
    "forest honey",
    "A2 ghee",
    "organic farm products",
    "cold pressed oils",
    "organic millets",
    "natural foods",
    "farm fresh products",
    "traditional Indian foods",
    "Bilona ghee",
    "farm to home",
  ],
  authors: [{ name: "Vanhyam Organics" }],
  openGraph: {
    title: "Vanhyam | Premium Organic Farm Products Direct from Nature",
    description:
      "Authentic farm-to-home organic products. Raw forest honey, A2 Bilona ghee, cold pressed oils, organic millets.",
    type: "website",
    locale: "en_IN",
    siteName: "Vanhyam Organics",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanhyam | Premium Organic Farm Products",
    description: "Farm-to-home organic products sourced directly from trusted farmers.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://vanhyam.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="texture-grain">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-forest-600 focus:text-white focus:px-4 focus:py-2"
        >
          Skip to main content
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
