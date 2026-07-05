import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.move-ment.co"),
  title: {
    default: "move-ment | Bilingual Video Production Company Japan",
    template: "%s | move-ment",
  },
  description:
    "move-ment is a Tokyo-based bilingual (JP/EN) video production company creating cinematic content for brands, broadcasters and organisations across Japan. 日本を拠点とするバイリンガル映像制作会社。",
  keywords: [
    "video production Japan",
    "bilingual video production",
    "Tokyo video production",
    "Japan drone video",
    "VR 360 tours Japan",
    "corporate video Japan",
    "映像制作",
    "東京 映像制作",
    "バイリンガル映像",
    "ドローン撮影",
    "企業動画",
  ],
  authors: [{ name: "move-ment Company Ltd", url: "https://www.move-ment.co" }],
  creator: "move-ment Company Ltd",
  publisher: "move-ment Company Ltd",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ja_JP",
    url: "https://www.move-ment.co",
    siteName: "move-ment",
    title: "move-ment | Bilingual Video Production Company Japan",
    description:
      "Tokyo-based bilingual video production company. Corporate video, drone, VR/360, documentary, inbound tourism. 日本を拠点とするバイリンガル映像制作会社。",
  },
  twitter: {
    card: "summary_large_image",
    title: "move-ment | Bilingual Video Production Japan",
    description:
      "Tokyo-based bilingual video production company creating cinematic content across Japan.",
    images: ["/images/japan_drone_photos_dji_123.jpg"],
  },
  alternates: {
    canonical: "https://www.move-ment.co",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.move-ment.co",
    name: "move-ment Company Ltd",
    alternateName: "株式会社move-ment",
    url: "https://www.move-ment.co",
    logo: "https://www.move-ment.co/images/mv.jpg",
    image: "https://www.move-ment.co/images/japan_drone_photos_dji_123.jpg",
    description:
      "Tokyo-based bilingual (JP/EN) video production company creating cinematic content for brands, broadcasters and organisations across Japan.",
    email: "we-are@move-ment.co",
    telephone: "+81-90-3880-0895",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1-18-5-503 Higashi Gotanda",
      addressLocality: "Shinagawa",
      addressRegion: "Tokyo",
      postalCode: "141-0022",
      addressCountry: "JP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.6284,
      longitude: 139.7236,
    },
    areaServed: {
      "@type": "Country",
      name: "Japan",
    },
    founder: {
      "@type": "Person",
      name: "Chris Moore",
    },
    sameAs: [
      "https://www.instagram.com/move_ment.co.ltd/",
      "https://www.filminginjapan.com/",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-neutral-800 min-h-screen">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
