import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getPostBlocks, getAllPostSlugs } from "@/lib/notion";
import NotionBlocks from "@/components/NotionBlocks";

export const revalidate = 60;

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt || undefined,
    alternates: { canonical: `https://www.move-ment.co/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | move-ment Blog`,
      description: post.excerpt || undefined,
      url: `https://www.move-ment.co/blog/${post.slug}`,
      ...(post.coverUrl ? { images: [{ url: post.coverUrl }] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const [post, blocks] = await Promise.all([
    getPostBySlug(params.slug),
    getPostBySlug(params.slug).then((p) => (p ? getPostBlocks(p.id) : [])),
  ]);

  if (!post) notFound();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[55vh] flex items-end pb-16">
        {post.coverUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.coverUrl}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-neutral-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
        <div className="relative px-8 lg:px-20 max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-4">
            {post.category && (
              <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">
                {post.category}
              </span>
            )}
            {post.category && <span className="text-white/30">·</span>}
            <time className="font-mono text-xs tracking-[0.2em] text-white/50">
              {post.date}
            </time>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-white/70 mt-4 text-lg leading-relaxed max-w-2xl">
              {post.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Article Body */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-neutral-400 hover:text-accent-warm transition-colors mb-12"
          >
            ← BACK TO BLOG
          </Link>

          {/* Divider */}
          <div className="h-[3px] bg-accent-warm w-16 mb-12" />

          {/* Notion content */}
          <div className="prose-neutral max-w-none">
            <NotionBlocks blocks={blocks} />
          </div>

          {/* Footer divider */}
          <div className="mt-16 pt-12 border-t border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] text-neutral-300 uppercase mb-1">Written by</p>
              <p className="font-bold text-neutral-900">move-ment</p>
              <p className="text-neutral-400 text-sm font-jp">株式会社move-ment</p>
            </div>
            <Link
              href="/blog"
              className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase hover:text-accent-warm-dark transition-colors"
            >
              ← ALL POSTS
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 py-24 px-4 text-center">
        <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">
          Ready to work together?
        </span>
        <h2 className="text-4xl font-black text-white mt-4 mb-6">
          Let&apos;s make something great<span className="text-accent-warm">.</span>
        </h2>
        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-accent-warm text-white font-bold text-sm tracking-widest uppercase hover:bg-accent-warm-dark transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
