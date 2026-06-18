import type { Metadata } from "next";
import { SiteImage } from "@/components/ui/site-image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleJsonLd } from "@/components/seo/json-ld";
import { SiteShell } from "@/components/layout/site-shell";
import {
  articles,
  formatArticleDate,
  getArticleBySlug,
} from "@/lib/articles";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Post não encontrado" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      images: [{ url: article.coverImage, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.coverImage],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <SiteShell>
      <ArticleJsonLd article={article} />
      <article>
        <div className="hero-overlap page-hero-bg text-on-dark hero-shell pb-0">
          <div className="section-shell max-w-4xl pb-8 sm:pb-12">
            <Link
              href="/blog"
              className="text-sm font-semibold text-on-dark-muted transition-colors hover:text-on-dark-soft"
            >
              ← Blog
            </Link>
            <p className="eyebrow mt-5 text-brand sm:mt-8">{article.category}</p>
            <h1 className="font-display display-title balance mt-4 max-w-3xl text-on-dark-soft sm:mt-5 sm:text-4xl lg:text-6xl">
              {article.title}
            </h1>
            <p className="mt-4 text-sm text-on-dark-muted sm:mt-5">
              {formatArticleDate(article.publishedAt)} · {article.readingTime}{" "}
              de leitura
            </p>
          </div>
        </div>

        <div className="relative -mt-2 aspect-[21/9] w-full max-h-[28rem] overflow-hidden bg-surface-alt sm:aspect-[2.4/1]">
          <SiteImage
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>

        <section className="reading-surface section-shell max-w-3xl pb-12 pt-8 sm:pb-20 sm:pt-12">
          <p className="text-base leading-7 text-foreground sm:text-lg sm:leading-8">{article.excerpt}</p>

          <div className="mt-8 space-y-5 border-t border-line pt-8 sm:mt-10 sm:space-y-6 sm:pt-10">
            {article.body.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-8 text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="mt-12 border-t border-line pt-8">
            <p className="text-sm leading-7 text-muted">
              Este texto é informativo e não substitui consulta jurídica. Para
              orientação sobre o seu caso,{" "}
              <Link href="/contato" className="link-arrow">
                fale com o escritório →
              </Link>
            </p>
          </aside>
        </section>
      </article>
    </SiteShell>
  );
}
