import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { TeamPhotoBanner } from "@/components/sections/team-photo-banner";
import { differentiators, institutionalText } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Cinco advogados, escritórios em MG e GO e atuação em todo o país. Conheça o escritório Pereira e Medeiros.",
};

export default function SobrePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Sobre"
        title="Como o escritório trabalha."
        description={`${institutionalText.about} ${institutionalText.aboutSupport}`}
      />

      <TeamPhotoBanner caption="A equipe" />

      <section className="content-band-mint section-pad-compact">
        <div className="section-shell editorial-columns">
          <article>
            <div className="gold-accent mb-5" />
            <p className="eyebrow text-brand">Essência</p>
            <h2 className="font-display mt-4 text-4xl leading-tight sm:text-5xl">
              {institutionalText.essenceTitle}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted">
              {institutionalText.essenceBody}
            </p>
          </article>

          <article>
            <div className="gold-accent mb-5" />
            <p className="eyebrow text-brand">Alcance</p>
            <h2 className="font-display mt-4 text-4xl leading-tight sm:text-5xl">
              {institutionalText.presenceTitle}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted">
              {institutionalText.presenceBody}
            </p>
          </article>
        </div>
      </section>

      <section className="section-shell section-pad-compact pb-16 sm:pb-20">
        <div className="editorial-split">
          <div>
            <p className="eyebrow text-brand-deep">O que nos define</p>
            <div className="gold-accent mt-4 mb-5" />
            <h2 className="font-display display-title max-w-md text-4xl sm:text-5xl">
              Especialistas em cada frente.
            </h2>
          </div>

          <div className="content-list">
            {differentiators.map((item, index) => (
              <article key={item.title} className="content-list-item">
                <span className="font-display text-4xl leading-none text-brand/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl leading-tight sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
