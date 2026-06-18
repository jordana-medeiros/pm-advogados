import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { siteName } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description:
    "Termos de uso do site institucional da Pereira e Medeiros Advogados Associados.",
};

export default function AvisoLegalPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Aviso legal"
        title="Sobre o conteúdo deste site."
        description="Informações gerais. Não substituem consulta com advogado."
      />

      <section className="section-shell section-gap max-w-3xl space-y-8 text-sm leading-7 text-muted sm:text-base">
        <article className="space-y-3">
          <h2 className="font-display text-3xl text-foreground">Conteúdo informativo</h2>
          <p>
            O material publicado em {siteName} é institucional. Não configura
            consulta jurídica nem cria relação advogado-cliente.
          </p>
        </article>

        <article className="space-y-3">
          <h2 className="font-display text-3xl text-foreground">Análise do caso</h2>
          <p>
            Cada situação exige exame próprio. Para orientação sobre o seu caso,
            use os canais de contato do escritório.
          </p>
        </article>

        <article className="space-y-3">
          <h2 className="font-display text-3xl text-foreground">Atualização</h2>
          <p>
            Buscamos manter o site atualizado, mas a lei e a jurisprudência
            mudam. O visitante usa as informações por sua conta.
          </p>
        </article>

        <article className="space-y-3">
          <h2 className="font-display text-3xl text-foreground">Direitos autorais</h2>
          <p>
            Textos e identidade visual deste site pertencem a {siteName}, salvo
            indicação em contrário. Cópia não autorizada é proibida.
          </p>
        </article>
      </section>
    </SiteShell>
  );
}
