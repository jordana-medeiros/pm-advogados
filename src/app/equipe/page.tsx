import type { Metadata } from "next";
import Image from "next/image";

import { PageHero } from "@/components/sections/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { TeamPhotoBanner } from "@/components/sections/team-photo-banner";
import {
  contactHref,
  externalLinkRel,
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
        description="Cinco profissionais. Cada um responde por uma ou mais áreas do Direito."
      />

      <TeamPhotoBanner caption="Pereira e Medeiros Advogados Associados" showName />

      {/* ── PERFIS */}
      <section className="section-shell section-pad-compact pb-8">
        <div className="editorial-split mb-12 lg:mb-16">
          <div className="animate-fade-up">
            <p className="eyebrow text-brand-deep">Advogados</p>
            <div className="gold-accent mt-4 mb-5" />
            <h2 className="font-display display-title max-w-md text-4xl sm:text-5xl">
              Quem responde por cada área.
            </h2>
          </div>
          <p className="max-w-lg text-lg leading-8 text-muted lg:pt-10 animate-fade-up delay-1">
            Formação, OAB e atuação de cada profissional — sem camadas extras
            entre você e quem conduz o caso.
          </p>
        </div>

        <div className="profile-list">
          {lawyers.map((lawyer, index) => {
            const areaMsg = encodeURIComponent(
              `Olá, preciso de orientação jurídica na área de ${lawyer.area}.`
            );
            const areaHref = `https://wa.me/5534999618485?text=${areaMsg}`;

            return (
              <article
                key={lawyer.name}
                className="profile-row group animate-fade-up"
                style={{ animationDelay: `${index * 0.09}s` }}
              >
                {/* Foto */}
                <div className="profile-photo overflow-hidden border border-line">
                  {lawyer.photo ? (
                    <Image
                      src={lawyer.photo}
                      alt={`Foto de ${lawyer.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 168px"
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

                  <h2 className="font-display mt-3 text-3xl leading-tight sm:text-4xl">
                    {lawyer.name}
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                    {lawyer.bio}
                  </p>

                  {/* Área como badge + link WhatsApp */}
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-full border border-brand-deep/14 bg-brand-deep/6 px-3 py-1 text-xs font-semibold text-brand-deep">
                      {lawyer.area}
                    </span>
                    <a
                      href={areaHref}
                      target="_blank"
                      rel={externalLinkRel}
                      className="text-xs font-semibold text-brand transition-colors hover:text-brand-deep border-b border-brand/30 pb-px hover:border-brand-deep"
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

      {/* ── CTA FINAL */}
      <section className="brand-field section-pad text-on-dark">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow text-brand">Dúvida sobre qual advogado procurar?</p>
            <div className="gold-accent mt-4 mb-5" />
            <h2 className="font-display display-title max-w-2xl text-4xl sm:text-5xl">
              Descreva o caso. A equipe indica quem conduz.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-on-dark-muted">
              Não precisa saber em qual área o seu problema se encaixa. Explique
              a situação pelo WhatsApp — e o escritório direciona para o
              advogado certo.
            </p>
          </div>
          <a
            href={contactHref}
            target="_blank"
            rel={externalLinkRel}
            className="btn-primary shrink-0"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
