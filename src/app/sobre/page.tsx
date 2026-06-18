import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/sections/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { TeamPhotoBanner } from "@/components/sections/team-photo-banner";
import {
  contactHref,
  differentiators,
  externalLinkRel,
  institutionalText,
} from "@/lib/site-data";

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

      <TeamPhotoBanner caption="A equipe" showName />

      {/* ── ESSÊNCIA + ALCANCE ─── fundo escuro imersivo */}
      <section className="brand-field section-pad text-on-dark">
        <div className="section-shell grid gap-0 lg:grid-cols-2">

          {/* Essência */}
          <article className="relative overflow-hidden border-b border-white/10 pb-12 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-14">
            {/* Watermark numérico */}
            <span
              className="pointer-events-none absolute right-0 top-0 select-none font-display leading-none text-white/[0.04]"
              style={{ fontSize: "clamp(7rem, 14vw, 12rem)" }}
              aria-hidden="true"
            >
              01
            </span>
            <div className="relative z-10">
              <div className="gold-accent-sm mb-6" />
              <p className="eyebrow text-brand animate-fade-up">Essência</p>
              <h2 className="font-display mt-4 text-4xl leading-tight text-on-dark-soft animate-fade-up delay-1 sm:text-5xl">
                {institutionalText.essenceTitle}
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-on-dark-muted animate-fade-up delay-2">
                {institutionalText.essenceBody}
              </p>
            </div>
          </article>

          {/* Alcance */}
          <article className="relative overflow-hidden pt-12 lg:pl-14 lg:pt-0">
            <span
              className="pointer-events-none absolute right-0 top-0 select-none font-display leading-none text-white/[0.04]"
              style={{ fontSize: "clamp(7rem, 14vw, 12rem)" }}
              aria-hidden="true"
            >
              02
            </span>
            <div className="relative z-10">
              <div className="gold-accent-sm mb-6" />
              <p className="eyebrow text-brand animate-fade-up delay-1">Alcance</p>
              <h2 className="font-display mt-4 text-4xl leading-tight text-on-dark-soft animate-fade-up delay-2 sm:text-5xl">
                {institutionalText.presenceTitle}
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-on-dark-muted animate-fade-up delay-3">
                {institutionalText.presenceBody}
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ── O QUE NOS DEFINE — diferenciadores como cards premium */}
      <section className="surface-alt section-pad">
        <div className="section-shell">
          <div className="editorial-split mb-12 lg:mb-16">
            <div>
              <p className="eyebrow text-brand-deep animate-fade-up">O que nos define</p>
              <div className="gold-accent mt-4 mb-5" />
              <h2 className="font-display display-title max-w-md text-4xl sm:text-5xl animate-fade-up delay-1">
                Especialistas em cada frente.
              </h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-muted lg:pt-10 animate-fade-up delay-2">
              Cada ramo do Direito é conduzido por quem conhece aquela área — não
              por generalistas. Quando o caso cruza áreas, a equipe trabalha em
              conjunto.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
            {differentiators.map((item, index) => (
              <article
                key={item.title}
                className="group relative overflow-hidden border border-line bg-surface p-8 transition-all duration-300 hover:border-[rgba(176,138,69,0.30)] hover:shadow-[0_20px_60px_rgba(14,42,36,0.12)] animate-fade-up"
                style={{ animationDelay: `${0.1 + index * 0.12}s` }}
              >
                {/* Borda dourada à esquerda — aparece no hover */}
                <div className="absolute inset-y-0 left-0 w-[3px] bg-brand scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

                {/* Número decorativo */}
                <p className="font-display text-[3.5rem] leading-none text-brand/20 transition-colors duration-300 group-hover:text-brand/35">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="font-display mt-4 text-2xl leading-tight sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL */}
      <section className="brand-field section-pad text-on-dark">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow text-brand">Contato</p>
            <div className="gold-accent mt-4 mb-5" />
            <h2 className="font-display display-title max-w-2xl text-4xl sm:text-5xl">
              Quer entender como podemos ajudar no seu caso?
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-on-dark-muted">
              Descreva a situação pelo WhatsApp. A equipe indica o advogado
              responsável pela sua área e orienta os próximos passos.
            </p>
          </div>
          <a
            href={contactHref}
            target="_blank"
            rel={externalLinkRel}
            className="btn-primary shrink-0"
          >
            Falar com o escritório
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
