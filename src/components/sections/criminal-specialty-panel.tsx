import { criminalSpecialtySummary } from "@/lib/site-data";

type CriminalSpecialtyPanelProps = {
  className?: string;
  compact?: boolean;
};

export function CriminalSpecialtyPanel({
  className = "",
  compact = false,
}: CriminalSpecialtyPanelProps) {
  return (
    <aside
      className={`criminal-panel flex flex-col justify-end p-6 sm:p-8 ${compact ? "min-h-0" : "min-h-[260px]"} ${className}`}
    >
      <p className="eyebrow text-brand">Especialidade</p>
      <p
        className={`font-display mt-3 leading-none text-gold-light ${compact ? "text-4xl" : "text-5xl"}`}
      >
        CRIMINAL
      </p>
      <div className="mt-4 gold-rule-left w-16" />
      <p className="mt-4 text-sm leading-6 text-on-dark-muted max-w-xs">
        {criminalSpecialtySummary}
      </p>
    </aside>
  );
}
