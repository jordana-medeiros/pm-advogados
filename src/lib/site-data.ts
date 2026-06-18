export const siteName = "Pereira e Medeiros Advogados Associados";

const whatsappMessage = encodeURIComponent(
  "Olá, preciso falar com o escritório Pereira e Medeiros.",
);

export const whatsappPrimary = "(34) 99961-8485";
export const whatsappSecondary = "(34) 99665-2334";
export const telPrimaryHref = "tel:+5534999618485";
export const telSecondaryHref = "tel:+5534996652334";
export const contactHref = `https://wa.me/5534999618485?text=${whatsappMessage}`;
export const contactHrefSecondary = `https://wa.me/5534996652334?text=${whatsappMessage}`;
export const externalLinkRel = "noopener noreferrer";

export function buildAreaContactHref(area: string) {
  const message = encodeURIComponent(
    `Olá, preciso de orientação jurídica na área de ${area}.`,
  );
  return `https://wa.me/5534999618485?text=${message}`;
}

export type NavItem = {
  href: string;
  label: string;
  cta?: boolean;
};

export const siteDescription =
  "Advogados com foco em Direito Criminal e atuação em mais oito áreas. Escritórios em MG e GO. Atendimento direto, sem formulário.";

export const homeAreasSectionId = "areas-de-atuacao";
export const homeAreasHref = `/#${homeAreasSectionId}`;

export const navItems: NavItem[] = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/equipe", label: "Equipe" },
  { href: homeAreasHref, label: "Áreas de Atuação" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato", cta: true },
];

export const addresses = [
  {
    city: "Santa Vitória/MG",
    line: "Avenida Acre, 1494, Centro, Santa Vitória/MG",
    mapsUrl:
      "https://maps.google.com/?q=Avenida+Acre,+1494,+Centro,+Santa+Vit%C3%B3ria,+MG",
  },
  {
    city: "São Simão/GO",
    line: "Avenida Brasil, n. 120, Sala 03, Centro, São Simão/GO",
    mapsUrl:
      "https://maps.google.com/?q=Avenida+Brasil,+120,+Centro,+S%C3%A3o+Sim%C3%A3o,+GO",
  },
];
export const instagramHandle = "@pereiraemedeiros.adv";
export const instagramUrl = "https://instagram.com/pereiraemedeiros.adv";

export const brandLogos = {
  white: "/brand/logo-white.png",
  gold: "/brand/logo-gold.png",
  green: "/brand/logo-green.png",
} as const;

export const images = {
  hero: {
    ladyJustice: "/images/hero/lady-justice.webp",
  },
  team: {
    group: "/images/team/group.webp",
    groupAlt: "/images/team/group-alt.webp",
    principals: "/images/team/giuliano-e-jordana.webp",
  },
} as const;

export const ogImagePath = "/images/og/equipe.jpg";
export const ogImageWidth = 1200;
export const ogImageHeight = 630;

export const practiceAreasIntro = {
  title: "Cada problema exige uma estratégia diferente.",
  description:
    "Nossa equipe atua em áreas específicas do Direito para oferecer orientação adequada para cada situação.",
};

export const practiceAreas = [
  {
    name: "Direito Criminal",
    summary:
      "Investigação, prisão, audiência e júri. Defesa desde o primeiro ato.",
  },
  {
    name: "Direito Previdenciário",
    summary:
      "Aposentadoria, auxílio-doença, revisão de benefício e ação contra o INSS.",
  },
  {
    name: "Direito de Família",
    summary:
      "Divórcio, guarda, pensão alimentícia, inventário e partilha de bens.",
  },
  {
    name: "Direito Empresarial",
    summary:
      "Contrato, constituição de empresa, recuperação judicial e consultoria fixa.",
  },
  {
    name: "Direito Cível",
    summary:
      "Cobrança, indenização, rescisão contratual e disputa patrimonial.",
  },
  {
    name: "Direito Trabalhista",
    summary:
      "Reclamação trabalhista, rescisão e defesa de empregado ou empregador.",
  },
  {
    name: "Direito Ambiental",
    summary:
      "Licenciamento, auto de infração e defesa em responsabilização ambiental.",
  },
  {
    name: "Direito Público",
    summary:
      "Licitação, contrato administrativo, improbidade e mandado de segurança.",
  },
  {
    name: "Direito Estudantil",
    summary:
      "Processo disciplinar, matrícula, FIES, PROUNI e conflito com faculdade.",
  },
];

export const teamIntro = {
  title: "Você sabe exatamente com quem está falando.",
  description:
    "Conheça os advogados responsáveis por cada área de atuação e entenda quem conduzirá seu atendimento.",
};

export const lawyers = [
  {
    name: "Giuliano Martins Medeiros",
    oab: "OAB/MG 136.792",
    area: "Criminal",
    photo: "/images/lawyers/giuliano-medeiros.webp",
    bio: "Graduado em Direito pela Universidade do Estado de Minas Gerais (UEMG) — Dezembro/2010. Pós-graduado em Direito Penal e Processo Penal pela Faculdade de Direito Professor Damásio de Jesus — Agosto/2013.",
  },
  {
    name: "Jordana Andrade Medeiros Carvalho",
    oab: "OAB/MG 218.949",
    area: "Criminal e Previdenciário",
    photo: "/images/lawyers/jordana-carvalho.webp",
    bio: "Graduada em Direito pela Universidade do Estado de Minas Gerais (UEMG) — Dezembro/2021. Pós-graduada em Direito Penal e Execução Penal pelo EBRADI — Dezembro/2022.",
  },
  {
    name: "João Batista de Medeiros",
    oab: "OAB/MG 148.401",
    area: "Cível, Público, Estudantil e Ambiental",
    photo: "/images/lawyers/joao-medeiros.webp",
    bio: "Graduado em Direito pela Universidade do Estado de Minas Gerais (UEMG) — Dezembro/2008. Pós-graduado em Direito Público com Capacitação para Ensino no Magistério Superior pela Faculdade de Direito Professor Damásio de Jesus — Dezembro/2015.",
  },
  {
    name: "Jackson de Lima Medeiros",
    oab: "OAB/MG 232.295",
    area: "Trabalhista",
    photo: "/images/lawyers/jackson-medeiros.webp",
    bio: "Graduado em Direito pela Universidade do Estado de Minas Gerais (UEMG) — Dezembro/2008. Pós-graduando em Direito do Trabalho e Direito Processual do Trabalho.",
  },
  {
    name: "Ricardo Barbosa Pereira",
    oab: "OAB/MG 134.326",
    area: "Família, Sucessão e Planejamento Patrimonial, Contencioso Cível e Direito Público",
    photo: "/images/lawyers/ricardo-pereira.webp",
    bio: "Graduado em Direito pela Universidade do Estado de Minas Gerais (UEMG) — Dezembro/2010. Pós-graduado em Direito Público pelo Instituto Elpídio Donizetti — Setembro/2021.",
  },
];

export const differentiators = [
  {
    title: "Advogado por área",
    description:
      "Cada ramo do Direito tem responsável no escritório. Caso que envolve mais de uma área é analisado em conjunto.",
  },
  {
    title: "MG, GO e qualquer comarca",
    description:
      "Escritórios em Santa Vitória/MG e São Simão/GO. Processos acompanhados presencialmente ou à distância, em todo o país.",
  },
  {
    title: "Contato direto",
    description:
      "Telefone e mensagem. Quem responde é quem conduz o caso — sem formulário e sem triagem.",
  },
];

export const institutionalText = {
  about:
    "Cinco advogados, cada um com atuação definida em sua área. O escritório foi montado para casos que exigem mais de um olhar técnico.",
  aboutSupport:
    "Quando penal, cível, trabalhista ou empresarial se cruzam, a análise é feita em conjunto — sem lacuna entre frentes.",
  essenceTitle: "Técnica aplicada ao caso concreto.",
  essenceBody:
    "O trabalho começa pelo fato, pelos documentos e pelos prazos. O cliente acompanha o andamento e sabe o que foi feito e o que vem a seguir.",
  presenceTitle: "Processo em qualquer lugar do país.",
  presenceBody:
    "A distância não impede a condução. Deslocamento presencial quando o caso exige; remoto nos demais.",
};

export const criminalHighlightIntro = {
  title: "Foi surpreendido por uma investigação, prisão ou intimação?",
  paragraphs: [
    "O tempo pode ser determinante para a sua defesa.",
    "Nossa equipe atua na análise imediata do caso, orientação da família e definição dos próximos passos jurídicos.",
  ],
  cta: "Falar com um advogado criminalista",
};

export const criminalAuthority = [
  {
    title: "Defesa desde o primeiro momento",
    description:
      "Orientação imediata para proteger seus direitos desde o início do procedimento.",
  },
  {
    title: "Resposta estratégica",
    description:
      "Cada caso exige análise individual e definição da melhor linha de atuação.",
  },
  {
    title: "Atuação em situações urgentes",
    description:
      "Prisões em flagrante, audiências de custódia e medidas que exigem resposta rápida.",
  },
];


export const whenSeekIntro = {
  title: "O momento certo de agir pode mudar o resultado do seu caso.",
  paragraphs: [
    "Antes que o problema se agrave — ou antes de assinar, responder ou decidir — converse com um advogado.",
  ],
};

export const whenSeekItems = [
  {
    title: "Situação pessoal",
    text: "Separação, inventário, guarda ou conflitos familiares.",
  },
  {
    title: "Conflitos e disputas",
    text: "Risco financeiro ou patrimonial — agir cedo amplia as opções de defesa.",
  },
  {
    title: "Antes de assinar",
    text: "Análise preventiva evita prejuízos e disputas futuras.",
  },
];

export const faqItems = [
  {
    question: "Meu atendimento é sigiloso?",
    answer:
      "Sim. Tudo o que você relatar é tratado com sigilo profissional. Suas informações não são compartilhadas com terceiros sem sua autorização.",
  },
  {
    question: "Posso ser atendido online?",
    answer:
      "Sim. O primeiro contato pode ser feito pelo WhatsApp ou telefone. Quando necessário, também realizamos reuniões por videochamada — sem exigir deslocamento imediato.",
  },
  {
    question: "Quanto custa uma consulta?",
    answer:
      "O valor depende da área do Direito e da complexidade do caso. Após entender sua situação, a equipe informa honorários e formas de pagamento antes de qualquer contratação.",
  },
  {
    question: "Atendem casos urgentes?",
    answer:
      "Sim. Flagrante, prisão, prazos processuais e outras situações que não podem esperar recebem prioridade no atendimento.",
  },
  {
    question: "Vocês atuam em outras cidades?",
    answer:
      "Sim. Há escritórios em Santa Vitória/MG e São Simão/GO, com atuação em Minas Gerais, Goiás e em processos em outras comarcas do Brasil — presencial quando o caso exige.",
  },
  {
    question: "Como funciona a contratação?",
    answer:
      "Você relata o caso pelo WhatsApp ou telefone. A equipe indica o advogado da área, explica o encaminhamento e, se fizer sentido, formaliza a contratação com proposta clara de honorários.",
  },
  {
    question: "Quem analisará meu caso?",
    answer:
      "Um advogado da equipe responsável pela área do seu problema — Criminal, Família, Previdenciário ou outra. Você sabe com quem está falando antes de avançar.",
  },
  {
    question: "Em quanto tempo recebo retorno?",
    answer:
      "Em regra, no mesmo dia útil. Casos urgentes são priorizados assim que a mensagem chega.",
  },
];
