"use client";

import { useEffect, useRef, useState } from "react";
import { benefitCards } from "@/lib/landing-content";

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative bg-background pt-10 lg:pt-12 pb-24 lg:pb-32 border-t-[3px] border-foreground"
    >
      <div aria-hidden className="absolute left-6 lg:left-12 top-0 h-16 lg:h-20 w-px bg-foreground/16" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-14 lg:mb-18">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            O problema
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Aparecer não basta.
            <br />
            A página precisa converter.
          </h2>
          <p
            className={`text-xl text-muted-foreground leading-relaxed transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Hoje muita empresa até chama atenção no Google ou no Instagram, mas não
            tem uma estrutura clara para transformar essa visita em conversa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-foreground/10">
          {benefitCards.map((card, index) => (
            <article
              key={card.number}
              className={`bg-background p-8 lg:p-12 min-h-[280px] transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-12">
                <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">
                  {card.number}
                </span>
                <span className="w-16 h-px bg-foreground/20" />
              </div>

              <h3 className="text-3xl lg:text-4xl font-display tracking-tight mb-4 max-w-md">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
