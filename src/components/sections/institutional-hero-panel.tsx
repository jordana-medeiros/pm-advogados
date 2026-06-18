import Link from "next/link";

import { addresses, homeAreasHref, practiceAreas } from "@/lib/site-data";

type InstitutionalHeroPanelProps = {
  className?: string;
  compact?: boolean;
};

const highlights = [
  {
    label: `${practiceAreas.length} áreas do Direito`,
    description: "Penal, cível, trabalhista, empresarial e outras frentes.",
    href: homeAreasHref,
  },
  {
    label: "5 advogados",
    description: "Cada demanda conduzida por quem responde pela área.",
    href: "/equipe",
  },
  {
    label: addresses.map((address) => address.city).join(" · "),
    description: "Atendimento presencial ou remoto em todo o Brasil.",
  },
] as const;

export function InstitutionalHeroPanel({
  className = "",
  compact = false,
}: InstitutionalHeroPanelProps) {
  return (
    <aside
      className={`hero-info-panel flex w-full flex-col justify-end p-4 sm:p-8 ${compact ? "min-h-0" : "min-h-0 lg:min-h-[280px]"} ${className}`}
    >
      <p className="eyebrow text-brand">O escritório</p>
      <p
        className={`font-display mt-2 leading-tight text-on-dark-soft sm:mt-3 ${compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"}`}
      >
        Atuação multidisciplinar
      </p>
      <div className="mt-3 gold-rule-left w-16 sm:mt-4" />
      <ul className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
        {highlights.map((item) => (
          <li key={item.label}>
            {"href" in item && item.href ? (
              <Link
                href={item.href}
                className="group block transition-colors hover:text-on-dark-soft"
              >
                <p className="text-sm font-semibold text-on-dark-soft group-hover:text-brand">
                  {item.label}
                </p>
                <p className="mt-1 text-sm leading-6 text-on-dark-muted">
                  {item.description}
                </p>
              </Link>
            ) : (
              <>
                <p className="text-sm font-semibold text-on-dark-soft">
                  {item.label}
                </p>
                <p className="mt-1 text-sm leading-6 text-on-dark-muted">
                  {item.description}
                </p>
              </>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
