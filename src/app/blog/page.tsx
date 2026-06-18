import type { Metadata } from "next";
import Link from "next/link";

import { BlogCard } from "@/components/sections/blog-card";
import { PageHero } from "@/components/sections/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { articles, blogIntro } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Blog",
  description: blogIntro.description,
};

export default function BlogPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Blog"
        title={blogIntro.title}
        description={blogIntro.description}
      />

      <section className="section-shell section-pad-compact pb-16 sm:pb-20">
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-sm leading-7 text-muted">
          Tem dúvida sobre o seu caso?{" "}
          <Link href="/contato" className="link-arrow">
            Veja os canais de contato →
          </Link>
        </p>
      </section>
    </SiteShell>
  );
}
