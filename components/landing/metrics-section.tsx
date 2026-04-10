"use client";

import { useEffect, useRef, useState } from "react";
import { resultPillars, resultsSectionContent } from "@/lib/landing-content";

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
    <section ref={sectionRef} className="relative py-20 lg:py-24 border-y border-foreground/10">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(41,43,45,0.24),transparent)]"
      />
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-xs font-mono text-muted-foreground mb-5">
              <span className="w-8 h-px bg-foreground/30" />
              {resultsSectionContent.kicker}
            </span>
            <h2 className="text-[2.35rem] lg:text-[4.25rem] font-display tracking-tight leading-[0.96]">
              {resultsSectionContent.titleTop}
              <br />
              {resultsSectionContent.titleBottom}
            </h2>
            <p className="mt-5 max-w-lg text-base lg:text-[1.05rem] text-muted-foreground leading-relaxed">
              {resultsSectionContent.description}
            </p>

            <div className="mt-8 rounded-[1.75rem] border border-foreground/12 bg-foreground/[0.03] p-6 lg:p-7">
              <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] font-mono text-muted-foreground">
                <span className="w-6 h-px bg-foreground/20" />
                {resultsSectionContent.highlightLabel}
              </span>
              <p className="mt-5 text-[1.45rem] lg:text-[1.8rem] font-display tracking-tight leading-[1.08] text-foreground">
                {resultsSectionContent.highlightTitle}
              </p>
              <p className="mt-3 max-w-lg text-[0.98rem] lg:text-base text-muted-foreground leading-relaxed">
                {resultsSectionContent.highlightDescription}
              </p>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="border-y border-foreground/10">
              {resultPillars.map((pillar, index) => (
                <article
                  key={pillar.title}
                  className={`grid gap-4 px-1 py-6 sm:grid-cols-[64px_1fr] lg:gap-6 lg:py-7 ${
                    index !== resultPillars.length - 1 ? "border-b border-foreground/10" : ""
                  } transition-all duration-700`}
                  style={{ transitionDelay: `${index * 90 + 120}ms` }}
                >
                  <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span className="h-px flex-1 bg-foreground/12 sm:hidden" />
                  </div>

                  <div className="grid gap-2 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:items-start lg:gap-5">
                    <h3 className="text-[1.5rem] lg:text-[2.3rem] font-display tracking-tight leading-none text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="max-w-xl text-[0.98rem] lg:text-base leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
