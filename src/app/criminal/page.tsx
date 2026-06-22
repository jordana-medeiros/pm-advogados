import type { Metadata } from "next";
import { preload } from "react-dom";
import Link from "next/link";
import { SiteImage } from "@/components/ui/site-image";
import { FaqJsonLd } from "@/components/seo/json-ld";
import { SectionKicker } from "@/components/ui/section-kicker";
import { FloatingWhatsapp } from "@/components/criminal/floating-whatsapp";
import { DifferentiatorIcon } from "@/components/criminal/differentiator-icon";
import {
  criminalAttendanceSteps,
  criminalDifferentiators,
  criminalEmergencyServices,
  criminalFaqs,
  criminalHeroTrustItems,
  criminalLandingDescription,
  criminalLandingTitle,
  criminalOgImage,
  criminalOgImageHeight,
  criminalOgImageWidth,
} from "@/lib/criminal-landing-data";
import {
  brandLogos,
  criminalContactHref,
  externalLinkRel,
  images,
  lawyers,
  siteName,
  whatsappPrimary,
} from "@/lib/site-data";

const giuliano = lawyers[0];
const jordana = lawyers[1];

export const metadata: Metadata = {
  title: { absolute: criminalLandingTitle },
  description: criminalLandingDescription,
  alternates: { canonical: "/criminal" },
  openGraph: {
    title: criminalLandingTitle,
    description: criminalLandingDescription,
    url: "/criminal",
    type: "website",
    locale: "pt_BR",
    siteName,
    images: [
      {
        url: criminalOgImage,
        width: criminalOgImageWidth,
        height: criminalOgImageHeight,
        alt: "Defesa criminal de urgência — Pereira e Medeiros Advogados",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: criminalLandingTitle,
    description: criminalLandingDescription,
    images: [criminalOgImage],
  },
};

function CriminalCtaLink({
  children,
  className = "",
  pulse = false,
}: {
  children: React.ReactNode;
  className?: string;
  pulse?: boolean;
}) {
  return (
    <a
      href={criminalContactHref}
      target="_blank"
      rel={externalLinkRel}
      className={`${pulse ? "btn-pulse-urgency " : ""}${className}`.trim()}
    >
      {children}
    </a>
  );
}

function LandingHeader() {
  return (
    <header className="w-full py-4 border-b border-white/5 bg-[#061d18]/90 backdrop-blur-md sticky top-0 z-50">
      <div className="section-shell flex items-center justify-between gap-3">
        <Link href="/criminal" className="inline-flex items-center min-w-0 shrink-0">
          <SiteImage
            src={brandLogos.white}
            alt={siteName}
            width={220}
            height={72}
            priority
            className="h-10 w-auto sm:h-11 lg:h-12"
          />
        </Link>
        <a
          href={criminalContactHref}
          target="_blank"
          rel={externalLinkRel}
          className="text-[0.68rem] font-bold tracking-wider text-brand uppercase border border-brand/30 px-3 py-1.5 rounded-sm hover:bg-brand/10 hover:border-brand transition-all sm:text-xs sm:px-4 sm:py-2 min-h-[var(--touch-target)] inline-flex items-center justify-center shrink-0"
        >
          <span className="sm:hidden">Plantão 24h</span>
          <span className="hidden sm:inline">Plantão 24h: {whatsappPrimary}</span>
        </a>
      </div>
    </header>
  );
}

export default function CriminalLandingPage() {
  preload(images.hero.criminalHero, { as: "image", fetchPriority: "high" });

  return (
    <div className="criminal-landing min-h-screen bg-[#061d18] text-foreground flex flex-col font-sans">
      <a href="#conteudo-principal" className="skip-link">
        Ir para o conteúdo
      </a>
      <FaqJsonLd items={criminalFaqs} />
      <LandingHeader />

      <main id="conteudo-principal" className="flex-1">
        {/* ── HERO ── */}
        <section className="brand-field text-on-dark overflow-hidden relative border-b border-white/5">
          <div className="absolute inset-0 z-0 opacity-25 lg:opacity-35">
            <SiteImage
              src={images.hero.criminalHero}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
              aria-hidden
            />
            <div className="absolute inset-0 bg-[#061d18]/75 mix-blend-multiply" />
            <div className="absolute inset-0 bg-[#0e2a24]/45 mix-blend-color" />
          </div>

          <div className="section-shell relative z-10 hero-min-h-criminal flex flex-col items-center justify-center text-center px-4 py-10 sm:py-12 lg:py-14">
            <h1 className="font-display balance hero-title max-w-4xl text-on-dark animate-fade-up delay-1">
              <span className="criminal-title-accent">Preso em flagrante,</span> investigação ou intimação?
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-on-dark-muted sm:text-lg sm:leading-8 animate-fade-up delay-2">
              Não responda a perguntas, não preste depoimento e não assine nada sem advogado. Proteja seus direitos desde o primeiro minuto.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 w-full sm:flex-row sm:justify-center animate-fade-up delay-3">
              <CriminalCtaLink pulse className="btn-primary w-full sm:w-auto text-center justify-center">
                <span className="sm:hidden">Acionar Advogado de Plantão</span>
                <span className="hidden sm:inline">Falar com Advogado Criminalista de Plantão</span>
              </CriminalCtaLink>
            </div>
            <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 text-sm text-on-dark-muted animate-fade-up delay-3">
              {criminalHeroTrustItems.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── URGÊNCIA 24H ── */}
        <section className="bg-[#ff7675]/5 border-y border-[#ff7675]/15 py-6 text-on-dark">
          <div className="section-shell flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-3 min-w-0">
              <span className="relative flex h-3.5 w-3.5 shrink-0">
                <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500" />
              </span>
              <p className="text-sm font-semibold tracking-wide uppercase sm:text-base text-balance">
                Plantão de Urgência Criminal 24 Horas Ativo
              </p>
            </div>
            <a
              href={criminalContactHref}
              target="_blank"
              rel={externalLinkRel}
              className="w-full md:w-auto text-center bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-6 py-2.5 rounded-sm transition-all text-xs uppercase tracking-wider min-h-[var(--touch-target)] inline-flex items-center justify-center shrink-0"
            >
              Acionar Defesa Imediata
            </a>
          </div>
        </section>

        {/* ── ONDE ATUAMOS ── */}
        <section className="section-shell section-gap text-on-dark">
          <div className="text-center max-w-2xl mx-auto">
            <SectionKicker label="Onde Atuamos" centered />
            <h2 className="font-display display-title text-balance">
              Atendimento de
              <br />
              <span className="criminal-title-accent">Emergência</span>
            </h2>
            <p className="mt-3 text-sm text-on-dark-muted leading-6 sm:text-base sm:leading-7">
              Intervenção imediata nas situações mais críticas — com foco na sua liberdade e nos seus direitos.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-start lg:gap-6">
            <div className="min-w-0 lg:relative lg:col-span-5 xl:col-span-4">
              <div className="relative overflow-hidden rounded-sm border border-brand/25 shadow-[0_24px_60px_rgba(0,0,0,0.35)] aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]">
                <SiteImage
                  src={images.criminal.emergencia}
                  alt="Atendimento criminal de emergência"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061d18] via-[#061d18]/25 to-transparent" />
                <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-[#061d18] to-transparent lg:block" />
              </div>

              <p className="mt-3 rounded-sm border border-brand/30 bg-[#061d18]/92 px-4 py-3 text-sm font-semibold leading-relaxed text-on-dark-soft lg:absolute lg:bottom-6 lg:left-6 lg:right-6 lg:mt-0 lg:backdrop-blur-sm">
                Cada minuto conta: não preste depoimento nem assine documentos sem advogado.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7 lg:-ml-8 lg:pt-8 xl:col-span-8 xl:-ml-12 xl:pt-12 relative z-10 min-w-0">
              {criminalEmergencyServices.map((service) => (
                <div
                  key={service.title}
                  className="rounded-sm border border-white/5 bg-surface-strong/30 px-4 py-3.5 transition-all hover:-translate-y-0.5 hover:border-brand/20 hover:bg-surface-strong/45"
                >
                  <h3 className="text-sm font-bold text-on-dark-soft sm:text-base">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-on-dark-muted sm:text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── QUEM CONDUZ ── */}
        <section className="section-shell section-gap text-on-dark border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <SectionKicker label="Quem Conduz Sua Defesa" centered />
            <h2 className="font-display display-title text-balance">
              Sócios Especialistas em
              <br />
              <span className="criminal-title-accent">Direito Criminal</span>
            </h2>
            <p className="mt-4 text-base text-on-dark-muted leading-7">
              Sua liberdade e seus direitos serão defendidos diretamente pelos sócios do escritório, sem intermediários.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto items-start">
            <div className="flex flex-col gap-5 p-5 sm:flex-row sm:gap-6 sm:p-6 bg-surface-strong/30 border border-white/5 rounded-sm hover:border-brand/20 transition-all h-full">
              <div className="criminal-counsel-photo shrink-0">
                <SiteImage
                  src={giuliano.photo}
                  alt={`Dr. ${giuliano.name}`}
                  fill
                  sizes="(max-width: 640px) 248px, 144px"
                  className="criminal-counsel-photo-image"
                />
              </div>
              <div className="flex flex-col justify-between h-full min-w-0">
                <div>
                  <h3 className="font-display text-base sm:text-lg text-on-dark font-semibold text-balance">
                    Dr. {giuliano.name}
                  </h3>
                  <p className="text-xs text-brand font-medium mt-1">Sócio Fundador — {giuliano.oab}</p>
                  <p className="mt-3 text-xs text-on-dark-muted leading-relaxed">
                    Mais de 15 anos de atuação jurídica estratégica. Graduado pela UEMG e pós-graduado em Direito Penal e Processual Penal pela Faculdade Damásio de Jesus. Coordenador de centenas de defesas criminais de alta complexidade.
                  </p>
                </div>
                <div className="mt-4 sm:mt-6">
                  <CriminalCtaLink className="text-xs font-bold text-brand hover:text-brand-hover transition-colors inline-flex items-center gap-1 uppercase tracking-wider">
                    Falar com Dr. Giuliano →
                  </CriminalCtaLink>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 p-5 sm:flex-row sm:gap-6 sm:p-6 bg-surface-strong/30 border border-white/5 rounded-sm hover:border-brand/20 transition-all h-full">
              <div className="criminal-counsel-photo shrink-0">
                <SiteImage
                  src={images.criminal.jordana}
                  alt={`Dra. ${jordana.name}`}
                  fill
                  sizes="(max-width: 640px) 248px, 144px"
                  className="criminal-counsel-photo-image"
                />
              </div>
              <div className="flex flex-col justify-between h-full min-w-0">
                <div>
                  <h3 className="font-display text-base sm:text-lg text-on-dark font-semibold text-balance">
                    Dra. {jordana.name}
                  </h3>
                  <p className="text-xs text-brand font-medium mt-1">Sócia Especialista — {jordana.oab}</p>
                  <p className="mt-3 text-xs text-on-dark-muted leading-relaxed">
                    Especialista em Direito Penal e Execução Penal (EBRADI). Graduada pela UEMG, com atuação focada em prisões em flagrante, inquéritos policiais e sustentação oral nos tribunais.
                  </p>
                </div>
                <div className="mt-4 sm:mt-6">
                  <CriminalCtaLink className="text-xs font-bold text-brand hover:text-brand-hover transition-colors inline-flex items-center gap-1 uppercase tracking-wider">
                    Falar com Dra. Jordana →
                  </CriminalCtaLink>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 max-w-5xl mx-auto criminal-counsel-banner">
            <div className="criminal-counsel-banner-media">
              <SiteImage
                src={images.criminal.jordanaEGiuliano}
                alt="Sócios Dr. Giuliano e Dra. Jordana"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1024px"
                className="criminal-counsel-banner-image"
              />
            </div>
            <div className="criminal-counsel-banner-panel">
              <div className="min-w-0">
                <p className="text-xs font-bold text-brand uppercase tracking-wider">Defesa Sem Intermediários</p>
                <h3 className="font-display text-lg text-white font-semibold text-balance">
                  Giuliano Medeiros & Jordana Carvalho
                </h3>
              </div>
              <CriminalCtaLink className="btn-primary py-2 text-xs uppercase shrink-0 justify-center w-full sm:w-auto">
                Falar com os Especialistas
              </CriminalCtaLink>
            </div>
          </div>
        </section>

        {/* ── DIFERENCIAIS ── */}
        <section className="surface-alt section-pad border-y border-white/5 text-on-dark">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
            <div className="min-w-0">
              <SectionKicker label="Diferenciais" />
              <h2 className="font-display display-title max-w-md">
                Experiência,
                <br />
                Agilidade e
                <br />
                <span className="criminal-title-accent">Sigilo Absoluto</span>
              </h2>
              <p className="mt-5 text-base leading-7 text-on-dark-muted max-w-lg">
                Estrutura sólida voltada à defesa criminal ágil, conduzida exclusivamente por quem entende da matéria.
              </p>
              <CriminalCtaLink className="btn-primary mt-6 inline-flex">
                Falar com Advogado de Plantão
              </CriminalCtaLink>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 min-w-0">
              {criminalDifferentiators.map((item) => (
                <div key={item.title} className="metric-card criminal-metric-card">
                  <DifferentiatorIcon name={item.icon} />
                  <p className="font-display text-lg text-brand font-semibold leading-none">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs text-on-dark-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMO FUNCIONA ── */}
        <section className="section-shell section-gap text-on-dark">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionKicker label="Como Funciona" centered />
            <h2 className="font-display display-title text-balance">
              Passo a Passo do
              <br />
              <span className="criminal-title-accent">Atendimento</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {criminalAttendanceSteps.map((step) => (
              <div
                key={step.label}
                className="overflow-hidden rounded-sm border border-white/5 bg-surface-strong/20 relative"
              >
                <div className="relative aspect-[16/10] border-b border-white/5">
                  <SiteImage
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative p-6 pt-7">
                  <span className="absolute -top-3 left-6 bg-brand text-[#061d18] font-bold text-xs px-2.5 py-1 rounded-sm uppercase">
                    {step.label}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-on-dark-soft mt-2">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-on-dark-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <CriminalCtaLink pulse className="btn-primary inline-flex justify-center">
              Acionar Advogado de Plantão Agora
            </CriminalCtaLink>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section-shell section-gap border-t border-white/5 text-on-dark">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
            <div className="min-w-0">
              <SectionKicker label="FAQ" />
              <h2 className="font-display display-title max-w-md text-balance">
                Dúvidas sobre
                <br />
                <span className="criminal-title-accent">Defesa Criminal</span>
              </h2>
            </div>
            <div className="faq-container min-w-0">
              {criminalFaqs.map((item) => (
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
      </main>

      <footer className="w-full py-8 border-t border-white/5 bg-[#041512] text-on-dark">
        <div className="section-shell flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left min-w-0">
            <p className="text-xs text-on-dark-muted">
              © {new Date().getFullYear()} {siteName}. Todos os direitos reservados.
            </p>
            <p className="mt-1 text-[0.62rem] text-on-dark-faint uppercase tracking-wider text-balance">
              {giuliano.name} — {giuliano.oab} | {jordana.name} — {jordana.oab}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-on-dark-muted shrink-0">
            <Link href="/" className="hover:text-brand transition-colors">
              Site Principal
            </Link>
            <span className="text-white/10" aria-hidden="true">|</span>
            <Link href="/politica-de-privacidade" className="hover:text-brand transition-colors">
              Privacidade
            </Link>
            <span className="text-white/10" aria-hidden="true">|</span>
            <Link href="/aviso-legal" className="hover:text-brand transition-colors">
              Aviso Legal
            </Link>
          </div>
        </div>
      </footer>
      <FloatingWhatsapp />
    </div>
  );
}
