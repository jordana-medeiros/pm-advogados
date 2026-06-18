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
      {/* Linha dourada no topo — mais pronunciada */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-brand/70 to-transparent" />

      <div className="section-shell pt-16 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.75fr_1fr]">

          {/* Coluna 1 — Marca */}
          <div>
            <SiteLogo
              variant="gold"
              className="h-14 w-auto sm:h-16"
            />
            <p className="mt-4 text-xs leading-5 text-on-dark-faint">
              Pereira e Medeiros Advogados Associados<br />
              OAB/MG — Santa Vitória/MG e São Simão/GO
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contato" className="btn-primary text-[0.72rem]">
                Fale conosco
              </Link>
              <Link href="/blog" className="btn-ghost text-[0.72rem]">
                Blog
              </Link>
            </div>
          </div>

          {/* Coluna 2 — Navegação */}
          <div>
            <p className="eyebrow text-brand/75 mb-5">Páginas</p>
            <nav aria-label="Rodapé" className="flex flex-col gap-2.5">
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
            <p className="eyebrow text-brand/75 mb-5">Contato</p>
            <div className="space-y-3 text-sm leading-6 text-on-dark-muted">
              {addresses.map((item) => (
                <p key={item.city}>
                  <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-brand/60 mb-0.5">
                    {item.city}
                  </span>
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
                <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-brand/60 mb-0.5">
                  WhatsApp
                </span>
                <a href={telPrimaryHref} className="transition-colors hover:text-on-dark-soft">
                  {whatsappPrimary}
                </a>
                <span className="mx-1.5 text-on-dark-faint">·</span>
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
        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-on-dark-faint">
            © {year} Pereira e Medeiros Advogados Associados. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-on-dark-muted">
            <Link href="/aviso-legal" className="transition-colors hover:text-on-dark-soft">
              Aviso legal
            </Link>
            <Link href="/politica-de-privacidade" className="transition-colors hover:text-on-dark-soft">
              Privacidade
            </Link>
            <span className="text-on-dark-faint">OAB/MG</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
