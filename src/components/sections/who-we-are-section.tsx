import { SectionKicker } from "@/components/ui/section-kicker";

const metrics = [
  {
    value: "+ 15 anos",
    label: "de atuação sólida",
    description:
      "Experiência construída na prática, defendendo os direitos de nossos clientes.",
  },
  {
    value: "+ 1.000",
    label: "processos acompanhados",
    description:
      "Ações conduzidas com o máximo rigor técnico e compromisso ético.",
  },
  {
    value: "Nacional",
    label: "diversas comarcas",
    description:
      "Atendimento presencial e online em Minas Gerais, Goiás e em todo o Brasil.",
  },
  {
    value: "Completa",
    label: "equipe multidisciplinar",
    description:
      "Soluções coordenadas sob a perspectiva de múltiplos especialistas.",
  },
] as const;

export function WhoWeAreSection() {
  return (
    <section className="surface-alt section-pad border-t border-white/5 text-on-dark">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
        <div className="min-w-0">
          <SectionKicker label="Quem Somos" />
          <h2 className="font-display display-title max-w-md">
            Experiência, Estratégia e Compromisso
          </h2>
          <p className="section-lead max-w-lg text-on-dark-muted">
            O escritório Pereira e Medeiros Advogados nasceu com a missão de oferecer
            atendimento jurídico de excelência, atuando de forma estratégica e
            personalizada para cada cliente.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 min-w-0">
          {metrics.map((item) => (
            <div key={item.value} className="metric-card">
              <p className="font-display text-3xl text-brand font-semibold leading-none">
                {item.value}
              </p>
              <p className="mt-3 text-sm font-semibold text-on-dark-soft">{item.label}</p>
              <p className="mt-2 text-xs text-on-dark-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
