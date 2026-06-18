import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/sections/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { criminalAuthority, practiceAreas } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Áreas de Atuação",
  description:
    "Direito Criminal e mais oito áreas. Cada ramo com advogado responsável no escritório Pereira e Medeiros.",
};

export default function AreasPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Áreas"
        title="Criminal é referência. As outras oito áreas têm advogado dedicado."
        description="Penal, previdenciário, família, trabalho, cível, empresarial, ambiental, público e estudantil."
      />

      <section className="brand-field section-pad-compact text-on-dark">
        <div className="section-shell editorial-split">
          <div>
            <p className="eyebrow text-brand">Direito Criminal</p>
            <div className="gold-accent mt-4 mb-5" />
            <h2 className="font-display display-title max-w-md text-4xl sm:text-5xl text-on-dark-soft">
              Referência do escritório.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-on-dark-muted">
              Investigação, prisão, audiência e júri — com resposta rápida e
              estratégia desde o primeiro ato.
            </p>
          </div>

          <div className="content-list content-list-dark">
            {criminalAuthority.map((item, index) => (
              <article
                key={item.title}
                className="content-list-item animate-fade-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <span className="font-display text-4xl leading-none text-brand/70 transition-colors group-hover:text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl leading-tight text-on-dark-soft sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-on-dark-muted sm:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-band-mint section-pad-compact">
        <div className="section-shell editorial-split">
          <div>
            <p className="eyebrow text-brand-deep">Todas as áreas</p>
            <div className="gold-accent mt-4 mb-5" />
            <h2 className="font-display display-title max-w-md text-4xl sm:text-5xl">
              Nove frentes, responsáveis definidos.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-muted">
              Caso com mais de uma área? A equipe trabalha junto — sem lacuna
              entre frentes.
            </p>
          </div>

          <div className="content-list">
            {practiceAreas.map((area, index) => (
              <article
                key={area.name}
                className="content-list-item content-list-item-wide group animate-fade-up"
                style={{ animationDelay: `${0.05 + index * 0.05}s` }}
              >
                <span className="text-sm font-medium text-brand/50 transition-colors duration-200 group-hover:text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl leading-none transition-colors duration-200 group-hover:text-brand-deep sm:text-[1.65rem]">
                  {area.name}
                </h3>
                <p className="text-sm leading-6 text-muted">
                  {area.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-field section-pad-compact pb-16 text-on-dark sm:pb-20">
        <div className="section-shell">
          <div className="gold-rule-left w-16 mb-7" />
          <p className="eyebrow text-brand">Contato</p>
          <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight text-on-dark-soft sm:text-5xl">
            Não sabe qual área cabe no seu caso? Fale com o escritório.
          </h2>
          <Link href="/contato" className="btn-primary mt-8 inline-flex">
            Falar com o escritório
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
