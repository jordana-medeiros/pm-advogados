import Image from "next/image";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { SiteShell } from "@/components/site-shell";
import {
  addresses,
  contactHref,
  contactHrefSecondary,
  externalLinkRel,
  faqItems,
  lawyers,
  practiceAreas,
  telPrimaryHref,
  telSecondaryHref,
  whatsappPrimary,
  whatsappSecondary,
  whenSeekItems,
  criminalAuthority,
} from "@/lib/site-data";

const method = [
  "Ouvir o caso sem julgamento prévio.",
  "Analisar documentos, prazos e riscos.",
  "Definir a estratégia e o próximo passo.",
];

const statsBar = [
  {
    label: "Áreas de atuação",
    value: "9 especialidades",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 text-brand" aria-hidden="true">
        <path d="M3 6h18M3 12h18M3 18h12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Abrangência",
    value: "Todo o território nacional",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 text-brand" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9z" />
        <path d="M3 12h18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Atendimento",
    value: "Direto por WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 text-brand" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <SiteShell>
      <JsonLd includeFaq />

      {/* ── HERO ─────────────────────────────────── */}
      <section className="-mt-24 brand-field text-[#fafafa] overflow-hidden relative">
        {/* Imagem de Fundo (Lady Justice) - lateral direita com colorização verde-marca */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] z-0">
          <Image
            src="/images/lady-justice.webp"
            alt="Símbolo da Justiça — Pereira e Medeiros Advocacia"
            fill
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover object-right select-none pointer-events-none opacity-[0.55] lg:opacity-[0.70] grayscale"
            priority
          />
          {/* Camada 1: Filtro de cor verde puro sobre a estátua */}
          <div className="absolute inset-0 bg-[#0e2a24] mix-blend-color pointer-events-none" />
          {/* Camada 2: Multiplicação para escurecer realces e fundir com o verde-escuro do fundo */}
          <div className="absolute inset-0 bg-[#0e2a24]/55 mix-blend-multiply pointer-events-none" />
        </div>

        {/* Degradês de transição para mesclar a imagem ao fundo verde */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Overlay para mobile */}
          <div className="absolute inset-0 bg-[#0e2a24]/85 lg:hidden" />
          
          {/* Degradês para desktop */}
          {/* Transição ultra suave cobrindo a borda vertical da imagem (que está em 35% da tela) */}
          <div 
            className="hidden lg:block absolute inset-y-0 left-0 w-full"
            style={{ 
              background: 'linear-gradient(to right, transparent 0%, transparent 25%, #0e2a24 35%, #0e2a24 40%, transparent 60%)' 
            }} 
          />
          {/* Suavização adicional a partir da esquerda do Hero para misturar com o tom do fundo */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#061d18] to-transparent" />
          {/* Suavização na borda inferior */}
          <div className="hidden lg:block absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0e2a24] to-transparent" />
          {/* Suavização na borda superior (área do header) */}
          <div className="hidden lg:block absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-[#061d18] to-transparent" />
        </div>

        <div className="section-shell relative z-10 min-h-[700px] grid gap-12 pb-20 pt-44 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div className="absolute top-24 left-0 right-0 gold-rule opacity-25" />

          <div className="min-w-0">
            <p className="eyebrow text-brand">Pereira e Medeiros</p>
            <h1 className="font-display display-title mt-5 max-w-3xl text-5xl leading-[1.02] sm:text-6xl lg:text-[5rem]">
              Advocacia com método.{" "}
              <span className="text-[#c2a96a]">Resultado</span>{" "}
              construído caso a caso.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-[#9ab0a8] sm:text-lg sm:leading-8">
              Cinco advogados, nove áreas de atuação, atendimento em todo o
              país. Da orientação inicial ao encerramento do processo — com
              acompanhamento direto em cada etapa.
            </p>
            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row">
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
                Ver áreas de atuação
              </Link>
            </div>
          </div>

          {/* Painel Institucional da Especialidade (Glassmorphism para profundidade premium) */}
          <aside className="relative min-w-0 hidden lg:flex flex-col justify-end p-8 border border-[rgba(176,138,69,0.15)] bg-[#0e2a24]/50 backdrop-blur-md rounded-sm min-h-[260px] self-end">
            <p className="eyebrow text-brand">Especialidade</p>
            <p className="font-display mt-3 text-5xl leading-none text-[#c2a96a]">
              CRIMINAL
            </p>
            <div className="mt-4 gold-rule-left w-16" />
            <p className="mt-5 text-sm leading-6 text-[#9ab0a8] max-w-xs">
              Defesa técnica desde o primeiro movimento — investigação, prisão, audiência ou processo.
            </p>
          </aside>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────── */}
      <section className="bg-white border-b border-line">
        <div className="section-shell">
          <div className="grid border-x border-line lg:grid-cols-3">
            {statsBar.map(({ label, value, icon }) => (
              <div
                key={label}
                className="group flex items-center gap-4 border-b border-line p-6 transition-colors hover:bg-surface-strong lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-line bg-surface-strong transition-colors group-hover:border-[rgba(176,138,69,0.3)]">
                  {icon}
                </div>
                <div>
                  <p className="eyebrow text-[#8aaa9f]">{label}</p>
                  <p className="mt-1 text-base font-medium text-foreground">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUANDO PROCURAR ──────────────────────── */}
      <section className="section-shell section-gap grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="eyebrow text-brand-deep">Quando procurar o escritório</p>
          <div className="gold-accent mt-4 mb-5" />
          <h2 className="font-display display-title max-w-md text-4xl sm:text-5xl">
            Uma demanda jurídica exige resposta no momento certo.
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-muted">
            Cada situação tem um encaminhamento específico. Saber quando agir
            e qual frente acionar define o que ainda é possível fazer.
          </p>
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
      <section className="bg-[#f4f8f5] py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-brand-deep">Áreas de atuação</p>
            <div className="gold-accent mt-4 mb-5" />
            <h2 className="font-display display-title max-w-md text-4xl sm:text-5xl">
              Nove frentes. Uma equipe coordenada.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-muted">
              Casos com múltiplas dimensões jurídicas são conduzidos com visão
              de conjunto — sem que nenhuma frente fique sem especialista.
            </p>
            <Link
              href="/areas-de-atuacao"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-deep border-b border-brand/30 pb-0.5 hover:border-brand transition-colors"
            >
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
      <section className="brand-field py-20 text-[#fafafa]">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow text-brand">Direito Criminal</p>
            <div className="gold-accent mt-4 mb-5" />
            <h2 className="font-display display-title max-w-lg text-4xl sm:text-5xl">
              Quando há risco penal envolvido, cada hora conta.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#9ab0a8]">
              A área criminal exige resposta técnica e imediata. A equipe está
              preparada para atuar em qualquer fase — da investigação ao
              julgamento — com estratégia definida desde o início.
            </p>
            <a
              href={contactHref}
              target="_blank"
              rel={externalLinkRel}
              className="btn-primary mt-8 inline-flex"
            >
              Falar agora
            </a>
          </div>
          <div className="grid gap-3">
            {criminalAuthority.map((item, index) => (
              <div key={item.title} className="step-item sm:grid-cols-[3rem_1fr] sm:items-start">
                <p className="font-display text-3xl leading-none text-brand">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <p className="text-base font-semibold text-[#e8efeb]">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#8aaa9f]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MÉTODO ───────────────────────────────── */}
      <section className="section-shell section-gap grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="eyebrow text-brand-deep">Como trabalhamos</p>
          <div className="gold-accent mt-4 mb-5" />
          <h2 className="font-display display-title max-w-md text-4xl sm:text-5xl">
            Do primeiro contato ao encerramento do processo.
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-muted">
            Sem etapas desnecessárias. O foco é entender o caso rapidamente
            e definir o caminho com clareza.
          </p>
        </div>
        <div className="grid gap-3">
          {method.map((item, index) => (
            <div key={item} className="step-item sm:grid-cols-[3rem_1fr] sm:items-center">
              <p className="font-display text-3xl leading-none text-[#0e2a24]/30">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="text-base leading-7 text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── EQUIPE ───────────────────────────────── */}
      <section className="bg-[#eef4f0] py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="eyebrow text-brand-deep">Equipe</p>
            <div className="gold-accent mt-4 mb-5" />
            <h2 className="font-display display-title max-w-md text-4xl sm:text-5xl">
              Cinco advogados. Cada um no seu campo.
            </h2>
            <p className="mt-6 max-w-sm text-base leading-7 text-muted">
              Especialidades distintas, atuação coordenada. O cliente é
              atendido por quem entende a frente específica do seu caso.
            </p>
            <Link
              href="/equipe"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-deep border-b border-brand/30 pb-0.5 hover:border-brand transition-colors"
            >
              Conhecer a equipe →
            </Link>
          </div>
          <div className="grid gap-3">
            {lawyers.map((lawyer) => (
              <article
                key={lawyer.name}
                className="card group grid gap-2 p-5 sm:grid-cols-[1fr_auto] sm:items-center"
              >
                <div>
                  <div className="w-0 h-[2px] bg-brand transition-all duration-300 group-hover:w-8 mb-2" />
                  <p className="text-[0.62rem] font-bold tracking-[0.2em] text-brand uppercase">
                    {lawyer.oab}
                  </p>
                  <h3 className="font-display text-2xl leading-tight mt-1">
                    {lawyer.name}
                  </h3>
                </div>
                <p className="text-sm leading-6 text-muted sm:text-right sm:max-w-[14rem]">
                  {lawyer.area}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA CONTATO ──────────────────────────── */}
      <section className="brand-field py-20 text-[#fafafa]">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <p className="eyebrow text-brand">Contato</p>
            <div className="gold-accent mt-4 mb-5" />
            <h2 className="font-display display-title max-w-3xl text-4xl sm:text-5xl">
              Uma conversa resolve a dúvida. Comece pelo WhatsApp.
            </h2>
          </div>
          <div className="space-y-4 text-sm leading-7 text-[#9ab0a8] sm:text-base">
            <div className="space-y-1">
              {addresses.map((item) => (
                <p key={item.city}>
                  <a
                    href={item.mapsUrl}
                    target="_blank"
                    rel={externalLinkRel}
                    className="transition-colors hover:text-[#dfe7e3]"
                  >
                    {item.line}
                  </a>
                </p>
              ))}
            </div>
            <p>
              <a href={contactHref} target="_blank" rel={externalLinkRel} className="transition-colors hover:text-[#dfe7e3]">
                {whatsappPrimary}
              </a>
              {" · "}
              <a href={contactHrefSecondary} target="_blank" rel={externalLinkRel} className="transition-colors hover:text-[#dfe7e3]">
                {whatsappSecondary}
              </a>
            </p>
            <p className="text-xs text-[#7a9b92]">
              Também por telefone:{" "}
              <a href={telPrimaryHref} className="transition-colors hover:text-[#dfe7e3]">
                {whatsappPrimary}
              </a>
              {" · "}
              <a href={telSecondaryHref} className="transition-colors hover:text-[#dfe7e3]">
                {whatsappSecondary}
              </a>
            </p>
            <div className="pt-2">
              <a
                href={contactHref}
                target="_blank"
                rel={externalLinkRel}
                id="cta-iniciar-conversa"
                className="btn-primary"
              >
                Iniciar conversa
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────── */}
      <section className="section-shell section-gap">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow text-brand-deep">Perguntas frequentes</p>
            <div className="gold-accent mt-4 mb-5" />
            <h2 className="font-display display-title max-w-md text-4xl sm:text-5xl">
              Dúvidas comuns antes do primeiro contato.
            </h2>
          </div>
          <div>
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
