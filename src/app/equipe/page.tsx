import type { Metadata } from "next";

import { CopyEmphasis } from "@/components/ui/copy-emphasis";
import { LawyerPhoto } from "@/components/sections/lawyer-photo";
import { PageHero } from "@/components/sections/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { TeamPhotoBanner } from "@/components/sections/team-photo-banner";
import {
  buildAreaContactHref,
  externalLinkRel,
  images,
  lawyers,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Equipe",
  description:
    "Cinco advogados, OAB/MG, cada um com atuação definida em sua área. Pereira e Medeiros Advogados Associados.",
};

export default function EquipePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Equipe"
        title="Os advogados do escritório."
        description={
          <>
            Cada advogado responde por uma ou mais{" "}
            <CopyEmphasis>áreas do Direito</CopyEmphasis>.
          </>
        }
      />

      <TeamPhotoBanner
        image={images.team.groupAlt}
        objectPosition="center 20%"
      />

      {/* ── PERFIS */}
      <section className="section-shell section-pad-compact pb-12 text-on-dark sm:pb-24 lg:pb-28">
        <div className="section-stack mb-8 lg:mb-16 animate-fade-up">
          <p className="eyebrow text-brand">Advogados</p>
          <div className="gold-accent mt-3 mb-4 sm:mt-4 sm:mb-5" />
          <h2 className="font-display display-title">
            Quem responde por cada área.
          </h2>
          <p className="mt-5 text-base leading-7 text-on-dark-muted sm:mt-8 sm:text-lg sm:leading-8">
            Formação, OAB e atuação de cada{" "}
            <CopyEmphasis>profissional</CopyEmphasis>.
          </p>
        </div>

        <div className="profile-list">
          {lawyers.map((lawyer, index) => {
            const areaHref = buildAreaContactHref(lawyer.area);

            return (
              <article
                key={lawyer.name}
                className="profile-row group animate-fade-up"
                style={{ animationDelay: `${index * 0.09}s` }}
              >
                {/* Foto */}
                <div className="profile-photo overflow-hidden border border-white/10">
                  {lawyer.photo ? (
                    <LawyerPhoto
                      src={lawyer.photo}
                      alt={`Foto de ${lawyer.name}`}
                      sizes="(max-width: 768px) 100vw, 336px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-surface-strong to-surface-alt">
                      <span className="font-display text-6xl leading-none text-brand-deep/15">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  )}
                  {/* Barra dourada deslizante na base */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>

                {/* Conteúdo */}
                <div>
                  {/* Âncora visual dourada + OAB */}
                  <div className="flex items-center gap-3">
                    <div className="gold-rule-left w-6 shrink-0" />
                    <p className="text-[0.62rem] font-bold tracking-[0.2em] text-brand uppercase">
                      {lawyer.oab}
                    </p>
                  </div>

                  <h3 className="font-display mt-2 text-2xl leading-tight text-on-dark-soft sm:mt-3 sm:text-3xl lg:text-4xl">
                    {lawyer.name}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-on-dark-muted sm:mt-4 sm:text-base sm:leading-7">
                    {lawyer.bio}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-full border border-brand/25 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                      {lawyer.area}
                    </span>
                    <a
                      href={areaHref}
                      target="_blank"
                      rel={externalLinkRel}
                      className="text-xs font-semibold text-brand transition-colors hover:text-brand-hover border-b border-brand/30 pb-px hover:border-brand"
                    >
                      Falar sobre esta área →
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </SiteShell>
  );
}
