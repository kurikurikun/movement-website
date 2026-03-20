import HeroSlideshow from "@/components/HeroSlideshow";
import FadeInSection from "@/components/FadeInSection";
import Link from "next/link";

const portfolioItems = [
  {
    title: "Shibuya + Yummy",
    titleJp: "渋谷 + ヤミー",
    description: "NHK series exploring Tokyo's vibrant Shibuya district through food and culture.",
    descriptionJp: "NHKシリーズ：渋谷の食と文化を探る。",
    images: [
      "https://picsum.photos/seed/shibuya1/600/400",
      "https://picsum.photos/seed/shibuya2/600/400",
      "https://picsum.photos/seed/shibuya3/600/400",
    ],
  },
  {
    title: "Kochi / Ashizuri",
    titleJp: "高知 / 足摺",
    description: "Cinematic journey through the untouched landscapes of Kochi Prefecture and Cape Ashizuri.",
    descriptionJp: "高知県と足摺岬の手つかずの風景を巡る映像の旅。",
    images: [
      "https://picsum.photos/seed/kochi1/600/400",
      "https://picsum.photos/seed/kochi2/600/400",
      "https://picsum.photos/seed/kochi3/600/400",
    ],
  },
  {
    title: "3.11 Tsunami / Tohoku",
    titleJp: "3.11 津波 / 東北",
    description: "Documentary capturing the resilience and recovery of Tohoku after the devastating 2011 tsunami.",
    descriptionJp: "2011年の津波後、東北の復興と再生を捉えたドキュメンタリー。",
    images: [
      "https://picsum.photos/seed/tohoku1/600/400",
      "https://picsum.photos/seed/tohoku2/600/400",
      "https://picsum.photos/seed/tohoku3/600/400",
    ],
  },
  {
    title: "Yamagata Local Food",
    titleJp: "山形のローカルフード",
    description: "Cool Japan / CNNJ feature on Yamagata's rich local food traditions and artisan producers.",
    descriptionJp: "Cool Japan / CNNJ：山形の豊かな食文化と職人を特集。",
    images: [
      "https://picsum.photos/seed/yamagata1/600/400",
      "https://picsum.photos/seed/yamagata2/600/400",
      "https://picsum.photos/seed/yamagata3/600/400",
    ],
  },
  {
    title: "Kyoto Drone Shots",
    titleJp: "京都ドローン撮影",
    description: "Breathtaking aerial footage of Kyoto's temples, gardens, and cityscapes from above.",
    descriptionJp: "京都の寺院、庭園、街並みを上空から捉えた圧巻の映像。",
    images: [
      "https://picsum.photos/seed/kyoto1/600/400",
      "https://picsum.photos/seed/kyoto2/600/400",
      "https://picsum.photos/seed/kyoto3/600/400",
    ],
  },
  {
    title: "Can't Stop Won't Stop",
    titleJp: "キャント・ストップ・ウォント・ストップ",
    description: "A short film about perseverance, creativity, and the unstoppable human spirit.",
    descriptionJp: "忍耐、創造性、そして止められない人間の精神を描いた短編映画。",
    images: [
      "https://picsum.photos/seed/cantstop1/600/400",
      "https://picsum.photos/seed/cantstop2/600/400",
      "https://picsum.photos/seed/cantstop3/600/400",
    ],
  },
  {
    title: "Japan's Best Kept Secret",
    titleJp: "日本の秘境",
    description: "A travel film uncovering the hidden gems of the Kansai region beyond the usual tourist spots.",
    descriptionJp: "関西地方の隠れた名所を巡るトラベルフィルム。",
    images: [
      "https://picsum.photos/seed/kansai1/600/400",
      "https://picsum.photos/seed/kansai2/600/400",
      "https://picsum.photos/seed/kansai3/600/400",
    ],
  },
];

const blogPosts = [
  { title: "Behind the Lens: Filming in Rural Japan", titleJp: "レンズの向こう側：日本の地方での撮影", slug: "filming-rural-japan" },
  { title: "The Art of Drone Cinematography", titleJp: "ドローン映像撮影の芸術", slug: "drone-cinematography" },
  { title: "Why Bilingual Video Matters", titleJp: "なぜバイリンガル映像が重要なのか", slug: "bilingual-video" },
  { title: "VR Tours: The Future of Travel Content", titleJp: "VRツアー：旅行コンテンツの未来", slug: "vr-tours-future" },
  { title: "Documenting Japan's Recovery: 10 Years On", titleJp: "日本の復興を記録する：10年後", slug: "japan-recovery" },
  { title: "From Script to Screen: Our Process", titleJp: "脚本から画面へ：私たちのプロセス", slug: "our-process" },
];

export default function Home() {
  return (
    <>
      {/* Hero Slideshow */}
      <HeroSlideshow />

      {/* Bilingual Intro */}
      <section className="py-24 px-4">
        <FadeInSection className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-light mb-8">
            About <span className="font-semibold">move<span className="text-accent-warm">-</span>ment</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-6">
            We are a bilingual video production company based in Japan. We create cinematic content
            that bridges cultures, tells authentic stories, and moves people to action. From documentary
            filmmaking to corporate video, drone cinematography to VR experiences — we bring visions to life.
          </p>
          <p className="text-white/50 text-lg leading-relaxed font-jp">
            私たちは日本を拠点とするバイリンガル映像制作会社です。文化の架け橋となり、
            本物のストーリーを伝え、人々を動かすシネマティックなコンテンツを制作しています。
            ドキュメンタリー映画制作から企業向け映像、ドローン撮影からVR体験まで、
            ビジョンを映像に変えます。
          </p>
        </FadeInSection>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-4 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light mb-4">
              Our Work / <span className="font-jp">実績</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Selected projects from our portfolio of documentary, corporate, and creative video work across Japan.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, i) => (
              <FadeInSection key={i}>
                <div className="group bg-dark-700 rounded-lg overflow-hidden hover:ring-1 hover:ring-accent-warm/30 transition-all duration-300">
                  {/* Image grid: 1 large + 2 small */}
                  <div className="grid grid-cols-2 gap-0.5">
                    <div className="col-span-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.images[1]}
                        alt=""
                        className="w-full h-24 object-cover"
                      />
                    </div>
                    <div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.images[2]}
                        alt=""
                        className="w-full h-24 object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-accent-warm/70 text-sm font-jp mb-3">{item.titleJp}</p>
                    <p className="text-white/60 text-sm leading-relaxed mb-2">{item.description}</p>
                    <p className="text-white/40 text-xs font-jp leading-relaxed">{item.descriptionJp}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light mb-4">
              Blog / <span className="font-jp">ブログ</span>
            </h2>
            <p className="text-white/50">Latest stories and insights from our team.</p>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <FadeInSection key={i}>
                <div className="bg-dark-800 rounded-lg overflow-hidden hover:bg-dark-700 transition-colors group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://picsum.photos/seed/blog${i + 1}/600/300`}
                    alt=""
                    className="w-full h-40 object-cover group-hover:opacity-80 transition-opacity"
                  />
                  <div className="p-5">
                    <h3 className="font-semibold mb-1">{post.title}</h3>
                    <p className="text-white/40 text-sm font-jp mb-4">{post.titleJp}</p>
                    <Link
                      href="/blog"
                      className="text-accent-warm text-sm font-medium hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
