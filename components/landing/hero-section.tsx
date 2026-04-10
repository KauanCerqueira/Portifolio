"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroContent, heroHighlights, heroMedia, whatsappHref } from "@/lib/landing-content";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const hasPoster = Boolean(heroMedia.poster);
  const videoSrc = shouldLoadVideo ? heroMedia.webm ?? heroMedia.mp4 ?? null : null;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & {
        connection?: {
          saveData?: boolean;
          effectiveType?: string;
        };
      }
    ).connection;

    const syncVideoState = () => {
      const saveData = Boolean(connection?.saveData);
      const slowConnection = connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g";
      const allowVideo = !motionQuery.matches && !saveData && !slowConnection;

      setShouldLoadVideo(allowVideo && Boolean(heroMedia.webm ?? heroMedia.mp4));
      setIsVideoReady(false);
    };

    syncVideoState();
    motionQuery.addEventListener("change", syncVideoState);

    return () => {
      motionQuery.removeEventListener("change", syncVideoState);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-foreground text-background">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hero-video-stage absolute inset-0">
          <div
            className="hero-video-surface absolute inset-0"
            style={
              hasPoster
                ? {
                    backgroundImage: `url('${heroMedia.poster}')`,
                  }
                : undefined
            }
          >
            {videoSrc ? (
              <video
                key={videoSrc}
                className={`hero-video-full ${isVideoReady ? "hero-cinema-video-visible" : ""}`}
                src={videoSrc}
                poster={hasPoster && heroMedia.poster ? heroMedia.poster : undefined}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
                onLoadedData={() => setIsVideoReady(true)}
                onCanPlay={() => setIsVideoReady(true)}
                onError={() => setIsVideoReady(false)}
              />
            ) : null}
            <div className="hero-video-overlay absolute inset-0" />
            <div className="hero-video-vignette absolute inset-0" />
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(52%_46%_at_76%_30%,rgba(246,244,241,0.06),transparent_56%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-background/14" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.08]">
        {[...Array(8)].map((_, index) => (
          <div
            key={`h-${index}`}
            className="absolute h-px bg-background/12"
            style={{
              top: `${12.5 * (index + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, index) => (
          <div
            key={`v-${index}`}
            className="absolute w-px bg-background/12"
            style={{
              left: `${8.33 * (index + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto w-full px-6 lg:px-12 py-30 lg:py-36">
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-background/62">
            <span className="w-8 h-px bg-background/28" />
            {heroContent.kicker}
          </span>
        </div>

        <div className="mb-8 max-w-[1040px]">
          <h1
            className="text-[clamp(3rem,6.2vw,5.85rem)] font-display leading-[0.94] tracking-tight text-background"
          >
            <span className="hero-line-mask block pb-[0.04em]">
              <span
                className={`hero-line-inner block md:whitespace-nowrap ${
                  isVisible ? "hero-line-inner-visible" : ""
                }`}
              >
                {heroContent.titleTop}
              </span>
            </span>
            <span className="hero-line-mask block">
              <span
                className={`hero-line-inner block md:whitespace-nowrap ${
                  isVisible ? "hero-line-inner-visible" : ""
                }`}
                style={{ transitionDelay: "120ms" }}
              >
                {heroContent.titleBottomLead}{" "}
                <span
                  className={`hero-accent-word ${isVisible ? "hero-accent-word-visible" : ""}`}
                >
                  <span className="relative z-[1]">{heroContent.titleBottomAccent}</span>
                  <span aria-hidden className="hero-accent-bar" />
                </span>
              </span>
            </span>
          </h1>
        </div>

        <div className="max-w-[32rem]">
          <p
            className={`text-[1.05rem] lg:text-[1.18rem] text-background/78 leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {heroContent.subtitle}
          </p>

          <div
            className={`mt-8 flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              asChild
              size="lg"
              className="bg-background hover:bg-background/88 text-foreground px-8 h-14 text-base rounded-full group shadow-[0_18px_40px_rgba(0,0,0,0.24)]"
            >
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                Quero ver no meu negócio
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base rounded-full border-background/18 bg-background/[0.05] text-background hover:bg-background/[0.12] hover:text-background"
            >
              <a href="#how-it-works">Entender como funciona</a>
            </Button>
          </div>

          <div
            className={`mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.18em] font-mono text-background/52 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Estrutura para gerar contato
            </span>
            <span className="hidden sm:inline h-3 w-px bg-background/20" />
            <span>Entrega em até 5 dias úteis</span>
          </div>

          <div
            className={`mt-4 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] font-mono text-background/60 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-background/58" />
            4 vagas por semana para manter o prazo
          </div>
        </div>

      </div>

      <div
        className={`relative z-10 mt-auto pb-10 lg:pb-12 transition-all duration-700 delay-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="hero-marquee-track">
          <div className="hero-marquee-strip whitespace-nowrap">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="hero-marquee-group">
                {heroHighlights.map((highlight) => (
                  <div key={`${highlight}-${setIndex}`} className="flex items-baseline gap-3">
                    <span className="text-2xl lg:text-3xl font-display text-background/72">+</span>
                    <span className="text-xs lg:text-sm text-background/68">
                      {highlight}
                      <span className="block font-mono text-[10px] lg:text-xs mt-1 text-background/34">
                        estrutura direta
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
