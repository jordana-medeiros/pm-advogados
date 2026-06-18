import type { Metadata } from "next";
import Image from "next/image";

import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { differentiators, institutionalText } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a história, o posicionamento e a forma de atuação do escritório Pereira e Medeiros Advogados Associados.",
};

export default function SobrePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Sobre o escritório"
        title="Atuação conjunta, leitura estratégica e compromisso com cada demanda."
        description={`${institutionalText.about} ${institutionalText.aboutSupport}`}
      />

      {/* Foto de grupo */}
      <section className="section-shell pt-14 pb-4">
        <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:h-96">
          <Image
            src="/images/equipe-pereira-medeiros.webp"
            alt="Equipe Pereira e Medeiros Advogados Associados"
            fill
            sizes="(max-width: 768px) 100vw, 74rem"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <p className="eyebrow text-brand">Nossa equipe</p>
          </div>
        </div>
      </section>

      <section className="section-shell py-12 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Card claro */}
          <article className="card p-8 sm:p-10">
            <div className="gold-accent mb-5" />
            <p className="eyebrow text-brand">Essência</p>
            <h2 className="font-display mt-4 text-4xl leading-tight sm:text-5xl">
              Técnica jurídica com responsabilidade institucional.
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
              O escritório Pereira e Medeiros Advogados Associados foi
              estruturado para oferecer uma advocacia técnica, estratégica e
              comprometida com a profundidade que cada caso exige.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              A equipe atua de forma coordenada para ampliar a capacidade de
              análise, fortalecer a condução jurídica e manter o cliente bem
              informado ao longo de cada etapa.
            </p>
          </article>

          {/* Card escuro */}
          <article className="card-dark p-8 sm:p-10">
            <div className="gold-accent mb-5" />
            <p className="eyebrow text-brand">Presença</p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-[#f0f5f2] sm:text-5xl">
              Atendimento em todo o território nacional.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#9ab0a8] sm:text-base">
              A atuação em escala nacional reforça a capacidade do escritório de
              acompanhar demandas com consistência, estrutura e proximidade,
              onde quer que o caso aconteça.
            </p>
          </article>
        </div>
      </section>

      <section className="section-shell pb-16 sm:pb-20">
        <p className="eyebrow text-brand-deep mb-8">Diretrizes</p>
        <div className="grid gap-5 lg:grid-cols-3">
          {differentiators.map((item) => (
            <article key={item.title} className="card p-7">
              <div className="gold-accent mb-4" />
              <h2 className="font-display mt-2 text-3xl leading-tight">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
