import Link from "next/link";

import { SiteLogo } from "@/components/layout/site-logo";
import {
  addresses,
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
    <footer className="brand-field text-on-dark">
      {/* Linha dourada no topo */}
      <div className="gold-rule" />

      <div className="section-shell pt-14 pb-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_1fr]">

          {/* Coluna 1 — Marca */}
          <div>
            <SiteLogo
              variant="gold"
              className="h-16 w-auto sm:h-[4.5rem] lg:h-20"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contato" className="btn-primary text-xs">
                Fale conosco
              </Link>
              <Link href="/blog" className="btn-ghost text-xs">
                Blog
              </Link>
            </div>
          </div>

          {/* Coluna 2 — Navegação */}
          <div>
            <p className="eyebrow text-brand/85">Páginas</p>
            <nav aria-label="Rodapé" className="mt-5 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-on-dark-muted transition-colors hover:text-on-dark-soft"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Coluna 3 — Contato */}
          <div>
            <p className="eyebrow text-brand/85">Contato</p>
            <div className="mt-5 space-y-3 text-sm leading-6 text-on-dark-muted">
              {addresses.map((item) => (
                <p key={item.city}>
                  <a
                    href={item.mapsUrl}
                    target="_blank"
                    rel={externalLinkRel}
                    className="transition-colors hover:text-on-dark-soft"
                  >
                    {item.line}
                  </a>
                </p>
              ))}
              <p className="pt-1">
                <a href={telPrimaryHref} className="transition-colors hover:text-on-dark-soft">
                  {whatsappPrimary}
                </a>
                {" · "}
                <a href={telSecondaryHref} className="transition-colors hover:text-on-dark-soft">
                  {whatsappSecondary}
                </a>
              </p>
              <p>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel={externalLinkRel}
                  className="transition-colors hover:text-on-dark-soft"
                >
                  {instagramHandle}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-on-dark-muted">
          <p>© {year} Pereira e Medeiros Advogados Associados. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/aviso-legal" className="transition-colors hover:text-on-dark-muted">
              Aviso legal
            </Link>
            <Link href="/politica-de-privacidade" className="transition-colors hover:text-on-dark-muted">
              Privacidade
            </Link>
            <span>OAB/MG</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
