import type { Metadata } from "next";
import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";
import ArtistGallery from "@/components/ArtistGallery";
import { artists } from "@/lib/artists";

export const metadata: Metadata = {
  title: "Japan Visions — Artist Portrait Gallery",
  description:
    "Portraits of 22 contemporary Japanese artists shot by Chris Moore for Japan Visions, the book and feature film created by Amélie Ravalec. 日本の現代アーティストのポートレート集。",
  alternates: { canonical: "https://www.move-ment.co/japan-visions" },
  // Not for indexing yet — portraits and Japanese bios still under review,
  // and Amélie Ravalec's permission is not fully settled. Remove to publish to search.
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "Japan Visions | move-ment",
    description:
      "Portraits of 22 contemporary Japanese artists, shot by Chris Moore for Amélie Ravalec's Japan Visions. 日本の現代アーティスト22人のポートレート。",
    url: "https://www.move-ment.co/japan-visions",
    images: [`https://www.move-ment.co${artists[0].photos[0]}`],
  },
};

export default function JapanVisionsPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative h-[62vh] flex items-end pb-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/artists/sorayama-hajime-1.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/40 to-white/95" />
        <div className="relative px-8 lg:px-20 max-w-7xl mx-auto w-full">
          <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">
            Portrait Series
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mt-3 text-neutral-900 leading-none">
            Japan Visions<span className="text-accent-warm">.</span>
          </h1>
          <p className="text-neutral-600 font-jp text-lg mt-3">ジャパン・ヴィジョンズ</p>
          <p className="text-neutral-500 mt-1">
            A project created by{" "}
            <a
              href="https://www.japanavantgarde.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline hover:text-accent-warm transition-colors"
            >
              Amélie Ravalec
            </a>{" "}
            — portraits by Chris Moore
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pt-16 pb-8 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="grid lg:grid-cols-[3px,1fr] gap-8">
              <div className="hidden lg:block bg-gradient-to-b from-accent-warm via-accent-warm/40 to-transparent" />
              <div className="space-y-5">
                <p className="text-neutral-600 text-lg leading-relaxed">
                  <strong>Japan Visions</strong> is a book and feature film created by French
                  director and author{" "}
                  <a
                    href="https://www.japanavantgarde.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline hover:text-accent-warm transition-colors"
                  >
                    Amélie Ravalec
                  </a>
                  , introducing a generation of contemporary Japanese artists — painters,
                  sculptors, photographers, media artists, manga artists and performers — many of
                  them celebrated in Japan yet still little known internationally.
                </p>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  These are the {artists.length} artists Chris Moore photographed and filmed for
                  the project, on location in their studios and galleries across Japan.
                </p>
                <p className="text-neutral-500 font-jp text-lg leading-relaxed">
                  「Japan Visions」は、フランス人監督・作家の
                  <a
                    href="https://www.japanavantgarde.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline hover:text-accent-warm transition-colors"
                  >
                    アメリー・ラヴァレック
                  </a>
                  によるプロジェクトで、書籍と長編映画として制作が進行中。日本では高く評価されながら海外ではまだ知られていないアーティストたちを、国際的な観客に紹介する試み。画家、彫刻家、写真家、メディアアーティスト、漫画家、パフォーマーまで。
                </p>
                <p className="text-neutral-500 font-jp text-lg leading-relaxed">
                  本ページは、クリス・モアが本プロジェクトのために撮影・収録したアーティスト{artists.length}名のポートレート。日本各地のアトリエやギャラリーを訪ね、その場で撮影を行った。
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Index */}
      <section className="pb-14 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-neutral-200 pt-6">
              {artists.map((a) => (
                <a
                  key={a.slug}
                  href={`#${a.slug}`}
                  className="text-sm text-neutral-500 hover:text-accent-warm transition-colors"
                >
                  {a.name}{" "}
                  <span className="font-jp text-neutral-400">{a.nameJa}</span>
                </a>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-28 px-4">
        <div className="max-w-5xl mx-auto">
          <ArtistGallery artists={artists} />
        </div>
      </section>

      {/* Project credit */}
      <section className="py-20 px-4 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">
              About the project
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 mt-2 mb-6">
              Japan Visions<span className="text-accent-warm">.</span>{" "}
              <span className="font-jp font-normal text-neutral-400 text-xl">
                日本のビジョン
              </span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-neutral-600 leading-relaxed">
                  Japan Visions is a book and feature film created by{" "}
                  <strong>Amélie Ravalec</strong>. It follows{" "}
                  <em>Japanese Avant-Garde Pioneers</em>, her documentary on Japan&apos;s post-war
                  avant-garde, which has screened at over 150 cinemas, festivals and museums
                  worldwide since 2025.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Chris Moore provided portrait photography and filming in Japan for the project.
                  Artworks and publication remain the copyright of the respective artists and the
                  project.
                </p>
                <a
                  href="https://www.japanavantgarde.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-bold text-neutral-700 underline hover:text-accent-warm transition-colors"
                >
                  japanavantgarde.com
                </a>
              </div>
              <div className="space-y-4 lg:border-l lg:border-neutral-200 lg:pl-8">
                <p className="text-neutral-500 font-jp leading-relaxed">
                  「Japan Visions」は<strong>アメリー・ラヴァレック</strong>が手がける書籍・長編映画プロジェクト。前作『Japanese Avant-Garde Pioneers』（日本の前衛芸術を追ったドキュメンタリー）は、2025年の公開以来、世界各地の映画館・映画祭・美術館で150回以上上映されている。
                </p>
                <p className="text-neutral-500 font-jp leading-relaxed">
                  クリス・モアが本プロジェクトの日本国内におけるポートレート撮影・映像収録を担当。作品および出版物の権利は各アーティストおよびプロジェクトに帰属する。
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-4 bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-warm/10 to-transparent" />
        <FadeInSection className="max-w-3xl mx-auto text-center relative z-10">
          <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">
            Work With Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-4 mb-3">
            Portraits &amp; interviews<span className="text-accent-warm">.</span>
          </h2>
          <p className="text-white/60 font-jp mb-10">
            ポートレート撮影・インタビュー取材のご相談はお気軽に。
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-accent-warm text-white font-bold text-sm tracking-[0.15em] uppercase hover:bg-accent-warm-dark transition-colors"
          >
            Contact Us / お問い合わせ
          </Link>
        </FadeInSection>
      </section>

    </div>
  );
}
