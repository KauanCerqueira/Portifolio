export const brand = {
  name: "Kauan Cerqueira",
  role: "Web designer",
  description:
    "Paginas diretas para transformar a atencao que seu negocio ja recebe em conversa no WhatsApp.",
};

const whatsappMessage =
  "Oi, Kauan! Quero entender como uma pagina assim poderia funcionar no meu negocio.";

export const whatsappHref = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;

export const navLinks = [
  { name: "Problema", href: "#features" },
  { name: "Processo", href: "#how-it-works" },
  { name: "Estrutura", href: "#structure" },
  { name: "Investimento", href: "#pricing" },
];

export const heroContent = {
  kicker: "Quando a pessoa entende, ela chama.",
  titleTop: "Transforme visitas em",
  titleBottomLead: "conversas no",
  titleBottomAccent: "WhatsApp.",
  subtitle:
    "Paginas diretas para negocios locais que querem parecer mais profissionais e facilitar o contato.",
};

export const heroMedia = {
  poster: null,
  mp4: null,
  webm: "/hero-video.webm",
};

export const heroHighlights = [
  "Mensagem clara",
  "Visual profissional",
  "Caminho pro WhatsApp",
  "Foco total em conversao",
  "Sem excesso de informacao",
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
      "CTA para conversa",
    ],
  },
  {
    eyebrow: "Você recebe",
    number: "III",
    title: "Você recebe pronta para usar",
    description:
      "Sem processo longo, sem burocracia e sem mil etapas de revisão. É direto ao ponto.",
    preview: [
      "Página publicada",
      "Link pronto para divulgar",
      "Botão no WhatsApp",
    ],
  },
];

export const structureContent = {
  kicker: "Estrutura",
  title: "Só o que ajuda a pessoa a entender e chamar.",
  description:
    "A página não precisa de excesso. Ela precisa organizar o essencial para passar confiança e levar ao WhatsApp.",
};

export const structureItems = [
  { label: "Oferta clara", detail: "o que você faz e para quem essa página fala" },
  { label: "Benefícios visíveis", detail: "motivos simples para a pessoa continuar" },
  { label: "Prova ou autoridade", detail: "algo que ajude a confiar mais rápido" },
  { label: "CTA para WhatsApp", detail: "um próximo passo claro para chamar você" },
];

export const exampleSectionContent = {
  kicker: "Páginas",
  title: "Veja a página inteira, não só a hero.",
  description:
    "Aqui a ideia é mostrar composição, ritmo visual e caminho até o contato de um jeito mais real, em web view e mobile.",
};

export const exampleCards = [
  {
    slug: "corrida",
    name: "Clube de corrida",
    objective: "Uma landing mais energética, com senso de comunidade, hero forte e chamada clara para participar.",
    tags: ["visual escuro", "comunidade", "cta forte"],
    status: "Projeto ao vivo",
    notes: [
      "Hero forte para chamar atenção logo no início.",
      "Ritmo visual pensado para segurar a leitura por mais tempo.",
      "Chamada clara para entrar ou participar sem confusão.",
    ],
    liveHref: "https://template-corrida-v1.vercel.app/",
    screenshotSrc: null,
    tone: "bold",
  },
  {
    slug: "lucy-hair",
    name: "Salao de beleza premium",
    objective: "Uma landing com pegada editorial, vitrine de servicos e CTA direto para agendamento no WhatsApp.",
    tags: ["visual premium", "vitrine de servicos", "whatsapp direto"],
    status: "Projeto ao vivo",
    notes: [
      "Hero com foto forte e tipografia limpa para passar valor logo no primeiro bloco.",
      "Estrutura de catalogo ajuda a navegar entre tratamentos sem perder o foco comercial.",
      "WhatsApp, telefone e localizacao aparecem em varios pontos para encurtar a decisao.",
    ],
    liveHref: "https://template-premium-ecomerce-verde.vercel.app/",
    screenshotSrc: null,
    tone: "soft",
  },
  {
    slug: "arquitetura",
    name: "Arquitetura e interiores",
    objective: "Uma página mais premium, com cara de autoridade e apresentação limpa.",
    tags: ["visual premium", "mais autoridade", "whatsapp direto"],
    status: "Direção visual",
    notes: [
      "Apresentação mais limpa para valorizar o visual do serviço.",
      "Blocos bem espaçados para reforçar sensação de sofisticação.",
      "CTA discreto, mas sempre visível para facilitar o contato.",
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

export const resultPillars = [
  {
    title: "Clareza",
    description: "Quem entra entende mais rapido o que voce oferece.",
  },
  {
    title: "Autoridade",
    description: "O negocio parece mais organizado e mais confiavel.",
  },
  {
    title: "Direcao",
    description: "A pagina aponta para um unico proximo passo.",
  },
  {
    title: "Contato",
    description: "Mais gente chega no WhatsApp sabendo melhor o que quer.",
  },
];

export const trustPillars = [
  {
    title: "Mensagem direta",
    description:
      "Nada de excesso de texto. A pessoa precisa entender o essencial sem se perder.",
  },
  {
    title: "Visual profissional",
    description:
      "A apresentacao certa ajuda o negocio a parecer mais confiavel logo nos primeiros segundos.",
  },
  {
    title: "Oferta simples",
    description:
      "Quando a proposta e clara, fica muito mais facil decidir se vale chamar voce.",
  },
  {
    title: "CTA visivel",
    description:
      "O contato nao fica escondido. A pagina mostra exatamente o que a pessoa deve fazer.",
  },
];

export const intakeTabs = [
  {
    label: "Negocio",
    lines: [
      "Nome do negocio",
      "Cidade ou regiao",
      "Servico principal",
      "Diferencial mais importante",
    ],
  },
  {
    label: "Oferta",
    lines: [
      "O que voce quer vender",
      "Para quem essa pagina fala",
      "Qual resultado a pessoa espera",
      "Qual tom faz mais sentido",
    ],
  },
  {
    label: "Contato",
    lines: [
      "WhatsApp principal",
      "Instagram ou Google, se tiver",
      "Fotos, videos ou referencia visual",
      "Qualquer observacao importante",
    ],
  },
];

export const pricingIncludes = [
  "Landing page com foco em conversao",
  "Mensagem organizada para o seu negocio",
  "CTA direcionado para o WhatsApp",
  "Estrutura pronta para receber prova real depois",
  "Entrega simples, sem processo longo",
];

export const footerLinks = [
  { name: "Problema", href: "#features" },
  { name: "Processo", href: "#how-it-works" },
  { name: "Estrutura", href: "#structure" },
  { name: "Investimento", href: "#pricing" },
];
