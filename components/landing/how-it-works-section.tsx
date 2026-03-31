"use client";

import { useEffect, useRef, useState } from "react";
import { processSteps } from "@/lib/landing-content";

export function HowItWorksSection() {
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
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              currentColor 40px,
              currentColor 41px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
            <span className="w-8 h-px bg-background/30" />
            Processo
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Direto ao ponto.
            <br />
            <span className="text-background/50">Sem agência. Sem enrolação.</span>
          </h2>
        </div>

        <div className="border-t border-background/10">
          {processSteps.map((step, index) => (
            <article
              key={step.number}
              className={`grid gap-8 border-b border-background/10 py-10 transition-all duration-700 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-14 lg:py-14 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 110}ms` }}
            >
              <div className="flex items-center gap-3 lg:pt-2">
                <span className="h-px w-8 bg-background/18" />
                <span className="text-[10px] uppercase tracking-[0.24em] font-mono text-background/40">
                  {step.eyebrow}
                </span>
              </div>

              <div className="max-w-[860px]">
                <h3 className="text-2xl font-display tracking-tight lg:text-4xl">{step.title}</h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-background/62 lg:text-lg">
                  {step.description}
                </p>

                <ul className="mt-7 flex flex-wrap gap-3">
                  {step.preview.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center rounded-full border border-background/14 bg-background/[0.03] px-4 py-2 text-xs font-mono text-background/78 sm:text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
