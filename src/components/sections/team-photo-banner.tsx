import Image from "next/image";

import { images } from "@/lib/site-data";

type TeamPhotoBannerProps = {
  caption: string;
};

export function TeamPhotoBanner({ caption }: TeamPhotoBannerProps) {
  return (
    <section className="full-bleed relative h-56 overflow-hidden sm:h-72 lg:h-[22rem]">
      <Image
        src={images.team.group}
        alt="Equipe Pereira e Medeiros Advogados Associados"
        fill
        sizes="100vw"
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/55 via-brand-deep/10 to-transparent" />
      <div className="section-shell absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <p className="eyebrow text-brand">{caption}</p>
      </div>
    </section>
  );
}
