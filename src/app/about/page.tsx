import type { Metadata } from "next";
import FadeInSection from "@/components/FadeInSection";
import Link from "next/link";
import ElfsightInstagram from "@/components/ElfsightInstagram";

export const metadata: Metadata = {
  title: "About move-ment | Bilingual Video Production Tokyo",
  description:
    "About Move-ment Company Ltd — a bilingual JP/EN video production company based in Tokyo, Japan, connecting Japan and the world through film. 私たちについて。",
  alternates: { canonical: "https://www.move-ment.co/about" },
  openGraph: {
    title: "About move-ment | Bilingual Video Production Tokyo",
    description: "Move-ment Company Ltd connects Japan and the world through bilingual video production. Based in Tokyo, operating across all of Japan.",
    url: "https://www.move-ment.co/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-end pb-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/about.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/40 to-white/90" />
        <div className="relative px-8 lg:px-20 max-w-7xl mx-auto w-full">
          <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">Our Company</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mt-3 text-neutral-900 leading-none">
            About Move<span className="text-accent-warm">-</span>ment
          </h1>
        </div>
      </section>

      {/* About text */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="grid lg:grid-cols-[3px,1fr] gap-8 mb-16">
              <div className="hidden lg:block bg-gradient-to-b from-accent-warm via-accent-warm/40 to-transparent" />
              <div className="space-y-6">
                <p className="text-neutral-600 text-lg leading-relaxed">
                  Move-ment Company Ltd was founded to enable people and organisations to connect with others and empower them to make the maximum positive impact on the world through photo and video. We love finding out what moves people and putting that on screens big and small.
                </p>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  We are a Japanese/English bilingual video production company based in Tokyo Japan, producing video and photo for branding, sports, lifestyle, recruit, narrative, customer testimonial, facilities tours, regional promotion, inbound tourism, documentary, educational and 360 virtual tours, as well as episodic series for the web and international broadcast.
                </p>
                <p className="text-neutral-700 text-lg leading-relaxed font-medium">
                  That is a lot! In essence, though, we connect Japan and its people to the world, in whatever way makes the <span className="text-accent-warm">biggest impact</span>.
                </p>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  We maintain a full set of cameras, lights and audio equipment, and are regulars at a number of equipment rental houses in Tokyo so we can get the gear you need. We also fly a fully insured and licensed <strong className="text-accent-warm">DJI Mavic 3 Pro Cine</strong> drone.
                </p>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  As well as outdoor and indoor locations within Tokyo and through out Japan, we have filmed at studios around Tokyo, working with studio set builders and lighting specialists to stage your production.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-[1fr,3px] gap-8">
              <div className="space-y-6">
                <p className="text-neutral-500 font-jp text-lg leading-relaxed">
                  株式会社move-mentは写真と映像制作で人々や組織がよりよく繋がる世界の実現を目指している。皆さんの原動力やパッションを引き出してスクリーンに表現することが好きであり、ミッションでもある。
                </p>
                <p className="text-neutral-500 font-jp text-lg leading-relaxed">
                  私たちはバイリンガルな、ブランディング動画、採用映像、導入事例映像、施設や工場などの紹介映像、自治体PR映像、訪日インバウンド動画、3Dバーチャルツアーなどを創っている。
                </p>
                <p className="text-neutral-500 font-jp text-lg leading-relaxed">
                  弊社の充実したカメラ、音声・照明機材を駆使し、スタジオでの建て込みセット撮影から大自然の中のドローン撮影まで、幅広い撮影シーンに対応し、最大限に表現する。提携する機材レンタルハウスやスタジオセット・美術制作業者との連携対応も可能である。
                </p>
              </div>
              <div className="hidden lg:block bg-gradient-to-b from-accent-warm via-accent-warm/40 to-transparent" />
            </div>

            {/* Certifications */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <div className="border-l-4 border-accent-warm pl-4 py-2">
                <p className="text-neutral-600 font-jp text-sm leading-relaxed">
                  入札参加資格に必要な<strong className="text-accent-warm">「全省庁統一資格」</strong>取得済み。
                </p>
              </div>
              <div className="border-l-4 border-accent-warm pl-4 py-2">
                <p className="text-neutral-600 font-jp text-sm leading-relaxed">
                  無人航空機（ドローン）飛行に必要な<strong className="text-accent-warm">「全国包括許可承認」</strong>取得済み。
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Staff wanted */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="border-2 border-accent-warm/20 p-8 sm:p-12 mb-12">
              <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">Join Us</span>
              <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 mt-2">
                video production staff <span className="text-accent-warm">wanted</span>
              </h2>
              <p className="text-neutral-400 font-jp mt-1">ビデオ制作スタッフ募集</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="space-y-4">
                  <p className="text-neutral-600 leading-relaxed">
                    We are looking for additional video production staff who can join us on an hourly or per-project or basis to complement our core team. Times and dates are flexible. Great opportunity for someone who doesn&apos;t necessarily have experience in the industry but wants to learn.
                  </p>
                  <p className="text-neutral-600 leading-relaxed">
                    As this is a starter position, the person ideally should be around 25 years old. Must have permit to work in Japan and advanced Japanese. Possibility of transitioning to full time employment. We edit video in <strong className="text-accent-warm">Davinci Resolve</strong> and photos in <strong className="text-accent-warm">Lightroom/Photoshop</strong>.
                  </p>
                  <p className="text-neutral-600 leading-relaxed">
                    Our office is in Gotanda but partial work from home is possible.
                  </p>
                </div>
              </div>
              <div>
                <div className="space-y-4">
                  <p className="text-neutral-500 font-jp leading-relaxed">
                    弊社は、コアチームのメンバーに加わって、時間給またはプロジェクト単位での勤務が可能な追加のビデオ制作スタッフを探しています。勤務時間や日程は柔軟に対応可能です。業界での経験がない方でも学びたい意欲がある方にとっては、良い機会です。
                  </p>
                  <p className="text-neutral-500 font-jp leading-relaxed">
                    このポジションは入門向けのポジションであり、理想的には25歳前後の方を募集しています。日本での労働許可が必要であり、高度な日本語能力が必要です。正社員になる可能性もあります。映像の編集環境は<strong className="text-accent-warm">Davinci Resolve</strong>、写真編集は<strong className="text-accent-warm">Lightroom/Photoshop</strong>。
                  </p>
                  <p className="text-neutral-500 font-jp leading-relaxed">
                    弊社オフィスは五反田にありますが、在宅勤務も一部可能です。
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-accent-warm text-white font-bold text-sm tracking-[0.15em] uppercase hover:bg-accent-warm-dark transition-colors glitch-hover"
              >
                Apply / 応募する
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-12">
              <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">Follow Us</span>
              <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 mt-2">
                move<span className="text-accent-warm">-</span>ment company instagram
              </h2>
            </div>
            <ElfsightInstagram />
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-4 bg-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-warm/5 to-transparent" />
        <FadeInSection className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 font-jp mb-4">
            お問い合わせ<span className="text-accent-warm">.</span>
          </h2>
          <p className="text-neutral-500 text-lg mb-3">
            Get in touch to discuss your project.
          </p>
          <p className="text-neutral-400 font-jp mb-10">
            お気軽にご相談ください。
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
