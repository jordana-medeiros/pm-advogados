import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { contactHref, criminalAuthority, externalLinkRel, practiceAreas } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Áreas de Atuação",
  description:
    "Conheça a atuação em Direito Criminal e as demais áreas da Pereira e Medeiros Advogados Associados.",
};

export default function AreasPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Áreas de atuação"
        title="Direito Criminal como foco, com estrutura para outras demandas jurídicas."
        description="A atuação do escritório tem a área criminal como eixo de autoridade, sem deixar de lado demandas cíveis, familiares, previdenciárias, trabalhistas, públicas, ambientais e estudantis."
      />

      {/* Criminal authority cards */}
      <section className="section-shell pt-14 pb-8">
        <p className="eyebrow text-brand-deep mb-6">Criminal</p>
        <div className="grid gap-4 lg:grid-cols-3">
          {criminalAuthority.map((item) => (
            <article key={item.title} className="card-dark p-7">
              <div className="gold-accent mb-4" />
              <p className="eyebrow text-brand">Criminal</p>
              <h2 className="font-display mt-4 text-3xl leading-tight text-[#f0f5f2]">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#9ab0a8]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* All practice areas */}
      <section className="section-shell py-10">
        <p className="eyebrow text-brand-deep mb-6">Todas as áreas</p>
        <div className="grid gap-4 lg:grid-cols-2">
          {practiceAreas.map((area, index) => (
            <article key={area.name} className="card group p-7 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="w-0 h-[2px] bg-brand transition-all duration-300 group-hover:w-8 mb-3" />
                  <p className="text-[0.65rem] font-bold tracking-[0.2em] text-brand uppercase">
                    Área {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-display mt-2 text-3xl leading-tight sm:text-4xl">
                    {area.name}
                  </h2>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                {area.summary}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-shell pb-16 sm:pb-20">
        <div className="brand-field p-8 sm:p-10">
          <div className="gold-rule-left w-16 mb-7" />
          <p className="eyebrow text-brand">Contato direto</p>
          <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight text-[#f0f5f2] sm:text-5xl">
            Fale com a equipe para entender qual frente jurídica melhor atende sua demanda.
          </h2>
          <a
            href={contactHref}
            target="_blank"
            rel={externalLinkRel}
            id="areas-cta-whatsapp"
            className="btn-primary mt-8 inline-flex"
          >
            Conversar pelo WhatsApp
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
