import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "move-ment | Bilingual Video Production in Japan",
  description:
    "move-ment is a Japan-based bilingual video production company creating cinematic content that moves people. 日本を拠点とするバイリンガル映像制作会社。",
  keywords: ["video production", "Japan", "bilingual", "drone", "VR", "documentary", "映像制作", "日本"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-dark-900 text-white min-h-screen">
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
