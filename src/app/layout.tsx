import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shyam Sundar | Portfolio",
  description:
    "Full Stack Developer · Cloud Engineer · AI Builder. Personal portfolio of Shyam Sundar.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Shyam Sundar | Portfolio",
    description: "Full Stack Developer · Cloud Engineer · AI Builder",
    url: "https://YOUR_VERCEL_URL",
    siteName: "Shyam Sundar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shyam Sundar Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shyam Sundar | Portfolio",
    description: "Full Stack Developer · Cloud Engineer · AI Builder",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
