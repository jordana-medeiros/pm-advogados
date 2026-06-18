import Link from "next/link";

import { SiteLogo } from "@/components/layout/site-logo";
import {
  addresses,
  contactHref,
  contactHrefSecondary,
  externalLinkRel,
  instagramHandle,
  instagramUrl,
  navItems,
  whatsappPrimary,
  whatsappSecondary,
} from "@/lib/site-data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="brand-field text-on-dark">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-brand/70 to-transparent" />

      <div className="section-shell pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-8 sm:pb-24 sm:pt-10">
        <div className="grid gap-y-10 text-center sm:grid-cols-2 sm:gap-x-12 sm:gap-y-12 lg:grid-cols-[1.2fr_0.78fr_1.12fr_0.95fr] lg:gap-x-14 xl:gap-x-16 lg:text-left">
          {/* Coluna 1 — Logo */}
          <div className="flex flex-col items-center sm:items-start">
            <SiteLogo variant="gold" className="h-14 w-auto sm:h-16" />
          </div>

          {/* Coluna 2 — Menu */}
          <div className="flex flex-col items-center sm:items-start">
            <p className="eyebrow mb-4 text-brand/75">Menu</p>
            <nav
              aria-label="Rodapé"
              className="flex flex-col items-center gap-2 sm:items-start"
            >
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

          {/* Coluna 3 — Endereços */}
          <div className="flex flex-col items-center sm:items-start">
            <p className="eyebrow mb-4 text-brand/75">Endereços</p>
            <div className="flex flex-col gap-5">
              {addresses.map((address) => (
                <div key={address.city}>
                  <p className="mb-1 text-[0.7rem] font-bold uppercase tracking-wider text-brand/60">
                    {address.city}
                  </p>
                  <a
                    href={address.mapsUrl}
                    target="_blank"
                    rel={externalLinkRel}
                    className="block max-w-xs text-sm leading-6 text-on-dark-muted transition-colors hover:text-on-dark-soft"
                  >
                    {address.line}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna 4 — Contato */}
          <div className="flex flex-col items-center sm:items-start">
            <p className="eyebrow mb-4 text-brand/75">Contato</p>
            <div className="space-y-5 text-sm leading-6 text-on-dark-muted">
              <div>
                <p className="mb-1 text-[0.7rem] font-bold uppercase tracking-wider text-brand/60">
                  WhatsApp
                </p>
                <a
                  href={contactHref}
                  target="_blank"
                  rel={externalLinkRel}
                  className="block transition-colors hover:text-on-dark-soft"
                >
                  {whatsappPrimary}
                </a>
                <a
                  href={contactHrefSecondary}
                  target="_blank"
                  rel={externalLinkRel}
                  className="mt-1 block transition-colors hover:text-on-dark-soft"
                >
                  {whatsappSecondary}
                </a>
              </div>
              <div>
                <p className="mb-1 text-[0.7rem] font-bold uppercase tracking-wider text-brand/60">
                  Instagram
                </p>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel={externalLinkRel}
                  className="transition-colors hover:text-on-dark-soft"
                >
                  {instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs text-on-dark-faint">
            © {year} Pereira e Medeiros Advogados Associados. Todos os direitos
            reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs text-on-dark-muted sm:justify-end">
            <Link href="/aviso-legal" className="transition-colors hover:text-on-dark-soft">
              Aviso legal
            </Link>
            <Link href="/politica-de-privacidade" className="transition-colors hover:text-on-dark-soft">
              Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
