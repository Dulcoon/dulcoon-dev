import type { Metadata } from "next";
import { Syne, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import InteractiveEffects from "@/components/InteractiveEffects";
import ThreeCanvas from "@/components/ThreeCanvas";
import CursorSpotlight from "@/components/CursorSpotlight";

// Execute image conversion on dev mount
if (process.env.NODE_ENV === "development") {
  const sourceImage = "/home/dulcoon/.gemini/antigravity/brain/26d1eaa8-2959-45bc-bd4b-9fe781f63a27/favicon_source_1779525449513.png";
  const publicDir = path.join(process.cwd(), "public");
  const appDir = path.join(process.cwd(), "app");
  const lockFile = path.join(process.cwd(), ".favicon_generated");

  if (!fs.existsSync(lockFile) && fs.existsSync(sourceImage)) {
    try {
      if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
      fs.copyFileSync(sourceImage, path.join(publicDir, 'favicon.png'));
      execSync(`convert "${sourceImage}" -resize 32x32 "${path.join(appDir, 'favicon.ico')}"`);
      execSync(`convert "${sourceImage}" -resize 32x32 "${path.join(publicDir, 'favicon.ico')}"`);
      execSync(`convert "${sourceImage}" -resize 512x512 "${path.join(appDir, 'icon.png')}"`);
      execSync(`convert "${sourceImage}" -resize 180x180 "${path.join(appDir, 'apple-icon.png')}"`);
      execSync(`convert "${sourceImage}" -resize 96x96 "${path.join(publicDir, 'favicon-96x96.png')}"`);
      execSync(`convert "${sourceImage}" -resize 180x180 "${path.join(publicDir, 'apple-touch-icon.png')}"`);
      execSync(`convert "${sourceImage}" -resize 192x192 "${path.join(publicDir, 'web-app-manifest-192x192.png')}"`);
      execSync(`convert "${sourceImage}" -resize 512x512 "${path.join(publicDir, 'web-app-manifest-512x512.png')}"`);
      fs.writeFileSync(lockFile, "done");
      console.log("=== FAVICONS GENERATED SUCCESSFULLY ===");
    } catch (e) {
      console.error("Error generating favicons:", e);
    }
  }
}

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "dulcoon.dev — Your Digital Success Partner",
  description: "I build high-performance web apps, mobile apps, and custom IT solutions that help businesses grow in the digital era. Based in Indonesia.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'dulcoon.dev',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var theme = saved || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${syne.variable} ${dmSans.variable} ${spaceMono.variable} antialiased min-h-screen relative`}
      >
        <ThreeCanvas />
        <CursorSpotlight />
        <div className="scroll-progress" id="scrollProgress" />
        <InteractiveEffects />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
