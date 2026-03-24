import type { Metadata } from "next";
import FadeInSection from "@/components/FadeInSection";
import PeopleScroller from "@/components/PeopleScroller";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inbound Tourism Video Japan",
  description:
    "Inbound tourism and Japan promotion video production for international audiences. Bilingual English/Japanese content to attract visitors to Japan. インバウンド観光・訪日プロモーション映像制作。",
  alternates: { canonical: "https://www.move-ment.co/inbound-tourism" },
  openGraph: {
    title: "Inbound Tourism Video Production Japan | move-ment",
    description: "Attract international visitors to Japan with bilingual promotional video content. move-ment — Tokyo-based bilingual video production.",
    url: "https://www.move-ment.co/inbound-tourism",
  },
};

const caseStudies = [
  {
    title: "Yamagata | the local food, with the locals",
    titleJp: "山形のローカルフード",
    description: "Part 1 of a two part documentary we filmed and edited for Cool Japan, a Japanese government Cabinet Office initiative. A shorter, 30 second, version of each was broadcast on CNNJ. We met the locals and heard what they have to say about the local food and the Shonai region of Yamagata Prefecture.",
    embedUrl: "https://www.youtube.com/embed/twlKN-brZAA",
    screengrabs: ["/images/yamagata1.jpeg", "/images/yamagata2.jpeg", "/images/yamagata3.jpeg"],
  },
  {
    title: "高知県グローバルコンテンツ動画 VISIT KOCHI 仁淀川編",
    titleJp: "高知・仁淀川",
    description: "高知県の仁淀川エリアではアクティビティが多く、自然も素晴らしいのでそのまま取り上げる映像にしてもある程度の効果は見込まれるはず。しかし、単に綺麗な風景を見せるより、そのエリアの皆さんがどんな思いで旅行者を迎えているか、どんな思いで暮らしているか。というように現地の皆さんの声を入れることでそのエリアの本当の魅力が伝わる。今回はNiyodo Adventuresのキャニオニングガイド Norihiroさんとゲストハウス縁の金原さんの話をベースにした構成で仕上げた。",
    embedUrl: "https://player.vimeo.com/video/739353888?h=7d9d82c916",
  },
  {
    title: "The people of Hachijyo Island, Tokyo City",
    titleJp: "八丈島・東京都",
    description: "A mushroom farmer, a traditional stone wall builder, a weaver, a guide to an abandoned island that is now a bird sanctuary, and more - we got to know a lot of the locals on Hachijyojima Island in this video we filmed for the City of Tokyo. Yes, Hachijijyojima is an hour's flight from Tokyo but is administratively part of Tokyo.",
    embedUrl: "https://player.vimeo.com/video/907665718?h=321629db6e",
  },
  {
    title: "The people and places of Shimanami Kaido, in the Seto Inland Sea",
    titleJp: "しまなみ海道・瀬戸内海",
    description: "Part 1 of a 3 part series on the people and places of the Shimanami Kaido, the string of islands and bridges from Onomichi to Imabari in the Seto Inland Sea of Japan.",
    embedUrl: "https://player.vimeo.com/video/1031772636?h=06260efafa",
  },
];

export default function InboundTourismPage() {
  return (
    <div className="min-h-screen">
      {/* Hero - dark cinematic */}
      <section className="relative h-[70vh] flex items-center justify-center text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/kochi1.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative px-8 max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-jp">
            ローカルの声とストーリーでインバウンド動画にもっと<span className="text-accent-warm">効果</span>を
          </h1>
        </div>
      </section>

      {/* Intro box */}
      <section className="py-20 px-4 bg-neutral-100">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="border border-neutral-300 bg-white p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 font-jp mb-8">
                これからのインバウンド動画、どうする？
              </h2>
              <p className="text-neutral-500 leading-relaxed font-jp mb-2">
                とりあえずドローン飛ばそうか？
              </p>
              <p className="text-neutral-500 leading-relaxed font-jp mb-6">
                外国人っぽい女性に歩きながら色々食べてもらおうか？
              </p>
              <div className="pl-6 border-l-2 border-accent-warm/30 space-y-4">
                <p className="text-neutral-700 leading-relaxed">
                  We do things different. We ...
                </p>
                <p className="text-neutral-600 leading-relaxed font-jp">
                  | ローカルの皆さんに自分たちのストーリーを語ってもらう。
                </p>
                <p className="text-neutral-600 leading-relaxed font-jp">
                  | 最後まで観てもらいたくなるストーリーで展開していく。
                </p>
                <p className="text-neutral-600 leading-relaxed font-jp">
                  | 現場音を生かして臨場感を出す。
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Local knowledge section */}
      <section className="py-20 px-4 bg-neutral-100">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 text-center mb-12">
              <span className="text-accent-warm">local</span> knowledge, <span className="text-accent-warm">international</span> production
            </h2>
            <div className="space-y-6 mb-16">
              <p className="text-neutral-600 leading-relaxed">
                Looking to produce a video in out of way, back of beyond, place in Japan? Or perhaps in central Tokyo?
              </p>
              <p className="text-neutral-600 leading-relaxed">
                We know the places and people of Japan.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                We have shot on rivers, lakes, mountain tops (including Mt Fuji) for clients such as National Geographic, the Japanese Ministry of the Environment, the Cabinet Office (Cool Japan), CNNj and many public regional authorities.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h3 className="text-xl font-black text-neutral-900 mb-4">
                  the <span className="text-accent-warm">people</span> of Japan, in the cities
                </h3>
                <p className="text-neutral-500 leading-relaxed mb-4">
                  We have filmed people and city life around Japan for a number of public and non-profit organisations, including for JIBTV, part of the national broadcaster NHK.
                </p>
                <p className="text-neutral-500 leading-relaxed">
                  Japan has some (ok, a lot) of beautiful locations and we have filmed some (ok, a lot) of them. But what we love is poking our lenses (with permission!) into the lives of the locals here in Japan and then to share their story with the world.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-black text-neutral-900 mb-4">
                  the <span className="text-accent-warm">locations</span> of Japan, in the regions
                </h3>
                <p className="text-neutral-500 leading-relaxed mb-4">
                  We know the mountains of Nagano, the rivers of Shikoku (the one you want to know about is the Shimanto river), the sake breweries of Fukushima (well, ok, we have only filmed in 16 out of the 56 breweries in prefecture), the islands of Okinawa, the onsen of Kinosaki, and everywhere in between. We climbed Mt Fuji 3 times in one year for a client shoot on the Fujinomiya climbing route and the cultural heritage sites around the base.
                </p>
                <p className="text-neutral-500 leading-relaxed">
                  We are kayakers, skiers and avid hikers. We can launch (and retrieve!) a drone from a kayak, get a balanced shot on skis and haul tripods up mountain sides.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* People Scroller */}
      <section className="bg-white">
        <PeopleScroller
          images={[
            "/images/inbound-people1.jpg",
            "/images/inbound-people2.jpg",
            "/images/inbound-people3.jpg",
            "/images/inbound-people4.jpg",
            "/images/inbound-people5.jpg",
            "/images/inbound-people6.jpg",
            "/images/inbound-people7.jpg",
          ]}
        />
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
                  {study.titleJp && (
                    <p className="text-accent-warm text-sm font-jp mb-2 pl-4">
                      {study.titleJp}
                    </p>
                  )}
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
                  {study.screengrabs && (
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {study.screengrabs.map((img, j) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          key={j}
                          src={img}
                          alt={`${study.title} screengrab ${j + 1}`}
                          className="w-full aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vimeo Showcase Link */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="border-2 border-accent-warm/20 p-10 lg:p-16 text-center">
              <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">
                Vimeo Showcase
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 mt-3 mb-4 font-jp">
                インバウンド動画集はこちらへ
              </h3>
              <p className="text-neutral-500 leading-relaxed font-jp text-lg mb-8 max-w-2xl mx-auto">
                これまでに制作したインバウンド観光映像の一部をまとめてご覧いただけます
              </p>
              <a
                href="https://vimeo.com/showcase/9143865"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-accent-warm text-white font-bold text-sm tracking-[0.15em] uppercase hover:bg-accent-warm-dark transition-colors glitch-hover"
              >
                Vimeo Showcase →
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
            インバウンド観光映像のご相談<span className="text-accent-warm">.</span>
          </h2>
          <p className="text-neutral-500 text-lg mb-3">
            World-class skills to share Japan with the world.
          </p>
          <p className="text-neutral-400 font-jp mb-10">
            企画段階からお気軽にご相談ください。
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
