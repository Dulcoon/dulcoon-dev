import type { Metadata } from "next";
import { Syne, DM_Sans, Space_Mono, Poppins } from "next/font/google";
import "./globals.css";
import InteractiveEffects from "@/components/InteractiveEffects";
import ThreeCanvas from "@/components/ThreeCanvas";
import CursorSpotlight from "@/components/CursorSpotlight";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dulcoon-dev.web.id";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "dulcoon.dev — Your Digital Success Partner",
    template: "%s | dulcoon.dev",
  },
  description:
    "Expert Software Engineering & Digital Solutions. I build high-performance web applications, mobile apps, and custom IT systems that help businesses scale globally.",
  keywords: [
    "Software Developer Indonesia",
    "Web Development",
    "Mobile App Development",
    "Next.js Specialist",
    "Flutter App Developer",
    "Full Stack Software Engineer",
    "dulcoon.dev",
    "Custom IT Solutions",
    "Jasa Pembuatan Website",
    "Jasa Pembuatan Aplikasi Mobile",
    "Enterprise Web Applications",
  ],
  authors: [{ name: "Dulcoon", url: siteUrl }],
  creator: "Dulcoon",
  publisher: "dulcoon.dev",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "dulcoon.dev",
    title: "dulcoon.dev — Your Digital Success Partner",
    description:
      "Expert Software Engineering & Digital Solutions. High-performance web apps, mobile apps, and custom IT systems engineered for real business growth.",
    images: [
      {
        url: "/logo-putih.png",
        width: 800,
        height: 800,
        alt: "dulcoon.dev logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "dulcoon.dev — Your Digital Success Partner",
    description:
      "Expert Software Engineering & Digital Solutions. Web applications, cross-platform mobile apps, and scalable digital infrastructure.",
    images: ["/logo-putih.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "dulcoon.dev",
  },
  verification: {
    google: "google51ae9e87770c6bb5",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "dulcoon.dev",
      description: "Expert Software Engineering & Digital Solutions Partner",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#organization`,
      name: "dulcoon.dev",
      url: siteUrl,
      logo: `${siteUrl}/logo-hitam.png`,
      image: `${siteUrl}/logo-hitam.png`,
      description:
        "High-performance web development, mobile applications, and enterprise IT solutions provider based in Indonesia.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "ID",
      },
      priceRange: "$$",
      knowsAbout: [
        "Web Application Development",
        "Mobile App Development",
        "Next.js",
        "React",
        "Flutter",
        "Cloud Infrastructure",
        "UI/UX Design & Engineering",
        "REST API Architecture",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software Engineering Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Web Application Development",
              description:
                "Modern, responsive web applications built with Next.js, React, and scalable cloud infrastructure.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cross-Platform Mobile App Development",
              description:
                "High-performance iOS and Android mobile apps engineered with Flutter and native device capabilities.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Enterprise IT Solutions & Custom Systems",
              description:
                "Custom business workflows, booking platforms, and automated backend infrastructure.",
            },
          },
        ],
      },
    },
  ],
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
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
        className={`${poppins.variable} ${syne.variable} ${dmSans.variable} ${spaceMono.variable} antialiased min-h-screen relative`}
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
