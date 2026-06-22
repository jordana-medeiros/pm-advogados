import type { Metadata } from "next";
import { preload } from "react-dom";
import Link from "next/link";
import { SiteImage } from "@/components/ui/site-image";
import {
  contactHref,
  externalLinkRel,
  images,
  siteName,
  whatsappPrimary,
  lawyers,
} from "@/lib/site-data";
import { FloatingWhatsapp } from "@/components/criminal/floating-whatsapp";

export const metadata: Metadata = {
  title: "Advogado Criminalista 24h | Defesa Criminal de Urgência",
  description:
    "Preso em flagrante, investigação, busca e apreensão ou intimação? Defesa criminal estratégica 24h. Fale com um especialista agora mesmo.",
};

const criminalFaqs = [
  {
    question: "Meu familiar foi detido. O que devo fazer agora?",
    answer:
      "O primeiro passo é não prestar declarações e não assinar nada sem acompanhamento profissional. Entre em contato com nosso plantão de urgência imediatamente para que um advogado especialista assuma a condução do caso na delegacia e garanta os direitos constitucionais.",
  },
  {
    question: "Vocês fazem atendimento de madrugada ou aos finais de semana?",
    answer:
      "Sim. O nosso plantão criminal funciona 24 horas por dia, 7 dias por semana, incluindo madrugadas, feriados e finais de semana. Há sempre um advogado pronto para agir em situações de urgência como prisões ou buscas.",
  },
  {
    question: "Como funciona a audiência de custódia?",
    answer:
      "É um ato judicial realizado em até 24 horas após a prisão em flagrante. O juiz analisa a legalidade da prisão, a ocorrência de maus-tratos e decide se a pessoa deve responder ao processo em liberdade ou se a prisão será convertida em preventiva.",
  },
  {
    question: "O contato inicial pelo WhatsApp tem custos?",
    answer:
      "Não. O contato de urgência inicial serve para colher as informações da situação e indicar a primeira orientação jurídica imediata. Os honorários contratuais de atuação e defesa são combinados de forma transparente antes do início das medidas.",
  },
] as const;

function LandingHeader() {
  return (
    <header className="w-full py-4 border-b border-white/5 bg-[#061d18]/90 backdrop-blur-md sticky top-0 z-50">
      <div className="section-shell flex items-center justify-between">
        <Link href="/criminal" className="inline-flex items-center min-w-0 shrink-0">
          <img
            src="/brand/logo-white.png"
            alt={siteName}
            className="h-7 w-auto sm:h-8 lg:h-9"
          />
        </Link>
        <a
          href={contactHref}
          target="_blank"
          rel={externalLinkRel}
          className="text-[0.68rem] font-bold tracking-wider text-brand uppercase border border-brand/30 px-3 py-1.5 rounded-sm hover:bg-brand/10 hover:border-brand transition-all sm:text-xs sm:px-4 sm:py-2"
        >
          Plantão 24h: {whatsappPrimary}
        </a>
      </div>
    </header>
  );
}

export default function CriminalLandingPage() {
  preload(images.hero.criminalHeroBg, { as: "image", fetchPriority: "high" });

  return (
    <div className="min-h-screen bg-[#061d18] text-foreground flex flex-col font-sans">
      <LandingHeader />

      <main className="flex-1">
        {/* ── HERO SECTION ───────────────────────────── */}
        <section className="hero-overlap brand-field text-on-dark overflow-hidden relative border-b border-white/5">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 opacity-20 lg:opacity-30">
            <SiteImage
              src={images.hero.criminalHeroBg}
              alt="Defesa Criminal Especializada"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
            {/* Blends to integrate with forest green brand colors */}
            <div className="absolute inset-0 bg-[#061d18]/70 mix-blend-multiply" />
            <div className="absolute inset-0 bg-[#0e2a24]/50 mix-blend-color" />
          </div>

          <div className="section-shell relative z-10 hero-shell pb-16 pt-24 sm:pb-24 sm:pt-28 lg:pb-28 lg:pt-36 flex flex-col items-center text-center">
            <p className="eyebrow text-brand animate-fade-up">Pereira e Medeiros Advocacia</p>
            <h1 className="font-display balance hero-title mt-5 max-w-4xl text-on-dark animate-fade-up delay-1">
              Preso em flagrante, investigação ou intimação?{" "}
              <span className="text-brand">Agimos rápido.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-on-dark-muted sm:text-lg sm:leading-8 animate-fade-up delay-2">
              Não responda a perguntas, não preste depoimento e não assine nada sem a presença de um advogado especialista. Proteja seus direitos e garanta sua defesa desde o primeiro minuto.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 w-full sm:flex-row sm:justify-center animate-fade-up delay-3">
              <a
                href={contactHref}
                target="_blank"
                rel={externalLinkRel}
                className="btn-primary btn-pulse-urgency w-full sm:w-auto text-center"
              >
                Falar com Advogado Criminalista de Plantão
              </a>
            </div>
          </div>
        </section>

        {/* ── PAINEL DE URGÊNCIA 24H ─────────────────── */}
        <section className="bg-[#ff7675]/5 border-y border-[#ff7675]/15 py-6 text-on-dark">
          <div className="section-shell flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500"></span>
              </span>
              <p className="text-sm font-semibold tracking-wide uppercase sm:text-base">
                Plantão de Urgência Criminal 24 Horas Ativo
              </p>
            </div>
            <a
              href={contactHref}
              target="_blank"
              rel={externalLinkRel}
              className="w-full md:w-auto text-center bg-[#ff7675] hover:bg-[#ff7675]/90 text-[#061d18] font-bold px-6 py-2.5 rounded-sm transition-all text-xs uppercase tracking-wider"
            >
              Acionar Defesa Imediata
            </a>
          </div>
        </section>

        {/* ── ATUAÇÃO EM URGÊNCIAS ──────────────────── */}
        <section className="section-shell section-gap text-on-dark">
          <div className="text-center max-w-3xl mx-auto">
            <p className="eyebrow text-brand">Onde Atuamos</p>
            <div className="gold-accent mx-auto mt-3 mb-4 sm:mt-4 sm:mb-5" />
            <h2 className="font-display display-title">
              Atuação Especializada de Emergência
            </h2>
            <p className="mt-4 text-base text-on-dark-muted leading-7">
              Nossa equipe está pronta para intervir nas situações mais críticas, protegendo sua integridade jurídica.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_2fr] items-start">
            {/* Imagem conceitual e de urgência à esquerda */}
            <div className="relative rounded-sm overflow-hidden border border-brand/25 group h-full min-h-[320px] lg:min-h-[480px] flex flex-col justify-end p-6 bg-[#0a241f]">
              <SiteImage
                src="/images/criminal/prison-bars.png"
                alt="Grades de Prisão e Liberdade"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover opacity-40 group-hover:scale-102 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061d18] via-[#061d18]/50 to-transparent z-10" />
              
              <div className="relative z-20">
                <p className="text-xs font-bold text-brand uppercase tracking-wider mb-2">🚨 Cada minuto conta</p>
                <h3 className="font-display text-xl text-white font-semibold leading-snug">
                  Qualquer declaração ou assinatura sem advogado pode ser fatal.
                </h3>
                <p className="mt-2 text-xs text-on-dark-muted leading-relaxed">
                  A atuação estratégica nas primeiras horas garante que seus direitos constitucionais sejam integralmente preservados.
                </p>
              </div>
            </div>

            {/* Grid de atuação à direita */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="p-6 bg-surface-strong/30 border border-white/5 rounded-sm hover:border-brand/20 transition-all">
                <div className="h-8 w-8 text-brand font-display text-2xl font-bold leading-none mb-4">01</div>
                <h3 className="font-display text-xl text-on-dark-soft font-semibold">Prisão em Flagrante</h3>
                <p className="mt-3 text-sm text-on-dark-muted leading-relaxed">
                  Deslocamento urgente para a delegacia, acompanhamento de depoimentos e garantia de que nenhum abuso de autoridade seja cometido.
                </p>
              </div>

              <div className="p-6 bg-surface-strong/30 border border-white/5 rounded-sm hover:border-brand/20 transition-all">
                <div className="h-8 w-8 text-brand font-display text-2xl font-bold leading-none mb-4">02</div>
                <h3 className="font-display text-xl text-on-dark-soft font-semibold">Audiência de Custódia</h3>
                <p className="mt-3 text-sm text-on-dark-muted leading-relaxed">
                  Defesa técnica presencial em até 24h após a prisão, com foco na liberação provisória e no relaxamento de prisões ilegais.
                </p>
              </div>

              <div className="p-6 bg-surface-strong/30 border border-white/5 rounded-sm hover:border-brand/20 transition-all">
                <div className="h-8 w-8 text-brand font-display text-2xl font-bold leading-none mb-4">03</div>
                <h3 className="font-display text-xl text-on-dark-soft font-semibold">Habeas Corpus Urgente</h3>
                <p className="mt-3 text-sm text-on-dark-muted leading-relaxed">
                  Elaboração e impetração de Habeas Corpus de emergência perante tribunais estaduais e superiores contra prisões arbitrárias.
                </p>
              </div>

              <div className="p-6 bg-surface-strong/30 border border-white/5 rounded-sm hover:border-brand/20 transition-all">
                <div className="h-8 w-8 text-brand font-display text-2xl font-bold leading-none mb-4">04</div>
                <h3 className="font-display text-xl text-on-dark-soft font-semibold">Inquéritos e Delegacias</h3>
                <p className="mt-3 text-sm text-on-dark-muted leading-relaxed">
                  Acompanhamento em oitivas, intimações e investigações em andamento, blindando o cliente contra pressões e autoincriminação.
                </p>
              </div>

              <div className="p-6 bg-surface-strong/30 border border-white/5 rounded-sm hover:border-brand/20 transition-all">
                <div className="h-8 w-8 text-brand font-display text-2xl font-bold leading-none mb-4">05</div>
                <h3 className="font-display text-xl text-on-dark-soft font-semibold">Busca e Apreensão</h3>
                <p className="mt-3 text-sm text-on-dark-muted leading-relaxed">
                  Intervenção jurídica imediata durante o cumprimento de mandados para limitar o escopo da apreensão e proteger ativos legítimos.
                </p>
              </div>

              <div className="p-6 bg-surface-strong/30 border border-white/5 rounded-sm hover:border-brand/20 transition-all">
                <div className="h-8 w-8 text-brand font-display text-2xl font-bold leading-none mb-4">06</div>
                <h3 className="font-display text-xl text-on-dark-soft font-semibold">Tribunal do Júri</h3>
                <p className="mt-3 text-sm font-semibold text-on-dark-muted leading-relaxed">
                  Atuação combativa de alta performance técnica na defesa de acusados de crimes dolosos contra a vida, em todas as fases do júri.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── DEFESA CONDUZIDA POR SÓCIOS ESPECIALISTAS ── */}
        <section className="section-shell section-gap text-on-dark border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="eyebrow text-brand">Quem Conduz Sua Defesa</p>
            <div className="gold-accent mx-auto mt-3 mb-4" />
            <h2 className="font-display display-title">
              Sócios Especialistas em Direito Criminal
            </h2>
            <p className="mt-4 text-base text-on-dark-muted leading-7">
              A sua liberdade e os seus direitos serão defendidos diretamente pelos sócios do escritório, sem intermediários.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 max-w-5xl mx-auto items-start">
            {/* Giuliano Medeiros */}
            <div className="flex flex-col sm:flex-row gap-6 p-6 bg-surface-strong/30 border border-white/5 rounded-sm hover:border-brand/20 transition-all h-full">
              <div className="w-full sm:w-36 h-48 relative shrink-0 overflow-hidden rounded-sm border border-white/10 bg-[#0a241f]">
                <SiteImage
                  src="/images/lawyers/giuliano-medeiros.webp"
                  alt="Dr. Giuliano Martins Medeiros"
                  fill
                  sizes="(max-width: 640px) 100vw, 144px"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-display text-lg text-on-dark font-semibold">Dr. Giuliano Martins Medeiros</h3>
                  <p className="text-xs text-brand font-medium mt-1">Sócio Fundador — OAB/MG 136.792</p>
                  <p className="mt-3 text-xs text-on-dark-muted leading-relaxed">
                    Mais de 15 anos de atuação jurídica estratégica. Graduado pela UEMG e pós-graduado em Direito Penal e Processual Penal pela Faculdade Damásio de Jesus. Coordenador de centenas de defesas criminais de alta complexidade.
                  </p>
                </div>
                <div className="mt-4 sm:mt-6">
                  <a
                    href={contactHref}
                    target="_blank"
                    rel={externalLinkRel}
                    className="text-xs font-bold text-brand hover:text-brand-hover transition-colors inline-flex items-center gap-1 uppercase tracking-wider"
                  >
                    Falar com Dr. Giuliano →
                  </a>
                </div>
              </div>
            </div>

            {/* Jordana Carvalho */}
            <div className="flex flex-col sm:flex-row gap-6 p-6 bg-surface-strong/30 border border-white/5 rounded-sm hover:border-brand/20 transition-all h-full">
              <div className="w-full sm:w-36 h-48 relative shrink-0 overflow-hidden rounded-sm border border-white/10 bg-[#0a241f]">
                <SiteImage
                  src="/images/lawyers/jordana-carvalho.webp"
                  alt="Dra. Jordana Andrade M. Carvalho"
                  fill
                  sizes="(max-width: 640px) 100vw, 144px"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-display text-lg text-on-dark font-semibold">Dra. Jordana Andrade M. Carvalho</h3>
                  <p className="text-xs text-brand font-medium mt-1">Sócia Especialista — OAB/MG 218.949</p>
                  <p className="mt-3 text-xs text-on-dark-muted leading-relaxed">
                    Especialista dedicada em Direito Penal e Execução Penal (EBRADI). Graduada pela UEMG. Com atuação focada na condução técnica de prisões em flagrante, inquéritos policiais e sustentação oral nos tribunais.
                  </p>
                </div>
                <div className="mt-4 sm:mt-6">
                  <a
                    href={contactHref}
                    target="_blank"
                    rel={externalLinkRel}
                    className="text-xs font-bold text-brand hover:text-brand-hover transition-colors inline-flex items-center gap-1 uppercase tracking-wider"
                  >
                    Falar com Dra. Jordana →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Imagem em destaque conjunta */}
          <div className="mt-12 max-w-5xl mx-auto rounded-sm overflow-hidden border border-white/5 relative h-64 sm:h-80 md:h-96">
            <SiteImage
              src="/images/team/giuliano-e-jordana.webp"
              alt="Sócios Dr. Giuliano e Dra. Jordana"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061d18] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-brand uppercase tracking-wider">Defesa Sem Intermediários</p>
                <h3 className="font-display text-lg text-white font-semibold">Giuliano Medeiros & Jordana Carvalho</h3>
              </div>
              <a
                href={contactHref}
                target="_blank"
                rel={externalLinkRel}
                className="btn-primary py-2 text-xs uppercase"
              >
                Falar com os Especialistas
              </a>
            </div>
          </div>
        </section>

        {/* ── POR QUE ESCOLHER (DIFERENCIAIS) ───────── */}
        <section className="surface-alt section-pad border-y border-white/5 text-on-dark">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
            <div>
              <p className="eyebrow text-brand">Quem Defende Você</p>
              <div className="gold-accent mt-3 mb-4 sm:mt-4 sm:mb-5" />
              <h2 className="font-display display-title max-w-md">
                Experiência, Agilidade e Sigilo Absoluto
              </h2>
              <p className="mt-5 text-base leading-7 text-on-dark-muted max-w-lg">
                O Pereira e Medeiros Advogados oferece uma estrutura sólida voltada para a defesa criminal ágil, conduzida exclusivamente por quem entende da matéria.
              </p>
              
              {/* Imagem de Consulta Jurídica */}
              <div className="mt-6 mb-2 relative w-full h-48 rounded-sm overflow-hidden border border-white/5 bg-[#0a241f]">
                <SiteImage
                  src="/images/criminal/consultation.png"
                  alt="Consulta Jurídica Criminal"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover"
                />
              </div>

              <a
                href={contactHref}
                target="_blank"
                rel={externalLinkRel}
                className="btn-primary mt-6 inline-flex"
              >
                Falar com Advogado de Plantão
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-6 bg-surface-strong/40 border border-white/5 rounded-sm">
                <p className="font-display text-lg text-brand font-semibold leading-none">Plantão 24h Real</p>
                <p className="mt-2 text-xs text-on-dark-muted leading-relaxed">
                  Não usamos formulários ou triagens automáticas. Nosso telefone e WhatsApp de emergência estão sempre ativos com um profissional preparado.
                </p>
              </div>
              <div className="p-6 bg-surface-strong/40 border border-white/5 rounded-sm">
                <p className="font-display text-lg text-brand font-semibold leading-none">Acesso Direto</p>
                <p className="mt-2 text-xs text-on-dark-muted leading-relaxed">
                  Você conversa e é assessorado diretamente pelo advogado criminalista especialista encarregado da sua defesa, sem intermediários.
                </p>
              </div>
              <div className="p-6 bg-surface-strong/40 border border-white/5 rounded-sm">
                <p className="font-display text-lg text-brand font-semibold leading-none">Segurança Jurídica</p>
                <p className="mt-2 text-xs text-on-dark-muted leading-relaxed">
                  Análise técnica minuciosa da acusação, provas e inquérito para encontrar brechas legais e anulações cabíveis.
                </p>
              </div>
              <div className="p-6 bg-surface-strong/40 border border-white/5 rounded-sm">
                <p className="font-display text-lg text-brand font-semibold leading-none">Sigilo Garantido</p>
                <p className="mt-2 text-xs text-on-dark-muted leading-relaxed">
                  Tratamento confidencial absoluto sob a proteção de sigilo profissional estabelecido em lei para resguardar sua vida e reputação.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── LINHA DO TEMPO (PASSO A PASSO) ────────── */}
        <section className="section-shell section-gap text-on-dark">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow text-brand">Como Funciona</p>
            <div className="gold-accent mx-auto mt-3 mb-4" />
            <h2 className="font-display display-title">Passo a Passo do Atendimento</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="p-6 bg-surface-strong/20 border border-white/5 rounded-sm relative">
              <span className="absolute -top-3 left-6 bg-brand text-[#061d18] font-bold text-xs px-2.5 py-1 rounded-sm uppercase">1. Envio</span>
              <h3 className="font-display text-lg font-semibold text-on-dark-soft mt-2">Clique e Relate</h3>
              <p className="mt-2.5 text-xs text-on-dark-muted leading-relaxed">
                Clique no botão de emergência para abrir o WhatsApp direto. Relate brevemente o ocorrido (quem foi detido, por qual motivo, onde se encontra).
              </p>
            </div>
            <div className="p-6 bg-surface-strong/20 border border-white/5 rounded-sm relative">
              <span className="absolute -top-3 left-6 bg-brand text-[#061d18] font-bold text-xs px-2.5 py-1 rounded-sm uppercase">2. Orientação</span>
              <h3 className="font-display text-lg font-semibold text-on-dark-soft mt-2">Instrução Imediata</h3>
              <p className="mt-2.5 text-xs text-on-dark-muted leading-relaxed">
                O advogado de plantão passa a primeira orientação de segurança para a família e para quem estiver envolvido, evitando erros cruciais.
              </p>
            </div>
            <div className="p-6 bg-surface-strong/20 border border-white/5 rounded-sm relative">
              <span className="absolute -top-3 left-6 bg-brand text-[#061d18] font-bold text-xs px-2.5 py-1 rounded-sm uppercase">3. Ação</span>
              <h3 className="font-display text-lg font-semibold text-on-dark-soft mt-2">Intervenção Técnica</h3>
              <p className="mt-2.5 text-xs text-on-dark-muted leading-relaxed">
                O profissional inicia a atuação externa (deslocamento para delegacia, pedido de liberdade, impetração de liminar) para resguardar a liberdade.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href={contactHref}
              target="_blank"
              rel={externalLinkRel}
              className="btn-primary btn-pulse-urgency inline-flex"
            >
              Acionar Advogado de Plantão Agora
            </a>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────── */}
        <section className="section-shell section-gap border-t border-white/5 text-on-dark">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
            <div>
              <p className="eyebrow text-brand">FAQ</p>
              <div className="gold-accent mt-3 mb-4 sm:mt-4 sm:mb-5" />
              <h2 className="font-display display-title max-w-md">
                Dúvidas sobre Defesa Criminal
              </h2>
            </div>
            <div className="faq-container">
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

      {/* ── FOOTER SIMPLIFICADO ───────────────────── */}
      <footer className="w-full py-8 border-t border-white/5 bg-[#041512] text-on-dark">
        <div className="section-shell flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-xs text-on-dark-muted">
              © {new Date().getFullYear()} {siteName}. Todos os direitos reservados.
            </p>
            <p className="mt-1 text-[0.62rem] text-on-dark-faint uppercase tracking-wider">
              Giuliano Martins Medeiros — OAB/MG 136.792 | Jordana Andrade M. Carvalho — OAB/MG 218.949
            </p>
          </div>
          <div className="flex gap-4 text-xs text-on-dark-muted">
            <Link href="/politica-de-privacidade" className="hover:text-brand transition-colors">
              Privacidade
            </Link>
            <span className="text-white/10">|</span>
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
