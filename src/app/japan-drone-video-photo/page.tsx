import type { Metadata } from "next";
import FadeInSection from "@/components/FadeInSection";

export const metadata: Metadata = {
  title: "Drone Video & Photo Japan | move-ment",
  description: "Professional drone cinematography and aerial photography across Japan. ドローン撮影サービス。",
};

export default function DronePage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://picsum.photos/seed/drone-hero/1920/1080"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-4">
            Drone Video &amp; Photo
          </h1>
          <p className="text-white/60 text-xl font-jp">日本全国ドローン撮影</p>
        </div>
      </section>

      <section className="py-24 px-4">
        <FadeInSection className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-white/70 text-lg leading-relaxed mb-4">
            We provide licensed, professional drone services throughout Japan.
            From sweeping cinematic aerials of temples and mountains to precise
            architectural surveys, our team delivers stunning footage from above.
          </p>
          <p className="text-white/50 font-jp leading-relaxed">
            日本全国でライセンスを取得したプロフェッショナルなドローンサービスを提供しています。
            寺院や山々のシネマティックな空撮から建築調査まで、上空から見事な映像をお届けします。
          </p>
        </FadeInSection>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <FadeInSection key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://picsum.photos/seed/drone${i + 1}/600/400`}
                alt={`Drone shot ${i + 1}`}
                className="w-full h-48 md:h-64 object-cover rounded-lg hover:opacity-80 transition-opacity"
              />
            </FadeInSection>
          ))}
        </div>

        <FadeInSection className="max-w-2xl mx-auto mt-16">
          <h2 className="text-2xl font-light text-center mb-8">Our Fleet / <span className="font-jp">機材</span></h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {[
              { name: "DJI Inspire 3", use: "Cinematic aerials" },
              { name: "DJI Mavic 3 Pro", use: "Versatile shooting" },
              { name: "DJI Mini 4 Pro", use: "Interior & tight spaces" },
              { name: "DJI FPV", use: "Dynamic action shots" },
            ].map((drone) => (
              <div key={drone.name} className="bg-dark-800 p-4 rounded-lg">
                <p className="font-semibold">{drone.name}</p>
                <p className="text-white/50 text-xs mt-1">{drone.use}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}
