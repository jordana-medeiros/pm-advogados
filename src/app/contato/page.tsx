import type { Metadata } from "next";

import { CopyEmphasis } from "@/components/ui/copy-emphasis";
import { PageHero } from "@/components/sections/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import {
  addresses,
  contactHref,
  contactHrefSecondary,
  externalLinkRel,
  instagramHandle,
  instagramUrl,
  telPrimaryHref,
  telSecondaryHref,
  whatsappPrimary,
  whatsappSecondary,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Telefone, mensagem e endereços em Santa Vitória/MG e São Simão/GO. Pereira e Medeiros Advogados Associados.",
};

export default function ContatoPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contato"
        title="Canais de atendimento do escritório."
        description={
          <>
            Sem formulário: mensagem, ligação ou presencial. Descreva o caso; a
            equipe indica o <CopyEmphasis>advogado da área</CopyEmphasis>.
          </>
        }
      />

      <section className="reading-surface section-pad-compact pb-12 sm:pb-24 lg:pb-28">
        <div className="section-shell section-after-hero">
          <div className="contact-split">
          <div className="contact-panel-cta">
            <div className="gold-accent mb-4 sm:mb-6" />
            <p className="eyebrow text-brand">Atendimento imediato</p>
            <h2 className="font-display mt-3 max-w-md text-3xl leading-tight text-on-dark-soft sm:mt-4 sm:text-4xl lg:text-5xl">
              Inicie a conversa.
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-on-dark-muted sm:mt-5">
              O canal principal é a mensagem. Explique a situação em poucas
              linhas — retorno, em regra, no <CopyEmphasis>mesmo dia</CopyEmphasis>.
            </p>
            <a
              href={contactHref}
              target="_blank"
              rel={externalLinkRel}
              id="contato-whatsapp-btn"
              className="btn-primary mt-6 inline-flex sm:mt-8"
            >
              Iniciar conversa
            </a>
          </div>

          <div className="contact-panel-light">
            <p className="eyebrow text-brand-deep mb-4 sm:mb-6">Canais e endereços</p>

            <div className="content-list">
              <article className="content-list-item content-list-item-stacked">
                <div>
                  <p className="eyebrow text-brand">WhatsApp e telefone</p>
                  <div className="mt-4 space-y-2">
                    <p>
                      <a
                        href={contactHref}
                        target="_blank"
                        rel={externalLinkRel}
                        className="text-lg font-medium text-foreground transition-colors hover:text-brand-deep"
                      >
                        {whatsappPrimary}
                      </a>
                      <span className="ml-2 text-sm text-muted">(mensagem)</span>
                    </p>
                    <p>
                      <a
                        href={contactHrefSecondary}
                        target="_blank"
                        rel={externalLinkRel}
                        className="text-lg font-medium text-foreground transition-colors hover:text-brand-deep"
                      >
                        {whatsappSecondary}
                      </a>
                      <span className="ml-2 text-sm text-muted">(mensagem)</span>
                    </p>
                    <p className="text-sm text-muted">
                      Ligação:{" "}
                      <a
                        href={telPrimaryHref}
                        className="font-medium text-foreground hover:text-brand-deep"
                      >
                        {whatsappPrimary}
                      </a>
                      {" · "}
                      <a
                        href={telSecondaryHref}
                        className="font-medium text-foreground hover:text-brand-deep"
                      >
                        {whatsappSecondary}
                      </a>
                    </p>
                  </div>
                </div>
              </article>

              <article className="content-list-item content-list-item-stacked">
                <div>
                  <p className="eyebrow text-brand">Endereços</p>
                  <div className="mt-4 space-y-4">
                    {addresses.map((item) => (
                      <div key={item.city}>
                        <p className="text-sm font-semibold text-foreground">
                          {item.city}
                        </p>
                        <a
                          href={item.mapsUrl}
                          target="_blank"
                          rel={externalLinkRel}
                          className="text-sm leading-6 text-muted transition-colors hover:text-brand-deep"
                        >
                          {item.line}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              <article className="content-list-item content-list-item-stacked">
                <div>
                  <p className="eyebrow text-brand">Instagram</p>
                  <p className="mt-4">
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel={externalLinkRel}
                      className="text-lg font-medium text-foreground transition-colors hover:text-brand-deep"
                    >
                      {instagramHandle}
                    </a>
                  </p>
                </div>
              </article>
            </div>
          </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
