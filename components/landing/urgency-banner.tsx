"use client";

import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { whatsappHref } from "@/lib/landing-content";

export function UrgencyBanner() {
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("urgency-banner-dismissed");
    if (dismissed) setIsDismissed(true);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem("urgency-banner-dismissed", "1");
  };

  if (isDismissed) return null;

  return (
    <div className="urgency-banner relative z-40">
      <div className="relative flex items-center justify-center gap-3 px-4 py-2.5 sm:gap-4 sm:py-3">
        <div
          aria-hidden="true"
          className="urgency-banner-accent absolute inset-x-0 bottom-0 h-[2px]"
        />

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="urgency-dot inline-block h-2 w-2 rounded-full bg-red-500 shrink-0" />
          <span className="text-[11px] font-medium text-white/90 sm:text-[13px]">
            <span className="hidden sm:inline">Restam </span>
            <span className="font-bold text-red-400">2 vagas</span>
            <span className="hidden sm:inline"> esta semana</span>
            <span className="sm:hidden"> esta semana</span>
            <span className="hidden lg:inline"> — Entrega garantida em 5 dias</span>
          </span>
        </div>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-white/12 px-3 py-1.5 text-[11px] font-semibold text-white transition-colors hover:bg-white/20 sm:px-4 sm:text-xs"
        >
          Garantir vaga
          <ArrowRight className="h-3 w-3" />
        </a>

        <button
          onClick={handleDismiss}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/40 transition-colors hover:text-white/80"
          aria-label="Fechar banner"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
