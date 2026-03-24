import type { Metadata } from "next";
import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";

export const metadata: Metadata = {
  title: "Blog | move-ment",
  description: "Stories, insights, and behind-the-scenes from move-ment's video production work in Japan.",
};

const blogPosts = [
  { title: "Behind the Lens: Filming in Rural Japan", titleJp: "レンズの向こう側：日本の地方での撮影", date: "2024-12-15" },
  { title: "The Art of Drone Cinematography", titleJp: "ドローン映像撮影の芸術", date: "2024-11-28" },
  { title: "Why Bilingual Video Matters", titleJp: "なぜバイリンガル映像が重要なのか", date: "2024-11-10" },
  { title: "VR Tours: The Future of Travel Content", titleJp: "VRツアー：旅行コンテンツの未来", date: "2024-10-22" },
  { title: "Documenting Japan's Recovery: 10 Years On", titleJp: "日本の復興を記録する：10年後", date: "2024-10-05" },
  { title: "From Script to Screen: Our Process", titleJp: "脚本から画面へ：私たちのプロセス", date: "2024-09-18" },
  { title: "Cool Japan: Food Culture on Camera", titleJp: "クールジャパン：カメラの前の食文化", date: "2024-09-01" },
  { title: "Shooting in All Seasons: A Year in Japan", titleJp: "四季折々の撮影：日本の一年", date: "2024-08-15" },
  { title: "The Power of Storytelling in Corporate Video", titleJp: "企業映像におけるストーリーテリングの力", date: "2024-07-28" },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-end pb-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero1.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/50 to-white/90" />
        <div className="relative px-8 lg:px-20 max-w-7xl mx-auto w-full">
          <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">Latest Stories</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mt-3 text-neutral-900 leading-none">
            Blog<span className="text-accent-warm">.</span>
          </h1>
          <p className="text-neutral-500 text-lg font-jp mt-3">ブログ</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-28 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Featured post — first one large */}
          <FadeInSection className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative group overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/yamagata2.jpeg"
                  alt=""
                  className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 font-mono text-xs tracking-[0.3em] text-white/80">
                  FEATURED
                </div>
              </div>
              <div>
                <time className="font-mono text-xs tracking-[0.2em] text-neutral-400">{blogPosts[0].date}</time>
                <h2 className="text-3xl font-black mt-3 mb-2 text-neutral-900">{blogPosts[0].title}</h2>
                <p className="text-accent-warm text-sm font-jp mb-4">{blogPosts[0].titleJp}</p>
                <Link href="/blog" className="text-accent-warm text-sm font-mono tracking-wider hover:text-accent-warm-dark transition-colors">
                  READ →
                </Link>
              </div>
            </div>
          </FadeInSection>

          {/* Rest of posts */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-neutral-200">
            {blogPosts.slice(1).map((post, i) => (
              <FadeInSection key={i}>
                <article className="border-b border-r border-neutral-200 group hover:bg-neutral-50 transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/kochi3.png`}
                    alt=""
                    className="w-full h-40 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="p-5">
                    <time className="font-mono text-[10px] tracking-[0.3em] text-neutral-300">{post.date}</time>
                    <h3 className="font-bold text-neutral-900 mt-2 mb-1 text-sm group-hover:text-accent-warm transition-colors">{post.title}</h3>
                    <p className="text-neutral-400 text-xs font-jp mb-3">{post.titleJp}</p>
                    <Link href="/blog" className="text-accent-warm text-xs font-mono tracking-wider hover:text-accent-warm-dark transition-colors">
                      READ →
                    </Link>
                  </div>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
