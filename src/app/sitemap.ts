import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/notion";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://www.move-ment.co";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date("2026-03-28"), changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/about`, lastModified: new Date("2025-12-01"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/our-people`, lastModified: new Date("2025-12-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/kizai-equipment-video-japan`, lastModified: new Date("2025-06-01"), changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/japan-drone-video-photo`, lastModified: new Date("2026-01-01"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/vr-360-tours-japan`, lastModified: new Date("2026-01-01"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/video-programme-content-japan`, lastModified: new Date("2026-01-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/inbound-tourism`, lastModified: new Date("2026-02-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/regional-migration`, lastModified: new Date("2026-02-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/university-promotion-video-japan`, lastModified: new Date("2026-02-01"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: new Date("2026-03-28"), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date("2025-12-01"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: new Date("2025-06-01"), changeFrequency: "yearly", priority: 0.3 },
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
