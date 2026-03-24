import type { Metadata } from "next";
import FadeInSection from "@/components/FadeInSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "大学プロモーション映像制作",
  description:
    "大学・専門学校の魅力を映像で伝える。Bilingual university and educational institution promotion video production in Japan for domestic and international student recruitment.",
  alternates: { canonical: "https://www.move-ment.co/university-promotion-video-japan" },
  openGraph: {
    title: "University Promotion Video Japan | move-ment",
    description: "Bilingual promotional video production for universities and educational institutions in Japan.",
    url: "https://www.move-ment.co/university-promotion-video-japan",
  },
};

const challenges = [
  {
    title: "課題１：志願者数／出願者層の減少",
    description: "少子化により、全国で大学の志願者数が減少傾向にあります。",
    solution: "映像で解決 → 各学部の特色、研究室風景、学生のリアルな声を見せることで、「この大学で学びたい」という共感を生む。",
  },
  {
    title: "課題２：大学ブランドの差別化",
    description: "同質化した学びの内容や教育機関が多い現代では、差別化が難しい。",
    solution: "映像で解決 → 大学の強み（先進研究／地域連携／特色ある学び）をストーリーで訴え、他校との差を明確に見せる。",
  },
  {
    title: "課題３：国際学生誘致・グローバル展開",
    description: "海外からの留学生を取り込みたい、外国の大学との提携を可視化したい大学が増えています。",
    solution: "映像で解決 → 英語版プロモーション動画、キャンパスツアー映像、国際学生インタビューなどでグローバル視点を強化。",
  },
  {
    title: "課題４：キャンパスライフ・居住環境のリアルな訴求",
    description: "パンフレットや画像だけでは伝わらない学びと暮らし、人間関係、学生たちの日常。",
    solution: "映像で解決 → 日常シーン、学生インタビュー、ゼミ活動、部活動、住環境などをドキュメンタリースタイルでリアルに描写。",
  },
];

const caseStudies = [
  {
    title: "立教大学 異文化コミュニケーション学部紹介",
    description: "スクリプトなしのインタビュー中心で学部の魅力をリアルに表現。教員・学生の生の言葉を通じて共感を呼ぶ映像を制作。 Part 1 of 2",
    embedUrl: "https://player.vimeo.com/video/897827137?h=3db32b9cff",
  },
  {
    title: "早稲田大学 留学生向けサマープログラム紹介",
    description: "ドキュメンタリースタイルで二人の学生に密着。留学生視点のキャンパス体験を映像で可視化。",
    embedUrl: "https://player.vimeo.com/video/854559146?h=f79ed1be1a",
  },
  {
    title: "関西大学 SNSキャンペーン用 30秒クリップ集",
    description: "短尺動画でインパクトを強め、SNS拡散性を意識した編集構成。",
    embedUrl: "https://player.vimeo.com/video/518833004",
  },
];

export default function UniversityPromoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero - dark cinematic style */}
      <section className="relative h-[70vh] flex items-center justify-center text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/rikkyo.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative px-8 max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-jp">
            学生を動かす、大学の<span className="text-accent-warm">「顔」</span>を映像で。
          </h1>
          <p className="text-white/80 text-lg sm:text-xl font-jp mt-6">
            「魅せる大学」が、未来の志願者を引き寄せる。
          </p>
        </div>
      </section>

      {/* Intro box */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="border border-neutral-200 p-8 sm:p-12 space-y-6">
              <p className="text-neutral-600 text-lg leading-relaxed font-jp">
                少子化の加速、情報の過多、オンライン教育化、
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed font-jp">
                現在、多くの大学が学生募集・ブランディング・国際化で厳しい競争に直面しています。
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed font-jp">
                ただ告知を出すだけの時代は終わりました。映像は、目に見えない「空気感」や「物語」を伝える力を持っています。
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed font-jp">
                大学が持つ研究・学び・キャンパスライフ・地域とのつながり、そうした魅力を、心と記憶に届く映像で。
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 text-center font-jp mb-16">
              大学が抱える主な課題と映像の<span className="text-accent-warm">可能性</span>
            </h2>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 gap-12">
            {challenges.map((item, i) => (
              <FadeInSection key={i}>
                <div>
                  <h3 className="text-xl font-black text-neutral-900 font-jp mb-4">
                    {item.title}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed font-jp text-sm mb-3">
                    {item.description}
                  </p>
                  <p className="text-neutral-600 leading-relaxed font-jp text-sm">
                    <span className="font-bold text-accent-warm">{item.solution.split("→")[0]}→</span>
                    {item.solution.split("→")[1]}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <FadeInSection className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 font-jp">
              実績紹介<span className="text-accent-warm">.</span>
            </h2>
          </FadeInSection>

          <div className="space-y-20">
            {caseStudies.map((study, i) => (
              <FadeInSection key={i}>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 font-jp mb-2">
                    ・ {study.title}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed font-jp text-sm mb-6 pl-4">
                    {study.description}
                  </p>
                  <div className="aspect-video bg-neutral-900">
                    <iframe
                      src={study.embedUrl}
                      className="w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={study.title}
                    />
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tesutemo Link */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="border-2 border-accent-warm/20 p-10 lg:p-16 text-center">
              <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">
                Tesutemo
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 mt-3 mb-4 font-jp">
                大学生テスティモニアルビデオサイト
              </h3>
              <p className="text-neutral-500 leading-relaxed font-jp text-lg mb-8 max-w-2xl mx-auto">
                リアルな学生の声を動画で届ける、大学プロモーション専用のテスティモニアルビデオサービス
              </p>
              <a
                href="https://www.tesutemo.co/university"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-accent-warm text-white font-bold text-sm tracking-[0.15em] uppercase hover:bg-accent-warm-dark transition-colors glitch-hover"
              >
                tesutemo.co →
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-warm/5 to-transparent" />
        <FadeInSection className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 font-jp mb-4">
            大学の魅力を、映像で届ける<span className="text-accent-warm">.</span>
          </h2>
          <p className="text-neutral-500 text-lg mb-3">
            Your university has a story. Let&apos;s tell it.
          </p>
          <p className="text-neutral-400 font-jp mb-10">
            まずはお気軽にご相談ください。
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-accent-warm text-white font-bold text-sm tracking-[0.15em] uppercase hover:bg-accent-warm-dark transition-colors glitch-hover"
          >
            Contact Us / お問い合わせ
          </Link>
        </FadeInSection>
      </section>
    </div>
  );
}
