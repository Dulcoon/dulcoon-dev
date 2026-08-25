import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dulcoon-dev.web.id";

export const metadata: Metadata = {
  title: "Contact & Consultation — Start Your Project",
  description:
    "Get in touch with dulcoon.dev for high-performance web development, mobile applications, or custom IT engineering inquiries.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact & Consultation | dulcoon.dev",
    description:
      "Get in touch with dulcoon.dev for high-performance web development, mobile applications, or custom IT engineering inquiries.",
    url: `${siteUrl}/contact`,
    images: ["/logo-putih.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
