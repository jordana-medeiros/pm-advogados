import type { MetadataRoute } from "next";

import { articles } from "@/lib/articles";
import { getSiteUrl } from "@/lib/site-url";

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/sobre", changeFrequency: "monthly", priority: 0.8 },
  { path: "/equipe", changeFrequency: "monthly", priority: 0.8 },
  { path: "/areas-de-atuacao", changeFrequency: "monthly", priority: 0.9 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.85 },
  { path: "/contato", changeFrequency: "monthly", priority: 0.9 },
  { path: "/aviso-legal", changeFrequency: "yearly", priority: 0.3 },
  { path: "/politica-de-privacidade", changeFrequency: "yearly", priority: 0.3 },
  ...articles.map((article) => ({
    path: `/blog/${article.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
