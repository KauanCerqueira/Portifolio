import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { InfrastructureSection } from "@/components/landing/infrastructure-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { SecuritySection } from "@/components/landing/security-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { FaqSection } from "@/components/landing/faq-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

import { InlineCta } from "@/components/landing/inline-cta";
import { whatsappHref } from "@/lib/landing-content";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">

      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <InlineCta
        text="Está perdendo cliente entre o clique e o WhatsApp?"
        buttonText="Falar com Kauan agora"
      />
      <HowItWorksSection />
      <InlineCta
        text="Processo simples. Resultado em 5 dias."
        buttonText="Garantir minha vaga"
        variant="dark"
      />
      <IntegrationsSection />
      <InlineCta
        text="Quer uma página como essas pro seu negócio?"
        buttonText="Me chama no WhatsApp"
      />
      <InfrastructureSection />
      <MetricsSection />
      <SecuritySection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />

      {/* WhatsApp FAB — visible on ALL devices */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="fab-whatsapp-ring fixed bottom-4 right-4 z-50 flex h-14 items-center gap-2.5 rounded-full bg-green-500 px-4 text-white shadow-lg transition-transform hover:scale-110 active:scale-95 sm:bottom-6 sm:right-6 sm:px-5 lg:h-12 lg:w-12 lg:justify-center lg:px-0"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-6 w-6 shrink-0" />
        <span className="hidden sm:inline text-sm font-semibold whitespace-nowrap lg:hidden">
          Falar agora
        </span>
      </a>
    </main>
  );
}
