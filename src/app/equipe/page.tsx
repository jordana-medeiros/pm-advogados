import type { Metadata } from "next";
import Image from "next/image";

import { PageHero } from "@/components/sections/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { TeamPhotoBanner } from "@/components/sections/team-photo-banner";
import { lawyers } from "@/lib/site-data";

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

      <TeamPhotoBanner caption="Pereira e Medeiros Advogados Associados" />

      <section className="section-shell section-pad-compact pb-16 sm:pb-20">
        <div className="editorial-split mb-10 lg:mb-12">
          <div>
            <p className="eyebrow text-brand-deep">Advogados</p>
            <div className="gold-accent mt-4 mb-5" />
            <h2 className="font-display display-title max-w-md text-4xl sm:text-5xl">
              Quem responde por cada área.
            </h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-muted lg:pt-10">
            Formação, OAB e atuação de cada profissional — sem camadas extras
            entre você e quem conduz o caso.
          </p>
        </div>

        <div className="profile-list">
          {lawyers.map((lawyer, index) => (
            <article key={lawyer.name} className="profile-row group">
              <div className="profile-photo">
                {lawyer.photo ? (
                  <Image
                    src={lawyer.photo}
                    alt={`Foto de ${lawyer.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 168px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-surface-strong to-surface-alt">
                    <span className="font-display text-6xl leading-none text-brand-deep/15">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                )}
              </div>

              <div>
                <p className="text-[0.62rem] font-bold tracking-[0.2em] text-brand uppercase">
                  {lawyer.oab}
                </p>
                <h2 className="font-display mt-2 text-3xl leading-tight sm:text-4xl">
                  {lawyer.name}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                  {lawyer.bio}
                </p>
                <p className="mt-5 text-sm font-semibold leading-snug text-brand-deep">
                  {lawyer.area}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
