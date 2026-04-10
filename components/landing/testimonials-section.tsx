"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const testimonials = [
  {
    badge: "Resultado rápido",
    headline: "Página no ar, conversa no mesmo dia.",
    summary:
      "A página subiu à noite. Na manhã seguinte já vieram 4 pessoas no WhatsApp e 2 matrículas fecharam.",
    objection: "Isso realmente gera conversa ou só deixa o negócio mais bonito?",
    support:
      "Aqui a prova é direta: a estrutura encurta a distância entre visita, conversa e fechamento.",
    name: "Ricardo",
    role: "CT de Treinamento",
    imageSrc: "/prints/3.jpeg",
    imageWidth: 1080,
    imageHeight: 1062,
    alt: "Conversa no WhatsApp com Ricardo dizendo que a página subiu ontem, vieram quatro pessoas e ele fechou duas matrículas.",
  },
  {
    badge: "Processo leve",
    headline: "Sem agência, sem reunião infinita.",
    summary:
      "A cliente destaca que resolveu tudo com um áudio e algumas fotos. Sem dor de cabeça, sem arrastar aprovação.",
    objection: "Vai virar um projeto cansativo e tomar meu tempo?",
    support:
      "Esse print tira a objeção de esforço: a entrega parece leve, direta e compatível com a rotina de quem atende o próprio negócio.",
    name: "Dra. Ana Paula",
    role: "Clínica",
    imageSrc: "/prints/2.jpeg",
    imageWidth: 1080,
    imageHeight: 1237,
    alt: "Conversa no WhatsApp com Dra. Ana Paula elogiando o processo leve e dizendo que resolveu tudo com um áudio e fotos.",
  },
  {
    badge: "Lead mais qualificado",
    headline: "Menos curioso solto no WhatsApp.",
    summary:
      "A página começou a filtrar melhor. As pessoas chegam sabendo preço, entendendo a oferta e consumindo menos tempo do atendimento.",
    objection: "Vou receber mais mensagem ruim e continuar perdendo tempo?",
    support:
      "Em vez de só aumentar contato, o print mostra melhora na qualidade da conversa e no esforço comercial do dia a dia.",
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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
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

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    updateCurrent();
    api.on("select", updateCurrent);
    api.on("reInit", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
      api.off("reInit", updateCurrent);
    };
  }, [api]);

  const activeTestimonial = testimonials[current] ?? testimonials[0];

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
            A prova não está no layout.
            <br />
            Está no WhatsApp.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-[1.05rem]">
            Antes do preço, a prova precisa parecer real. Não como elogio genérico,
            mas como resposta concreta de quem já colocou a página no ar.
          </p>
        </div>

        <div
          className={`border border-foreground/10 bg-background transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 border-b border-foreground/10 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
              <span className="inline-flex items-center gap-3 text-[10px] font-mono uppercase leading-tight tracking-[0.2em] text-muted-foreground sm:text-[11px] sm:tracking-[0.24em]">
                <span className="h-px w-6 bg-foreground/20" />
                {activeTestimonial.badge}
              </span>
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground/72 sm:text-xs sm:tracking-normal">
                {activeTestimonial.name} · {activeTestimonial.role}
              </span>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                disabled={current === 0}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/12 text-foreground transition-colors hover:bg-foreground/5 disabled:cursor-not-allowed disabled:opacity-35"
                aria-label="Feedback anterior"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => api?.scrollNext()}
                disabled={current === testimonials.length - 1}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/12 text-foreground transition-colors hover:bg-foreground/5 disabled:cursor-not-allowed disabled:opacity-35"
                aria-label="Próximo feedback"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: false }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.name} className="basis-full">
                  <article className="grid gap-6 px-4 py-5 sm:px-6 sm:py-6 lg:grid-cols-[minmax(0,0.96fr)_340px] lg:items-start lg:gap-8 lg:px-8 lg:py-8">
                    <div className="min-w-0">
                      <div className="mx-auto max-w-[760px] rounded-[1.5rem] border border-foreground/10 bg-[#ebe6de] p-2 sm:max-w-[700px] sm:p-3 lg:max-w-[680px]">
                        <Image
                          src={testimonial.imageSrc}
                          alt={testimonial.alt}
                          width={testimonial.imageWidth}
                          height={testimonial.imageHeight}
                          className="h-auto w-full rounded-[1.05rem]"
                          priority={index === 0}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div>
                        <h3 className="text-[2rem] font-display leading-[0.98] tracking-tight text-foreground lg:text-[3rem]">
                          {testimonial.headline}
                        </h3>
                        <p className="mt-4 text-[0.98rem] leading-relaxed text-muted-foreground lg:text-base">
                          {testimonial.summary}
                        </p>
                      </div>

                      <div className="mt-8 border-t border-foreground/10 pt-6">
                        <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground">
                          Objeção que esse print quebra
                        </p>
                        <p className="mt-3 text-[1.45rem] font-display leading-[1.05] tracking-tight text-foreground lg:text-[1.75rem]">
                          {testimonial.objection}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {testimonial.support}
                        </p>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="border-t border-foreground/10 px-4 py-4 lg:px-6">
            <div className="grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => api?.scrollTo(index)}
                  className={`flex h-full min-h-[108px] flex-col justify-between border px-4 py-4 text-left transition-colors sm:min-h-[112px] ${
                    current === index
                      ? "border-foreground bg-foreground text-background"
                      : "border-foreground/10 bg-background hover:bg-foreground/[0.03]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`text-[11px] font-mono uppercase tracking-[0.24em] ${
                        current === index ? "text-background/70" : "text-muted-foreground"
                      }`}
                    >
                      {testimonial.badge}
                    </span>
                    <span
                      className={`text-xs font-mono ${
                        current === index ? "text-background/60" : "text-muted-foreground/70"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-4 text-xl font-display leading-tight tracking-tight">
                    {testimonial.headline}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
