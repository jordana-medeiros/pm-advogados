import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { contactHref, externalLinkRel, siteName } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como o escritório Pereira e Medeiros trata dados pessoais, conforme a LGPD.",
};

export default function PoliticaPrivacidadePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Privacidade"
        title="Tratamento de dados neste site."
        description="O que coletamos, para quê e quais são seus direitos."
      />

      <section className="section-shell section-gap max-w-3xl space-y-8 text-sm leading-7 text-muted sm:text-base">
        <article className="space-y-3">
          <h2 className="font-display text-3xl text-foreground">Quem responde</h2>
          <p>
            O controlador dos dados tratados por meio deste site é {siteName}.
          </p>
        </article>

        <article className="space-y-3">
          <h2 className="font-display text-3xl text-foreground">O que o site coleta</h2>
          <p>
            Não há formulário aqui. Ao clicar em WhatsApp, telefone, mapa ou
            Instagram, você passa a usar serviços de terceiros, regidos pelas
            políticas deles.
          </p>
        </article>

        <article className="space-y-3">
          <h2 className="font-display text-3xl text-foreground">Para que usamos</h2>
          <p>
            Dados que você enviar ao entrar em contato servem para responder,
            avaliar a demanda e, se for o caso, prestar serviço advocatício.
          </p>
        </article>

        <article className="space-y-3">
          <h2 className="font-display text-3xl text-foreground">Seus direitos (LGPD)</h2>
          <p>
            Você pode pedir confirmação de tratamento, acesso, correção,
            anonimização, exclusão ou informações sobre compartilhamento.
          </p>
        </article>

        <article className="space-y-3">
          <h2 className="font-display text-3xl text-foreground">Dúvidas</h2>
          <p>
            Para exercer direitos ou tirar dúvidas sobre privacidade, fale com o
            escritório pelos canais oficiais.
          </p>
          <a
            href={contactHref}
            target="_blank"
            rel={externalLinkRel}
            className="btn-primary mt-2 inline-flex"
          >
            Contato
          </a>
        </article>
      </section>
    </SiteShell>
  );
}
