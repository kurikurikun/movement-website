import type { Metadata } from "next";
import FadeInSection from "@/components/FadeInSection";

export const metadata: Metadata = {
  title: "Programme Content | move-ment",
  description: "TV programme and documentary content production by move-ment. テレビ番組・ドキュメンタリー制作。",
};

const programmes = [
  {
    title: "NHK World Series",
    titleJp: "NHKワールドシリーズ",
    description: "Multiple series produced for NHK World including Shibuya + Yummy and regional food documentaries.",
  },
  {
    title: "Cool Japan / CNNJ",
    titleJp: "クールジャパン / CNNJ",
    description: "Features highlighting Japanese culture, food traditions, and regional stories for international audiences.",
  },
  {
    title: "Corporate Documentaries",
    titleJp: "企業ドキュメンタリー",
    description: "In-depth brand stories and corporate documentaries that showcase company values and vision.",
  },
  {
    title: "Travel & Tourism Films",
    titleJp: "旅行・観光映像",
    description: "Cinematic travel films promoting Japan's regions, from hidden gems to popular destinations.",
  },
];

export default function ProgrammeContentPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://picsum.photos/seed/programme-hero/1920/800"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-light mb-4">Programme Content</h1>
          <p className="text-white/60 text-xl font-jp">番組コンテンツ制作</p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeInSection className="text-center mb-16">
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              From broadcast documentaries to streaming content, we produce compelling programmes
              that captivate audiences worldwide.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            {programmes.map((item, i) => (
              <FadeInSection key={i}>
                <div className="bg-dark-800 rounded-lg overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://picsum.photos/seed/prog${i + 1}/800/400`}
                    alt={item.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-accent-warm/70 text-sm font-jp mb-3">{item.titleJp}</p>
                    <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
