import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  aside?: ReactNode;
};

export function PageHero({ eyebrow, title, description, aside }: PageHeroProps) {
  return (
    <section className="hero-overlap page-hero-bg text-on-dark hero-shell pb-20 sm:pb-24 lg:pb-28 min-h-[22rem] sm:min-h-[26rem] relative overflow-hidden">
      <div className="section-shell relative z-10">
        <div
          className={
            aside
              ? "grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-12"
              : undefined
          }
        >
          <div className="min-w-0">
            <div className="gold-accent-lg animate-fade-in mb-8" />
            <p className="eyebrow text-brand animate-fade-up delay-1">{eyebrow}</p>
            <h1 className="font-display balance page-hero-title mt-5 max-w-4xl text-on-dark-soft animate-fade-up delay-2">
              {title}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-on-dark-muted sm:text-lg sm:leading-8 animate-fade-up delay-3">
              {description}
            </p>
            {aside ? (
              <div className="mt-8 lg:hidden animate-fade-up delay-4">{aside}</div>
            ) : null}
          </div>
          {aside ? (
            <div className="hidden lg:block animate-fade-up delay-2">{aside}</div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
