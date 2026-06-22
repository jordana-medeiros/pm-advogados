type SectionKickerProps = {
  label: string;
  className?: string;
  centered?: boolean;
};

export function SectionKicker({
  label,
  className = "",
  centered = false,
}: SectionKickerProps) {
  return (
    <div
      className={`section-kicker ${centered ? "section-kicker--centered" : ""} ${className}`}
    >
      <p className="eyebrow text-brand">{label}</p>
      <div className="gold-accent" aria-hidden="true" />
    </div>
  );
}
