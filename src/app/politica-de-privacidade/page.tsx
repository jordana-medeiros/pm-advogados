import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { contactHref, externalLinkRel, siteName } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de privacidade e tratamento de dados da Pereira e Medeiros Advogados Associados.",
};

export default function PoliticaPrivacidadePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Privacidade"
        title="Como tratamos seus dados neste site."
        description="Transparência sobre coleta, uso e proteção de informações conforme a LGPD."
      />

      <section className="section-shell section-gap max-w-3xl space-y-8 text-sm leading-7 text-muted sm:text-base">
        <article className="space-y-3">
          <h2 className="font-display text-3xl text-foreground">Controlador</h2>
          <p>
            O controlador dos dados pessoais tratados por meio deste site é{" "}
            {siteName}, responsável pelas informações institucionais aqui
            disponibilizadas.
          </p>
        </article>

        <article className="space-y-3">
          <h2 className="font-display text-3xl text-foreground">Dados coletados</h2>
          <p>
            Este site institucional não utiliza formulários de contato. Quando
            você acessa links externos — como WhatsApp, telefone, mapas ou
            Instagram — passa a interagir com plataformas de terceiros, sujeitas
            às políticas próprias desses serviços.
          </p>
        </article>

        <article className="space-y-3">
          <h2 className="font-display text-3xl text-foreground">Finalidade</h2>
          <p>
            Eventuais dados compartilhados voluntariamente ao entrar em contato
            com o escritório serão utilizados exclusivamente para responder à
            solicitação, avaliar a demanda jurídica e, quando aplicável,
            prestar serviços advocatícios.
          </p>
        </article>

        <article className="space-y-3">
          <h2 className="font-display text-3xl text-foreground">Seus direitos</h2>
          <p>
            Nos termos da Lei Geral de Proteção de Dados (LGPD), você pode
            solicitar confirmação de tratamento, acesso, correção, anonimização,
            eliminação ou informações sobre compartilhamento de dados pessoais
            tratados pelo escritório.
          </p>
        </article>

        <article className="space-y-3">
          <h2 className="font-display text-3xl text-foreground">Contato sobre privacidade</h2>
          <p>
            Para exercer seus direitos ou esclarecer dúvidas sobre privacidade,
            entre em contato pelos canais oficiais do escritório.
          </p>
          <a
            href={contactHref}
            target="_blank"
            rel={externalLinkRel}
            className="btn-primary mt-2 inline-flex"
          >
            Falar com o escritório
          </a>
        </article>
      </section>
    </SiteShell>
  );
}
