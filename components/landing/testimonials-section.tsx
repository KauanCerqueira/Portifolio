"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappHref } from "@/lib/landing-content";

const testimonials = [
  {
    badge: "Resultado rápido",
    headline: "Subiu ontem. Hoje já tem gente chamando.",
    summary:
      "A página entrou no ar e, na manhã seguinte, já tinha conversa chegando no WhatsApp.",
    proof: "Oferta clara encurta a distância entre clique e contato.",
    name: "Ricardo",
    role: "CT de Treinamento",
    imageSrc: "/prints/3.jpeg",
    imageWidth: 1080,
    imageHeight: 1062,
    alt: "Conversa no WhatsApp com Ricardo dizendo que a página subiu ontem, vieram quatro pessoas e ele fechou duas matrículas.",
  },
  {
    badge: "Processo leve",
    headline: "Sem agência. Sem processo arrastado.",
    summary:
      "Tudo foi resolvido com um áudio e algumas fotos. Rápido, direto e sem tomar o tempo da cliente.",
    proof: "A praticidade da entrega também aumenta a percepção de valor.",
    name: "Dra. Ana Paula",
    role: "Clínica",
    imageSrc: "/prints/2.jpeg",
    imageWidth: 1080,
    imageHeight: 1237,
    alt: "Conversa no WhatsApp com Dra. Ana Paula elogiando o processo leve e dizendo que resolveu tudo com um áudio e fotos.",
  },
  {
    badge: "Lead mais qualificado",
    headline: "Menos curioso. Mais conversa pronta.",
    summary:
      "As pessoas chegaram entendendo melhor a oferta, com menos dúvida básica e mais intenção.",
    proof: "A página não gera só mensagem. Ela melhora a qualidade do contato.",
    name: "Marcos",
    role: "Estética Automotiva",
    imageSrc: "/prints/1.jpeg",
    imageWidth: 1080,
    imageHeight: 1028,
    alt: "Conversa no WhatsApp com Marcos dizendo que agora as pessoas chegam sabendo o preço e o que a empresa faz.",
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
      className="relative border-y border-foreground/10 py-18 lg:py-22"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(41,43,45,0.24),transparent)]"
      />

      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div
          className={`mb-10 max-w-3xl transition-all duration-700 lg:mb-12 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span className="mb-4 inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground">
            <span className="h-px w-8 bg-foreground/30" />
            Prova real
          </span>
          <h2 className="text-[2rem] font-display leading-[0.96] tracking-tight lg:text-[3.55rem]">
            A prova não está no layout.
            <br />
            Está no WhatsApp.
          </h2>
          <p className="mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-muted-foreground lg:text-[1.02rem]">
            Quando a página está certa, o WhatsApp muda: menos curioso, mais
            contexto e mais intenção de compra.
          </p>
        </div>

        <div className="grid gap-px bg-foreground/10 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className={`flex h-full flex-col bg-background p-5 transition-all duration-700 sm:p-6 ${
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

              <div className="mt-4 rounded-[1.35rem] border border-foreground/10 bg-[#ebe6de] p-2 sm:p-3">
                <div className="h-[250px] overflow-hidden rounded-[0.95rem] sm:h-[285px] lg:h-[240px] xl:h-[280px]">
                  <Image
                    src={testimonial.imageSrc}
                    alt={testimonial.alt}
                    width={testimonial.imageWidth}
                    height={testimonial.imageHeight}
                    className="h-full w-full rounded-[0.95rem] object-cover object-top"
                    priority={index === 0}
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-1 flex-col">
                <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-muted-foreground sm:text-[11px]">
                  {testimonial.name} · {testimonial.role}
                </p>

                <div className="lg:min-h-[132px]">
                  <h3 className="mt-3 text-balance text-[1.55rem] font-display leading-[0.98] tracking-tight text-foreground lg:text-[1.75rem]">
                    {testimonial.headline}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {testimonial.summary}
                  </p>
                </div>

                <div className="mt-5 border-t border-foreground/10 pt-4">
                  <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-muted-foreground sm:text-[11px]">
                    Leitura comercial
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/82">
                    {testimonial.proof}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className={`border-x border-b border-foreground/10 bg-background px-5 py-5 transition-all duration-700 sm:px-6 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-3xl text-[1.15rem] font-display leading-[1.08] tracking-tight text-foreground lg:text-[1.45rem]">
              Se hoje o seu WhatsApp ainda recebe gente perguntando tudo do zero,
              sua página ainda não está preparando a conversa como deveria.
            </p>

            <Button
              asChild
              className="h-11 rounded-full bg-foreground px-5 text-primary-foreground hover:bg-foreground/90"
            >
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                Quero uma página assim
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
