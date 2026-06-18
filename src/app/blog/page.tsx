import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { CopyEmphasis } from "@/components/ui/copy-emphasis";
import { BlogCard } from "@/components/sections/blog-card";
import { BlogFilters } from "@/components/sections/blog-filters";
import { BlogPagination } from "@/components/sections/blog-pagination";
import { PageHero } from "@/components/sections/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import {
  articles,
  blogIntro,
  filterArticlesByCategory,
  getArticleCategories,
  paginateArticles,
  sortArticlesByDate,
} from "@/lib/articles";

export const metadata: Metadata = {
  title: "Blog",
  description: blogIntro.description,
};

type BlogPageProps = {
  searchParams: Promise<{
    categoria?: string;
    pagina?: string;
  }>;
};

function BlogFiltersFallback() {
  return (
    <div
      className="mb-10 flex flex-wrap justify-center gap-2 lg:justify-start"
      aria-hidden="true"
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="h-9 w-24 animate-pulse rounded-full bg-white/8"
        />
      ))}
    </div>
  );
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { categoria = "todas", pagina = "1" } = await searchParams;
  const activeCategory = categoria || "todas";
  const requestedPage = Number.parseInt(pagina, 10);
  const currentPage = Number.isFinite(requestedPage) ? requestedPage : 1;

  const categories = getArticleCategories();
  const filteredArticles = sortArticlesByDate(
    filterArticlesByCategory(articles, activeCategory),
  );
  const { items, page, totalPages, totalItems } = paginateArticles(
    filteredArticles,
    currentPage,
  );

  return (
    <SiteShell>
      <PageHero
        eyebrow="Blog"
        title={blogIntro.title}
        description={
          <>
            Produzimos conteúdos para ajudar você a entender seus{" "}
            <CopyEmphasis>direitos</CopyEmphasis> antes de tomar{" "}
            <CopyEmphasis>decisões importantes</CopyEmphasis>.
          </>
        }
      />

      <section className="section-shell section-pad-compact pb-20 text-on-dark sm:pb-24 lg:pb-28">
        <Suspense fallback={<BlogFiltersFallback />}>
          <BlogFilters
            categories={categories}
            activeCategory={activeCategory}
          />
        </Suspense>

        {items.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {items.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="rounded-sm border border-white/10 bg-white/[0.03] px-6 py-12 text-center">
            <p className="font-display text-2xl text-on-dark-soft">
              Nenhum artigo nesta categoria
            </p>
            <p className="mt-3 text-sm leading-7 text-on-dark-muted">
              Tente outro filtro ou volte para ver todas as publicações.
            </p>
            <Link href="/blog" className="link-arrow-light mt-6 inline-flex">
              Ver todos os artigos →
            </Link>
          </div>
        )}

        <BlogPagination
          page={page}
          totalPages={totalPages}
          categorySlug={activeCategory}
        />

        {totalItems > 0 ? (
          <p className="mt-16 max-w-2xl text-sm leading-7 text-muted sm:mt-20">
            Tem dúvida sobre o seu caso?{" "}
            <Link href="/contato" className="link-arrow">
              Veja os canais de contato →
            </Link>
          </p>
        ) : null}
      </section>
    </SiteShell>
  );
}
