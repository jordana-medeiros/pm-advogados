import { SiteImage } from "@/components/ui/site-image";

import { images, siteName } from "@/lib/site-data";

type TeamPhotoBannerProps = {
  image?: string;
  objectPosition?: string;
  priority?: boolean;
};

export function TeamPhotoBanner({
  image = images.team.group,
  objectPosition = "center 22%",
  priority = false,
}: TeamPhotoBannerProps) {
  return (
    <section className="full-bleed relative overflow-hidden bg-brand-deep-darker">
      <div className="relative aspect-[16/7] min-h-[11rem] sm:aspect-[16/6] sm:min-h-[20rem] lg:aspect-[21/7] lg:min-h-[24rem]">
        <SiteImage
          src={image}
          alt={`Foto da equipe — ${siteName}`}
          fill
          sizes="100vw"
          priority={priority}
          className="object-cover"
          style={{ objectPosition }}
        />
      </div>
    </section>
  );
}
