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
      <section className="relative h-[40vh] flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://picsum.photos/seed/blog-hero/1920/800"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-light mb-4">Blog</h1>
          <p className="text-white/60 text-xl font-jp">ブログ</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <FadeInSection key={i}>
              <article className="bg-dark-800 rounded-lg overflow-hidden hover:bg-dark-700 transition-colors group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://picsum.photos/seed/blogpage${i + 1}/600/300`}
                  alt=""
                  className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                />
                <div className="p-6">
                  <time className="text-xs text-white/30">{post.date}</time>
                  <h2 className="text-lg font-semibold mt-2 mb-1">{post.title}</h2>
                  <p className="text-white/40 text-sm font-jp mb-4">{post.titleJp}</p>
                  <Link href="/blog" className="text-accent-warm text-sm font-medium hover:underline">
                    Read More →
                  </Link>
                </div>
              </article>
            </FadeInSection>
          ))}
        </div>
      </section>
    </div>
  );
}
