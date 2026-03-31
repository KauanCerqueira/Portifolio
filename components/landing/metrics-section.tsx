"use client";

import { useEffect, useRef, useState } from "react";
import { resultPillars } from "@/lib/landing-content";

export function MetricsSection() {
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
    <section ref={sectionRef} className="relative py-24 lg:py-32 border-y border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-24">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              O que muda
            </span>
            <h2
              className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              A relacao muda
              <br />
              quando a pagina guia.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground text-lg leading-relaxed">
            Aqui a ideia nao e prometer numero inventado. E deixar claro o que a
            pagina melhora na pratica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10">
          {resultPillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`bg-background p-8 lg:p-12 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl lg:text-7xl font-display tracking-tight">{pillar.title}</div>
              <div className="mt-4 text-lg text-muted-foreground max-w-md">{pillar.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
