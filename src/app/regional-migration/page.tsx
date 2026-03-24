import type { Metadata } from "next";
import FadeInSection from "@/components/FadeInSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "地方プロモーション映像制作 | move-ment",
  description: "移住・観光・地域ブランド発信動画制作。Regional promotion video production in Japan.",
};

const strengths = [
  {
    number: "01",
    title: "ロケーションの魅力を、リアルに映す",
    titleEn: "real locations, real stories",
    description:
      "四季の風景、伝統産業、地域の暮らしの営み。単に美しい風景を切り取るだけでなく、その土地の息遣い、人の表情、季節の移ろいを丁寧に映像に刻みます。",
  },
  {
    number: "02",
    title: "ストーリー性と共感を生む構成",
    titleEn: "narrative flow, without the narration",
    description:
      "移住者やU・Iターン希望者の「なぜここに来たのか／戻ってきたのか」という物語を、地域の人々や産業、文化とのつながりの中で描きます。観る人が自分事として感じられる映像を制作します。",
  },
  {
    number: "03",
    title: "多様な映像スタイルの活用",
    titleEn: "diverse styles, stylishly",
    description:
      "ドローン空撮、ドキュメンタリー、サウンドデザイン、ナレーション、生活者インタビュー。映像のテイスト・構成をプロジェクトごとにカスタマイズし、ターゲットに届くクリエイティブを制作します。",
  },
  {
    number: "04",
    title: "地域×産業のアピール",
    titleEn: "work and life stories, balanced",
    description:
      "「住む場所」としての魅力だけでなく、地元産業、雇用、文化の豊かさ、アクセスなど、移住・定住を後押しする情報も伝えます。自治体や地元企業と協働し、地域に根ざした視点で制作します。",
  },
];

export default function RegionalMigrationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end pb-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/regional-hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/40 to-white/90" />
        <div className="relative px-8 lg:px-20 max-w-7xl mx-auto w-full">
          <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">
            Regional Promotion
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mt-3 text-neutral-900 leading-none font-jp">
            地方プロモーション<br />
            映像制作<span className="text-accent-warm">.</span>
          </h1>
          <p className="text-neutral-600 text-lg mt-4 max-w-2xl">
            Regional promotion video production in Japan
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 leading-tight font-jp mb-6">
                  移住・U・Iターン・テレワークで変わる<br />
                  <span className="text-accent-warm">「新しい地方」</span>の物語を紡ぐ
                </h2>
                <p className="text-neutral-500 text-lg leading-relaxed font-jp">
                  都会と地方の暮らしは、もはや二者択一ではありません。テレワークや二拠点居住が、働き方と暮らしの地理的な境界を変えています。地方にはまだ語られていないストーリーがたくさんあります。私たちは、共感を呼ぶ映像でそれを伝えることを専門としています。
                </p>
              </div>
              <div className="lg:pt-8">
                <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 leading-tight mb-6">
                  Stories of <span className="text-accent-warm">&quot;the new countryside&quot;</span>
                </h2>
                <p className="text-neutral-500 text-lg leading-relaxed">
                  Urban versus rural living is no longer binary. Telework and dual-residence reshape work-life geography. Rural areas hold untold stories — we specialize in communicating them through resonant visuals.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <FadeInSection className="mb-16">
            <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">
              Our Strengths
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-3 text-neutral-900 leading-none font-jp">
              私たちの強み<span className="text-accent-warm">.</span>
            </h2>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 gap-12">
            {strengths.map((item) => (
              <FadeInSection key={item.number}>
                <div className="border-t-2 border-accent-warm/30 pt-6">
                  <span className="font-mono text-xs tracking-[0.3em] text-neutral-300">
                    {item.number}
                  </span>
                  <h3 className="text-xl font-black text-neutral-900 mt-2 mb-1 font-jp">
                    {item.title}
                  </h3>
                  <p className="text-accent-warm text-sm mb-3">{item.titleEn}</p>
                  <p className="text-neutral-500 leading-relaxed font-jp text-sm">
                    {item.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection className="mb-16">
            <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">
              Case Study
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-3 text-neutral-900 leading-none">
              Featured Work<span className="text-accent-warm">.</span>
            </h2>
          </FadeInSection>

          <FadeInSection>
            <div className="mb-6">
              <span className="font-mono text-[10px] tracking-[0.2em] bg-accent-warm text-white px-3 py-1 uppercase">
                Regional Promo
              </span>
              <h3 className="text-2xl font-black text-neutral-900 mt-4 mb-2 font-jp leading-tight">
                富士宮市 移住プロモーション映像<br />
                「自分らしく働けるというのは富士宮で働く強み」
              </h3>
              <p className="text-accent-warm text-sm mb-4">
                Fujinomiya City Relocation Promotion
              </p>
              <p className="text-neutral-500 leading-relaxed font-jp text-sm mb-4">
                若者やUターン層をターゲットに、空撮による自然の風景、産業、ライフスタイルのバランスを、特に若い女性のリアルな働き方と共にリアルな声で描いた映像。
              </p>
              <p className="text-neutral-400 leading-relaxed text-sm">
                Targeting youth and U-turn demographics with aerial natural scenery, industry, and lifestyle balance — featuring authentic voices and the working reality of young women in regional Japan.
              </p>
            </div>

            {/* Video embed */}
            <div className="aspect-video bg-neutral-900">
              <iframe
                src="https://player.vimeo.com/video/403155260"
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Fujinomiya Relocation Promotion"
              />
            </div>
          </FadeInSection>

          {/* Testimonial - Fujinomiya */}
          <FadeInSection>
            <div className="mt-16 border-l-4 border-accent-warm/30 pl-8 py-4 max-w-3xl">
              <p className="text-neutral-500 leading-relaxed font-jp text-sm">
                「映像の美しさはもとより、編集の素晴らしさなどから、市民の方からも好評をいただいております。市としてよかった点は、空から産業紹介編では、富士山があって、その恵みとして水、そして産業が発展しているということが、上手く表現できている点であり、Ｕターン編では、若い女性がイキイキと働いているリアルな感じと、富士宮を上手く表現した「ちょうどよい田舎」というフレーズが、観た人の印象に残るところです。」
              </p>
              <p className="text-neutral-400 text-sm mt-4 font-mono tracking-wider">
                — クライアントからのコメント / Client Testimonial
              </p>
            </div>
          </FadeInSection>

          {/* Hiroshima Peace Tourism */}
          <FadeInSection>
            <div className="mt-24 mb-6">
              <span className="font-mono text-[10px] tracking-[0.2em] bg-accent-warm text-white px-3 py-1 uppercase">
                Documentary
              </span>
              <h3 className="text-2xl font-black text-neutral-900 mt-4 mb-2 font-jp leading-tight">
                広島市のピースツーリズム短編映画「聞かせて」
              </h3>
              <p className="text-accent-warm text-sm mb-4">
                Hiroshima Peace Tourism Short Film
              </p>
            </div>

            {/* Video embed */}
            <div className="aspect-video bg-neutral-900">
              <iframe
                src="https://player.vimeo.com/video/684067618?h=1f754109d7"
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="広島市のピースツーリズム短編映画「聞かせて」"
              />
            </div>
          </FadeInSection>

        </div>
      </section>

      {/* Tesutemo Link */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="border-2 border-accent-warm/20 p-10 lg:p-16 text-center">
              <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">
                Tesutemo
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 mt-3 mb-4 font-jp">
                移住テスティモニアルビデオ専用サイト
              </h3>
              <p className="text-neutral-500 leading-relaxed font-jp text-lg mb-8 max-w-2xl mx-auto">
                リアルな声で移住者の共感を生み安価で手に入る移住の動画プロモーション
              </p>
              <a
                href="https://www.tesutemo.co/municipality"
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
      <section className="py-28 px-4 bg-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-warm/5 to-transparent" />
        <FadeInSection className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 font-jp mb-4">
            地方には、まだ語られていない<br />
            ストーリーがたくさんあります<span className="text-accent-warm">.</span>
          </h2>
          <p className="text-neutral-500 text-lg mb-3">
            Rural Japan holds many untold stories. Let&apos;s start sharing them.
          </p>
          <p className="text-neutral-400 font-jp mb-10">
            まずはお気軽にご相談ください。映像で伝える地域の可能性を私たちと一緒に描きましょう。
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
