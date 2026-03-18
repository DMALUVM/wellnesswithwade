import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wade Critides | @wellnesswithwade — Content Creator, UGC Specialist & Brand Partner",
  description:
    "Wade Critides is a content creator, UGC specialist, and brand partner specializing in wellness, fitness, family lifestyle, and entrepreneurship. Partner with @wellnesswithwade for authentic content that drives real engagement.",
  keywords: [
    "Wade Critides",
    "wellnesswithwade",
    "UGC creator",
    "user generated content creator",
    "content creator",
    "brand partnerships",
    "wellness influencer",
    "fitness content creator",
    "family lifestyle creator",
    "Instagram content creator",
    "brand collaborations",
    "UGC specialist",
    "wellness content creator",
    "fitness influencer",
    "dad influencer",
    "lifestyle entrepreneur",
    "health and wellness creator",
    "social media brand partner",
    "HYROX athlete",
    "family leadership content",
  ],
  authors: [{ name: "Wade Critides" }],
  creator: "Wade Critides",
  openGraph: {
    title: "Wade Critides | @wellnesswithwade",
    description:
      "Content Creator · UGC Specialist · Brand Partner. Authentic content rooted in family, fitness, and entrepreneurship.",
    url: "https://wellnesswithwade.vercel.app",
    siteName: "Wellness With Wade",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wade Critides | @wellnesswithwade",
    description:
      "Content Creator · UGC Specialist · Brand Partner. Authentic content rooted in family, fitness, and entrepreneurship.",
    creator: "@wellnesswithwade",
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
  alternates: {
    canonical: "https://wellnesswithwade.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Wade Critides",
    alternateName: "Wellness With Wade",
    url: "https://wellnesswithwade.vercel.app",
    jobTitle: "Content Creator & UGC Specialist",
    description:
      "Husband, father, content creator, and entrepreneur specializing in wellness, fitness, and family lifestyle content for brand partnerships.",
    sameAs: ["https://instagram.com/wellnesswithwade"],
    knowsAbout: [
      "Content Creation",
      "User Generated Content",
      "Wellness",
      "Fitness",
      "Family Leadership",
      "Entrepreneurship",
      "HYROX",
      "Nutrition",
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
