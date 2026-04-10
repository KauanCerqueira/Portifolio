"use client";

import { useEffect, useRef, useState } from "react";
import { Eye, FileCheck, Lock, Shield } from "lucide-react";
import { trustPillars } from "@/lib/landing-content";

const pillarIcons = [Shield, Lock, Eye, FileCheck];

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const trustSignals = [
    "clareza primeiro",
    "visual com função",
    "menos dúvida",
    "contato mais fácil",
  ];

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
    <section ref={sectionRef} className="relative py-24 lg:py-28 bg-foreground/[0.02] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-14 lg:gap-18 items-start">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Confianca
            </span>
          <h2 className="text-4xl lg:text-[4.4rem] font-display tracking-tight leading-[0.96] mb-7">
              Uma página profissional
              <br />
              precisa passar segurança.
            </h2>
            <p className="max-w-xl text-lg lg:text-[1.12rem] text-muted-foreground leading-relaxed mb-10">
              A página não existe para impressionar só pelo design. Ela existe
              para organizar a mensagem, aumentar a confiança e facilitar o contato.
            </p>

            <div className="flex flex-wrap gap-3">
              {trustSignals.map(
                (pill, index) => (
                  <span
                    key={pill}
                    className={`rounded-full px-4 py-2 border border-foreground/10 bg-background/70 text-[11px] uppercase tracking-[0.2em] font-mono transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 50 + 200}ms` }}
                  >
                    {pill}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="grid gap-6">
            {trustPillars.map((pillar, index) => {
              const Icon = pillarIcons[index];

              return (
                <div
                  key={pillar.title}
                  className={`p-6 border border-foreground/10 hover:border-foreground/20 transition-all duration-500 group ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-foreground/10 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1 group-hover:translate-x-1 transition-transform duration-300">
                        {pillar.title}
                      </h3>
                      <p className="text-muted-foreground">{pillar.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
