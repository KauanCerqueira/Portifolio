export const brand = {
  name: "Kauan Cerqueira",
  role: "Web designer",
  description:
    "Páginas diretas para transformar a atenção que seu negócio já recebe em conversa no WhatsApp.",
};

const whatsappMessage =
  "Oi, Kauan! Quero entender como uma página assim poderia funcionar no meu negócio.";

export const whatsappNumberDisplay = "+55 19 99209-0500";
export const whatsappNumberRaw = "5519992090500";
export const whatsappHref = `https://wa.me/${whatsappNumberRaw}?text=${encodeURIComponent(whatsappMessage)}`;

export const navLinks = [
  { name: "Problema", href: "#features" },
  { name: "Processo", href: "#how-it-works" },
  { name: "Exemplos", href: "#examples" },
  { name: "Estrutura", href: "#structure" },
  { name: "Investimento", href: "#pricing" },
];

export const heroContent = {
  kicker: "Atendendo poucos projetos por vez.",
  titleTop: "Transforme visitas em",
  titleBottomLead: "conversas no",
  titleBottomAccent: "WhatsApp.",
  subtitle:
    "Páginas diretas para negócios locais que querem parar de perder cliente por falta de estrutura. Entrega em até 5 dias.",
};

export const heroMedia = {
  poster: null,
  mp4: null,
  webm: "/hero-video.webm",
};

export const heroHighlights = [
  "Mensagem clara",
  "Visual profissional",
  "Entrega em até 5 dias",
  "Foco total em contato",
  "Sem excesso de informação",
  "Estrutura pronta para vender",
];

export const benefitCards = [
  {
    number: "01",
    title: "A pessoa entende rápido",
    description:
      "Sua oferta aparece de forma simples e direta, sem deixar o visitante tentando adivinhar o que você faz.",
  },
  {
    number: "02",
    title: "A página passa mais confiança",
    description:
      "Quando a mensagem está organizada e o visual está limpo, o negócio parece mais sério e mais preparado.",
  },
  {
    number: "03",
    title: "O caminho fica curto",
    description:
      "A página não tenta fazer tudo. Ela leva a pessoa ao que importa: entrar em contato com você.",
  },
  {
    number: "04",
    title: "O processo continua simples",
    description:
      "Não precisa de uma estrutura complexa, nem de um site gigante. A ideia é ter uma página que funcione.",
  },
];

export const processSteps = [
  {
    eyebrow: "Você manda",
    number: "I",
    title: "Você me passa o básico",
    description:
      "Informações do negócio, serviço principal, cidade, WhatsApp e qualquer referência que você já tenha.",
    preview: [
      "Nome do negócio",
      "Serviço principal",
      "WhatsApp",
    ],
  },
  {
    eyebrow: "Eu organizo",
    number: "II",
    title: "Eu organizo a página",
    description:
      "Eu organizo a mensagem, ajusto o visual e deixo a página pronta para levar a pessoa até o contato.",
    preview: [
      "Mensagem principal",
      "Visual organizado",
      "Botão para conversa",
    ],
  },
  {
    eyebrow: "Você recebe",
    number: "III",
    title: "Você recebe pronta para usar",
    description:
      "Em até 5 dias úteis, sua página está no ar. Sem processo longo, sem burocracia e sem mil etapas de revisão.",
    preview: [
      "Página publicada",
      "Link pronto para divulgar",
      "Botão no WhatsApp",
    ],
  },
];

export const structureContent = {
  kicker: "Estrutura",
  title: "Uma página enxuta, feita para a pessoa entender rápido, confiar em você e dar o próximo passo no WhatsApp.",
  description:
    "Sem excesso. Sem distração. Só o que ajuda a transformar visita em conversa.",
  note:
    "Sem seção só para preencher. Cada bloco precisa ajudar a entender, confiar e chamar.",
};

export const structureItems = [
  {
    label: "Oferta clara",
    detail:
      "A pessoa precisa bater o olho e entender o que você faz, para quem faz e por que vale a pena falar com você.",
  },
  {
    label: "Benefícios visíveis",
    detail:
      "Motivos simples e diretos para continuar na página, perceber valor e querer saber mais.",
  },
  {
    label: "Prova ou confiança",
    detail:
      "Elementos reais que aumentam a confiança mais rápido, como experiência, posicionamento, diferenciais ou resultados.",
  },
  {
    label: "Botão para WhatsApp",
    detail:
      "Um próximo passo claro, simples e fácil de seguir para transformar interesse em contato.",
  },
];

export const exampleSectionContent = {
  kicker: "Páginas",
  title: "Veja a página inteira, não só o começo.",
  description:
    "Aqui a ideia é mostrar composição, ritmo visual e caminho até o contato de um jeito mais real, no computador e no celular.",
};

export const exampleCards = [
  {
    slug: "corrida",
    name: "Clube de corrida",
    objective: "Uma página mais energética, com senso de comunidade, abertura forte e chamada clara para participar.",
    tags: ["visual escuro", "comunidade", "chamada forte"],
    status: "Projeto ao vivo",
    notes: [
      "Abertura forte para chamar atenção logo no início.",
      "Ritmo visual pensado para segurar a leitura por mais tempo.",
      "Chamada clara para entrar ou participar sem confusão.",
    ],
    liveHref: "https://template-corrida-v1.vercel.app/",
    screenshotSrc: null,
    tone: "bold",
  },
  {
    slug: "lucy-hair",
    name: "Salão de beleza premium",
    objective: "Uma página com pegada editorial, vitrine de serviços e chamada direta para agendamento no WhatsApp.",
    tags: ["visual premium", "vitrine de serviços", "WhatsApp direto"],
    status: "Projeto ao vivo",
    notes: [
      "Abertura com foto forte e tipografia limpa para passar valor logo no primeiro bloco.",
      "Estrutura de catálogo ajuda a navegar entre tratamentos sem perder o foco comercial.",
      "WhatsApp, telefone e localização aparecem em vários pontos para encurtar a decisão.",
    ],
    liveHref: "https://template-premium-ecomerce-verde.vercel.app/",
    screenshotSrc: null,
    tone: "soft",
  },
  {
    slug: "advocacia-empresarial",
    name: "Advocacia empresarial",
    objective: "Uma página mais institucional, com visual corporativo, especialidades bem organizadas e chamada direta para uma primeira conversa no WhatsApp.",
    tags: ["visual corporativo", "mais confiança", "WhatsApp direto"],
    status: "Projeto ao vivo",
    notes: [
      "Abertura mais sóbria para transmitir segurança e confiança logo no primeiro bloco.",
      "As especialidades aparecem segmentadas para facilitar a leitura e deixar a estrutura mais consultiva.",
      "Chamadas para uma primeira conversa no WhatsApp reaparecem em pontos estratégicos para encurtar a decisão.",
    ],
    liveHref: "https://template-advogado-beta.vercel.app/",
    screenshotSrc: null,
    tone: "dark",
  },
  {
    slug: "arquitetura",
    name: "Arquitetura e interiores",
    objective: "Uma página mais premium, com presença forte e apresentação limpa.",
    tags: ["visual premium", "mais confiança", "WhatsApp direto"],
    status: "Direção visual",
    notes: [
      "Apresentação mais limpa para valorizar o visual do serviço.",
      "Blocos bem espaçados para reforçar sensação de sofisticação.",
      "Botão discreto, mas sempre visível para facilitar o contato.",
    ],
    liveHref: null,
    screenshotSrc: null,
    tone: "light",
  },
  {
    slug: "clinica",
    name: "Clínica ou consultório",
    objective: "Um layout mais sério, organizado e confiável para serviço de decisão mais sensível.",
    tags: ["tom sério", "mais confiança", "estrutura clara"],
    status: "Direção visual",
    notes: [
      "Visual mais sóbrio para passar segurança logo no primeiro contato.",
      "Seções organizadas para reduzir dúvida e acelerar entendimento.",
      "Estrutura pensada para confiança antes da ação no WhatsApp.",
    ],
    liveHref: null,
    screenshotSrc: null,
    tone: "dark",
  },
];

export const resultsSectionContent = {
  kicker: "O que muda",
  titleTop: "Quando a página orienta,",
  titleBottom: "a decisão fica mais fácil.",
  description:
    "Sem prometer número inventado. A ideia aqui é mostrar o que melhora na prática: menos dúvida, mais confiança e conversas melhores no WhatsApp.",
  highlightLabel: "Na prática",
  highlightTitle:
    "Páginas entregues para negócios reais que precisavam organizar a mensagem e facilitar o contato no WhatsApp.",
  highlightDescription:
    "Isso não substitui um bom serviço, mas melhora muito a forma como ele é percebido antes da conversa.",
};

export const resultPillars = [
  {
    title: "Clareza imediata",
    description:
      "Quem entra entende mais rápido o que você faz, para quem faz sentido e qual é o próximo passo.",
  },
  {
    title: "Mais confiança",
    description:
      "Uma mensagem bem organizada faz o negócio parecer mais sério e mais preparado antes mesmo do contato.",
  },
  {
    title: "Leitura guiada",
    description:
      "A página reduz distração, conduz a atenção e leva a pessoa até um único caminho de ação.",
  },
  {
    title: "Contato melhor",
    description:
      "O WhatsApp recebe pessoas com menos dúvida básica e com mais contexto sobre o que elas querem.",
  },
];

export const trustPillars = [
  {
    title: "Mensagem que orienta",
    description:
      "A pessoa entende o essencial mais rápido, sem precisar interpretar demais para saber se faz sentido.",
  },
  {
    title: "Visual que transmite cuidado",
    description:
      "O acabamento certo faz o negócio parecer mais sério e mais confiável logo nos primeiros segundos.",
  },
  {
    title: "Oferta que faz sentido",
    description:
      "A proposta aparece com mais contexto e menos ruído, deixando a decisão mais fácil.",
  },
  {
    title: "Contato fácil de seguir",
    description:
      "O WhatsApp aparece no momento certo, com um próximo passo claro e sem travar a decisão.",
  },
];

export const pricingIncludes = [
  "Página pensada para gerar contato",
  "Mensagem organizada para o seu negócio",
  "Botão levando direto para o WhatsApp",
  "Estrutura pronta para receber prova real depois",
  "Entrega simples, sem processo longo",
];

export const footerLinks = [
  { name: "Problema", href: "#features" },
  { name: "Processo", href: "#how-it-works" },
  { name: "Exemplos", href: "#examples" },
  { name: "Estrutura", href: "#structure" },
  { name: "Investimento", href: "#pricing" },
];
