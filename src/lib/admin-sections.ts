export const adminSections = [
  { id: "overview", label: "Visão geral", helper: "Saúde editorial" },
  { id: "identity", label: "Identidade", helper: "Marca e contatos" },
  { id: "home", label: "Home", helper: "Primeira impressão" },
  { id: "criminal", label: "Criminal", helper: "Plantão 24h" },
  { id: "areas", label: "Áreas", helper: "Especialidades" },
  { id: "team", label: "Equipe", helper: "Associados" },
  { id: "blog", label: "Blog", helper: "Artigos" },
  { id: "navigation", label: "Menus", helper: "Topo e CTAs" },
  { id: "media", label: "Mídia", helper: "Imagens" },
  { id: "seo", label: "SEO", helper: "Busca e redes" },
  { id: "publish", label: "Publicação", helper: "Revisão" },
] as const;

export type SectionId = (typeof adminSections)[number]["id"];

export const adminSectionIds = adminSections.map((section) => section.id);

export function getAdminSectionHref(section: SectionId) {
  return section === "overview" ? "/admin" : `/admin/${section}`;
}
