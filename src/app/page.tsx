import Image from "next/image";
import Link from "next/link";

import { BlogCard } from "@/components/sections/blog-card";
import { CriminalSpecialtyPanel } from "@/components/sections/criminal-specialty-panel";
import { JsonLd } from "@/components/seo/json-ld";
import { SiteShell } from "@/components/layout/site-shell";
import { articles, blogIntro } from "@/lib/articles";
import {
  contactHref,
  externalLinkRel,
  faqItems,
  images,
  lawyers,
  teamIntro,
  practiceAreas,
  practiceAreasIntro,
  whenSeekItems,
  whenSeekIntro,
  criminalAuthority,
  criminalHighlightIntro,
} from "@/lib/site-data";

const heroHighlights = [
  {
    title: "9 ramos do Direito",
    description: "Atuação para diferentes necessidades.",
    href: "/areas-de-atuacao",
  },
  {
    title: "5 advogados",
    description: "Cada caso conduzido por quem entende da área.",
    href: "/equipe",
  },
  {
    title: "Há mais de 15 anos",
    description: "Experiência construída na prática, caso a caso.",
  },
] as const;

export default function Home() {
  return (
    <SiteShell>
      <JsonLd includeFaq />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-overlap brand-field text-on-dark overflow-hidden relative">
        {/* Imagem de Fundo (Lady Justice) - lateral direita com colorização verde-marca */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] z-0">
          <Image
            src={images.hero.ladyJustice}
            alt="Símbolo da Justiça — Pereira e Medeiros Advocacia"
            fill
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover object-right select-none pointer-events-none opacity-[0.35] lg:opacity-[0.50] grayscale"
            priority
          />
          {/* Camada 1: Filtro de cor verde puro sobre a estátua */}
          <div className="absolute inset-0 bg-[#0e2a24] mix-blend-color pointer-events-none" />
          {/* Camada 2: Multiplicação para escurecer realces e fundir com o verde-escuro do fundo */}
          <div className="absolute inset-0 bg-[#0e2a24]/55 mix-blend-multiply pointer-events-none" />
        </div>

        {/* Degrades de transição */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-brand-deep/75 lg:hidden" />
          
          <div 
            className="hidden lg:block absolute inset-y-0 left-0 w-full"
            style={{ 
              background: 'linear-gradient(to right, transparent 0%, transparent 25%, #0e2a24 35%, #0e2a24 40%, transparent 60%)' 
            }} 
          />
          <div className="hidden lg:block absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#061d18] to-transparent" />
          <div className="hidden lg:block absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0e2a24] to-transparent" />
          <div className="hidden lg:block absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-[#061d18] to-transparent" />
        </div>

        <div className="section-shell relative z-10 hero-min-h grid gap-12 pb-16 pt-36 hero-shell sm:pb-20 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:pt-44">
          <div className="min-w-0">
            <p className="eyebrow text-brand animate-fade-up">Pereira e Medeiros</p>
            <h1 className="font-display balance hero-title mt-5 max-w-3xl text-on-dark animate-fade-up delay-1">
              Seu problema jurídico não pode esperar.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-on-dark-muted sm:text-lg sm:leading-8 animate-fade-up delay-2">
              Advogados preparados para agir com rapidez quando o momento exige
              decisão. Atendimento direto pelo WhatsApp. Atuação em Minas
              Gerais, Goiás e em todo o Brasil.
            </p>
            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row animate-fade-up delay-3">
              <a
                href={contactHref}
                target="_blank"
                rel={externalLinkRel}
                id="hero-cta-whatsapp"
                className="btn-primary"
              >
                Falar com um advogado
              </a>
              <Link
                href="/areas-de-atuacao"
                id="hero-cta-areas"
                className="btn-ghost"
              >
                Conhecer áreas de atuação
              </Link>
            </div>

            <CriminalSpecialtyPanel compact className="mt-8 lg:hidden animate-fade-up delay-4" />
          </div>

          <CriminalSpecialtyPanel className="hidden lg:flex self-end animate-fade-up delay-2" />
        </div>
      </section>

      {/* ── HIGHLIGHTS ─────────────────────────────────────────── */}
      <section
        aria-label="Destaques do escritório"
        className="hero-highlights relative z-10"
      >
        <div className="section-shell hero-highlights-inner">
          <div className="hero-highlights-grid">
            {heroHighlights.map((item) => {
              const content = (
                <div>
                  <p className="hero-highlight-number">{item.title}</p>
                  <p className="hero-highlight-label">{item.description}</p>
                </div>
              );

              if ("href" in item && item.href) {
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="hero-highlight-item group block"
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <article key={item.title} className="hero-highlight-item">
                  {content}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── QUANDO PROCURAR ──────────────────────── */}
      <section className="section-shell section-gap grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="eyebrow text-brand-deep">Quando procurar</p>
          <div className="gold-accent mt-4 mb-5" />
          <h2 className="font-display display-title max-w-md text-4xl sm:text-5xl">
            {whenSeekIntro.title}
          </h2>
          <div className="mt-6 max-w-md space-y-4 text-base leading-7 text-muted">
            {whenSeekIntro.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="border-y border-line">
          {whenSeekItems.map((item, index) => (
            <article
              key={item.title}
              className="group grid gap-5 border-b border-line py-7 last:border-b-0 transition-colors hover:bg-surface-strong sm:grid-cols-[3.5rem_1fr] sm:px-4"
            >
              <span className="font-display text-4xl leading-none text-brand/60 transition-colors group-hover:text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl leading-tight sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── TODAS AS ÁREAS ───────────────────────── */}
      <section className="surface-mint section-pad">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-brand-deep">Áreas de atuação</p>
            <div className="gold-accent mt-4 mb-5" />
            <h2 className="font-display display-title max-w-md text-4xl sm:text-5xl">
              {practiceAreasIntro.title}
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-muted">
              {practiceAreasIntro.description}
            </p>
            <Link href="/areas-de-atuacao" className="mt-8 link-arrow">
              Ver todas as áreas →
            </Link>
          </div>
          <div className="border-y border-line">
            {practiceAreas.map((area, index) => (
              <div
                key={area.name}
                className="group grid gap-3 border-b border-line py-5 transition-colors hover:bg-white last:border-b-0 sm:grid-cols-[2.5rem_1fr_1.2fr] sm:items-center sm:px-4"
              >
                <span className="text-sm font-mono text-brand/50 transition-colors group-hover:text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-2xl leading-none sm:text-[1.65rem]">
                  {area.name}
                </span>
                <span className="text-sm leading-6 text-muted">
                  {area.summary}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CRIMINAL DESTAQUE ────────────────────── */}
      <section className="brand-field section-pad text-on-dark">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow text-brand">Direito Criminal</p>
            <div className="gold-accent mt-4 mb-5" />
            <h2 className="font-display display-title max-w-lg text-4xl sm:text-5xl">
              {criminalHighlightIntro.title}
            </h2>
            <div className="mt-6 max-w-md space-y-4 text-base leading-7 text-on-dark-muted">
              {criminalHighlightIntro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <a
              href={contactHref}
              target="_blank"
              rel={externalLinkRel}
              className="btn-primary mt-8 inline-flex"
            >
              {criminalHighlightIntro.cta}
            </a>
          </div>
          <div className="grid gap-3">
            {criminalAuthority.map((item, index) => (
              <div key={item.title} className="step-item sm:grid-cols-[3rem_1fr] sm:items-start">
                <p className="font-display text-3xl leading-none text-brand">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <p className="text-base font-semibold text-on-dark-soft">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-on-dark-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EQUIPE ───────────────────────────────────────────────── */}
      <section className="surface-alt section-pad">
        <div className="section-shell">
          <div className="editorial-split mb-10 lg:mb-14">
            <div>
              <p className="eyebrow text-brand-deep">Equipe</p>
              <div className="gold-accent mt-4 mb-5" />
              <h2 className="font-display display-title max-w-md text-4xl sm:text-5xl">
                {teamIntro.title}
              </h2>
            </div>
            <div className="lg:pt-8">
              <p className="max-w-lg text-base leading-7 text-muted">
                {teamIntro.description}
              </p>
              <Link href="/equipe" className="mt-8 link-arrow">
                Conhecer a equipe →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-5 lg:gap-6">
            {lawyers.map((lawyer) => (
              <Link
                key={lawyer.name}
                href="/equipe"
                className="group min-w-0"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-surface-strong">
                  {lawyer.photo ? (
                    <Image
                      src={lawyer.photo}
                      alt={`Foto de ${lawyer.name}`}
                      fill
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 14vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                  ) : null}
                  {/* Overlay com nome no hover */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-deep/80 via-brand-deep/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-3">
                    <p className="text-[0.6rem] font-bold tracking-[0.18em] text-brand uppercase leading-none">{lawyer.oab}</p>
                    <p className="mt-1 font-display text-base leading-tight text-white">{lawyer.name}</p>
                  </div>
                </div>
                <p className="mt-4 text-[0.62rem] font-bold tracking-[0.2em] text-brand uppercase">
                  {lawyer.oab}
                </p>
                <h3 className="font-display mt-2 text-xl leading-tight sm:text-2xl">
                  {lawyer.name}
                </h3>
                <p className="mt-2 text-sm leading-snug text-muted">
                  {lawyer.area}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ───────────────────────────────────────────────────── */}
      <section className="bg-surface section-pad border-t border-line">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand-deep">Blog</p>
            <div className="gold-accent mt-4 mb-5" />
            <h2 className="font-display display-title text-4xl sm:text-5xl">
              {blogIntro.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted">
              {blogIntro.description}
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>

          <Link href="/blog" className="mt-10 link-arrow">
            Ver todos os posts →
          </Link>
        </div>
      </section>

      {/* ── CTA CONTATO ──────────────────────────── */}
      <section className="brand-field section-pad text-on-dark">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow text-brand">Contato</p>
            <div className="gold-accent mt-4 mb-5" />
            <h2 className="font-display display-title max-w-3xl text-4xl sm:text-5xl">
              Seu caso não precisa esperar.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-on-dark-muted">
              Fale agora com nossa equipe e receba orientação jurídica adequada
              para sua situação.
            </p>
          </div>
          <a
            href={contactHref}
            target="_blank"
            rel={externalLinkRel}
            className="btn-primary shrink-0"
          >
            Conversar pelo WhatsApp
          </a>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="section-shell section-gap">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow text-brand-deep">Perguntas frequentes</p>
            <div className="gold-accent mt-4 mb-5" />
            <h2 className="font-display display-title max-w-md text-4xl sm:text-5xl">
              Respostas diretas.
            </h2>
          </div>
          <div className="faq-container">
            {faqItems.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>
                  {item.question}
                  <span className="faq-icon" aria-hidden="true">+</span>
                </summary>
                <div className="faq-body">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
