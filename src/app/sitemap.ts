import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/notion";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://www.move-ment.co";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/our-people`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/kizai-equipment-video-japan`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/japan-drone-video-photo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/vr-360-tours-japan`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/video-programme-content-japan`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/inbound-tourism`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/regional-migration`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/university-promotion-video-japan`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const slugs = await getAllPostSlugs();
    blogRoutes = slugs.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    // Notion unavailable at build time — skip blog routes
  }

  return [...staticRoutes, ...blogRoutes];
}
