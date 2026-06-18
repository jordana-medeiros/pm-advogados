import { SiteImage } from "@/components/ui/site-image";

import { images, lawyers, siteName } from "@/lib/site-data";

const principalNames = new Set([
  "Giuliano Martins Medeiros",
  "Jordana Andrade Medeiros Carvalho",
]);

type InstitutionalPortraitProps = {
  variant?: "banner" | "aside";
  className?: string;
};

export function InstitutionalPortrait({
  variant = "banner",
  className = "",
}: InstitutionalPortraitProps) {
  const principals = lawyers.filter((lawyer) => principalNames.has(lawyer.name));
  const isAside = variant === "aside";

  return (
    <figure className={`institutional-portrait ${className}`}>
      <div
        className={
          isAside
            ? "institutional-portrait-frame institutional-portrait-frame-aside"
            : "institutional-portrait-frame"
        }
      >
        <SiteImage
          src={images.team.principals}
          alt={`Giuliano Martins Medeiros e Jordana Andrade Medeiros Carvalho — ${siteName}`}
          fill
          sizes={
            isAside
              ? "(max-width: 1024px) 100vw, 22rem"
              : "(max-width: 1024px) 100vw, 74rem"
          }
          className="object-cover object-[center_22%]"
        />
      </div>
      <figcaption
        className={
          isAside
            ? "institutional-portrait-caption institutional-portrait-caption-aside"
            : "institutional-portrait-caption"
        }
      >
        {principals.map((lawyer) => (
          <span key={lawyer.name}>
            {lawyer.name} · {lawyer.oab}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}
