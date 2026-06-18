import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
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
    "Entre em contato com a equipe da Pereira e Medeiros Advogados Associados por WhatsApp, telefone e endereço.",
};

const contactItems = [
  {
    id: "telefones",
    eyebrow: "Telefones",
    content: (
      <div className="mt-4 space-y-2">
        <p>
          <a
            href={contactHref}
            target="_blank"
            rel={externalLinkRel}
            className="text-lg font-medium text-foreground transition-colors hover:text-brand-deep"
          >
            WhatsApp {whatsappPrimary}
          </a>
        </p>
        <p>
          <a
            href={contactHrefSecondary}
            target="_blank"
            rel={externalLinkRel}
            className="text-lg font-medium text-foreground transition-colors hover:text-brand-deep"
          >
            WhatsApp {whatsappSecondary}
          </a>
        </p>
        <p className="text-sm text-muted">
          Telefone:{" "}
          <a href={telPrimaryHref} className="font-medium text-foreground hover:text-brand-deep">
            {whatsappPrimary}
          </a>
          {" · "}
          <a href={telSecondaryHref} className="font-medium text-foreground hover:text-brand-deep">
            {whatsappSecondary}
          </a>
        </p>
      </div>
    ),
  },
  {
    id: "enderecos",
    eyebrow: "Endereços",
    content: (
      <div className="mt-4 space-y-4">
        {addresses.map((item) => (
          <div key={item.city}>
            <p className="text-sm font-semibold text-foreground">{item.city}</p>
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
    ),
  },
  {
    id: "instagram",
    eyebrow: "Instagram",
    content: (
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
    ),
  },
];

export default function ContatoPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contato"
        title="Canais diretos para falar com o escritório."
        description="Sem formulário. O contato com a equipe acontece por WhatsApp, telefone e atendimento direto."
      />

      <section className="section-shell py-14 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">

          {/* WhatsApp CTA — card escuro */}
          <article className="card-dark p-8 sm:p-10 flex flex-col">
            <div className="gold-accent mb-6" />
            <p className="eyebrow text-brand">WhatsApp</p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-[#f0f5f2] sm:text-5xl">
              Atendimento rápido e objetivo.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#9ab0a8] sm:text-base flex-1">
              Use o WhatsApp como canal principal para iniciar a conversa com o
              escritório e receber orientação inicial sem burocracia.
            </p>
            <div className="mt-8">
              <a
                href={contactHref}
                target="_blank"
                rel={externalLinkRel}
                id="contato-whatsapp-btn"
                className="btn-primary"
              >
                Abrir WhatsApp
              </a>
            </div>
          </article>

          {/* Outros canais */}
          <div className="grid gap-4">
            {contactItems.map((item) => (
              <article key={item.id} className="card p-6 sm:p-7">
                <p className="eyebrow text-brand">{item.eyebrow}</p>
                {item.content}
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
