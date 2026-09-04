"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import type { Article } from "@/lib/articles";
import {
  adminSections,
  getAdminSectionHref,
  type SectionId,
} from "@/lib/admin-sections";
import {
  validateAdminDraft,
  type AdminValidationIssue,
} from "@/lib/admin-validation";

type Address = {
  city: string;
  line: string;
  mapsUrl: string;
};

type PracticeArea = {
  name: string;
  summary: string;
};

type Lawyer = {
  name: string;
  oab: string;
  area: string;
  photo: string;
  bio: string;
};

type NavigationItem = {
  href: string;
  label: string;
  cta?: boolean;
};

type TextItem = {
  title: string;
  text?: string;
  description?: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type MediaItem = {
  label: string;
  path: string;
};

type AdminArticle = Article & {
  status: "published" | "draft" | "review" | "archived";
  seoTitle: string;
  seoDescription: string;
};

export type AdminSeed = {
  generatedAt: string;
  site: {
    name: string;
    description: string;
    siteUrl: string;
    contactHref: string;
    whatsappPrimary: string;
    whatsappSecondary: string;
    instagramHandle: string;
    instagramUrl: string;
    addresses: Address[];
    whatsappPromptMessages: string[];
    logos: Record<string, string>;
    ogImage: {
      path: string;
      width: number;
      height: number;
    };
  };
  navigation: NavigationItem[];
  home: {
    heroTitle: string;
    heroBullets: string[];
    primaryCta: string;
    secondaryCta: string;
    areasHref: string;
    practiceAreasIntro: {
      title: string;
      description: string;
    };
    teamIntro: {
      title: string;
      description: string;
    };
    whenSeekIntro: {
      title: string;
      paragraphs: string[];
    };
    whenSeekItems: TextItem[];
    differentiators: TextItem[];
    faqItems: FaqItem[];
    criminalHighlightIntro: {
      title: string;
      paragraphs: string[];
      cta: string;
    };
  };
  criminal: {
    title: string;
    description: string;
    ogImage: string;
    heroTrustItems: string[];
    emergencyServices: Array<{
      title: string;
      description: string;
    }>;
    attendanceSteps: Array<{
      label: string;
      title: string;
      image: string;
      description: string;
    }>;
    differentiators: Array<{
      title: string;
      icon: string;
      description: string;
    }>;
    faqs: FaqItem[];
  };
  practiceAreas: PracticeArea[];
  lawyers: Lawyer[];
  blog: {
    introTitle: string;
    categories: string[];
    articles: AdminArticle[];
  };
  media: {
    hero: Record<string, string>;
    team: Record<string, string>;
    criminal: Record<string, string>;
    blogCovers: MediaItem[];
    lawyers: MediaItem[];
  };
};

type AdminDashboardProps = {
  seed: AdminSeed;
  activeSection: SectionId;
};

const STORAGE_KEY = "pm-admin-draft";
const ARTICLE_STATUS_OPTIONS: AdminArticle["status"][] = [
  "published",
  "draft",
  "review",
  "archived",
];

function cloneSeed(seed: AdminSeed) {
  return JSON.parse(JSON.stringify(seed)) as AdminSeed;
}

function safeString(value: unknown, fallback = "") {
  return typeof value === "string" ? value : fallback;
}

function safeStringArray(value: unknown, fallback: string[]) {
  if (!Array.isArray(value)) {
    return fallback;
  }

  return value.filter((item): item is string => typeof item === "string");
}

function safeArticleStatus(value: unknown) {
  return ARTICLE_STATUS_OPTIONS.includes(value as AdminArticle["status"])
    ? (value as AdminArticle["status"])
    : "published";
}

function hydrateDraft(rawDraft: Partial<AdminSeed>, fallback: AdminSeed): AdminSeed {
  const rawArticles = (rawDraft.blog?.articles ??
    fallback.blog.articles) as Array<Partial<AdminArticle>>;

  return {
    ...fallback,
    ...rawDraft,
    site: {
      ...fallback.site,
      ...rawDraft.site,
      addresses: Array.isArray(rawDraft.site?.addresses)
        ? rawDraft.site.addresses.map((address, index) => {
            const fallbackAddress = fallback.site.addresses[index] ?? {
              city: "",
              line: "",
              mapsUrl: "",
            };

            return {
              city: safeString(address.city, fallbackAddress.city),
              line: safeString(address.line, fallbackAddress.line),
              mapsUrl: safeString(address.mapsUrl, fallbackAddress.mapsUrl),
            };
          })
        : fallback.site.addresses,
      whatsappPromptMessages:
        safeStringArray(
          rawDraft.site?.whatsappPromptMessages,
          fallback.site.whatsappPromptMessages,
        ),
      logos: {
        ...fallback.site.logos,
        ...rawDraft.site?.logos,
      },
      ogImage: {
        ...fallback.site.ogImage,
        ...rawDraft.site?.ogImage,
      },
    },
    home: {
      ...fallback.home,
      ...rawDraft.home,
      practiceAreasIntro: {
        ...fallback.home.practiceAreasIntro,
        ...rawDraft.home?.practiceAreasIntro,
      },
      teamIntro: {
        ...fallback.home.teamIntro,
        ...rawDraft.home?.teamIntro,
      },
      whenSeekIntro: {
        ...fallback.home.whenSeekIntro,
        ...rawDraft.home?.whenSeekIntro,
      },
      criminalHighlightIntro: {
        ...fallback.home.criminalHighlightIntro,
        ...rawDraft.home?.criminalHighlightIntro,
      },
      heroBullets: safeStringArray(
        rawDraft.home?.heroBullets,
        fallback.home.heroBullets,
      ),
      whenSeekItems: rawDraft.home?.whenSeekItems ?? fallback.home.whenSeekItems,
      differentiators:
        rawDraft.home?.differentiators ?? fallback.home.differentiators,
      faqItems: rawDraft.home?.faqItems ?? fallback.home.faqItems,
    },
    criminal: {
      ...fallback.criminal,
      ...rawDraft.criminal,
      heroTrustItems:
        rawDraft.criminal?.heroTrustItems ?? fallback.criminal.heroTrustItems,
      emergencyServices:
        rawDraft.criminal?.emergencyServices ??
        fallback.criminal.emergencyServices,
      attendanceSteps:
        rawDraft.criminal?.attendanceSteps ?? fallback.criminal.attendanceSteps,
      differentiators:
        rawDraft.criminal?.differentiators ?? fallback.criminal.differentiators,
      faqs: rawDraft.criminal?.faqs ?? fallback.criminal.faqs,
    },
    navigation: Array.isArray(rawDraft.navigation)
      ? rawDraft.navigation.map((item, index) => {
          const fallbackItem = fallback.navigation[index] ?? {
            href: "/",
            label: "Link",
            cta: false,
          };

          return {
            href: safeString(item.href, fallbackItem.href),
            label: safeString(item.label, fallbackItem.label),
            cta: Boolean(item.cta),
          };
        })
      : fallback.navigation,
    practiceAreas: Array.isArray(rawDraft.practiceAreas)
      ? rawDraft.practiceAreas.map((area, index) => {
          const fallbackArea = fallback.practiceAreas[index] ?? {
            name: "",
            summary: "",
          };

          return {
            name: safeString(area.name, fallbackArea.name),
            summary: safeString(area.summary, fallbackArea.summary),
          };
        })
      : fallback.practiceAreas,
    lawyers: Array.isArray(rawDraft.lawyers)
      ? rawDraft.lawyers.map((lawyer, index) => {
          const fallbackLawyer = fallback.lawyers[index] ?? {
            name: "",
            oab: "",
            area: "",
            photo: "",
            bio: "",
          };

          return {
            name: safeString(lawyer.name, fallbackLawyer.name),
            oab: safeString(lawyer.oab, fallbackLawyer.oab),
            area: safeString(lawyer.area, fallbackLawyer.area),
            photo: safeString(lawyer.photo, fallbackLawyer.photo),
            bio: safeString(lawyer.bio, fallbackLawyer.bio),
          };
        })
      : fallback.lawyers,
    blog: {
      ...fallback.blog,
      ...rawDraft.blog,
      categories: safeStringArray(rawDraft.blog?.categories, fallback.blog.categories),
      articles: rawArticles.map((article, index) => {
        const fallbackArticle = fallback.blog.articles[index] ??
          fallback.blog.articles[0] ?? {
            slug: `novo-artigo-${index + 1}`,
            title: "Novo artigo",
            excerpt: "Resumo do artigo.",
            category: fallback.blog.categories[0] ?? "Geral",
            publishedAt: new Date().toISOString().slice(0, 10),
            readingTime: "4 min",
            coverImage: "/images/blog/nova-capa.jpg",
            body: ["Primeiro parágrafo do artigo."],
            status: "draft" as const,
            seoTitle: "Novo artigo",
            seoDescription: "Resumo do artigo.",
          };
        const excerpt = safeString(article.excerpt, fallbackArticle.excerpt);
        const title = safeString(article.title, fallbackArticle.title);

        return {
          ...fallbackArticle,
          ...article,
          slug: safeString(article.slug, fallbackArticle.slug),
          title,
          excerpt,
          category: safeString(article.category, fallbackArticle.category),
          publishedAt: safeString(article.publishedAt, fallbackArticle.publishedAt),
          readingTime: safeString(article.readingTime, fallbackArticle.readingTime),
          coverImage: safeString(article.coverImage, fallbackArticle.coverImage),
          body: safeStringArray(article.body, fallbackArticle.body),
          status: safeArticleStatus(article.status),
          seoTitle: safeString(article.seoTitle, title),
          seoDescription: safeString(article.seoDescription, excerpt),
        };
      }),
    },
    media: {
      ...fallback.media,
      ...rawDraft.media,
      hero: { ...fallback.media.hero, ...rawDraft.media?.hero },
      team: { ...fallback.media.team, ...rawDraft.media?.team },
      criminal: { ...fallback.media.criminal, ...rawDraft.media?.criminal },
      blogCovers: rawDraft.media?.blogCovers ?? fallback.media.blogCovers,
      lawyers: rawDraft.media?.lawyers ?? fallback.media.lawyers,
    },
  };
}

function getInitialDraft(seed: AdminSeed) {
  if (typeof window === "undefined") {
    return cloneSeed(seed);
  }

  const storedDraft = window.localStorage.getItem(STORAGE_KEY);

  if (!storedDraft) {
    return cloneSeed(seed);
  }

  try {
    return hydrateDraft(JSON.parse(storedDraft) as Partial<AdminSeed>, seed);
  } catch {
    return cloneSeed(seed);
  }
}

function getInitialNotice() {
  if (typeof window === "undefined") {
    return "Edições ficam em rascunho até exportar.";
  }

  return window.localStorage.getItem(STORAGE_KEY)
    ? "Rascunho local restaurado automaticamente."
    : "Edições ficam em rascunho até exportar.";
}

function getComparableDraft(value: AdminSeed) {
  const content: Partial<AdminSeed> = { ...value };
  delete content.generatedAt;
  return content;
}

function normalizeForCompare(value: AdminSeed) {
  return JSON.stringify(getComparableDraft(value));
}

function downloadJson(filename: string, data: unknown) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function uniqueSlug(base: string, existing: string[]) {
  let slug = base
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  if (!slug) {
    slug = "novo-artigo";
  }

  let candidate = slug;
  let count = 2;

  while (existing.includes(candidate)) {
    candidate = `${slug}-${count}`;
    count += 1;
  }

  return candidate;
}

function normalizeSlugInput(value: string) {
  return (
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "novo-artigo"
  );
}

function updateArrayItem<T>(
  items: T[],
  index: number,
  updater: (item: T) => T,
) {
  return items.map((item, itemIndex) => (itemIndex === index ? updater(item) : item));
}

function moveArrayItem<T>(items: T[], index: number, direction: -1 | 1) {
  const nextIndex = index + direction;

  if (nextIndex < 0 || nextIndex >= items.length) {
    return items;
  }

  const nextItems = [...items];
  [nextItems[index], nextItems[nextIndex]] = [nextItems[nextIndex], nextItems[index]];
  return nextItems;
}

function updateStringListItem(items: string[], index: number, value: string) {
  return updateArrayItem(items, index, () => value);
}

function Field({
  label,
  value,
  onChange,
  onBlur,
  multiline = false,
  type = "text",
  full = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  multiline?: boolean;
  type?: string;
  full?: boolean;
}) {
  return (
    <label className={full ? "admin-field admin-field-full" : "admin-field"}>
      <span>{label}</span>
      {multiline ? (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          rows={4}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
        />
      )}
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ label: string; value: string }>;
}) {
  return (
    <label className="admin-field">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function Panel({
  title,
  children,
  action,
}: {
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <section className="admin-panel">
      <div className="admin-panel-header">
        <h2>{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}

function StatusPill({
  tone = "neutral",
  children,
}: {
  tone?: "neutral" | "good" | "warn" | "danger";
  children: React.ReactNode;
}) {
  return <span className={`admin-pill admin-pill-${tone}`}>{children}</span>;
}

function RowActions({
  onUp,
  onDown,
  onDuplicate,
  onRemove,
  disableUp,
  disableDown,
}: {
  onUp?: () => void;
  onDown?: () => void;
  onDuplicate?: () => void;
  onRemove?: () => void;
  disableUp?: boolean;
  disableDown?: boolean;
}) {
  return (
    <div className="admin-row-actions">
      {onUp ? (
        <button type="button" onClick={onUp} disabled={disableUp}>
          Subir
        </button>
      ) : null}
      {onDown ? (
        <button type="button" onClick={onDown} disabled={disableDown}>
          Descer
        </button>
      ) : null}
      {onDuplicate ? (
        <button type="button" onClick={onDuplicate}>
          Duplicar
        </button>
      ) : null}
      {onRemove ? (
        <button type="button" className="is-danger" onClick={onRemove}>
          Remover
        </button>
      ) : null}
    </div>
  );
}

export function AdminDashboard({ seed, activeSection }: AdminDashboardProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [draft, setDraft] = useState<AdminSeed>(() => getInitialDraft(seed));
  const [lastSavedAt, setLastSavedAt] = useState<string | null>(null);
  const [notice, setNotice] = useState(getInitialNotice);
  const [query, setQuery] = useState("");
  const [selectedArticleIndex, setSelectedArticleIndex] = useState(0);

  const issues = useMemo(() => validateAdminDraft(draft), [draft]);
  const hasBlockingIssue = issues.some((issue) => issue.severity === "danger");
  const hasChanges = normalizeForCompare(seed) !== normalizeForCompare(draft);
  const normalizedQuery = query.trim().toLowerCase();

  const selectedArticle =
    draft.blog.articles[selectedArticleIndex] ?? draft.blog.articles[0];

  const filteredAreas = draft.practiceAreas
    .map((area, index) => ({ area, index }))
    .filter(({ area }) =>
      `${area.name} ${area.summary}`.toLowerCase().includes(normalizedQuery),
    );

  const filteredLawyers = draft.lawyers
    .map((lawyer, index) => ({ lawyer, index }))
    .filter(({ lawyer }) =>
      `${lawyer.name} ${lawyer.oab} ${lawyer.area} ${lawyer.bio}`
        .toLowerCase()
        .includes(normalizedQuery),
    );

  const filteredArticles = draft.blog.articles
    .map((article, index) => ({ article, index }))
    .filter(({ article }) =>
      `${article.title} ${article.excerpt} ${article.category} ${article.slug}`
        .toLowerCase()
        .includes(normalizedQuery),
    );

  const stats = [
    {
      label: "Painel",
      value: String(adminSections.length),
      detail: "áreas de controle",
    },
    {
      label: "Artigos",
      value: String(draft.blog.articles.length),
      detail: `${draft.blog.categories.length} categorias`,
    },
    {
      label: "Equipe",
      value: String(draft.lawyers.length),
      detail: "profissionais ativos",
    },
    {
      label: "Pendências",
      value: String(issues.filter((issue) => issue.severity !== "ok").length),
      detail: hasBlockingIssue ? "bloqueio antes de publicar" : "sem bloqueio",
    },
  ];

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
  }, [draft]);

  function persistDraft() {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    setLastSavedAt(new Date().toLocaleTimeString("pt-BR"));
    setNotice("Rascunho salvo neste navegador.");
  }

  function loadLocalDraft() {
    const storedDraft = window.localStorage.getItem(STORAGE_KEY);

    if (!storedDraft) {
      setNotice("Nenhum rascunho local encontrado.");
      return;
    }

    try {
      const hydratedDraft = hydrateDraft(
        JSON.parse(storedDraft) as Partial<AdminSeed>,
        seed,
      );
      setDraft(hydratedDraft);
      setSelectedArticleIndex(0);
      setLastSavedAt(new Date().toLocaleTimeString("pt-BR"));
      setNotice("Rascunho local carregado.");
    } catch {
      setNotice("O rascunho local está inválido.");
    }
  }

  async function validateWithApi() {
    try {
      const response = await fetch("/admin/api/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(draft),
      });
      const result = (await response.json()) as {
        ok: boolean;
        issues?: AdminValidationIssue[];
      };
      const serverIssues = result.issues ?? [];
      const pendingCount = serverIssues.filter(
        (issue) => issue.severity !== "ok",
      ).length;

      setNotice(
        result.ok
          ? `Validação concluída: ${pendingCount} ponto(s) de atenção.`
          : `Validação encontrou ${pendingCount} pendência(s), incluindo bloqueios.`,
      );
    } catch {
      setNotice("Não foi possível validar o rascunho agora.");
    }
  }

  function resetDraft() {
    if (!window.confirm("Descartar todas as alterações deste rascunho?")) {
      return;
    }

    setDraft(cloneSeed(seed));
    setSelectedArticleIndex(0);
    setNotice("Rascunho voltou ao conteúdo atual do site.");
  }

  function importDraft(file: File | undefined) {
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const importedDraft = JSON.parse(String(reader.result)) as Partial<AdminSeed>;
        if (!importedDraft.site || !importedDraft.blog || !importedDraft.lawyers) {
          setNotice("Arquivo JSON não parece ser um rascunho do painel.");
          return;
        }

        const hydratedDraft = hydrateDraft(importedDraft, seed);
        setDraft(hydratedDraft);
        setSelectedArticleIndex(0);
        setNotice("JSON importado para revisão.");
      } catch {
        setNotice("Não foi possível ler o JSON importado.");
      }
    };
    reader.readAsText(file);
  }

  function updateSite<Key extends keyof AdminSeed["site"]>(
    key: Key,
    value: AdminSeed["site"][Key],
  ) {
    setDraft((current) => ({
      ...current,
      site: { ...current.site, [key]: value },
    }));
  }

  function updateNavigationItem<Key extends keyof NavigationItem>(
    index: number,
    key: Key,
    value: NavigationItem[Key],
  ) {
    setDraft((current) => ({
      ...current,
      navigation: updateArrayItem(current.navigation, index, (item) => ({
        ...item,
        [key]: value,
      })),
    }));
  }

  function addNavigationItem() {
    setDraft((current) => ({
      ...current,
      navigation: [
        ...current.navigation,
        { href: "/nova-pagina", label: "Novo link", cta: false },
      ],
    }));
  }

  function duplicateNavigationItem(index: number) {
    setDraft((current) => ({
      ...current,
      navigation: [
        ...current.navigation.slice(0, index + 1),
        {
          ...current.navigation[index],
          label: `${current.navigation[index].label} cópia`,
          cta: false,
        },
        ...current.navigation.slice(index + 1),
      ],
    }));
  }

  function removeNavigationItem(index: number) {
    if (!window.confirm("Remover este item do menu?")) {
      return;
    }

    setDraft((current) => ({
      ...current,
      navigation: current.navigation.filter((_, itemIndex) => itemIndex !== index),
    }));
  }

  function updateWhatsAppPrompt(index: number, value: string) {
    setDraft((current) => ({
      ...current,
      site: {
        ...current.site,
        whatsappPromptMessages: updateStringListItem(
          current.site.whatsappPromptMessages,
          index,
          value,
        ),
      },
    }));
  }

  function addWhatsAppPrompt() {
    setDraft((current) => ({
      ...current,
      site: {
        ...current.site,
        whatsappPromptMessages: [
          ...current.site.whatsappPromptMessages,
          "Olá, gostaria de agendar um atendimento.",
        ],
      },
    }));
  }

  function removeWhatsAppPrompt(index: number) {
    if (!window.confirm("Remover esta mensagem de WhatsApp?")) {
      return;
    }

    setDraft((current) => ({
      ...current,
      site: {
        ...current.site,
        whatsappPromptMessages: current.site.whatsappPromptMessages.filter(
          (_, itemIndex) => itemIndex !== index,
        ),
      },
    }));
  }

  function updateAddress(index: number, key: keyof Address, value: string) {
    setDraft((current) => ({
      ...current,
      site: {
        ...current.site,
        addresses: current.site.addresses.map((address, addressIndex) =>
          addressIndex === index ? { ...address, [key]: value } : address,
        ),
      },
    }));
  }

  function addAddress() {
    setDraft((current) => ({
      ...current,
      site: {
        ...current.site,
        addresses: [
          ...current.site.addresses,
          { city: "Nova cidade", line: "Endereço completo", mapsUrl: "" },
        ],
      },
    }));
  }

  function removeAddress(index: number) {
    if (!window.confirm("Remover este endereço?")) {
      return;
    }

    setDraft((current) => ({
      ...current,
      site: {
        ...current.site,
        addresses: current.site.addresses.filter((_, itemIndex) => itemIndex !== index),
      },
    }));
  }

  function updateArea(index: number, key: keyof PracticeArea, value: string) {
    setDraft((current) => ({
      ...current,
      practiceAreas: updateArrayItem(current.practiceAreas, index, (area) => ({
        ...area,
        [key]: value,
      })),
    }));
  }

  function addArea() {
    setDraft((current) => ({
      ...current,
      practiceAreas: [
        ...current.practiceAreas,
        { name: "Nova área", summary: "Resumo da atuação." },
      ],
    }));
  }

  function removeArea(index: number) {
    if (!window.confirm("Remover esta área de atuação?")) {
      return;
    }

    setDraft((current) => ({
      ...current,
      practiceAreas: current.practiceAreas.filter((_, itemIndex) => itemIndex !== index),
    }));
  }

  function updateLawyer(index: number, key: keyof Lawyer, value: string) {
    setDraft((current) => ({
      ...current,
      lawyers: updateArrayItem(current.lawyers, index, (lawyer) => ({
        ...lawyer,
        [key]: value,
      })),
    }));
  }

  function addLawyer() {
    setDraft((current) => ({
      ...current,
      lawyers: [
        ...current.lawyers,
        {
          name: "Novo associado",
          oab: "OAB/UF 000.000",
          area: "Área de atuação",
          photo: "/images/lawyers/novo-associado.webp",
          bio: "Resumo profissional.",
        },
      ],
    }));
  }

  function duplicateLawyer(index: number) {
    setDraft((current) => ({
      ...current,
      lawyers: [
        ...current.lawyers.slice(0, index + 1),
        {
          ...current.lawyers[index],
          name: `${current.lawyers[index].name} cópia`,
          oab: "OAB/UF 000.000",
        },
        ...current.lawyers.slice(index + 1),
      ],
    }));
  }

  function removeLawyer(index: number) {
    if (!window.confirm("Remover este profissional do rascunho?")) {
      return;
    }

    setDraft((current) => ({
      ...current,
      lawyers: current.lawyers.filter((_, itemIndex) => itemIndex !== index),
    }));
  }

  function updateArticle<Key extends keyof AdminArticle>(
    index: number,
    key: Key,
    value: AdminArticle[Key],
  ) {
    setDraft((current) => ({
      ...current,
      blog: {
        ...current.blog,
        articles: updateArrayItem(current.blog.articles, index, (article) => ({
          ...article,
          [key]: value,
        })),
      },
    }));
  }

  function commitArticleSlug(index: number, value: string) {
    const existingSlugs = draft.blog.articles
      .filter((_, articleIndex) => articleIndex !== index)
      .map((article) => article.slug);
    const nextSlug = uniqueSlug(normalizeSlugInput(value), existingSlugs);

    updateArticle(index, "slug", nextSlug);
  }

  function addCategory() {
    setDraft((current) => {
      const nextName = `Nova categoria ${current.blog.categories.length + 1}`;

      return {
        ...current,
        blog: {
          ...current.blog,
          categories: [...current.blog.categories, nextName],
        },
      };
    });
  }

  function updateCategory(index: number, value: string) {
    setDraft((current) => {
      const previousCategory = current.blog.categories[index];
      const nextCategories = updateStringListItem(current.blog.categories, index, value);

      return {
        ...current,
        blog: {
          ...current.blog,
          categories: nextCategories,
          articles: current.blog.articles.map((article) =>
            article.category === previousCategory
              ? { ...article, category: value }
              : article,
          ),
        },
      };
    });
  }

  function removeCategory(index: number) {
    const category = draft.blog.categories[index];

    if (!window.confirm(`Remover a categoria "${category}"?`)) {
      return;
    }

    setDraft((current) => {
      const nextCategories = current.blog.categories.filter(
        (_, itemIndex) => itemIndex !== index,
      );
      const fallbackCategory = nextCategories[0] ?? "Geral";

      return {
        ...current,
        blog: {
          ...current.blog,
          categories: nextCategories,
          articles: current.blog.articles.map((article) =>
            article.category === category
              ? { ...article, category: fallbackCategory }
              : article,
          ),
        },
      };
    });
  }

  function updateMediaItem(
    group: "blogCovers" | "lawyers",
    index: number,
    key: keyof MediaItem,
    value: string,
  ) {
    setDraft((current) => ({
      ...current,
      media: {
        ...current.media,
        [group]: updateArrayItem(current.media[group], index, (item) => ({
          ...item,
          [key]: value,
        })),
      },
    }));
  }

  function addMediaItem(group: "blogCovers" | "lawyers") {
    setDraft((current) => ({
      ...current,
      media: {
        ...current.media,
        [group]: [
          ...current.media[group],
          {
            label: group === "blogCovers" ? "Nova capa" : "Nova foto",
            path:
              group === "blogCovers"
                ? "/images/blog/nova-capa.jpg"
                : "/images/lawyers/nova-foto.webp",
          },
        ],
      },
    }));
  }

  function removeMediaItem(group: "blogCovers" | "lawyers", index: number) {
    if (!window.confirm("Remover este item da biblioteca?")) {
      return;
    }

    setDraft((current) => ({
      ...current,
      media: {
        ...current.media,
        [group]: current.media[group].filter((_, itemIndex) => itemIndex !== index),
      },
    }));
  }

  function addArticle() {
    const nextSlug = uniqueSlug(
      `novo-artigo-${draft.blog.articles.length + 1}`,
      draft.blog.articles.map((article) => article.slug),
    );
    const nextArticle: AdminArticle = {
      slug: nextSlug,
      title: "Novo artigo",
      excerpt: "Resumo do artigo para listagem e compartilhamento.",
      category: draft.blog.categories[0] ?? "Geral",
      publishedAt: new Date().toISOString().slice(0, 10),
      readingTime: "4 min",
      coverImage: "/images/blog/nova-capa.jpg",
      body: ["Primeiro parágrafo do artigo."],
      status: "draft",
      seoTitle: "Novo artigo",
      seoDescription: "Resumo do artigo para mecanismos de busca.",
    };

    setDraft((current) => ({
      ...current,
      blog: {
        ...current.blog,
        articles: [nextArticle, ...current.blog.articles],
      },
    }));
    setSelectedArticleIndex(0);
  }

  function duplicateArticle(article: AdminArticle, index: number) {
    const slug = uniqueSlug(`${article.slug}-copia`, draft.blog.articles.map((item) => item.slug));
    const copy = {
      ...article,
      slug,
      title: `${article.title} cópia`,
      status: "draft" as const,
    };

    setDraft((current) => ({
      ...current,
      blog: {
        ...current.blog,
        articles: [
          ...current.blog.articles.slice(0, index + 1),
          copy,
          ...current.blog.articles.slice(index + 1),
        ],
      },
    }));
    setSelectedArticleIndex(index + 1);
  }

  function removeArticle(index: number) {
    if (!window.confirm("Remover este artigo do rascunho?")) {
      return;
    }

    const nextSelectedIndex = Math.max(
      0,
      Math.min(index, draft.blog.articles.length - 2),
    );

    setDraft((current) => ({
      ...current,
      blog: {
        ...current.blog,
        articles: current.blog.articles.filter(
          (_, articleIndex) => articleIndex !== index,
        ),
      },
    }));
    setSelectedArticleIndex(nextSelectedIndex);
  }

  function renderOverview() {
    return (
      <div className="admin-grid">
        <Panel title="Agora">
          <div className="admin-stat-grid">
            {stats.map((item) => (
              <div key={item.label} className="admin-stat">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <small>{item.detail}</small>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Pendências editoriais">
          <div className="admin-checklist">
            {issues.map((issue) => (
              <div key={`${issue.scope}-${issue.message}`} className="admin-check">
                <StatusPill
                  tone={
                    issue.severity === "danger"
                      ? "danger"
                      : issue.severity === "warn"
                        ? "warn"
                        : "good"
                  }
                >
                  {issue.severity === "ok" ? "ok" : "revisar"}
                </StatusPill>
                <span>
                  <strong>{issue.scope}</strong> · {issue.message}
                </span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Atalhos">
          <div className="admin-shortcuts">
            {adminSections.slice(1).map((section) => (
              <Link key={section.id} href={getAdminSectionHref(section.id)}>
                <strong>{section.label}</strong>
                <span>{section.helper}</span>
              </Link>
            ))}
          </div>
        </Panel>
      </div>
    );
  }

  function renderIdentity() {
    return (
      <div className="admin-grid">
        <Panel
          title="Identidade e atendimento"
          action={
            <button type="button" className="admin-button" onClick={addAddress}>
              Novo endereço
            </button>
          }
        >
          <div className="admin-form-grid">
            <Field label="Nome do escritório" value={draft.site.name} onChange={(value) => updateSite("name", value)} />
            <Field label="URL pública" value={draft.site.siteUrl} onChange={(value) => updateSite("siteUrl", value)} />
            <Field label="Descrição institucional" value={draft.site.description} onChange={(value) => updateSite("description", value)} multiline full />
            <Field label="WhatsApp principal" value={draft.site.whatsappPrimary} onChange={(value) => updateSite("whatsappPrimary", value)} />
            <Field label="WhatsApp secundário" value={draft.site.whatsappSecondary} onChange={(value) => updateSite("whatsappSecondary", value)} />
            <Field label="Instagram" value={draft.site.instagramHandle} onChange={(value) => updateSite("instagramHandle", value)} />
            <Field label="Link do Instagram" value={draft.site.instagramUrl} onChange={(value) => updateSite("instagramUrl", value)} full />
          </div>

          <div className="admin-list">
            {draft.site.addresses.map((address, index) => (
              <div key={`${address.city}-${index}`} className="admin-row">
                <div className="admin-row-heading">
                  <strong>Endereço {index + 1}</strong>
                  <RowActions onRemove={() => removeAddress(index)} />
                </div>
                <div className="admin-form-grid">
                  <Field label="Cidade" value={address.city} onChange={(value) => updateAddress(index, "city", value)} />
                  <Field label="Endereço" value={address.line} onChange={(value) => updateAddress(index, "line", value)} />
                  <Field label="Google Maps" value={address.mapsUrl} onChange={(value) => updateAddress(index, "mapsUrl", value)} full />
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel
          title="Mensagens de WhatsApp"
          action={
            <button type="button" className="admin-button" onClick={addWhatsAppPrompt}>
              Nova mensagem
            </button>
          }
        >
          <div className="admin-list">
            {draft.site.whatsappPromptMessages.map((message, index) => (
              <div key={`${message}-${index}`} className="admin-row">
                <div className="admin-row-heading">
                  <strong>Mensagem {index + 1}</strong>
                  <RowActions
                    onUp={() => setDraft((current) => ({
                      ...current,
                      site: {
                        ...current.site,
                        whatsappPromptMessages: moveArrayItem(
                          current.site.whatsappPromptMessages,
                          index,
                          -1,
                        ),
                      },
                    }))}
                    onDown={() => setDraft((current) => ({
                      ...current,
                      site: {
                        ...current.site,
                        whatsappPromptMessages: moveArrayItem(
                          current.site.whatsappPromptMessages,
                          index,
                          1,
                        ),
                      },
                    }))}
                    onRemove={() => removeWhatsAppPrompt(index)}
                    disableUp={index === 0}
                    disableDown={index === draft.site.whatsappPromptMessages.length - 1}
                  />
                </div>
                <Field
                  label="Texto enviado ao abrir o WhatsApp"
                  value={message}
                  onChange={(value) => updateWhatsAppPrompt(index, value)}
                  multiline
                  full
                />
              </div>
            ))}
          </div>
        </Panel>
      </div>
    );
  }

  function renderHome() {
    return (
      <div className="admin-grid">
        <Panel title="Home">
          <div className="admin-form-grid">
            <Field label="Título principal" value={draft.home.heroTitle} onChange={(value) => setDraft((current) => ({ ...current, home: { ...current.home, heroTitle: value } }))} multiline full />
            <Field label="CTA principal" value={draft.home.primaryCta} onChange={(value) => setDraft((current) => ({ ...current, home: { ...current.home, primaryCta: value } }))} />
            <Field label="CTA secundário" value={draft.home.secondaryCta} onChange={(value) => setDraft((current) => ({ ...current, home: { ...current.home, secondaryCta: value } }))} />
            <Field label="Título das áreas" value={draft.home.practiceAreasIntro.title} onChange={(value) => setDraft((current) => ({ ...current, home: { ...current.home, practiceAreasIntro: { ...current.home.practiceAreasIntro, title: value } } }))} />
            <Field label="Texto das áreas" value={draft.home.practiceAreasIntro.description} onChange={(value) => setDraft((current) => ({ ...current, home: { ...current.home, practiceAreasIntro: { ...current.home.practiceAreasIntro, description: value } } }))} multiline />
            <Field label="Destaque criminal" value={draft.home.criminalHighlightIntro.title} onChange={(value) => setDraft((current) => ({ ...current, home: { ...current.home, criminalHighlightIntro: { ...current.home.criminalHighlightIntro, title: value } } }))} multiline />
          </div>
        </Panel>

        <Panel title="Diferenciais do hero">
          <StringListEditor
            items={draft.home.heroBullets}
            itemLabel="Diferencial"
            addLabel="Novo diferencial"
            onChange={(items) =>
              setDraft((current) => ({
                ...current,
                home: { ...current.home, heroBullets: items },
              }))
            }
          />
        </Panel>

        <Panel title="FAQ geral">
          <FaqEditor
            items={draft.home.faqItems}
            onChange={(items) =>
              setDraft((current) => ({
                ...current,
                home: { ...current.home, faqItems: items },
              }))
            }
          />
        </Panel>
      </div>
    );
  }

  function renderCriminal() {
    return (
      <div className="admin-grid">
        <Panel title="Landing criminal">
          <div className="admin-form-grid">
            <Field label="Título SEO" value={draft.criminal.title} onChange={(value) => setDraft((current) => ({ ...current, criminal: { ...current.criminal, title: value } }))} />
            <Field label="Descrição" value={draft.criminal.description} onChange={(value) => setDraft((current) => ({ ...current, criminal: { ...current.criminal, description: value } }))} multiline full />
            <Field label="Imagem social" value={draft.criminal.ogImage} onChange={(value) => setDraft((current) => ({ ...current, criminal: { ...current.criminal, ogImage: value } }))} />
          </div>
        </Panel>

        <Panel title="Serviços de urgência">
          <div className="admin-list">
            {draft.criminal.emergencyServices.map((service, index) => (
              <div key={`${service.title}-${index}`} className="admin-row">
                <div className="admin-row-heading">
                  <strong>{service.title}</strong>
                  <RowActions
                    onUp={() => setDraft((current) => ({ ...current, criminal: { ...current.criminal, emergencyServices: moveArrayItem(current.criminal.emergencyServices, index, -1) } }))}
                    onDown={() => setDraft((current) => ({ ...current, criminal: { ...current.criminal, emergencyServices: moveArrayItem(current.criminal.emergencyServices, index, 1) } }))}
                    disableUp={index === 0}
                    disableDown={index === draft.criminal.emergencyServices.length - 1}
                  />
                </div>
                <div className="admin-form-grid">
                  <Field label="Serviço" value={service.title} onChange={(value) => setDraft((current) => ({ ...current, criminal: { ...current.criminal, emergencyServices: updateArrayItem(current.criminal.emergencyServices, index, (item) => ({ ...item, title: value })) } }))} />
                  <Field label="Descrição" value={service.description} onChange={(value) => setDraft((current) => ({ ...current, criminal: { ...current.criminal, emergencyServices: updateArrayItem(current.criminal.emergencyServices, index, (item) => ({ ...item, description: value })) } }))} />
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="FAQ criminal">
          <FaqEditor
            items={draft.criminal.faqs}
            onChange={(items) =>
              setDraft((current) => ({
                ...current,
                criminal: { ...current.criminal, faqs: items },
              }))
            }
          />
        </Panel>
      </div>
    );
  }

  function renderAreas() {
    return (
      <Panel title="Áreas de atuação" action={<button type="button" className="admin-button" onClick={addArea}>Nova área</button>}>
        <div className="admin-list">
          {filteredAreas.map(({ area, index }) => (
            <div key={`${area.name}-${index}`} className="admin-row">
              <div className="admin-row-heading">
                <strong>{String(index + 1).padStart(2, "0")} · {area.name}</strong>
                <RowActions
                  onUp={() => setDraft((current) => ({ ...current, practiceAreas: moveArrayItem(current.practiceAreas, index, -1) }))}
                  onDown={() => setDraft((current) => ({ ...current, practiceAreas: moveArrayItem(current.practiceAreas, index, 1) }))}
                  onDuplicate={() => setDraft((current) => ({ ...current, practiceAreas: [...current.practiceAreas.slice(0, index + 1), { ...current.practiceAreas[index], name: `${current.practiceAreas[index].name} cópia` }, ...current.practiceAreas.slice(index + 1)] }))}
                  onRemove={() => removeArea(index)}
                  disableUp={index === 0}
                  disableDown={index === draft.practiceAreas.length - 1}
                />
              </div>
              <div className="admin-form-grid">
                <Field label="Nome" value={area.name} onChange={(value) => updateArea(index, "name", value)} />
                <Field label="Resumo" value={area.summary} onChange={(value) => updateArea(index, "summary", value)} multiline />
              </div>
            </div>
          ))}
        </div>
      </Panel>
    );
  }

  function renderTeam() {
    return (
      <Panel title="Equipe e associados" action={<button type="button" className="admin-button" onClick={addLawyer}>Novo profissional</button>}>
        <div className="admin-list">
          {filteredLawyers.map(({ lawyer, index }) => (
            <div key={`${lawyer.oab}-${index}`} className="admin-person-row">
              <div>
                <div className="admin-thumb" style={{ backgroundImage: `url(${lawyer.photo})` }} aria-label={`Foto de ${lawyer.name}`} />
                <RowActions
                  onUp={() => setDraft((current) => ({ ...current, lawyers: moveArrayItem(current.lawyers, index, -1) }))}
                  onDown={() => setDraft((current) => ({ ...current, lawyers: moveArrayItem(current.lawyers, index, 1) }))}
                  onDuplicate={() => duplicateLawyer(index)}
                  onRemove={() => removeLawyer(index)}
                  disableUp={index === 0}
                  disableDown={index === draft.lawyers.length - 1}
                />
              </div>
              <div className="admin-form-grid">
                <Field label="Nome" value={lawyer.name} onChange={(value) => updateLawyer(index, "name", value)} />
                <Field label="OAB" value={lawyer.oab} onChange={(value) => updateLawyer(index, "oab", value)} />
                <Field label="Área" value={lawyer.area} onChange={(value) => updateLawyer(index, "area", value)} />
                <Field label="Foto" value={lawyer.photo} onChange={(value) => updateLawyer(index, "photo", value)} />
                <Field label="Bio" value={lawyer.bio} onChange={(value) => updateLawyer(index, "bio", value)} multiline full />
              </div>
            </div>
          ))}
        </div>
      </Panel>
    );
  }

  function renderNavigation() {
    return (
      <Panel
        title="Menus e chamadas"
        action={
          <button type="button" className="admin-button" onClick={addNavigationItem}>
            Novo link
          </button>
        }
      >
        <div className="admin-menu-list">
          {draft.navigation.map((item, index) => (
            <div key={`${item.href}-${index}`} className="admin-row">
              <div className="admin-row-heading">
                <strong>
                  {String(index + 1).padStart(2, "0")} · {item.label}
                </strong>
                <RowActions
                  onUp={() =>
                    setDraft((current) => ({
                      ...current,
                      navigation: moveArrayItem(current.navigation, index, -1),
                    }))
                  }
                  onDown={() =>
                    setDraft((current) => ({
                      ...current,
                      navigation: moveArrayItem(current.navigation, index, 1),
                    }))
                  }
                  onDuplicate={() => duplicateNavigationItem(index)}
                  onRemove={() => removeNavigationItem(index)}
                  disableUp={index === 0}
                  disableDown={index === draft.navigation.length - 1}
                />
              </div>

              <div className="admin-form-grid">
                <Field
                  label="Texto no menu"
                  value={item.label}
                  onChange={(value) => updateNavigationItem(index, "label", value)}
                />
                <Field
                  label="Rota"
                  value={item.href}
                  onChange={(value) => updateNavigationItem(index, "href", value)}
                />
                <label className="admin-toggle admin-field-full">
                  <input
                    type="checkbox"
                    checked={Boolean(item.cta)}
                    onChange={(event) =>
                      updateNavigationItem(index, "cta", event.target.checked)
                    }
                  />
                  <span>Destacar como botão principal</span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </Panel>
    );
  }

  function renderBlog() {
    const categoryOptions = Array.from(
      new Set([
        ...draft.blog.categories,
        ...(selectedArticle ? [selectedArticle.category] : []),
      ]),
    ).map((category) => ({ label: category, value: category }));

    return (
      <div className="admin-grid">
        <Panel title="Blog" action={<button type="button" className="admin-button" onClick={addArticle}>Novo artigo</button>}>
          <div className="admin-blog-layout">
            <aside className="admin-article-list" aria-label="Artigos">
              {filteredArticles.length > 0 ? (
                filteredArticles.map(({ article, index }) => (
                  <button
                    key={`${article.slug}-${index}`}
                    type="button"
                    className={index === selectedArticleIndex ? "admin-article-item is-active" : "admin-article-item"}
                    onClick={() => setSelectedArticleIndex(index)}
                  >
                    <strong>{article.title}</strong>
                    <span>{article.category} · {article.publishedAt}</span>
                    <StatusPill tone={article.status === "published" ? "good" : article.status === "archived" ? "neutral" : "warn"}>
                      {article.status}
                    </StatusPill>
                  </button>
                ))
              ) : (
                <div className="admin-empty">Nenhum artigo encontrado.</div>
              )}
            </aside>

            {selectedArticle ? (
              <div className="admin-form-grid">
                <Field label="Título" value={selectedArticle.title} onChange={(value) => updateArticle(selectedArticleIndex, "title", value)} />
                <Field
                  label="Slug"
                  value={selectedArticle.slug}
                  onChange={(value) => {
                    updateArticle(selectedArticleIndex, "slug", value);
                  }}
                  onBlur={() => commitArticleSlug(selectedArticleIndex, selectedArticle.slug)}
                />
                <SelectField
                  label="Status"
                  value={selectedArticle.status}
                  onChange={(value) => updateArticle(selectedArticleIndex, "status", value as AdminArticle["status"])}
                  options={[
                    { label: "Publicado", value: "published" },
                    { label: "Rascunho", value: "draft" },
                    { label: "Em revisão", value: "review" },
                    { label: "Arquivado", value: "archived" },
                  ]}
                />
                <SelectField
                  label="Categoria"
                  value={selectedArticle.category}
                  onChange={(value) => updateArticle(selectedArticleIndex, "category", value)}
                  options={categoryOptions}
                />
                <Field label="Data" value={selectedArticle.publishedAt} type="date" onChange={(value) => updateArticle(selectedArticleIndex, "publishedAt", value)} />
                <Field label="Tempo de leitura" value={selectedArticle.readingTime} onChange={(value) => updateArticle(selectedArticleIndex, "readingTime", value)} />
                <Field label="Capa" value={selectedArticle.coverImage} onChange={(value) => updateArticle(selectedArticleIndex, "coverImage", value)} full />
                <Field label="Resumo" value={selectedArticle.excerpt} onChange={(value) => updateArticle(selectedArticleIndex, "excerpt", value)} multiline full />
                <Field label="Título SEO" value={selectedArticle.seoTitle} onChange={(value) => updateArticle(selectedArticleIndex, "seoTitle", value)} />
                <Field label="Descrição SEO" value={selectedArticle.seoDescription} onChange={(value) => updateArticle(selectedArticleIndex, "seoDescription", value)} multiline />
                <Field
                  label="Corpo do artigo"
                  value={selectedArticle.body.join("\n\n")}
                  onChange={(value) => updateArticle(selectedArticleIndex, "body", value.split(/\n{2,}/).filter(Boolean))}
                  multiline
                  full
                />
                <div className="admin-preview-card admin-field-full">
                  <div
                    className="admin-preview-image"
                    style={{ backgroundImage: `url(${selectedArticle.coverImage})` }}
                  />
                  <div>
                    <span>Prévia do card</span>
                    <strong>{selectedArticle.title}</strong>
                    <small>{selectedArticle.category} · {selectedArticle.readingTime}</small>
                    <p>{selectedArticle.excerpt}</p>
                  </div>
                </div>
                <div className="admin-field-full">
                  <RowActions
                    onDuplicate={() => duplicateArticle(selectedArticle, selectedArticleIndex)}
                    onRemove={() => removeArticle(selectedArticleIndex)}
                  />
                </div>
              </div>
            ) : (
              <div className="admin-empty">Nenhum artigo selecionado.</div>
            )}
          </div>
        </Panel>

        <Panel
          title="Categorias"
          action={
            <button type="button" className="admin-button" onClick={addCategory}>
              Nova categoria
            </button>
          }
        >
          <div className="admin-list">
            {draft.blog.categories.map((category, index) => (
              <div key={`${category}-${index}`} className="admin-row">
                <div className="admin-row-heading">
                  <strong>{category}</strong>
                  <RowActions
                    onUp={() =>
                      setDraft((current) => ({
                        ...current,
                        blog: {
                          ...current.blog,
                          categories: moveArrayItem(current.blog.categories, index, -1),
                        },
                      }))
                    }
                    onDown={() =>
                      setDraft((current) => ({
                        ...current,
                        blog: {
                          ...current.blog,
                          categories: moveArrayItem(current.blog.categories, index, 1),
                        },
                      }))
                    }
                    onRemove={() => removeCategory(index)}
                    disableUp={index === 0}
                    disableDown={index === draft.blog.categories.length - 1}
                  />
                </div>
                <Field
                  label="Nome da categoria"
                  value={category}
                  onChange={(value) => updateCategory(index, value)}
                  full
                />
              </div>
            ))}
          </div>
        </Panel>
      </div>
    );
  }

  function renderMedia() {
    const groups = [
      ["Logos", draft.site.logos, (key: string, value: string) => setDraft((current) => ({ ...current, site: { ...current.site, logos: { ...current.site.logos, [key]: value } } }))],
      ["Hero", draft.media.hero, (key: string, value: string) => setDraft((current) => ({ ...current, media: { ...current.media, hero: { ...current.media.hero, [key]: value } } }))],
      ["Equipe", draft.media.team, (key: string, value: string) => setDraft((current) => ({ ...current, media: { ...current.media, team: { ...current.media.team, [key]: value } } }))],
      ["Criminal", draft.media.criminal, (key: string, value: string) => setDraft((current) => ({ ...current, media: { ...current.media, criminal: { ...current.media.criminal, [key]: value } } }))],
    ] as const;

    return (
      <div className="admin-grid">
        {groups.map(([groupName, entries, update]) => (
          <Panel key={groupName} title={groupName}>
            <div className="admin-media-grid">
              {Object.entries(entries).map(([label, path]) => (
                <div key={`${groupName}-${label}`} className="admin-media-card">
                  <div className="admin-media-preview" style={{ backgroundImage: `url(${path})` }} />
                  <Field label={label} value={path} onChange={(value) => update(label, value)} />
                </div>
              ))}
            </div>
          </Panel>
        ))}

        <Panel
          title="Capas de artigos"
          action={
            <button type="button" className="admin-button" onClick={() => addMediaItem("blogCovers")}>
              Nova capa
            </button>
          }
        >
          <div className="admin-media-grid">
            {draft.media.blogCovers.map((item, index) => (
              <div key={`${item.path}-${index}`} className="admin-media-card">
                <div className="admin-media-preview" style={{ backgroundImage: `url(${item.path})` }} />
                <Field
                  label="Descrição"
                  value={item.label}
                  onChange={(value) => updateMediaItem("blogCovers", index, "label", value)}
                />
                <Field
                  label="Arquivo"
                  value={item.path}
                  onChange={(value) => updateMediaItem("blogCovers", index, "path", value)}
                />
                <RowActions
                  onUp={() =>
                    setDraft((current) => ({
                      ...current,
                      media: {
                        ...current.media,
                        blogCovers: moveArrayItem(current.media.blogCovers, index, -1),
                      },
                    }))
                  }
                  onDown={() =>
                    setDraft((current) => ({
                      ...current,
                      media: {
                        ...current.media,
                        blogCovers: moveArrayItem(current.media.blogCovers, index, 1),
                      },
                    }))
                  }
                  onRemove={() => removeMediaItem("blogCovers", index)}
                  disableUp={index === 0}
                  disableDown={index === draft.media.blogCovers.length - 1}
                />
              </div>
            ))}
          </div>
        </Panel>

        <Panel
          title="Fotos da equipe"
          action={
            <button type="button" className="admin-button" onClick={() => addMediaItem("lawyers")}>
              Nova foto
            </button>
          }
        >
          <div className="admin-media-grid">
            {draft.media.lawyers.map((item, index) => (
              <div key={`${item.path}-${index}`} className="admin-media-card">
                <div className="admin-media-preview admin-media-preview-portrait" style={{ backgroundImage: `url(${item.path})` }} />
                <Field
                  label="Profissional"
                  value={item.label}
                  onChange={(value) => updateMediaItem("lawyers", index, "label", value)}
                />
                <Field
                  label="Arquivo"
                  value={item.path}
                  onChange={(value) => updateMediaItem("lawyers", index, "path", value)}
                />
                <RowActions
                  onUp={() =>
                    setDraft((current) => ({
                      ...current,
                      media: {
                        ...current.media,
                        lawyers: moveArrayItem(current.media.lawyers, index, -1),
                      },
                    }))
                  }
                  onDown={() =>
                    setDraft((current) => ({
                      ...current,
                      media: {
                        ...current.media,
                        lawyers: moveArrayItem(current.media.lawyers, index, 1),
                      },
                    }))
                  }
                  onRemove={() => removeMediaItem("lawyers", index)}
                  disableUp={index === 0}
                  disableDown={index === draft.media.lawyers.length - 1}
                />
              </div>
            ))}
          </div>
        </Panel>
      </div>
    );
  }

  function renderSeo() {
    return (
      <Panel title="SEO e compartilhamento">
        <div className="admin-form-grid">
          <Field label="Título padrão" value={draft.site.name} onChange={(value) => updateSite("name", value)} />
          <Field label="URL canônica" value={draft.site.siteUrl} onChange={(value) => updateSite("siteUrl", value)} />
          <Field label="Descrição padrão" value={draft.site.description} onChange={(value) => updateSite("description", value)} multiline full />
          <Field label="Imagem social padrão" value={draft.site.ogImage.path} onChange={(value) => setDraft((current) => ({ ...current, site: { ...current.site, ogImage: { ...current.site.ogImage, path: value } } }))} />
        </div>
        <div className="admin-seo-preview">
          <span>Prévia Google</span>
          <strong>{draft.site.name}</strong>
          <small>{draft.site.siteUrl}</small>
          <p>{draft.site.description}</p>
        </div>
      </Panel>
    );
  }

  function renderPublish() {
    return (
      <div className="admin-grid">
        <Panel title="Revisão antes de publicar">
          <div className="admin-publish-box">
            <StatusPill tone={hasBlockingIssue ? "danger" : hasChanges ? "warn" : "good"}>
              {hasBlockingIssue ? "bloqueado" : hasChanges ? "rascunho" : "pronto"}
            </StatusPill>
            <h2>
              {hasBlockingIssue
                ? "Resolva as pendências críticas antes de publicar."
                : hasChanges
                  ? "Há alterações prontas para revisão."
                  : "O rascunho está igual ao conteúdo carregado."}
            </h2>
            <p>
              Nesta etapa o painel prepara, valida, salva e exporta conteúdo. A
              gravação definitiva no site deve entrar com banco/CMS e auditoria.
            </p>
          </div>
        </Panel>

        <Panel title="Papéis sugeridos">
          <div className="admin-role-grid">
            {[
              ["Dono", "Acesso total, publicação e usuários."],
              ["Editor", "Textos, imagens, equipe e artigos."],
              ["Marketing", "Blog, SEO, CTAs e campanhas."],
              ["Atendimento", "Telefones, horários e mensagens."],
              ["Leitor", "Somente consulta e auditoria."],
            ].map(([role, description]) => (
              <div key={role} className="admin-role">
                <strong>{role}</strong>
                <span>{description}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    );
  }

  const renderedSection = {
    overview: renderOverview,
    identity: renderIdentity,
    home: renderHome,
    criminal: renderCriminal,
    areas: renderAreas,
    team: renderTeam,
    blog: renderBlog,
    navigation: renderNavigation,
    media: renderMedia,
    seo: renderSeo,
    publish: renderPublish,
  }[activeSection]();

  return (
    <main className="admin-shell">
      <aside className="admin-sidebar">
        <Link href="/" className="admin-brand">
          <span>PM</span>
          <strong>Painel</strong>
        </Link>
        <nav aria-label="Seções do painel">
          {adminSections.map((section) => (
            <Link
              key={section.id}
              href={getAdminSectionHref(section.id)}
              className={activeSection === section.id ? "admin-nav is-active" : "admin-nav"}
            >
              <strong>{section.label}</strong>
              <span>{section.helper}</span>
            </Link>
          ))}
        </nav>
      </aside>

      <section className="admin-workspace">
        <header className="admin-topbar">
          <div>
            <div className="admin-topbar-pills">
              <StatusPill tone="good">privado</StatusPill>
              <StatusPill tone={hasChanges ? "warn" : "neutral"}>
                {hasChanges ? "alterado" : "sem alterações"}
              </StatusPill>
            </div>
            <h1>{adminSections.find((section) => section.id === activeSection)?.label}</h1>
            <p>{notice}</p>
          </div>

          <div className="admin-actions">
            <input
              ref={fileInputRef}
              type="file"
              accept="application/json"
              className="admin-hidden-input"
              onChange={(event) => importDraft(event.target.files?.[0])}
            />
            <button type="button" className="admin-button" onClick={() => fileInputRef.current?.click()}>
              Importar
            </button>
            <button type="button" className="admin-button" onClick={loadLocalDraft}>
              Carregar
            </button>
            <button type="button" className="admin-button" onClick={persistDraft}>
              Salvar
            </button>
            <button type="button" className="admin-button" onClick={validateWithApi}>
              Validar
            </button>
            <button type="button" className="admin-button" onClick={resetDraft}>
              Resetar
            </button>
            <button
              type="button"
              className="admin-button admin-button-primary"
              onClick={() => downloadJson("pm-advocacia-conteudo.json", draft)}
            >
              Exportar JSON
            </button>
          </div>
        </header>

        <div className="admin-toolbar">
          <label className="admin-search">
            <span>Buscar</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="artigo, advogado, área..."
            />
          </label>
          <div className="admin-status-line">
            <span>Carregado em {new Date(seed.generatedAt).toLocaleString("pt-BR")}</span>
            <span>{lastSavedAt ? `Rascunho salvo às ${lastSavedAt}` : "Ainda não salvo nesta sessão"}</span>
          </div>
        </div>

        {renderedSection}
      </section>
    </main>
  );
}

function StringListEditor({
  items,
  itemLabel,
  addLabel,
  onChange,
}: {
  items: string[];
  itemLabel: string;
  addLabel: string;
  onChange: (items: string[]) => void;
}) {
  return (
    <div className="admin-list">
      {items.map((item, index) => (
        <div key={`${item}-${index}`} className="admin-row">
          <div className="admin-row-heading">
            <strong>
              {itemLabel} {index + 1}
            </strong>
            <RowActions
              onUp={() => onChange(moveArrayItem(items, index, -1))}
              onDown={() => onChange(moveArrayItem(items, index, 1))}
              onDuplicate={() =>
                onChange([
                  ...items.slice(0, index + 1),
                  `${item} cópia`,
                  ...items.slice(index + 1),
                ])
              }
              onRemove={() => {
                if (window.confirm("Remover este item?")) {
                  onChange(items.filter((_, itemIndex) => itemIndex !== index));
                }
              }}
              disableUp={index === 0}
              disableDown={index === items.length - 1}
            />
          </div>
          <Field
            label={itemLabel}
            value={item}
            onChange={(value) => onChange(updateStringListItem(items, index, value))}
            full
          />
        </div>
      ))}
      <button
        type="button"
        className="admin-button"
        onClick={() => onChange([...items, addLabel])}
      >
        {addLabel}
      </button>
    </div>
  );
}

function FaqEditor({
  items,
  onChange,
}: {
  items: FaqItem[];
  onChange: (items: FaqItem[]) => void;
}) {
  return (
    <div className="admin-list">
      {items.map((item, index) => (
        <div key={`${item.question}-${index}`} className="admin-row">
          <div className="admin-row-heading">
            <strong>Pergunta {index + 1}</strong>
            <RowActions
              onUp={() => onChange(moveArrayItem(items, index, -1))}
              onDown={() => onChange(moveArrayItem(items, index, 1))}
              onDuplicate={() =>
                onChange([
                  ...items.slice(0, index + 1),
                  { ...item, question: `${item.question} cópia` },
                  ...items.slice(index + 1),
                ])
              }
              onRemove={() => {
                if (window.confirm("Remover esta pergunta?")) {
                  onChange(items.filter((_, itemIndex) => itemIndex !== index));
                }
              }}
              disableUp={index === 0}
              disableDown={index === items.length - 1}
            />
          </div>
          <div className="admin-form-grid">
            <Field
              label="Pergunta"
              value={item.question}
              onChange={(value) =>
                onChange(updateArrayItem(items, index, (entry) => ({ ...entry, question: value })))
              }
            />
            <Field
              label="Resposta"
              value={item.answer}
              onChange={(value) =>
                onChange(updateArrayItem(items, index, (entry) => ({ ...entry, answer: value })))
              }
              multiline
            />
          </div>
        </div>
      ))}
      <button
        type="button"
        className="admin-button"
        onClick={() => onChange([...items, { question: "Nova pergunta", answer: "Resposta." }])}
      >
        Nova pergunta
      </button>
    </div>
  );
}
