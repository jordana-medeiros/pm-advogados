type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    // -mt-24 sobe o hero para sob o header flutuante (mesmo comportamento do hero da homepage)
    // pt-44 compensa o espaço e empurra o conteúdo para baixo do header
    <section className="-mt-24 brand-field text-[#fafafa] pt-44 pb-16 sm:pb-20 lg:pb-24">
      <div className="section-shell">
        <div className="gold-rule-left w-20 mb-8" />
        <p className="eyebrow text-brand">{eyebrow}</p>
        <h1 className="font-display display-title balance mt-5 max-w-4xl text-4xl sm:text-5xl lg:text-6xl text-[#f0f5f2]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-[#9ab0a8] sm:text-lg sm:leading-8">
          {description}
        </p>
      </div>
    </section>
  );
}
