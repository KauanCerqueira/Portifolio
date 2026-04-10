"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Isso substitui meu Instagram ou meu site?",
    answer:
      "Não. Essa página entra para organizar a decisão. Você pode continuar usando Instagram, anúncio, Google ou indicação. A diferença é que agora existe um lugar certo para mandar a pessoa quando ela demonstrar interesse.",
  },
  {
    question: "Serve para negócio local e prestação de serviço?",
    answer:
      "Sim. A estrutura funciona especialmente bem para quem depende de clareza, confiança e contato rápido: serviços locais, profissionais autônomos, negócios de bairro e operações que usam WhatsApp como canal principal.",
  },
  {
    question: "Preciso chegar com texto e material prontos?",
    answer:
      "Não. Você pode chegar com o básico. Eu organizo a mensagem principal, ajusto o visual e monto a página com o que fizer sentido para o seu caso.",
  },
  {
    question: "Consigo usar em anúncio, perfil e indicação?",
    answer:
      "Sim. A ideia é justamente ter um link direto para usar no perfil, em anúncio, no Google, na mensagem de WhatsApp, por indicação e onde mais você trouxer interesse.",
  },
  {
    question: "O que exatamente eu recebo?",
    answer:
      "Você recebe a página pronta para divulgar, com a mensagem principal organizada, visual ajustado ao negócio e botão direto para o WhatsApp.",
  },
];

function FaqItem({
  question,
  answer,
  index,
  isVisible,
}: {
  question: string;
  answer: string;
  index: number;
  isVisible: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border-b border-foreground/10 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-lg lg:text-xl font-display tracking-tight pr-8">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-24 lg:py-32 border-t border-foreground/10"
    >
      <div className="max-w-[900px] mx-auto px-6 lg:px-12">
        <div className="mb-14 lg:mb-18">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Objeções comuns
          </span>
          <h2
            className={`text-4xl lg:text-5xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            O que as pessoas
            <br />
            costumam travar antes de fechar
          </h2>
        </div>

        <div className="border-t border-foreground/10">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
