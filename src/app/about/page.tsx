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
      <section className="relative h-[50vh] flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://picsum.photos/seed/about-hero/1920/800"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-4">About Us</h1>
          <p className="text-white/60 text-xl font-jp">私たちについて</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 px-4">
        <FadeInSection className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light mb-8 text-center">Our Story</h2>
          <div className="space-y-6 text-white/70 leading-relaxed">
            <p>
              move-ment was founded with a simple belief: video has the power to move people,
              to bridge cultures, and to change the world for the better. Based in Japan, we
              are a bilingual production company that creates content in both English and Japanese,
              reaching audiences across the globe.
            </p>
            <p className="font-jp text-white/50">
              ムーブメントは、映像には人を動かし、文化の架け橋となり、世界をより良く変える力があるという
              シンプルな信念のもとに設立されました。日本を拠点に、英語と日本語の両方でコンテンツを制作し、
              世界中の視聴者に届けています。
            </p>
            <p>
              From NHK documentaries to corporate brand films, from aerial drone photography to
              immersive VR experiences, we bring a cinematic eye and a storyteller&apos;s heart
              to every project we touch.
            </p>
            <p className="font-jp text-white/50">
              NHKドキュメンタリーから企業ブランドフィルム、空撮ドローン写真から没入型VR体験まで、
              すべてのプロジェクトに映画的な視点とストーリーテラーの心を持って取り組んでいます。
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* Values */}
      <section className="py-24 px-4 bg-dark-800">
        <div className="max-w-5xl mx-auto">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl font-light">What Drives Us</h2>
          </FadeInSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Move People",
                titleJp: "人を動かす",
                text: "Every frame should evoke emotion. We create content that resonates deeply.",
              },
              {
                title: "Bridge Cultures",
                titleJp: "文化の架け橋",
                text: "Bilingual by nature, we connect Japanese and international audiences seamlessly.",
              },
              {
                title: "Experi-ment",
                titleJp: "実験する",
                text: "We push creative boundaries with new technology — drones, VR, 360° — and fresh perspectives.",
              },
            ].map((value, i) => (
              <FadeInSection key={i}>
                <div className="bg-dark-700 p-8 rounded-lg text-center">
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-accent-warm text-sm font-jp mb-4">{value.titleJp}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{value.text}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gear */}
      <section className="py-24 px-4">
        <FadeInSection className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-8">Our Gear / <span className="font-jp">機材</span></h2>
          <p className="text-white/60 mb-8">
            We use industry-leading equipment to deliver broadcast-quality results.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-white/50">
            {[
              "Sony FX6", "Sony A7S III", "DJI Inspire 3", "DJI Mavic 3 Pro",
              "Insta360 Pro 2", "Ronin 4D", "Sennheiser MKH416", "Atomos Ninja V",
            ].map((gear) => (
              <div key={gear} className="bg-dark-800 p-4 rounded-lg">{gear}</div>
            ))}
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}
