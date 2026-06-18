export const siteName = "Pereira e Medeiros Advogados Associados";

const whatsappMessage = encodeURIComponent(
  "Olá, gostaria de falar com a Pereira e Medeiros Advogados Associados.",
);

export const whatsappPrimary = "(34) 99961-8485";
export const whatsappSecondary = "(34) 99665-2334";
export const phoneDisplay = `${whatsappPrimary} | ${whatsappSecondary}`;
export const telPrimaryHref = "tel:+5534999618485";
export const telSecondaryHref = "tel:+5534996652334";
export const contactHref = `https://wa.me/5534999618485?text=${whatsappMessage}`;
export const contactHrefSecondary = `https://wa.me/5534996652334?text=${whatsappMessage}`;
export const externalLinkRel = "noopener noreferrer";

export const navItems = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/equipe", label: "Equipe" },
  { href: "/areas-de-atuacao", label: "Áreas de Atuação" },
  { href: "/contato", label: "Contato" },
] as const;

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
export const address = addresses[0].line;
export const instagramHandle = "@pereiraemedeiros.adv";
export const instagramUrl = "https://instagram.com/pereiraemedeiros.adv";
export const ogImagePath = "/images/equipe-pereira-medeiros.webp";

export const practiceAreas = [
  {
    name: "Direito Criminal",
    summary:
      "Defesa técnica em investigações, prisões, audiências e processos criminais complexos. Atuação desde o primeiro movimento.",
  },
  {
    name: "Direito Previdenciário",
    summary:
      "Aposentadorias, benefícios por incapacidade, revisões de concessão e defesa de direitos do segurado perante o INSS e a Justiça.",
  },
  {
    name: "Direito de Família",
    summary:
      "Divórcio, guarda, alimentos, inventário e acordos de reorganização familiar — com condução técnica e respeito à situação de cada parte.",
  },
  {
    name: "Direito Empresarial",
    summary:
      "Constituição de sociedades, contratos, recuperação judicial, prevenção de riscos e assessoria jurídica contínua para empresas.",
  },
  {
    name: "Direito Cível",
    summary:
      "Cobranças, indenizações, rescisões contratuais e conflitos patrimoniais — tanto na fase de mediação quanto no contencioso judicial.",
  },
  {
    name: "Direito Trabalhista",
    summary:
      "Reclamações trabalhistas, rescisões, acordos e estratégias de defesa para empregados e empregadores.",
  },
  {
    name: "Direito Ambiental",
    summary:
      "Licenciamento, responsabilização ambiental, infrações administrativas e orientação para empresas sujeitas à legislação ambiental.",
  },
  {
    name: "Direito Público",
    summary:
      "Licitações, contratos administrativos, improbidade, mandado de segurança e demandas envolvendo órgãos e entidades públicas.",
  },
  {
    name: "Direito Estudantil",
    summary:
      "Defesa de direitos em processos disciplinares, cancelamentos, rematrícula, FIES, PROUNI e questões com instituições de ensino.",
  },
];

export const lawyers = [
  {
    name: "Giuliano Martins Medeiros",
    oab: "OAB/MG 136.792",
    area: "Criminal",
    photo: "/images/advogados/giuliano-medeiros.webp",
    bio: "Graduado em Direito pela Universidade do Estado de Minas Gerais (UEMG) — Dezembro/2010. Pós-graduado em Direito Penal e Processo Penal pela Faculdade de Direito Professor Damásio de Jesus — Agosto/2013.",
  },
  {
    name: "Jordana Andrade Medeiros Carvalho",
    oab: "OAB/MG 218.949",
    area: "Criminal e Previdenciário",
    photo: "/images/advogados/jordana-carvalho.webp",
    bio: "Graduada em Direito pela Universidade do Estado de Minas Gerais (UEMG) — Dezembro/2021. Pós-graduada em Direito Penal e Execução Penal pelo EBRADI — Dezembro/2022.",
  },
  {
    name: "João Batista de Medeiros",
    oab: "OAB/MG 148.401",
    area: "Cível, Público, Estudantil e Ambiental",
    photo: "/images/advogados/joao-medeiros.webp",
    bio: "Graduado em Direito pela Universidade do Estado de Minas Gerais (UEMG) — Dezembro/2008. Pós-graduado em Direito Público com Capacitação para Ensino no Magistério Superior pela Faculdade de Direito Professor Damásio de Jesus — Dezembro/2015.",
  },
  {
    name: "Jackson de Lima Medeiros",
    oab: "OAB/MG 232.295",
    area: "Trabalhista",
    photo: "/images/advogados/jackson-medeiros.webp",
    bio: "Graduado em Direito pela Universidade do Estado de Minas Gerais (UEMG) — Dezembro/2008. Pós-graduando em Direito do Trabalho e Direito Processual do Trabalho.",
  },
  {
    name: "Ricardo Barbosa Pereira",
    oab: "OAB/MG 134.326",
    area: "Família, Sucessão e Planejamento Patrimonial, Contencioso Cível e Direito Público",
    photo: "/images/advogados/ricardo-pereira.webp",
    bio: "Graduado em Direito pela Universidade do Estado de Minas Gerais (UEMG) — Dezembro/2010. Pós-graduado em Direito Público pelo Instituto Elpídio Donizetti — Setembro/2021.",
  },
];

export const differentiators = [
  {
    title: "Especialistas em cada frente",
    description:
      "Cada área tem advogado dedicado, com formação específica e experiência prática. Quando o caso envolve mais de uma frente, a equipe atua de forma coordenada.",
  },
  {
    title: "Presença em dois estados, atuação nacional",
    description:
      "Com escritórios em Santa Vitória/MG e São Simão/GO, o escritório está estruturado para acompanhar processos em qualquer comarca do país.",
  },
  {
    title: "Contato direto, sem burocracia",
    description:
      "O relacionamento com o escritório é feito por WhatsApp e telefone, sem formulário e sem triagem. O cliente fala direto com quem conduz o caso.",
  },
];

export const institutionalText = {
  heroTitle: "Advocacia técnica. Atendimento direto. Nove áreas de atuação.",
  heroLead:
    "O escritório Pereira e Medeiros reúne cinco advogados com especialidades distintas e atuação integrada. Direito Criminal, Cível, Empresarial, Previdenciário, Trabalhista, de Família, Ambiental, Público e Estudantil — com escritórios em Minas Gerais e Goiás e atendimento em todo o Brasil.",
  heroSupport:
    "Cada demanda é tratada com profundidade técnica e comunicação direta, do primeiro contato ao encerramento do processo.",
  about:
    "O escritório Pereira e Medeiros foi estruturado para reunir especialistas em áreas complementares, trabalhando de forma coordenada para oferecer uma leitura completa de cada caso.",
  aboutSupport:
    "A atuação integrada garante que demandas com múltiplas dimensões jurídicas — penais, cíveis, familiares, trabalhistas ou empresariais — sejam conduzidas sem lacunas técnicas.",
};

export const criminalAuthority = [
  {
    title: "Defesa desde o primeiro movimento",
    description:
      "Investigação, flagrante, indiciamento, audiência ou julgamento: cada fase exige posicionamento diferente. A equipe identifica o momento e age com método.",
  },
  {
    title: "Resposta imediata por WhatsApp",
    description:
      "Casos penais não esperam horário comercial. O contato direto por WhatsApp permite orientação rápida em situações que exigem decisão no momento certo.",
  },
  {
    title: "Leitura das conexões do caso",
    description:
      "Uma questão criminal pode ter reflexos patrimoniais, familiares ou trabalhistas. A equipe enxerga essas interseções e as trabalha de forma conjunta.",
  },
];

export const whenSeekItems = [
  {
    title: "Questão penal em aberto",
    text: "Investigação, intimação, prisão, audiência ou processo em andamento: a entrada técnica no momento certo define as opções disponíveis na defesa.",
  },
  {
    title: "Disputa de direitos",
    text: "Separação, herança, rescisão de contrato, cobrança, benefício negado ou demissão sem justa causa — cada situação tem um caminho jurídico específico.",
  },
  {
    title: "Decisão com impacto jurídico",
    text: "Antes de assinar um contrato, fechar um acordo ou prestar depoimento, uma consulta com o advogado certo evita erros difíceis de corrigir depois.",
  },
];

export const whyChooseItems = [
  {
    title: "Equipe com especialidades reais",
    description:
      "Não há generalistas aqui. Cada advogado tem formação e prática direcionadas à sua área. O cliente é atendido por quem entende o tipo específico de demanda que ele tem.",
  },
  {
    title: "O caso não fica sem resposta",
    description:
      "O acompanhamento é feito de perto. O cliente sabe o que está acontecendo, o que foi feito e o que vem a seguir — sem precisar correr atrás de informação.",
  },
  {
    title: "Atendimento onde o caso estiver",
    description:
      "Com estrutura para atuação nacional, o escritório acompanha demandas em qualquer comarca, sem que a distância seja um obstáculo para a condução do caso.",
  },
];

export const faqItems = [
  {
    question: "O escritório atua em quantas áreas do Direito?",
    answer:
      "Em nove: Criminal, Previdenciário, Família, Empresarial, Cível, Trabalhista, Ambiental, Público e Estudantil. Cada área tem advogado com formação específica. Quando o caso atravessa mais de uma frente, a equipe trabalha de forma coordenada.",
  },
  {
    question: "O escritório atende casos urgentes?",
    answer:
      "Sim. O contato por WhatsApp foi estruturado exatamente para isso. Casos criminais, prisões em flagrante, prazos processuais e situações que exigem orientação imediata têm prioridade de atendimento.",
  },
  {
    question: "Como funciona o primeiro contato?",
    answer:
      "Por WhatsApp ou telefone, sem formulário. A equipe ouve o caso, entende a urgência e indica o encaminhamento adequado. Na maioria dos casos, o retorno acontece no mesmo dia.",
  },
  {
    question: "O escritório atende fora de Santa Vitória/MG?",
    answer:
      "Sim. Com escritórios em Santa Vitória/MG e São Simão/GO, a equipe está estruturada para acompanhar demandas em qualquer comarca do Brasil — presencialmente quando necessário, e de forma remota nos demais casos.",
  },
  {
    question: "O escritório atende pessoas físicas e empresas?",
    answer:
      "Sim, ambos. Para pessoas físicas, as demandas mais comuns envolvem criminal, família, previdência, trabalho e cível. Para empresas, o escritório atua em contratos, compliance, questões trabalhistas, ambientais e administrativas.",
  },
  {
    question: "É possível fazer consultoria preventiva — antes de surgir um problema?",
    answer:
      "Sim, e é recomendável. Análise de contratos, planejamento patrimonial, assessoria para decisões com impacto jurídico e estruturação empresarial são parte do trabalho do escritório. Agir antes do conflito costuma ser mais eficiente e menos custoso.",
  },
  {
    question: "O escritório oferece acompanhamento durante todo o processo?",
    answer:
      "Sim. O cliente não precisa ficar cobrando atualização. A equipe mantém comunicação direta ao longo de cada etapa — do primeiro protocolo ao encerramento do caso.",
  },
];
