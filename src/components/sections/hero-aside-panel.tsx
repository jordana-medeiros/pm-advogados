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
      className={`hero-info-panel flex w-full flex-col justify-end p-4 sm:p-8 ${compact ? "min-h-0" : "min-h-0 lg:min-h-[260px]"} ${className}`}
    >
      <p className="eyebrow text-brand">Atendimento</p>
      <p
        className={`font-display mt-2 leading-tight text-on-dark-soft sm:mt-3 ${compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl lg:text-[2.75rem]"}`}
      >
        Quem responde, conduz.
      </p>
      <div className="mt-3 gold-rule-left w-16 sm:mt-4" />
      <p className="mt-3 max-w-xs text-sm leading-6 text-on-dark-muted sm:mt-4 sm:leading-7">
        Você descreve a situação. Sem formulário e sem repasse — presencial ou
        remoto, em qualquer área do Direito.
      </p>
    </aside>
  );
}
