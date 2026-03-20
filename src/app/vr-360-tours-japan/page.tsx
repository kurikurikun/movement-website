import type { Metadata } from "next";
import FadeInSection from "@/components/FadeInSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VR & 360° Tours Japan | move-ment",
  description: "Immersive VR and 360° virtual tour production across Japan. VR・360°バーチャルツアー制作。",
};

export default function VRPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://picsum.photos/seed/vr-hero/1920/1080"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-4">
            VR &amp; 360° Tours
          </h1>
          <p className="text-white/60 text-xl font-jp">VR・360°バーチャルツアー</p>
        </div>
      </section>

      <section className="py-24 px-4">
        <FadeInSection className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-white/70 text-lg leading-relaxed mb-4">
            Transport your audience to Japan with immersive VR and 360° virtual tours.
            Perfect for tourism boards, universities, real estate, and cultural institutions
            looking to showcase spaces in a truly engaging way.
          </p>
          <p className="text-white/50 font-jp leading-relaxed">
            没入型VRと360°バーチャルツアーで、視聴者を日本へ。
            観光局、大学、不動産、文化施設に最適なスペース紹介ツールです。
          </p>
        </FadeInSection>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Tourism VR",
              titleJp: "観光VR",
              description: "Virtual tours of Japan's most stunning locations for international promotion.",
            },
            {
              title: "University Tours",
              titleJp: "大学バーチャルツアー",
              description: "Help prospective students explore campus life from anywhere in the world.",
            },
            {
              title: "Cultural Spaces",
              titleJp: "文化施設",
              description: "Museums, temples, and galleries preserved in immersive 360° detail.",
            },
          ].map((service, i) => (
            <FadeInSection key={i}>
              <div className="bg-dark-800 rounded-lg overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://picsum.photos/seed/vr${i + 1}/600/400`}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                  <p className="text-accent-warm/70 text-sm font-jp mb-3">{service.titleJp}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection className="text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-accent-warm text-dark-900 font-semibold rounded-lg hover:bg-accent-warm/90 transition-colors"
          >
            Start Your VR Project / VRプロジェクトを始める
          </Link>
        </FadeInSection>
      </section>
    </div>
  );
}
