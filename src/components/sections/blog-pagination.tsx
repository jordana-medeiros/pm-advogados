import Link from "next/link";

type BlogPaginationProps = {
  page: number;
  totalPages: number;
  categorySlug?: string;
};

function buildBlogPageHref(page: number, categorySlug?: string) {
  const params = new URLSearchParams();

  if (categorySlug && categorySlug !== "todas") {
    params.set("categoria", categorySlug);
  }

  if (page > 1) {
    params.set("pagina", String(page));
  }

  const query = params.toString();
  return query ? `/blog?${query}` : "/blog";
}

export function BlogPagination({
  page,
  totalPages,
  categorySlug,
}: BlogPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav
      aria-label="Paginação do blog"
      className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-between"
    >
      <p className="text-sm text-on-dark-muted">
        Página {page} de {totalPages}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {page > 1 ? (
          <Link
            href={buildBlogPageHref(page - 1, categorySlug)}
            className="rounded-full border border-white/14 px-4 py-2 text-xs font-semibold text-on-dark-muted transition-colors hover:border-brand/40 hover:text-on-dark-soft"
          >
            ← Anterior
          </Link>
        ) : null}

        <div className="flex flex-wrap items-center gap-1">
          {pages.map((pageNumber) => {
            const isActive = pageNumber === page;

            return (
              <Link
                key={pageNumber}
                href={buildBlogPageHref(pageNumber, categorySlug)}
                aria-current={isActive ? "page" : undefined}
                className={`flex h-9 min-w-9 items-center justify-center rounded-full px-3 text-xs font-semibold transition-colors ${
                  isActive
                    ? "bg-brand text-ink"
                    : "border border-white/14 text-on-dark-muted hover:border-brand/40 hover:text-on-dark-soft"
                }`}
              >
                {pageNumber}
              </Link>
            );
          })}
        </div>

        {page < totalPages ? (
          <Link
            href={buildBlogPageHref(page + 1, categorySlug)}
            className="rounded-full border border-white/14 px-4 py-2 text-xs font-semibold text-on-dark-muted transition-colors hover:border-brand/40 hover:text-on-dark-soft"
          >
            Próxima →
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
