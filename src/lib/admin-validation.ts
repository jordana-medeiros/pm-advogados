export type AdminValidationIssue = {
  scope: string;
  message: string;
  severity: "ok" | "warn" | "danger";
};

type AdminValidationDraft = {
  site?: {
    siteUrl?: string;
  };
  lawyers?: Array<{
    name?: string;
    photo?: string;
  }>;
  blog?: {
    articles?: Array<{
      slug?: string;
      title?: string;
      coverImage?: string;
    }>;
  };
  home?: {
    faqItems?: unknown[];
  };
  criminal?: {
    emergencyServices?: unknown[];
  };
};

export function validateAdminDraft(
  draft: AdminValidationDraft,
): AdminValidationIssue[] {
  const articles = draft.blog?.articles ?? [];
  const lawyers = draft.lawyers ?? [];
  const slugs = articles
    .map((article) => article.slug?.trim())
    .filter((slug): slug is string => Boolean(slug));
  const duplicateSlugs = slugs.filter(
    (slug, index) => slugs.indexOf(slug) !== index,
  );
  const allLawyersHavePhotos =
    lawyers.length > 0 && lawyers.every((lawyer) => lawyer.photo?.trim());
  const allArticlesHaveCovers =
    articles.length > 0 && articles.every((article) => article.coverImage?.trim());

  return [
    {
      scope: "SEO",
      message: draft.site?.siteUrl?.includes("localhost")
        ? "URL pública ainda aponta para localhost."
        : "URL pública configurada.",
      severity: draft.site?.siteUrl?.includes("localhost") ? "danger" : "ok",
    },
    {
      scope: "Equipe",
      message: allLawyersHavePhotos
        ? "Todos os profissionais têm foto."
        : "Há profissional sem foto.",
      severity: allLawyersHavePhotos ? "ok" : "warn",
    },
    {
      scope: "Blog",
      message: allArticlesHaveCovers
        ? "Todos os artigos têm capa."
        : "Há artigo sem capa.",
      severity: allArticlesHaveCovers ? "ok" : "warn",
    },
    {
      scope: "Blog",
      message:
        duplicateSlugs.length === 0
          ? "Slugs de artigos sem duplicidade."
          : `Slug duplicado: ${duplicateSlugs.join(", ")}.`,
      severity: duplicateSlugs.length === 0 ? "ok" : "danger",
    },
    {
      scope: "Home",
      message:
        (draft.home?.faqItems?.length ?? 0) >= 4
          ? "FAQ geral com bom volume de respostas."
          : "FAQ geral curto para objeções de clientes.",
      severity: (draft.home?.faqItems?.length ?? 0) >= 4 ? "ok" : "warn",
    },
    {
      scope: "Criminal",
      message:
        (draft.criminal?.emergencyServices?.length ?? 0) >= 4
          ? "Landing criminal cobre serviços urgentes."
          : "Landing criminal precisa de mais serviços.",
      severity:
        (draft.criminal?.emergencyServices?.length ?? 0) >= 4 ? "ok" : "warn",
    },
  ];
}
