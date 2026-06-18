import type { Metadata } from "next";
import Link from "next/link";

import { SiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <SiteShell>
      <section className="section-shell section-gap text-center">
        <p className="eyebrow text-brand-deep">Erro 404</p>
        <h1 className="font-display display-title mt-5 text-5xl sm:text-6xl">
          Página não encontrada
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-muted">
          Este endereço não existe. Volte ao início ou acesse a página de contato.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Ir para o início
          </Link>
          <Link href="/contato" className="btn-secondary">
            Ver canais de contato
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
