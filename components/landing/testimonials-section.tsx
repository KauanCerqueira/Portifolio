"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    badge: "Resultado rapido",
    headline: "Pagina no ar, conversa no mesmo dia.",
    summary:
      "Subiu a noite. Na manha seguinte ja vieram 4 pessoas no WhatsApp e 2 matriculas fecharam.",
    proof: "Prova que a estrutura encurta a distancia entre clique, conversa e fechamento.",
    name: "Ricardo",
    role: "CT de Treinamento",
    imageSrc: "/prints/3.jpeg",
    imageWidth: 1080,
    imageHeight: 1062,
    alt: "Conversa no WhatsApp com Ricardo dizendo que a pagina subiu ontem, vieram quatro pessoas e ele fechou duas matriculas.",
  },
  {
    badge: "Processo leve",
    headline: "Sem agencia, sem novela de reuniao.",
    summary:
      "Tudo foi resolvido com um audio e algumas fotos. Sem arrastar briefing nem aprovacao.",
    proof: "Prova que a entrega parece leve para quem nao quer virar refem de processo.",
    name: "Dra. Ana Paula",
    role: "Clinica",
    imageSrc: "/prints/2.jpeg",
    imageWidth: 1080,
    imageHeight: 1237,
    alt: "Conversa no WhatsApp com Dra. Ana Paula elogiando o processo leve e dizendo que resolveu tudo com um audio e fotos.",
  },
  {
    badge: "Lead mais qualificado",
    headline: "Menos curioso solto no WhatsApp.",
    summary:
      "As pessoas chegaram sabendo preco, entendendo a oferta e consumindo menos tempo do atendimento.",
    proof: "Prova que a pagina nao gera so mensagem. Ela melhora a qualidade da conversa.",
    name: "Marcos",
    role: "Estetica Automotiva",
    imageSrc: "/prints/1.jpeg",
    imageWidth: 1080,
    imageHeight: 1028,
    alt: "Conversa no WhatsApp com Marcos dizendo que agora as pessoas chegam sabendo o preco e o que a empresa faz.",
  },
];

export function TestimonialsSection() {
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
      id="proof"
      ref={sectionRef}
      className="relative border-y border-foreground/10 py-20 lg:py-24"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(41,43,45,0.24),transparent)]"
      />

      <div className="mx-auto max-w-[1320px] px-6 lg:px-12">
        <div
          className={`mb-12 max-w-3xl transition-all duration-700 lg:mb-14 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span className="mb-5 inline-flex items-center gap-3 text-xs font-mono text-muted-foreground">
            <span className="h-px w-8 bg-foreground/30" />
            Feedback no WhatsApp
          </span>
          <h2 className="text-[2.35rem] font-display leading-[0.96] tracking-tight lg:text-[4.25rem]">
            A prova nao esta no layout.
            <br />
            Esta no WhatsApp.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-[1.05rem]">
            Antes do preco, a prova precisa bater o olho e parecer real. Os 3
            prints abaixo quebram, em sequencia, as duvidas de resultado,
            esforco e qualidade do lead.
          </p>
        </div>

        <div className="grid gap-px bg-foreground/10 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className={`flex h-full flex-col bg-background p-5 transition-all duration-700 sm:p-6 lg:p-7 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-3 text-[10px] font-mono uppercase leading-tight tracking-[0.2em] text-muted-foreground sm:text-[11px] sm:tracking-[0.24em]">
                  <span className="h-px w-6 bg-foreground/20" />
                  {testimonial.badge}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-muted-foreground sm:text-[11px]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-5 rounded-[1.45rem] border border-foreground/10 bg-[#ebe6de] p-2 sm:p-3">
                <div className="h-[320px] overflow-hidden rounded-[1rem] sm:h-[360px] lg:h-[300px] xl:h-[340px]">
                  <Image
                    src={testimonial.imageSrc}
                    alt={testimonial.alt}
                    width={testimonial.imageWidth}
                    height={testimonial.imageHeight}
                    className="h-full w-full rounded-[1rem] object-cover object-top"
                    priority={index === 0}
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-1 flex-col">
                <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground">
                  {testimonial.name} . {testimonial.role}
                </p>
                <div className="lg:min-h-[188px]">
                  <h3 className="mt-4 text-balance text-[1.85rem] font-display leading-[0.98] tracking-tight text-foreground">
                    {testimonial.headline}
                  </h3>
                  <p className="mt-4 text-[0.98rem] leading-relaxed text-muted-foreground">
                    {testimonial.summary}
                  </p>
                </div>

                <div className="mt-6 border-t border-foreground/10 pt-5">
                  <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground">
                    O que isso prova
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/82">
                    {testimonial.proof}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
