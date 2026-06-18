import type { ReactNode } from "react";

import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <a href="#conteudo-principal" className="skip-link">
        Ir para o conteúdo
      </a>
      <div className="section-shell sticky top-4 z-40 pt-4">
        <SiteHeader />
      </div>
      <main id="conteudo-principal" className="flex-1">
        {children}
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
