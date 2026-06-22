import type { ReactNode } from "react";

type DifferentiatorIconName = "clock" | "direct" | "shield" | "lock";

type DifferentiatorIconProps = {
  name: DifferentiatorIconName;
  className?: string;
};

const iconPaths: Record<DifferentiatorIconName, ReactNode> = {
  clock: (
    <>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M12 7.5V12l2.75 2.75" />
    </>
  ),
  direct: (
    <>
      <circle cx="12" cy="8" r="3" />
      <path d="M6.5 18.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <path d="M17.5 9.5 19 8l1.5 1.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 5.5 6v5.25c0 4.1 2.75 6.35 6.5 8.25 3.75-1.9 6.5-4.15 6.5-8.25V6L12 3.5Z" />
      <path d="m9.25 12.25 1.75 1.75 3.75-3.75" />
    </>
  ),
  lock: (
    <>
      <rect x="6.75" y="10.5" width="10.5" height="7.75" rx="1.25" />
      <path d="M9 10.5V8.25a3 3 0 0 1 6 0V10.5" />
    </>
  ),
};

export function DifferentiatorIcon({ name, className = "" }: DifferentiatorIconProps) {
  return (
    <span className={`criminal-metric-icon ${className}`.trim()} aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {iconPaths[name]}
      </svg>
    </span>
  );
}

export type { DifferentiatorIconName };
