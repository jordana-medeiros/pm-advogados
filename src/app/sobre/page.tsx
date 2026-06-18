import type { Metadata } from "next";
import Link from "next/link";

import { CopyEmphasis } from "@/components/ui/copy-emphasis";
import { InstitutionalHeroPanel } from "@/components/sections/institutional-hero-panel";
import { PageHero } from "@/components/sections/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { TeamPhotoBanner } from "@/components/sections/team-photo-banner";
import {
  addresses,
  differentiators,
  homeAreasHref,
  images,
  institutionalText,
  practiceAreas,
  practiceAreasIntro,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça o escritório Pereira e Medeiros: atuação em nove áreas do Direito, escritórios em MG e GO e presença em todo o Brasil.",
};

export default function SobrePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Sobre"
        title="Um escritório pensado para a prática do Direito."
        description={
          <>
            Pereira e Medeiros nasceu da convicção de que bons resultados exigem{" "}
            <CopyEmphasis>técnica, clareza e proximidade</CopyEmphasis> — do
            primeiro contato ao encaminhamento do caso.
          </>
        }
        aside={<InstitutionalHeroPanel className="self-end" />}
      />

      <TeamPhotoBanner
        image={images.team.group}
        objectPosition="center 18%"
      />

      <section className="section-divider section-pad-compact text-on-dark">
        <div className="section-shell">
          <p className="eyebrow text-brand">Quem somos</p>
          <h2 className="font-display mt-3 max-w-3xl text-3xl leading-tight sm:mt-4 sm:text-4xl lg:text-5xl">
            {institutionalText.essenceTitle}
          </h2>
          <div className="mt-5 max-w-3xl space-y-4 text-base leading-7 text-on-dark-muted sm:mt-8 sm:space-y-5 sm:text-lg sm:leading-8">
            <p>{institutionalText.about}</p>
            <p>{institutionalText.aboutSupport}</p>
            <p>{institutionalText.essenceBody}</p>
          </div>
        </div>
      </section>

      <section className="section-divider section-surface-alt section-pad-compact text-on-dark">
        <div className="section-shell">
          <p className="eyebrow text-brand">Atuação</p>
          <h2 className="font-display mt-3 max-w-3xl text-3xl leading-tight sm:mt-4 sm:text-4xl lg:text-5xl">
            {practiceAreasIntro.title}
          </h2>
          <div className="mt-5 max-w-3xl space-y-4 text-base leading-7 text-on-dark-muted sm:mt-8 sm:space-y-6 sm:text-lg sm:leading-8">
            <p>{practiceAreasIntro.description}</p>
            <p>
              O escritório acompanha demandas em{" "}
              {practiceAreas.map((area) => area.name).join(", ").replace(/, ([^,]*)$/, " e $1")}
              .
            </p>
            <Link href={homeAreasHref} className="link-arrow-light inline-flex">
              Ver áreas de atuação →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-divider section-pad-compact pb-12 text-on-dark sm:pb-24 lg:pb-28">
        <div className="section-shell">
          <p className="eyebrow text-brand">Presença</p>
          <h2 className="font-display mt-3 max-w-3xl text-3xl leading-tight sm:mt-4 sm:text-4xl lg:text-5xl">
            {institutionalText.presenceTitle}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-on-dark-muted sm:mt-8 sm:text-lg sm:leading-8">
            {institutionalText.presenceBody} Escritórios em{" "}
            {addresses.map((address) => address.city).join(" e ")}.
          </p>

          <ul className="mt-8 space-y-6 sm:mt-12 sm:space-y-8">
            {differentiators.map((item) => (
              <li key={item.title}>
                <h3 className="font-display text-2xl leading-tight text-on-dark-soft">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-on-dark-muted sm:mt-3 sm:text-base sm:leading-7">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
