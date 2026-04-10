"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "Kauan, subimos a página ontem e hoje de manhã já recebi dois contatos no WhatsApp que vieram direto dela. Diferença absurda de tentar explicar pelo Instagram.",
    name: "Lucas Ferreira",
    role: "Barbearia — Campinas, SP",
  },
  {
    quote:
      "Achei que ia dar um trabalhão, mas foi muito rápido. Mandar o link agora ficou muito mais profissional, o cliente já cai no meu número sabendo o que quer do treino.",
    name: "Camila Rodrigues",
    role: "Personal trainer — Valinhos, SP",
  },
  {
    quote:
      "Meu orçamento agora é passado com muito mais moral. Ninguém mais fica barganhando preço básico porque a página já passa o valor antes da pessoa me chamar.",
    name: "Rafael Mendes",
    role: "Reformas e acabamentos — Sumaré, SP",
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
      ref={sectionRef}
      className="relative py-24 lg:py-32 border-t border-foreground/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-14 lg:mb-18">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Quem já usou
          </span>
          <h2
            className={`text-4xl lg:text-5xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Negócios reais,
            <br />
            resultados diretos.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-foreground/10">
          {testimonials.map((t, index) => (
            <blockquote
              key={t.name}
              className={`bg-background p-8 lg:p-10 flex flex-col justify-between min-h-[260px] transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="text-lg lg:text-xl font-display tracking-tight leading-snug mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer>
                <cite className="not-italic">
                  <span className="block text-sm font-medium">{t.name}</span>
                  <span className="block text-xs text-muted-foreground mt-1">
                    {t.role}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
