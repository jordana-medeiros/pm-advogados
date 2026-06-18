type HeroAsidePanelProps = {
  className?: string;
  compact?: boolean;
};

export function HeroAsidePanel({
  className = "",
  compact = false,
}: HeroAsidePanelProps) {
  return (
    <aside
      className={`hero-info-panel flex w-full flex-col justify-end p-6 sm:p-8 ${compact ? "min-h-0" : "min-h-[220px] lg:min-h-[260px]"} ${className}`}
    >
      <p className="eyebrow text-brand">Atendimento</p>
      <p
        className={`font-display mt-3 leading-tight text-on-dark-soft ${compact ? "text-3xl" : "text-4xl sm:text-[2.75rem]"}`}
      >
        Quem responde, conduz.
      </p>
      <div className="mt-4 gold-rule-left w-16" />
      <p className="mt-4 max-w-xs text-sm leading-7 text-on-dark-muted">
        Você descreve a situação. Sem formulário e sem repasse — presencial ou
        remoto, em qualquer área do Direito.
      </p>
    </aside>
  );
}
