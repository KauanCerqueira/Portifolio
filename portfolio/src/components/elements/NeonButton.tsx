import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}

const NeonButton: React.FC<ButtonProps> = ({ href, children, primary }) => {
  return (
    <a
      href={href}
      className={`px-6 py-3 rounded-lg font-semibold transition inline-flex items-center gap-2 ${
        primary
          ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg hover:-translate-y-1"
          : "border-2 border-primary text-white hover:bg-primary hover:-translate-y-1"
      }`}
    >
      {children}
    </a>
  );
};

export default NeonButton;
