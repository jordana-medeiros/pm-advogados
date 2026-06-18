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
      className="group flex h-full flex-col overflow-hidden border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(176,138,69,0.30)] hover:shadow-[0_16px_52px_rgba(14,42,36,0.13)]"
      style={{ borderTopWidth: "2px", borderTopColor: "transparent" }}
    >
      {/* Borda dourada no topo — aparece no hover via CSS */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="relative aspect-[16/9] overflow-hidden bg-surface-alt">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/40 via-transparent to-transparent" />
        {/* Badge de categoria */}
        <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-[0.62rem] font-bold tracking-[0.14em] text-ink uppercase">
          {article.category}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-[1.5rem] leading-tight transition-colors duration-200 group-hover:text-brand-deep sm:text-[1.65rem]">
          {article.title}
        </h3>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-muted">
          {article.excerpt}
        </p>
        <div className="mt-5 flex items-center gap-2 text-xs text-muted">
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
