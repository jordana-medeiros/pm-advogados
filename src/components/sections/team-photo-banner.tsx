import Image from "next/image";

import { images, siteName } from "@/lib/site-data";

type TeamPhotoBannerProps = {
  caption: string;
  showName?: boolean;
};

export function TeamPhotoBanner({ caption, showName = false }: TeamPhotoBannerProps) {
  return (
    <section className="full-bleed relative h-72 overflow-hidden sm:h-96 lg:h-[28rem]">
      <Image
        src={images.team.group}
        alt="Equipe Pereira e Medeiros Advogados Associados"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Gradiente base mais pronunciado */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/72 via-brand-deep/18 to-transparent" />
      {/* Gradiente lateral esquerdo sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/30 to-transparent" />

      <div className="section-shell absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
        <div className="gold-rule-left w-12 mb-4" />
        <p className="eyebrow text-brand">{caption}</p>
        {showName && (
          <p className="font-display mt-2 text-2xl leading-tight text-on-dark-soft sm:text-3xl lg:text-4xl">
            {siteName}
          </p>
        )}
      </div>
    </section>
  );
}
