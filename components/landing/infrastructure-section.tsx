"use client";

import { useEffect, useRef, useState } from "react";
import { structureContent, structureItems } from "@/lib/landing-content";

export function InfrastructureSection() {
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
      id="structure"
      ref={sectionRef}
      className="relative py-20 lg:py-24 border-y border-foreground/10 overflow-hidden"
    >
      <div className="max-w-[1180px] mx-auto px-6 lg:px-12">
        <div
          className={`max-w-3xl mb-14 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            {structureContent.kicker}
          </span>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6 max-w-4xl">
            {structureContent.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {structureContent.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10">
          {structureItems.map((item, index) => (
            <article
              key={item.label}
              className={`bg-background p-7 lg:p-9 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] font-mono text-muted-foreground">
                <span className="w-6 h-px bg-foreground/20" />
                Essencial
              </span>

              <h3 className="mt-8 text-2xl lg:text-3xl font-display tracking-tight">
                {item.label}
              </h3>
              <p className="mt-3 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-md">
                {item.detail}
              </p>
            </article>
          ))}
        </div>

        <div
          className={`mt-8 flex items-center gap-3 text-sm font-mono text-muted-foreground transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-foreground/70" />
          Sem excesso. Sem seção só para preencher.
        </div>
      </div>
    </section>
  );
}
