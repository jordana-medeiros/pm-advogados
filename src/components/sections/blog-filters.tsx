"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { slugifyCategory } from "@/lib/articles";

type BlogFiltersProps = {
  categories: string[];
  activeCategory: string;
};

function buildBlogHref(categorySlug: string, searchParams: URLSearchParams) {
  const params = new URLSearchParams(searchParams.toString());

  if (categorySlug === "todas") {
    params.delete("categoria");
  } else {
    params.set("categoria", categorySlug);
  }

  params.delete("pagina");

  const query = params.toString();
  return query ? `/blog?${query}` : "/blog";
}

export function BlogFilters({ categories, activeCategory }: BlogFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleFilter(categorySlug: string) {
    router.push(buildBlogHref(categorySlug, searchParams), { scroll: false });
  }

  const options = [
    { slug: "todas", label: "Todas" },
    ...categories.map((category) => ({
      slug: slugifyCategory(category),
      label: category,
    })),
  ];

  return (
    <div
      className="mb-10 flex flex-wrap justify-center gap-2 lg:justify-start"
      role="group"
      aria-label="Filtrar artigos por categoria"
    >
      {options.map((option) => {
        const isActive = activeCategory === option.slug;

        return (
          <button
            key={option.slug}
            type="button"
            aria-pressed={isActive}
            onClick={() => handleFilter(option.slug)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-colors ${
              isActive
                ? "border-brand bg-brand text-ink"
                : "border-white/14 text-on-dark-muted hover:border-brand/40 hover:text-on-dark-soft"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
