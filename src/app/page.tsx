import type { Metadata } from "next";
import HeroSlideshow from "@/components/HeroSlideshow";
import FadeInSection from "@/components/FadeInSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "move-ment | Bilingual Video Production Company Japan",
  description:
    "move-ment is a Tokyo-based bilingual (JP/EN) video production company. Corporate video, drone, VR/360 tours, documentary, inbound tourism and programme content across Japan. 日本を拠点とするバイリンガル映像制作会社。",
  alternates: { canonical: "https://www.move-ment.co" },
  openGraph: {
    title: "move-ment | Bilingual Video Production Company Japan",
    description:
      "Tokyo-based bilingual video production. Corporate, drone, VR/360, documentary, inbound tourism. 映像制作会社。",
    url: "https://www.move-ment.co",
    images: [{ url: "/images/japan_drone_photos_dji_123.jpg", width: 1200, height: 630, alt: "move-ment — Bilingual Video Production Japan" }],
  },
};

const videoPortfolio = [
  {
    title: "Shibuya + Yummy | \"This sushi is Shibuyummy!\"",
    titleJp: "渋谷 + ヤミー",
    description: "Part 1 of a 6 episode series, Shibuyummmy, on the food and culture of Shibuya, Tokyo, which we developed for JIB, part of the national broadcaster NHK. We designed the Shibuyummy branding, making the graphics, t-shirt and nfc chip link to bring the branding into the real world.",
    embedUrl: "https://www.youtube.com/embed/T-zLkZJK1dw",
    screengrabs: ["/images/hero2.jpeg", "/images/hero3.jpeg", "/images/hero4.jpeg"],
    tag: "Lifestyle Documentary",
  },
  {
    title: "Kochi | \"This is a very difficult place to get to. But..\"",
    titleJp: "高知 / 足摺",
    description: "Place is not just place. Place is the people so when we were asked to introduce the place of Ashizuri in Kochi Prefecture we knew we needed to hear from the people there, the locals, about the place. Why should you visit? Listen to what the locals have to say.",
    embedUrl: "https://player.vimeo.com/video/749777428?h=99630702df",
    screengrabs: ["/images/kochi1.png", "/images/kochi2.png", "/images/kochi3.png"],
    tag: "Regional Promo",
  },
  {
    title: "Channel Oishii | Channelling Japanese taste and tasty Japanese food",
    titleJp: "チャネルおいしい",
    description: "Japanese food is more than flavor — it's stories waiting to be shared. Channel Oishii serves those stories to the world. One of a series of promotion videos we made for the new FAST Channel, Channel Oishii, launched by JIB TV to distribute original and existing Japanese food culture programmes to the world.",
    embedUrl: "https://www.youtube.com/embed/Ku08sQGhcdc",
    screengrabs: ["/images/oishii1.jpg", "/images/oishii2.jpg", "/images/oishii3.jpg"],
    tag: "NHK",
  },
  {
    title: "3.11 Tsunami | 「世界の皆さん、この風景見えていますか？」",
    titleJp: "3.11 津波 / 東北",
    description: "How have the survivors of the 2011 Tohoku earthquake tsunami dealt with the physical and emotional destruction? What can we learn from them about resilience and rebuilding lives and communities? We travelled around the region for the Recovery Agency to listen and find out.",
    embedUrl: "https://player.vimeo.com/video/476199958",
    screengrabs: ["/images/tsunami1.png", "/images/tsunami2.png", "/images/tsunami3.png"],
    tag: "Documentary",
  },
  {
    title: "Kyoto | from above",
    titleJp: "京都ドローン撮影",
    description: "Drone shots of Yasaka Pagoda, the bamboo forest in Arashiyama and other places in Kyoto. Filmed on the Inspire 2 drone with permission.",
    embedUrl: "https://player.vimeo.com/video/891368020",
    screengrabs: ["/images/kyoto1.jpeg", "/images/kyoto2.jpeg", "/images/kyoto3.jpeg"],
    tag: "Drone",
  },
  {
    title: "Can't stop, won't stop | \"I should have stopped.\"",
    titleJp: "キャント・ストップ",
    description: "The crew is pumped up for athletic life style fashion shoot but the set is just not dark and moody enough for the director so when he yells \"lights down\" things come crashing down in this dark comedy short.",
    embedUrl: "https://player.vimeo.com/video/532064736",
    screengrabs: ["/images/boxer1.png", "/images/boxer2.png", "/images/boxer3.png"],
    tag: "Short Film",
  },
  {
    title: "Japan's best kept secret | \"Here, take this life jacket.\"",
    titleJp: "日本の秘境",
    description: "\"Arrived in Osaka, Japan and I was about to tuck into the local food, takoyaki, when I came across this weird message. I set off to find what it all meant and fate seemed to throw me an odd collection of items on the way. I mean, a life jacket from a train conductor, really?!\"",
    embedUrl: "https://player.vimeo.com/video/774923949",
    screengrabs: ["/images/secret1.jpeg", "/images/secret2.jpeg", "/images/secret3.jpeg"],
    tag: "Regional Promo",
  },
];

const blogPosts = [
  { title: "Behind the Lens: Filming in Rural Japan", titleJp: "レンズの向こう側：日本の地方での撮影", slug: "filming-rural-japan" },
  { title: "The Art of Drone Cinematography", titleJp: "ドローン映像撮影の芸術", slug: "drone-cinematography" },
  { title: "Why Bilingual Video Matters", titleJp: "なぜバイリンガル映像が重要なのか", slug: "bilingual-video" },
];

export default function Home() {
  return (
    <div className="noise-bg">
      {/* Hero Slideshow */}
      <HeroSlideshow />

      {/* About Section — asymmetric layout */}
      <section className="py-32 px-4 relative">
        {/* Large background text */}
        <div className="absolute top-16 left-0 text-[12vw] font-black text-neutral-100 leading-none select-none pointer-events-none whitespace-nowrap overflow-hidden w-full">
          ABOUT
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <FadeInSection>
            <div className="grid lg:grid-cols-[1fr,2px,1fr] gap-12 items-start">
              {/* Japanese */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-black mb-8 text-neutral-900 leading-tight font-jp">
                  世界へ届ける日本のストーリー、心を動かす<br />
                  + <span className="text-accent-warm">move</span>-ment
                </h2>
                <p className="text-neutral-500 text-lg leading-relaxed font-jp mb-6">
                  日本の人々や場所には語るべき物語があります。私たちはそれに耳を傾けています。空から地上まで、日本各地で日英バイリンガルのチームがドキュメンタリーや放送用のシリーズ映像を制作。
                </p>
                <p className="text-neutral-500 text-lg leading-relaxed font-jp">
                  地域や大自然から渋谷の裏路地まで、大小さまざまな物語を求めて日本を探検。国内外の放送局、国や自治体、大学やNPOのために、映像という形で届けています。
                </p>
              </div>

              {/* Divider */}
              <div className="hidden lg:block w-[2px] h-full bg-gradient-to-b from-transparent via-accent-warm/30 to-transparent" />

              {/* English */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-black mb-8 text-neutral-900 leading-tight">
                  Stories of Japan to the world, made to move<br />
                  + <span className="text-accent-warm">move</span>-ment
                </h2>
                <p className="text-neutral-500 text-lg leading-relaxed mb-6">
                  The people and places of Japan have something to say – we are listening. Documentary and episodic scripted and unscripted series video production in the air and on the ground throughout Japan by our Japanese/English bilingual team.
                </p>
                <p className="text-neutral-500 text-lg leading-relaxed">
                  We specialize in exploring Japan, from the regions and great outdoors to the back streets of Shibuya, for national and international broadcasters, national and local authorities, universities and non-profits in search of stories big and small.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Video Portfolio Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="mb-20">
            <div className="flex items-end justify-between">
              <div>
                <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">Selected Projects</span>
                <h2 className="text-4xl sm:text-6xl font-black mt-4 text-neutral-900 leading-none">
                  Our Work<span className="text-accent-warm">.</span>
                </h2>
                <p className="text-neutral-400 font-jp mt-3">実績</p>
              </div>
              <div className="hidden sm:block">
                <div className="accent-line w-32" />
              </div>
            </div>
          </FadeInSection>

          <div className="space-y-32">
            {videoPortfolio.map((item, i) => (
              <FadeInSection key={i}>
                <div className="mb-6 flex items-baseline gap-4">
                  <span className="font-mono text-xs tracking-[0.3em] text-neutral-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight inline">
                      {item.title}
                    </h3>
                    <span className="text-accent-warm text-sm font-jp ml-3">{item.titleJp}</span>
                    <span className="font-mono text-[10px] tracking-[0.2em] bg-accent-warm text-white px-3 py-1 uppercase ml-3 inline-block">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <p className="text-neutral-500 leading-relaxed mb-6 max-w-3xl">
                  {item.description}
                </p>

                {/* Video embed */}
                <div className="aspect-video bg-neutral-900">
                  <iframe
                    src={item.embedUrl}
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={item.title}
                  />
                </div>

                {/* Screengrabs underneath */}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {item.screengrabs.map((img, j) => (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      key={j}
                      src={img}
                      alt={`${item.title} screenshot ${j + 1}`}
                      className="w-full aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  ))}
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-32 px-4 relative">
        <div className="absolute bottom-0 left-0 text-[12vw] font-black text-neutral-100 leading-none select-none pointer-events-none">
          BLOG
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeInSection className="mb-16">
            <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">Latest Stories</span>
            <h2 className="text-4xl sm:text-5xl font-black mt-4 text-neutral-900 leading-none">
              Blog<span className="text-accent-warm">.</span>
            </h2>
            <p className="text-neutral-400 font-jp mt-2">ブログ</p>
          </FadeInSection>

          <div className="grid sm:grid-cols-3 gap-0 border-t border-neutral-200">
            {blogPosts.map((post, i) => (
              <FadeInSection key={i}>
                <div className="border-b sm:border-b-0 sm:border-r border-neutral-200 last:border-r-0 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={["/images/kyoto2.jpeg", "/images/kochi2.png", "/images/drone1.jpg"][i]}
                    alt=""
                    className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="p-6">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-neutral-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-bold text-neutral-900 mt-2 mb-1 group-hover:text-accent-warm transition-colors">{post.title}</h3>
                    <p className="text-neutral-400 text-sm font-jp mb-4">{post.titleJp}</p>
                    <Link
                      href="/blog"
                      className="text-accent-warm text-sm font-mono tracking-wider hover:text-accent-warm-dark transition-colors"
                    >
                      READ →
                    </Link>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-warm/5 to-transparent" />
        <FadeInSection className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">Get in touch</span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black mt-6 mb-8 text-neutral-900 leading-none">
            Let&apos;s create<br />
            something that<br />
            <span className="text-accent-warm">moves</span> people<span className="text-accent-warm">.</span>
          </h2>
          <p className="text-neutral-400 font-jp text-lg mb-10">
            お問い合わせはこちらから。
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
