"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "O que é uma landing page?",
    answer:
      "Uma landing page é uma página única, focada em um objetivo específico — no caso, levar o visitante a entrar em contato pelo WhatsApp. Diferente de um site completo, ela é direta e sem distrações.",
  },
  {
    question: "Quanto tempo leva para ficar pronta?",
    answer:
      "O processo é rápido. Após o alinhamento inicial, a maioria das páginas fica pronta entre 3 e 5 dias úteis. Dependendo da complexidade, pode ser ainda mais rápido.",
  },
  {
    question: "Preciso enviar tudo pronto?",
    answer:
      "Não. Você pode chegar com pouco material. Eu organizo a mensagem, ajusto o visual e deixo a página pronta para funcionar com o que você já tem.",
  },
  {
    question: "A página funciona no celular?",
    answer:
      "Sim. Todas as páginas são responsivas e otimizadas para funcionar bem em qualquer dispositivo — celular, tablet ou computador.",
  },
  {
    question: "Qual o investimento?",
    answer:
      "O valor atual é R$ 650 por página — condição especial por tempo limitado. Me chama no WhatsApp que eu te explico o que está incluído e a gente alinha os detalhes em poucos minutos.",
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
            Dúvidas frequentes
          </span>
          <h2
            className={`text-4xl lg:text-5xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Perguntas sobre criação
            <br />
            de landing pages
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
