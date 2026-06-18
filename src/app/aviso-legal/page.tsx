import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { siteName } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description:
    "Aviso legal e informações sobre o uso do site da Pereira e Medeiros Advogados Associados.",
};

export default function AvisoLegalPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Aviso legal"
        title="Informações sobre o conteúdo deste site."
        description="Leia atentamente as condições abaixo antes de utilizar as informações disponibilizadas."
      />

      <section className="section-shell section-gap max-w-3xl space-y-8 text-sm leading-7 text-muted sm:text-base">
        <article className="space-y-3">
          <h2 className="font-display text-3xl text-foreground">Natureza informativa</h2>
          <p>
            O conteúdo publicado em {siteName} tem caráter exclusivamente
            informativo e institucional. Nenhuma informação aqui apresentada
            substitui consulta jurídica individualizada nem cria relação
            advogado-cliente.
          </p>
        </article>

        <article className="space-y-3">
          <h2 className="font-display text-3xl text-foreground">Atendimento profissional</h2>
          <p>
            Cada caso possui particularidades que exigem análise técnica
            específica. Para orientação sobre sua situação concreta, entre em
            contato diretamente com a equipe pelos canais oficiais do escritório.
          </p>
        </article>

        <article className="space-y-3">
          <h2 className="font-display text-3xl text-foreground">Responsabilidade</h2>
          <p>
            O escritório envida esforços para manter as informações atualizadas,
            mas não garante que todo o conteúdo reflita alterações legislativas
            ou jurisprudenciais recentes. O uso das informações do site é de
            responsabilidade do visitante.
          </p>
        </article>

        <article className="space-y-3">
          <h2 className="font-display text-3xl text-foreground">Propriedade intelectual</h2>
          <p>
            Textos, identidade visual, logotipos e demais materiais exibidos
            neste site pertencem a {siteName}, salvo indicação em contrário.
            Reprodução não autorizada é proibida.
          </p>
        </article>
      </section>
    </SiteShell>
  );
}
