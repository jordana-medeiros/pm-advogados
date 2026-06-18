import Link from "next/link";

import {
  addresses,
  contactHref,
  externalLinkRel,
  instagramHandle,
  instagramUrl,
  navItems,
  telPrimaryHref,
  telSecondaryHref,
  whatsappPrimary,
  whatsappSecondary,
} from "@/lib/site-data";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="brand-field text-[#fafafa]">
      {/* Linha dourada no topo */}
      <div className="gold-rule" />

      <div className="section-shell pt-14 pb-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_1fr]">

          {/* Coluna 1 — Marca */}
          <div>
            <p className="eyebrow text-brand">Pereira e Medeiros</p>
            <p className="font-display mt-5 max-w-sm text-3xl leading-tight sm:text-4xl">
              Atendimento direto, técnica jurídica e condução segura.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={contactHref}
                target="_blank"
                rel={externalLinkRel}
                className="btn-primary text-xs"
              >
                WhatsApp
              </a>
              <Link
                href="/contato"
                className="btn-ghost text-xs"
              >
                Ver canais
              </Link>
            </div>
          </div>

          {/* Coluna 2 — Navegação */}
          <div>
            <p className="eyebrow text-[#7a9b92]">Páginas</p>
            <nav aria-label="Rodapé" className="mt-5 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[#b8c8c2] transition-colors hover:text-[#e8ede9]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Coluna 3 — Contato */}
          <div>
            <p className="eyebrow text-[#7a9b92]">Contato</p>
            <div className="mt-5 space-y-3 text-sm leading-6 text-[#b8c8c2]">
              {addresses.map((item) => (
                <p key={item.city}>
                  <a
                    href={item.mapsUrl}
                    target="_blank"
                    rel={externalLinkRel}
                    className="transition-colors hover:text-[#e8ede9]"
                  >
                    {item.line}
                  </a>
                </p>
              ))}
              <p className="pt-1">
                <a href={telPrimaryHref} className="transition-colors hover:text-[#e8ede9]">
                  {whatsappPrimary}
                </a>
                {" · "}
                <a href={telSecondaryHref} className="transition-colors hover:text-[#e8ede9]">
                  {whatsappSecondary}
                </a>
              </p>
              <p>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel={externalLinkRel}
                  className="transition-colors hover:text-[#e8ede9]"
                >
                  {instagramHandle}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-[#5a7a72]">
          <p>© {year} Pereira e Medeiros Advogados Associados. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/aviso-legal" className="transition-colors hover:text-[#9ab0a8]">
              Aviso legal
            </Link>
            <Link href="/politica-de-privacidade" className="transition-colors hover:text-[#9ab0a8]">
              Privacidade
            </Link>
            <span>OAB/MG</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
