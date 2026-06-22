type SectionKickerProps = {
  label: string;
  className?: string;
};

export function SectionKicker({ label, className = "" }: SectionKickerProps) {
  return (
    <div className={`section-kicker ${className}`}>
      <p className="eyebrow text-brand">{label}</p>
      <div className="gold-accent" aria-hidden="true" />
    </div>
  );
}
