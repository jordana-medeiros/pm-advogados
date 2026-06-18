export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  coverImage: string;
  body: string[];
};

export const blogIntro = {
  title: "Informação jurídica sem complicação.",
  description:
    "Produzimos conteúdos para ajudar você a entender seus direitos antes de tomar decisões importantes.",
};

export const articles: Article[] = [
  {
    slug: "preso-em-flagrante-primeiras-medidas",
    title: "Preso em flagrante: o que fazer nas primeiras horas",
    excerpt:
      "Prisão em flagrante exige rapidez. Entenda o que a defesa ainda pode fazer antes da audiência de custódia.",
    category: "Direito Criminal",
    publishedAt: "2026-02-10",
    readingTime: "5 min",
    coverImage: "/images/blog/preso-em-flagrante.jpg",
    body: [
      "A prisão em flagrante marca o início de uma fase crítica. O que for feito — ou deixado de fazer — nas primeiras horas influencia a audiência de custódia e o restante do processo.",
      "O advogado precisa saber onde a pessoa está, qual autoridade conduz o caso e se houve intimação de familiares. Documentos, relato do que ocorreu e eventual exame de corpo de delito fazem parte da análise inicial.",
      "Cada situação pede estratégia própria: relaxamento de prisão, pedido de liberdade provisória ou preparação da defesa para a audiência. Quanto antes a família buscar orientação, mais opções tende a restar.",
    ],
  },
  {
    slug: "beneficio-negado-pelo-inss",
    title: "Benefício negado pelo INSS: quando recorrer",
    excerpt:
      "Indeferimento não encerra o caminho. Veja prazos e documentos que costumam fazer diferença na revisão ou na ação.",
    category: "Direito Previdenciário",
    publishedAt: "2026-01-22",
    readingTime: "4 min",
    coverImage: "/images/blog/beneficio-inss.jpg",
    body: [
      "Negativa de aposentadoria, auxílio-doença ou outro benefício costuma vir com motivação genérica. Ainda assim, o segurado tem prazos para recurso administrativo e, se necessário, para a via judicial.",
      "Laudos, carteira de trabalho, CNIS e histórico de contribuições são base comum de análise. Muitas vezes o problema está em documento faltante ou em enquadramento incorreto da perícia.",
      "Antes de aceitar o indeferimento, vale conferir se todos os requisitos foram observados e se há margem para revisão do cálculo ou reconhecimento de tempo especial.",
    ],
  },
  {
    slug: "divorcio-consensual-documentos",
    title: "Divórcio consensual: o que reunir antes de começar",
    excerpt:
      "Separação de comum acordo pede acordo claro sobre bens, guarda e pensão. Lista prática do que preparar.",
    category: "Direito de Família",
    publishedAt: "2025-12-05",
    readingTime: "4 min",
    coverImage: "/images/blog/divorcio-consensual.jpg",
    body: [
      "No divórcio consensual, o casal define guarda, visitas, pensão alimentícia e partilha de bens antes de ir ao cartório ou ao juízo. Quanto mais claro o acordo, mais rápido tende a ser o trâmite.",
      "Certidão de casamento, documentos dos filhos, comprovantes de renda e relação de bens — imóveis, veículos, contas — costumam ser o ponto de partida.",
      "Quando há patrimônio relevante ou filhos menores, uma conversa jurídica antes de assinar qualquer termo evita cláusulas que depois geram litígio.",
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function formatArticleDate(isoDate: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${isoDate}T12:00:00`));
}

export const BLOG_PAGE_SIZE = 6;

export function slugifyCategory(category: string) {
  return category
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-");
}

export function getArticleCategories(source: Article[] = articles) {
  return [...new Set(source.map((article) => article.category))].sort((a, b) =>
    a.localeCompare(b, "pt-BR"),
  );
}

export function filterArticlesByCategory(
  source: Article[],
  categorySlug?: string,
) {
  if (!categorySlug || categorySlug === "todas") {
    return source;
  }

  return source.filter(
    (article) => slugifyCategory(article.category) === categorySlug,
  );
}

export function paginateArticles<T>(
  source: T[],
  page: number,
  pageSize: number = BLOG_PAGE_SIZE,
) {
  const totalItems = source.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    items: source.slice(start, start + pageSize),
    page: safePage,
    totalPages,
    totalItems,
    pageSize,
  };
}

export function sortArticlesByDate(source: Article[]) {
  return [...source].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
}
