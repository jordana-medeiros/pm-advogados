import { preload } from "react-dom";

import { SiteImage } from "@/components/ui/site-image";
import Link from "next/link";

import { BlogCard } from "@/components/sections/blog-card";
import { HeroAsidePanel } from "@/components/sections/hero-aside-panel";
import { InstitutionalPortrait } from "@/components/sections/institutional-portrait";
import { LawyerPhoto } from "@/components/sections/lawyer-photo";
import { CopyEmphasis } from "@/components/ui/copy-emphasis";
import { JsonLd } from "@/components/seo/json-ld";
import { SiteShell } from "@/components/layout/site-shell";
import { articles, blogIntro, sortArticlesByDate } from "@/lib/articles";
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
  homeAreasHref,
  homeAreasSectionId,
} from "@/lib/site-data";

const heroHighlights = [
  {
    title: "9 ramos do Direito",
    description: "Atuação para diferentes necessidades.",
    href: homeAreasHref,
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
  preload(images.hero.ladyJustice, { as: "image", fetchPriority: "high" });

  return (
    <SiteShell>
      <JsonLd includeFaq />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-overlap brand-field text-on-dark overflow-hidden relative">
        {/* Imagem de Fundo (Lady Justice) - lateral direita com colorização verde-marca */}
        <div className="absolute inset-x-0 top-0 z-0 h-[min(52%,24rem)] lg:inset-y-0 lg:right-0 lg:left-auto lg:h-auto lg:w-[65%]">
          <SiteImage
            src={images.hero.ladyJustice}
            alt="Símbolo da Justiça — Pereira e Medeiros Advocacia"
            fill
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="hero-lady-justice-image object-cover object-[88%_22%] select-none pointer-events-none opacity-[0.55] grayscale lg:object-right lg:opacity-[0.50]"
            priority
          />
          <div className="absolute inset-0 bg-[#0e2a24] mix-blend-color pointer-events-none max-lg:opacity-75" />
          <div className="absolute inset-0 bg-[#0e2a24]/55 mix-blend-multiply pointer-events-none max-lg:bg-[#0e2a24]/35" />
        </div>

        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="hero-lady-justice-overlay-mobile absolute inset-0 lg:hidden" />
          <div
            className="hidden lg:block absolute inset-y-0 left-0 w-full"
            style={{
              background:
                "linear-gradient(to right, transparent 0%, transparent 25%, #0e2a24 35%, #0e2a24 40%, transparent 60%)",
            }}
          />
          <div className="hidden lg:block absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#061d18] to-transparent" />
          <div className="hidden lg:block absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0e2a24] to-transparent" />
          <div className="hidden lg:block absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-[#061d18] to-transparent" />
        </div>

        <div className="section-shell relative z-10 hero-min-h-home grid gap-8 pb-16 hero-shell sm:gap-12 sm:pb-28 lg:grid-cols-[1fr_0.78fr] lg:items-end lg:pb-32">
          <div className="min-w-0">
            <h1 className="font-display balance hero-title max-w-3xl text-on-dark animate-fade-up">
              Seu problema jurídico{" "}
              <span className="text-brand">não pode esperar.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-on-dark-muted sm:mt-7 sm:text-lg sm:leading-8 animate-fade-up delay-1">
              Advogados preparados para agir com rapidez quando o momento exige
              decisão. Atendimento direto pelo <CopyEmphasis>WhatsApp</CopyEmphasis>.
              Atuação em <CopyEmphasis>Minas Gerais, Goiás</CopyEmphasis> e em todo o
              Brasil.
            </p>
            <div className="mt-6 flex flex-col items-start gap-2.5 sm:mt-9 sm:flex-row sm:gap-3 animate-fade-up delay-2">
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
                href={homeAreasHref}
                id="hero-cta-areas"
                className="btn-ghost"
              >
                Conhecer áreas de atuação
              </Link>
            </div>

            <HeroAsidePanel compact className="mt-5 sm:mt-8 lg:hidden animate-fade-up delay-3" />
          </div>

          <HeroAsidePanel className="hidden lg:flex self-end animate-fade-up delay-2" />
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
      <section className="section-shell section-gap text-on-dark">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.72fr] lg:items-start lg:gap-14">
          <div className="min-w-0">
            <p className="eyebrow text-brand">Quando procurar</p>
            <div className="gold-accent mt-3 mb-4 sm:mt-4 sm:mb-5" />
            <h2 className="font-display display-title max-w-xl">
              {whenSeekIntro.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-on-dark-muted sm:mt-6">
              {whenSeekIntro.paragraphs[0]}
            </p>

            <ul className="mt-6 space-y-4 sm:mt-8 sm:space-y-6">
              {whenSeekItems.map((item, index) => (
                <li
                  key={item.title}
                  className="grid gap-3 sm:grid-cols-[2.5rem_1fr] sm:items-start"
                >
                  <span className="font-display text-2xl leading-none text-brand/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl leading-tight text-on-dark-soft sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-on-dark-muted">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <aside className="min-w-0 lg:sticky lg:top-28">
            <InstitutionalPortrait variant="aside" className="max-lg:mt-2" />
          </aside>
        </div>
      </section>

      {/* ── TODAS AS ÁREAS ───────────────────────── */}
      <section
        id={homeAreasSectionId}
        className="brand-field section-pad text-on-dark scroll-anchor"
      >
        <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div>
            <p className="eyebrow text-brand">Áreas de atuação</p>
            <div className="gold-accent mt-3 mb-4 sm:mt-4 sm:mb-5" />
            <h2 className="font-display display-title max-w-md">
              {practiceAreasIntro.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-on-dark-muted sm:mt-6">
              {practiceAreasIntro.description}
            </p>
          </div>
          <div className="border-y border-white/10">
            {practiceAreas.map((area, index) => (
              <div
                key={area.name}
                className="group grid gap-2 border-b border-white/10 py-4 transition-colors hover:bg-white/[0.04] last:border-b-0 sm:grid-cols-[2.5rem_1fr_1.2fr] sm:items-center sm:gap-3 sm:px-4 sm:py-5"
              >
                <span className="text-sm font-mono text-brand/50 transition-colors group-hover:text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-2xl leading-none text-on-dark-soft sm:text-[1.65rem]">
                  {area.name}
                </span>
                <span className="text-sm leading-6 text-on-dark-muted">
                  {area.summary}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CRIMINAL DESTAQUE ────────────────────── */}
      <section className="section-pad text-on-dark">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div>
            <p className="eyebrow text-brand">Direito Criminal</p>
            <div className="gold-accent mt-3 mb-4 sm:mt-4 sm:mb-5" />
            <h2 className="font-display display-title max-w-lg">
              {criminalHighlightIntro.title}
            </h2>
            <div className="mt-4 max-w-md space-y-3 text-base leading-7 text-on-dark-muted sm:mt-6 sm:space-y-4">
              {criminalHighlightIntro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <a
              href={contactHref}
              target="_blank"
              rel={externalLinkRel}
              className="btn-primary mt-6 inline-flex sm:mt-8"
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
      <section className="brand-field section-pad text-on-dark">
        <div className="section-shell">
          <div className="mb-6 lg:mb-14">
            <p className="eyebrow text-brand">Equipe</p>
            <div className="gold-accent mt-3 mb-4 sm:mt-4 sm:mb-5" />
            <h2 className="font-display display-title max-w-xl">
              {teamIntro.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-on-dark-muted sm:mt-8">
              {teamIntro.description}
            </p>
            <Link href="/equipe" className="link-arrow mt-5 inline-flex sm:mt-8">
              Conhecer a equipe →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-5 lg:gap-6">
            {lawyers.map((lawyer) => (
              <Link
                key={lawyer.name}
                href="/equipe"
                className="group min-w-0"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-surface-strong">
                  {lawyer.photo ? (
                    <LawyerPhoto
                      src={lawyer.photo}
                      alt={`Foto de ${lawyer.name}`}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                  ) : null}
                  {/* Overlay com nome no hover */}
                  <div className="absolute inset-0 hidden flex-col justify-end bg-gradient-to-t from-brand-deep/80 via-brand-deep/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:flex p-3">
                    <p className="text-[0.6rem] font-bold tracking-[0.18em] text-brand uppercase leading-none">{lawyer.oab}</p>
                    <p className="mt-1 font-display text-base leading-tight text-white">{lawyer.name}</p>
                  </div>
                </div>
                <p className="mt-3 text-[0.62rem] font-bold tracking-[0.2em] text-brand uppercase sm:mt-4">
                  {lawyer.oab}
                </p>
                <h3 className="font-display mt-2 text-xl leading-tight sm:text-2xl">
                  {lawyer.name}
                </h3>
                <p className="mt-2 text-sm leading-snug text-on-dark-muted">
                  {lawyer.area}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ───────────────────────────────────────────────────── */}
      <section className="section-pad border-t border-white/10">
        <div className="section-shell text-on-dark">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand">Blog</p>
            <div className="gold-accent mt-3 mb-4 sm:mt-4 sm:mb-5" />
            <h2 className="font-display display-title">
              {blogIntro.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-on-dark-muted sm:mt-6">
              {blogIntro.description}
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {sortArticlesByDate(articles)
              .slice(0, 3)
              .map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>

          <Link href="/blog" className="mt-6 link-arrow sm:mt-10">
            Ver todos os posts →
          </Link>
        </div>
      </section>

      {/* ── CTA CONTATO ──────────────────────────── */}
      <section className="brand-field section-pad text-on-dark">
        <div className="section-shell grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-8">
          <div>
            <p className="eyebrow text-brand">Contato</p>
            <div className="gold-accent mt-3 mb-4 sm:mt-4 sm:mb-5" />
            <h2 className="font-display display-title max-w-3xl">
              Seu caso <span className="text-brand">não precisa esperar.</span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-on-dark-muted sm:mt-6">
              Fale agora com nossa equipe e receba{" "}
              <CopyEmphasis>orientação jurídica adequada</CopyEmphasis> para sua
              situação.
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
      <section className="section-shell section-gap section-pad-end text-on-dark">
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
          <div>
            <p className="eyebrow text-brand">Perguntas frequentes</p>
            <div className="gold-accent mt-3 mb-4 sm:mt-4 sm:mb-5" />
            <h2 className="font-display display-title max-w-md">
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
