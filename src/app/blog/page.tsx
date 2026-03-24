import type { Metadata } from "next";
import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";
import { getPublishedPosts } from "@/lib/notion";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stories, insights and behind-the-scenes from move-ment's video production work across Japan. Drone, VR, documentary and corporate filmmaking.",
  alternates: { canonical: "https://www.move-ment.co/blog" },
  openGraph: {
    title: "Blog | move-ment — Video Production Japan",
    description: "Stories and insights from bilingual video production across Japan.",
    url: "https://www.move-ment.co/blog",
  },
};

export const revalidate = 60; // ISR — revalidate every 60 seconds

export default async function BlogPage() {
  const posts = await getPublishedPosts();

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
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-mono text-xs tracking-[0.3em] text-neutral-300 uppercase mb-4">Coming Soon</p>
              <p className="text-neutral-500">No posts published yet. Check back soon.</p>
            </div>
          ) : (
            <>
              {/* Featured post — first one large */}
              <FadeInSection className="mb-16">
                <Link href={`/blog/${posts[0].slug}`} className="block group">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="relative overflow-hidden">
                      {posts[0].coverUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={posts[0].coverUrl}
                          alt={posts[0].title}
                          className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                      ) : (
                        <div className="w-full aspect-[4/3] bg-neutral-100 flex items-center justify-center">
                          <span className="font-mono text-xs tracking-[0.3em] text-neutral-300">NO IMAGE</span>
                        </div>
                      )}
                      <div className="absolute top-4 left-4 font-mono text-xs tracking-[0.3em] text-white/80">
                        FEATURED
                      </div>
                    </div>
                    <div>
                      {posts[0].category && (
                        <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">
                          {posts[0].category}
                        </span>
                      )}
                      <time className="block font-mono text-xs tracking-[0.2em] text-neutral-400 mt-2">
                        {posts[0].date}
                      </time>
                      <h2 className="text-3xl font-black mt-3 mb-3 text-neutral-900 group-hover:text-accent-warm transition-colors">
                        {posts[0].title}
                      </h2>
                      {posts[0].excerpt && (
                        <p className="text-neutral-500 leading-relaxed mb-4 text-sm">
                          {posts[0].excerpt}
                        </p>
                      )}
                      <span className="text-accent-warm text-sm font-mono tracking-wider group-hover:text-accent-warm-dark transition-colors">
                        READ →
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeInSection>

              {/* Rest of posts */}
              {posts.length > 1 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-neutral-200">
                  {posts.slice(1).map((post) => (
                    <FadeInSection key={post.id}>
                      <Link href={`/blog/${post.slug}`} className="block group">
                        <article className="border-b border-r border-neutral-200 group-hover:bg-neutral-50 transition-colors">
                          {post.coverUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={post.coverUrl}
                              alt={post.title}
                              className="w-full h-40 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                          ) : (
                            <div className="w-full h-40 bg-neutral-100 flex items-center justify-center">
                              <span className="font-mono text-[10px] tracking-[0.3em] text-neutral-300">NO IMAGE</span>
                            </div>
                          )}
                          <div className="p-5">
                            {post.category && (
                              <span className="font-mono text-[10px] tracking-[0.3em] text-accent-warm uppercase">
                                {post.category}
                              </span>
                            )}
                            <time className="block font-mono text-[10px] tracking-[0.3em] text-neutral-300 mt-1">
                              {post.date}
                            </time>
                            <h3 className="font-bold text-neutral-900 mt-2 mb-2 text-sm group-hover:text-accent-warm transition-colors">
                              {post.title}
                            </h3>
                            {post.excerpt && (
                              <p className="text-neutral-400 text-xs mb-3 line-clamp-2 leading-relaxed">
                                {post.excerpt}
                              </p>
                            )}
                            <span className="text-accent-warm text-xs font-mono tracking-wider group-hover:text-accent-warm-dark transition-colors">
                              READ →
                            </span>
                          </div>
                        </article>
                      </Link>
                    </FadeInSection>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
