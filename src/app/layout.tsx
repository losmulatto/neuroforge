import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NeuroForge | Rewire. Train. Transcend.",
  description:
    "AI-powered neuro-coaching that combines neural training, cognitive formulas, and personalized programming to forge your strongest self.",
  keywords: [
    "neuro coaching",
    "neural training",
    "biohacking",
    "cognitive performance",
    "personal training",
    "nootropics",
    "peak performance",
  ],
  openGraph: {
    title: "NeuroForge | Rewire. Train. Transcend.",
    description:
      "AI-powered neuro-coaching that combines neural training, cognitive formulas, and personalized programming to forge your strongest self.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-[#050507] text-white`}>
        {children}
      </body>
    </html>
  );
}
