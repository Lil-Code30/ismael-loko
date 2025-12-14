import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ismael Loko | Full-Stack Developer",
  description:
    "Full-stack developer portfolio showcasing projects in Next.js, React, TypeScript, Node.js, and more. Explore my work and get in touch.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Ismael Loko | Full-Stack Developer",
    description:
      "Full-stack developer portfolio showcasing projects in Next.js, React, TypeScript, Node.js, and more.",
    url: "https://ismael-loko.com",
    siteName: "Ismael Loko",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Ismael Loko - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ismael Loko | Full-Stack Developer",
    description: "Full-stack developer portfolio with projects and experience.",
    images: ["/favicon.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
