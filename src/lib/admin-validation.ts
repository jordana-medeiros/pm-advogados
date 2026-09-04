export type AdminValidationIssue = {
  scope: string;
  message: string;
  severity: "ok" | "warn" | "danger";
};

type AdminValidationDraft = {
  site?: {
    name?: string;
    siteUrl?: string;
    whatsappPrimary?: string;
    whatsappPromptMessages?: string[];
  };
  navigation?: Array<{
    href?: string;
    label?: string;
  }>;
  lawyers?: Array<{
    name?: string;
    oab?: string;
    photo?: string;
  }>;
  blog?: {
    categories?: string[];
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

function isValidPublicUrl(value: string) {
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) && Boolean(url.hostname);
  } catch {
    return false;
  }
}

function getStringItems(value: unknown) {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

function asValidationDraft(value: unknown): AdminValidationDraft {
  return value && typeof value === "object"
    ? (value as AdminValidationDraft)
    : {};
}

export function validateAdminDraft(value: unknown): AdminValidationIssue[] {
  const draft = asValidationDraft(value);
  const siteUrl = draft.site?.siteUrl?.trim() ?? "";
  const siteName = draft.site?.name?.trim() ?? "";
  const whatsAppPrimary = draft.site?.whatsappPrimary?.trim() ?? "";
  const promptMessages = getStringItems(draft.site?.whatsappPromptMessages);
  const navigation = Array.isArray(draft.navigation) ? draft.navigation : [];
  const articles = Array.isArray(draft.blog?.articles) ? draft.blog.articles : [];
  const categories = getStringItems(draft.blog?.categories);
  const lawyers = Array.isArray(draft.lawyers) ? draft.lawyers : [];
  const slugs = articles
    .map((article) => article.slug?.trim())
    .filter((slug): slug is string => Boolean(slug));
  const categoryNames = categories
    .map((category) => category.trim())
    .filter(Boolean);
  const duplicateSlugs = slugs.filter(
    (slug, index) => slugs.indexOf(slug) !== index,
  );
  const duplicateCategories = categoryNames.filter(
    (category, index) => categoryNames.indexOf(category) !== index,
  );
  const hasInvalidArticleSlug = articles.some((article) => {
    const slug = article.slug?.trim() ?? "";
    return !slug || slug !== slug.toLowerCase() || /[^a-z0-9-]/.test(slug);
  });
  const allArticlesHaveTitles =
    articles.length > 0 && articles.every((article) => article.title?.trim());
  const allLawyersHavePhotos =
    lawyers.length > 0 && lawyers.every((lawyer) => lawyer.photo?.trim());
  const allLawyersHaveNamesAndOab =
    lawyers.length > 0 &&
    lawyers.every((lawyer) => lawyer.name?.trim() && lawyer.oab?.trim());
  const allArticlesHaveCovers =
    articles.length > 0 && articles.every((article) => article.coverImage?.trim());
  const allNavigationItemsAreValid =
    navigation.length > 0 &&
    navigation.every((item) => {
      const href = item.href?.trim() ?? "";
      return item.label?.trim() && (href.startsWith("/") || isValidPublicUrl(href));
    });

  return [
    {
      scope: "Identidade",
      message: siteName
        ? "Nome do escritório preenchido."
        : "Nome do escritório não pode ficar vazio.",
      severity: siteName ? "ok" : "danger",
    },
    {
      scope: "SEO",
      message: !siteUrl
        ? "URL pública não pode ficar vazia."
        : siteUrl.includes("localhost")
          ? "URL pública ainda aponta para localhost."
          : isValidPublicUrl(siteUrl)
            ? "URL pública configurada."
            : "URL pública inválida.",
      severity:
        siteUrl && !siteUrl.includes("localhost") && isValidPublicUrl(siteUrl)
          ? "ok"
          : "danger",
    },
    {
      scope: "Atendimento",
      message: whatsAppPrimary
        ? "WhatsApp principal preenchido."
        : "WhatsApp principal não pode ficar vazio.",
      severity: whatsAppPrimary ? "ok" : "danger",
    },
    {
      scope: "Atendimento",
      message:
        promptMessages.length > 0 &&
        promptMessages.every((message) => message.trim())
          ? "Mensagens de WhatsApp prontas."
          : "Há mensagem de WhatsApp vazia.",
      severity:
        promptMessages.length > 0 &&
        promptMessages.every((message) => message.trim())
          ? "ok"
          : "warn",
    },
    {
      scope: "Menus",
      message: allNavigationItemsAreValid
        ? "Menu principal com textos e rotas válidas."
        : "Há item de menu sem texto ou rota válida.",
      severity: allNavigationItemsAreValid ? "ok" : "danger",
    },
    {
      scope: "Equipe",
      message: allLawyersHaveNamesAndOab
        ? "Todos os profissionais têm nome e OAB."
        : "Há profissional sem nome ou OAB.",
      severity: allLawyersHaveNamesAndOab ? "ok" : "danger",
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
      message:
        categoryNames.length > 0
          ? "Blog possui categorias."
          : "Blog precisa de ao menos uma categoria.",
      severity: categoryNames.length > 0 ? "ok" : "danger",
    },
    {
      scope: "Blog",
      message:
        duplicateCategories.length === 0
          ? "Categorias sem duplicidade."
          : `Categoria duplicada: ${duplicateCategories.join(", ")}.`,
      severity: duplicateCategories.length === 0 ? "ok" : "warn",
    },
    {
      scope: "Blog",
      message: allArticlesHaveTitles
        ? "Todos os artigos têm título."
        : "Há artigo sem título.",
      severity: allArticlesHaveTitles ? "ok" : "danger",
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
      message: hasInvalidArticleSlug
        ? "Há slug de artigo vazio ou fora do padrão."
        : "Slugs de artigos no padrão correto.",
      severity: hasInvalidArticleSlug ? "danger" : "ok",
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
