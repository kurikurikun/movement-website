import type { Metadata } from "next";
import FadeInSection from "@/components/FadeInSection";

export const metadata: Metadata = {
  title: "About Us | move-ment",
  description: "Learn about move-ment, a bilingual video production company in Japan. 私たちについて。",
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
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/50 to-white/90" />
        <div className="relative px-8 lg:px-20 max-w-7xl mx-auto w-full">
          <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">Who we are</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mt-3 text-neutral-900 leading-none">
            About Us<span className="text-accent-warm">.</span>
          </h1>
          <p className="text-neutral-500 text-lg font-jp mt-3">私たちについて</p>
        </div>
      </section>

      {/* Company Story — split layout */}
      <section className="py-28 px-4 relative">
        <div className="absolute top-16 right-0 text-[10vw] font-black text-neutral-100 leading-none select-none pointer-events-none">
          STORY
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <FadeInSection>
            <div className="grid lg:grid-cols-[1fr,2px,1fr] gap-12 items-start">
              <div>
                <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">Our Story</span>
                <div className="mt-6 h-[3px] bg-accent-warm w-16 mb-8" />
                <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                  move-ment was founded with a simple belief: video has the power to move people,
                  to bridge cultures, and to change the world for the better. Based in Japan, we
                  are a bilingual production company that creates content in both English and Japanese,
                  reaching audiences across the globe.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  From NHK documentaries to corporate brand films, from aerial drone photography to
                  immersive VR experiences, we bring a cinematic eye and a storyteller&apos;s heart
                  to every project we touch.
                </p>
              </div>

              <div className="hidden lg:block w-[2px] h-full bg-gradient-to-b from-transparent via-accent-warm/30 to-transparent" />

              <div className="lg:pt-16">
                <span className="font-mono text-xs tracking-[0.3em] text-neutral-400 uppercase">ストーリー</span>
                <div className="mt-6 space-y-6">
                  <p className="font-jp text-neutral-400 text-lg leading-relaxed">
                    ムーブメントは、映像には人を動かし、文化の架け橋となり、世界をより良く変える力があるという
                    シンプルな信念のもとに設立されました。日本を拠点に、英語と日本語の両方でコンテンツを制作し、
                    世界中の視聴者に届けています。
                  </p>
                  <p className="font-jp text-neutral-400 leading-relaxed">
                    NHKドキュメンタリーから企業ブランドフィルム、空撮ドローン写真から没入型VR体験まで、
                    すべてのプロジェクトに映画的な視点とストーリーテラーの心を持って取り組んでいます。
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <FadeInSection className="mb-16">
            <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">Core Values</span>
            <h2 className="text-4xl sm:text-5xl font-black mt-4 text-neutral-900 leading-none">
              What Drives Us<span className="text-accent-warm">.</span>
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-0 border-t border-neutral-200">
            {[
              {
                num: "01",
                title: "Move People",
                titleJp: "人を動かす",
                text: "Every frame should evoke emotion. We create content that resonates deeply and drives action.",
              },
              {
                num: "02",
                title: "Bridge Cultures",
                titleJp: "文化の架け橋",
                text: "Bilingual by nature, we connect Japanese and international audiences seamlessly.",
              },
              {
                num: "03",
                title: "Experi-ment",
                titleJp: "実験する",
                text: "We push creative boundaries with new technology — drones, VR, 360° — and fresh perspectives.",
              },
            ].map((value) => (
              <FadeInSection key={value.num}>
                <div className="border-b md:border-b-0 md:border-r border-neutral-200 last:border-r-0 p-8 lg:p-10 group hover:bg-white transition-colors">
                  <span className="font-mono text-xs tracking-[0.3em] text-neutral-300">{value.num}</span>
                  <h3 className="text-xl font-black mt-4 mb-1 text-neutral-900 group-hover:text-accent-warm transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-accent-warm text-sm font-jp mb-4">{value.titleJp}</p>
                  <p className="text-neutral-500 text-sm leading-relaxed">{value.text}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gear */}
      <section className="py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeInSection className="mb-12">
            <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">Equipment</span>
            <h2 className="text-4xl sm:text-5xl font-black mt-4 text-neutral-900 leading-none">
              Our Gear<span className="text-accent-warm">.</span>
            </h2>
            <p className="text-neutral-400 font-jp mt-2">機材</p>
            <p className="text-neutral-500 mt-6 max-w-xl">
              We use industry-leading equipment to deliver broadcast-quality results.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-neutral-200">
              {[
                "Sony FX6", "Sony A7S III", "DJI Inspire 3", "DJI Mavic 3 Pro",
                "Insta360 Pro 2", "Ronin 4D", "Sennheiser MKH416", "Atomos Ninja V",
              ].map((gear, i) => (
                <div key={gear} className="border-b border-r border-neutral-200 p-5 hover:bg-neutral-50 transition-colors group">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-neutral-300">{String(i + 1).padStart(2, '0')}</span>
                  <p className="font-semibold text-neutral-800 mt-2 group-hover:text-accent-warm transition-colors text-sm">{gear}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
