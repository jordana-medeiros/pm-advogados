import type { ReactNode } from "react";

export function CopyEmphasis({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-inherit">{children}</strong>;
}
