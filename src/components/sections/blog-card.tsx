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
      className="blog-card group flex h-full flex-col overflow-hidden border border-line bg-surface transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[rgba(176,138,69,0.28)] hover:shadow-[var(--shadow)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-alt">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/35 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-brand-deep/75 px-3 py-1 text-[0.62rem] font-bold tracking-[0.14em] text-on-dark uppercase backdrop-blur-sm">
          {article.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-2xl leading-tight transition-colors group-hover:text-brand-deep sm:text-[1.65rem]">
          {article.title}
        </h3>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-muted">
          {article.excerpt}
        </p>
        <p className="mt-5 flex items-center gap-2 text-xs text-muted">
          <time dateTime={article.publishedAt}>
            {formatArticleDate(article.publishedAt)}
          </time>
          <span aria-hidden="true">·</span>
          <span>{article.readingTime} de leitura</span>
        </p>
      </div>
    </Link>
  );
}
