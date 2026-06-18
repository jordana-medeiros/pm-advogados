import Link from "next/link";

import { SiteShell } from "@/components/site-shell";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="section-shell section-gap text-center">
        <p className="eyebrow text-brand-deep">Erro 404</p>
        <h1 className="font-display display-title mt-5 text-5xl sm:text-6xl">
          Página não encontrada
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-muted">
          O endereço acessado não existe ou foi movido. Volte ao início ou fale
          diretamente com a equipe.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Ir para o início
          </Link>
          <Link
            href="/contato"
            className="inline-flex items-center rounded-full border border-brand-deep/20 px-6 py-3 text-sm font-semibold text-brand-deep transition-colors hover:bg-brand-deep/5"
          >
            Ver canais de contato
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
