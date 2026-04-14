import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dulcoon.dev | Premium Digital Solutions",
  description: "High-performance web and mobile experiences tailored for high-end brands and tech innovators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className={`${inter.variable} antialiased mesh-bg min-h-screen text-on-surface relative`}>
        {/* Global Ambient Glows (Fixed Across All Sections) */}
        <div className="fixed -top-40 -left-40 w-[40rem] h-[40rem] bg-primary/15 blur-[150px] rounded-full pointer-events-none -z-10"></div>
        <div className="fixed top-[40%] right-[-10%] w-[40rem] h-[40rem] bg-secondary/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
        <div className="fixed -bottom-40 -left-20 w-[40rem] h-[40rem] bg-tertiary/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

        {children}
      </body>
    </html>
  );
}
