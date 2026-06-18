import type { Metadata } from "next";
import Image from "next/image";

import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { lawyers } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Equipe",
  description:
    "Conheça os profissionais que compõem a equipe da Pereira e Medeiros Advogados Associados.",
};

export default function EquipePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Equipe"
        title="Profissionais comprometidos com profundidade técnica e condução segura."
        description="Uma equipe formada por profissionais com diferentes frentes de atuação, reunidos por uma visão institucional de seriedade, clareza e responsabilidade."
      />

      {/* Foto de grupo */}
      <section className="section-shell pt-14 pb-4">
        <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:h-[420px]">
          <Image
            src="/images/equipe-pereira-medeiros.webp"
            alt="Equipe Pereira e Medeiros Advogados Associados"
            fill
            sizes="(max-width: 768px) 100vw, 74rem"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <p className="eyebrow text-brand">Pereira e Medeiros Advogados Associados</p>
          </div>
        </div>
      </section>

      {/* Cards individuais */}
      <section className="section-shell py-10 pb-16 sm:pb-20">
        <p className="eyebrow text-brand-deep mb-8">Advogados</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lawyers.map((lawyer, index) => (
            <article key={lawyer.name} className="card group overflow-hidden flex flex-col">
              {/* Foto quadrada */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#eef4f0]">
                {lawyer.photo ? (
                  <Image
                    src={lawyer.photo}
                    alt={`Foto de ${lawyer.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-[#e6efea] to-[#d4e4da]">
                    <span className="font-display text-7xl leading-none text-[#0e2a24]/15">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-3 text-[0.6rem] font-bold tracking-[0.18em] uppercase text-[#5f6965]/50">
                      Foto em breve
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-brand-deep/0 transition-all duration-300 group-hover:bg-brand-deep/10" />
              </div>

              {/* Conteúdo do card */}
              <div className="flex flex-col flex-1 p-6">
                {/* Barra dourada animada */}
                <div className="w-0 h-[2px] bg-brand transition-all duration-300 group-hover:w-10 mb-3" />

                <p className="text-[0.62rem] font-bold tracking-[0.2em] text-brand uppercase">
                  {lawyer.oab}
                </p>
                <h2 className="font-display mt-2 text-2xl leading-tight sm:text-3xl">
                  {lawyer.name}
                </h2>

                {/* Separador */}
                <div className="my-4 h-px bg-line" />

                {/* Formação */}
                <p className="text-xs leading-6 text-muted flex-1">
                  {lawyer.bio}
                </p>

                {/* Área de atuação */}
                <div className="mt-4 pt-3 border-t border-line">
                  <p className="text-[0.65rem] font-bold tracking-[0.15em] text-brand-deep/50 uppercase mb-1">
                    Área de atuação
                  </p>
                  <p className="text-sm font-semibold text-foreground leading-snug">
                    {lawyer.area}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
