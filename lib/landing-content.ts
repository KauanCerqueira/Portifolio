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
  kicker: "Poucos projetos por vez para manter o prazo.",
  titleTop: "Seu negócio já recebe clique.",
  titleBottomLead: "Falta virar",
  titleBottomAccent: "contato.",
  subtitle:
    "Páginas para negócios locais que precisam parar de perder cliente entre o clique e o WhatsApp. Estrutura clara, prova no ponto certo e botão direto para contato. Entrega em até 5 dias úteis.",
};

export const heroMedia = {
  poster: null,
  mp4: null,
  webm: "/hero-video.webm",
};

export const heroHighlights = [
  "Oferta entendida em segundos",
  "Menos dúvida no WhatsApp",
  "Mais valor antes do preço",
  "Botão no lugar certo",
  "Estrutura para perfil, anúncio e indicação",
  "Entrega em até 5 dias",
];

export const benefitCards = [
  {
    number: "01",
    title: "A pessoa entra e não entende",
    description:
      "Nos primeiros segundos ela tenta descobrir o que você faz, para quem faz sentido e por que deveria chamar. Se precisa pensar demais, ela sai.",
  },
  {
    number: "02",
    title: "O WhatsApp recebe lead frio",
    description:
      "Quando a página não prepara a decisão, a conversa começa do zero: pergunta básica, comparação por preço e pouca convicção.",
  },
  {
    number: "03",
    title: "Seu serviço parece menor",
    description:
      "Mesmo com um bom trabalho por trás, a percepção cai quando a oferta está mal apresentada e sem uma mensagem que sustente valor.",
  },
  {
    number: "04",
    title: "Mais tráfego não corrige isso",
    description:
      "Sem estrutura, colocar mais gente para visitar só aumenta o vazamento entre interesse e contato.",
  },
];

export const processSteps = [
  {
    eyebrow: "Você manda",
    number: "I",
    title: "Você me passa o mínimo necessário",
    description:
      "Informações do negócio, serviço principal, cidade, WhatsApp e qualquer referência que já exista.",
    preview: [
      "Nome do negócio",
      "Serviço principal",
      "WhatsApp",
    ],
  },
  {
    eyebrow: "Eu organizo",
    number: "II",
    title: "Eu monto a estrutura de venda",
    description:
      "Eu organizo a mensagem, ajusto o visual e deixo a página pronta para explicar a oferta, gerar confiança e levar ao contato.",
    preview: [
      "Copy principal",
      "Visual com função",
      "Botão para conversa",
    ],
  },
  {
    eyebrow: "Você recebe",
    number: "III",
    title: "Você recebe pronta para divulgar",
    description:
      "Em até 5 dias úteis, sua página fica no ar. Link pronto para usar no perfil, em anúncio, por indicação ou na própria conversa.",
    preview: [
      "Página publicada",
      "Link pronto para enviar",
      "WhatsApp conectado",
    ],
  },
];

export const structureContent = {
  kicker: "Estrutura",
  title: "Uma página boa não enfeita. Ela conduz a decisão.",
  description:
    "Cada bloco precisa empurrar a decisão: entender, confiar e chamar.",
  note:
    "Se a seção não ajuda a gerar contato, ela não entra.",
};

export const structureItems = [
  {
    label: "Oferta entendida rápido",
    detail:
      "A pessoa precisa bater o olho e entender o que você faz, para quem faz sentido e qual problema você resolve.",
  },
  {
    label: "Valor antes do preço",
    detail:
      "A página precisa mostrar por que vale a conversa antes de empurrar a pessoa para comparar só por preço.",
  },
  {
    label: "Prova no ponto certo",
    detail:
      "Depoimento, exemplo, contexto ou sinal de autoridade entram para reduzir desconfiança antes do clique no WhatsApp.",
  },
  {
    label: "Próximo passo fácil de seguir",
    detail:
      "Um próximo passo simples, visível e natural para transformar interesse em contato.",
  },
];

export const exampleSectionContent = {
  kicker: "Estruturas",
  title: "Veja como a oferta pode ser organizada.",
  description:
    "Aqui eu não mostro só visual. Mostro o tipo de página que segura a leitura, valoriza a oferta e conduz o contato no computador e no celular.",
};

export const exampleCards = [
  {
    slug: "corrida",
    name: "Clube de corrida",
    objective: "Demonstração de uma estrutura mais energética, feita para explicar rápido a proposta e levar a pessoa para participar sem fricção.",
    tags: ["visual escuro", "comunidade", "chamada forte"],
    status: "Demonstração",
    notes: [
      "Abertura pensada para a pessoa decidir rápido se faz sentido continuar.",
      "A leitura vai tirando dúvida e mantendo a atenção no próximo passo.",
      "O botão aparece de forma clara sem disputar atenção com excesso de informação.",
    ],
    liveHref: "https://template-corrida-v1.vercel.app/",
    screenshotSrc: null,
    tone: "bold",
  },
  {
    slug: "lucy-hair",
    name: "Salão de beleza premium",
    objective: "Exemplo de estrutura para serviço local que precisa passar valor antes do agendamento e encurtar a decisão no WhatsApp.",
    tags: ["visual premium", "vitrine de serviços", "WhatsApp direto"],
    status: "Página publicada",
    notes: [
      "Abertura forte para elevar percepção de valor logo no primeiro bloco.",
      "Os serviços ficam organizados sem roubar o foco do objetivo comercial.",
      "WhatsApp e informações de contato reaparecem nos pontos em que a decisão costuma travar.",
    ],
    liveHref: "https://template-premium-ecomerce-verde.vercel.app/",
    screenshotSrc: null,
    tone: "soft",
  },
  {
    slug: "advocacia-empresarial",
    name: "Advocacia empresarial",
    objective: "Demonstração de uma estrutura mais institucional, com foco em transmitir segurança, organizar especialidades e abrir uma primeira conversa.",
    tags: ["visual corporativo", "mais confiança", "WhatsApp direto"],
    status: "Demonstração",
    notes: [
      "Abertura mais sóbria para aumentar confiança logo nos primeiros segundos.",
      "As especialidades entram segmentadas para reduzir dúvida e facilitar a leitura.",
      "As chamadas para conversar reaparecem onde a decisão tende a esfriar.",
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
  titleTop: "A pessoa chega menos",
  titleBottom: "crua no WhatsApp.",
  description:
    "Isso não substitui um bom serviço. Mas muda a qualidade da conversa: menos dúvida básica, mais contexto e mais chance de avançar.",
  highlightLabel: "Resultado percebido",
  highlightTitle:
    "Quando a página faz o trabalho inicial, você para de explicar o básico toda vez.",
  highlightDescription:
    "O cliente entende melhor a oferta, compara menos no raso e chega com mais intenção para conversar.",
};

export const resultPillars = [
  {
    title: "Menos dúvida repetida",
    description:
      "A página responde antes as perguntas que hoje você precisa repetir por mensagem ou no WhatsApp.",
  },
  {
    title: "Mais valor percebido",
    description:
      "A oferta chega mais bem apresentada, e isso muda o jeito como a pessoa enxerga seu serviço antes de falar com você.",
  },
  {
    title: "Decisão mais curta",
    description:
      "A leitura reduz fricção e encurta a distância entre interesse e ação.",
  },
  {
    title: "Contato mais qualificado",
    description:
      "O WhatsApp passa a receber gente com mais contexto, menos curiosidade solta e mais intenção real.",
  },
];

export const trustPillars = [
  {
    title: "Direto com quem faz",
    description:
      "Você fala comigo do início ao fim. Sem repasse, sem camada de agência e sem processo inchado.",
  },
  {
    title: "Estrutura pensada para ação",
    description:
      "A página não tenta fazer tudo. Ela existe para levar o visitante a um próximo passo claro.",
  },
  {
    title: "Copy clara e comercial",
    description:
      "O texto organiza a oferta, reduz dúvida e aumenta a percepção de valor antes do contato.",
  },
  {
    title: "Pronta para divulgar",
    description:
      "Você recebe um link enxuto para usar no perfil, em anúncio, no Google, por indicação ou na própria conversa.",
  },
];

export const pricingIncludes = [
  "Página com foco em gerar contato",
  "Mensagem organizada para o seu negócio",
  "Botão direto para o WhatsApp",
  "Estrutura pronta para receber prova e ajustes",
  "Entrega sem processo longo e sem burocracia",
];

export const footerLinks = [
  { name: "Problema", href: "#features" },
  { name: "Processo", href: "#how-it-works" },
  { name: "Exemplos", href: "#examples" },
  { name: "Estrutura", href: "#structure" },
  { name: "Investimento", href: "#pricing" },
];
