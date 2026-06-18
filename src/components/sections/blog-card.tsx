import Image from "next/image";
import Link from "next/link";

import { formatArticleDate, type Article } from "@/lib/articles";

type BlogCardProps = {
  article: Article;
};

export function BlogCard({ article }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group relative flex h-full flex-col overflow-hidden bg-[var(--surface-reading)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_52px_rgba(14,42,36,0.14)]"
    >
      <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" />

      <div className="relative aspect-[16/9] overflow-hidden bg-surface-alt">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-[0.62rem] font-bold tracking-[0.14em] text-ink uppercase">
          {article.category}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-[1.5rem] leading-tight text-[var(--reading-foreground)] transition-colors duration-200 group-hover:text-brand-deep sm:text-[1.65rem]">
          {article.title}
        </h3>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-[var(--reading-muted)]">
          {article.excerpt}
        </p>
        <div className="mt-5 flex items-center gap-2 text-xs text-[var(--reading-muted)]">
          <time dateTime={article.publishedAt}>
            {formatArticleDate(article.publishedAt)}
          </time>
          <span aria-hidden="true" className="text-brand">·</span>
          <span>{article.readingTime} de leitura</span>
        </div>
      </div>
    </Link>
  );
}
