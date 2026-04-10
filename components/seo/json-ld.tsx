export function JsonLd() {
  const siteUrl = "https://kauancerqueira.com.br";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kauan Cerqueira",
    url: siteUrl,
    image: `${siteUrl}/eu.png`,
    jobTitle: "Web Designer",
    description:
      "Criação de páginas profissionais para negócios locais. Páginas diretas com foco em gerar contato no WhatsApp.",
    knowsAbout: [
      "Páginas para gerar contato",
      "Web Design",
      "Criação de Sites",
      "UX Design",
      "Conversão",
    ],
    sameAs: [],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Kauan Cerqueira — Páginas para gerar contato",
    url: siteUrl,
    description:
      "Criação de páginas pensadas para negócios locais que querem transformar visitantes em conversas no WhatsApp.",
    provider: {
      "@type": "Person",
      name: "Kauan Cerqueira",
    },
    serviceType: "Criação de páginas para gerar contato",
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Páginas para Negócios Locais",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Página para Negócios Locais",
            description:
              "Página pensada para gerar contato, com mensagem organizada, botão direto para WhatsApp e entrega simples.",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kauan Cerqueira",
    url: siteUrl,
    description:
      "Criação de páginas profissionais para negócios locais que geram contato no WhatsApp.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "O que é essa página?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "É uma página única, focada em um objetivo específico: levar o visitante a entrar em contato pelo WhatsApp. Diferente de um site completo, ela é direta e sem distrações.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto tempo leva para ficar pronta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O processo é direto e sem burocracia. Após o alinhamento inicial, a página costuma ficar pronta em poucos dias, dependendo da complexidade e do material disponível.",
        },
      },
      {
        "@type": "Question",
        name: "Preciso enviar tudo pronto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Não. Você pode chegar com pouco material. Eu organizo a mensagem, ajusto o visual e deixo a página pronta para funcionar com o que você já tem.",
        },
      },
      {
        "@type": "Question",
        name: "A página funciona no celular?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Todas as páginas são responsivas e otimizadas para funcionar bem em qualquer dispositivo — celular, tablet ou computador.",
        },
      },
      {
        "@type": "Question",
        name: "Qual o investimento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O orçamento é sob medida e depende do que a sua página precisa. Me chama no WhatsApp e eu te passo um direcionamento claro, sem complicar.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
