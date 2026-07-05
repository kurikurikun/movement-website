import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TV Programme & Broadcast Content Japan",
  description:
    "Video programme content production in Japan for TV broadcast and web. Documentary series, lifestyle, food and culture — produced by move-ment for NHK, CNNJ, Cool Japan and more. テレビ番組・放送コンテンツ制作。",
  alternates: { canonical: "https://www.move-ment.co/video-programme-content-japan" },
  openGraph: {
    title: "TV Programme & Broadcast Content Japan | move-ment",
    description:
      "Bilingual video programme content production for broadcast and web. Documentary, lifestyle and culture series from Japan.",
    url: "https://www.move-ment.co/video-programme-content-japan",
    images: [
      {
        url: "/images/programme1.jpeg",
        width: 1200,
        height: 630,
        alt: "move-ment — Broadcast Programme Content Japan",
      },
    ],
  },
};

export default function ProgrammeContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
