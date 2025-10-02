"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Code, Cpu, Zap, Globe, Database, Shield } from "lucide-react"
import { SpeedInsights } from "@vercel/speed-insights/react"

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  technologies: string[]
  color: string
}

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services: Service[] = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Landing Pages & Sites",
      description: "Landing pages de alta conversão e sites institucionais modernos e responsivos.",
      technologies: ["React", "Next.js", "Tailwind"],
      color: "blue",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Sistemas Web Fullstack",
      description: "Desenvolvimento completo de sistemas web escaláveis com arquitetura robusta.",
      technologies: ["C#", "ASP.NET", "React"],
      color: "purple",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automação Inteligente",
      description: "Automatize processos repetitivos e aumente a produtividade com soluções personalizadas.",
      technologies: ["Selenium", "Python", "C#"],
      color: "amber",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Inteligência Artificial",
      description: "Integração de IA: análise de documentos, classificação automática e NLP.",
      technologies: ["ML", "NLP", "Azure AI"],
      color: "emerald",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "APIs RESTful",
      description: "APIs escaláveis e seguras para integração de sistemas com documentação completa.",
      technologies: ["ASP.NET", "PostgreSQL", "Docker"],
      color: "cyan",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "DevOps & Cloud",
      description: "Implementação de CI/CD, containerização e deploy em nuvem.",
      technologies: ["Azure", "Docker", "Kubernetes"],
      color: "rose",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        hover: "group-hover:border-blue-400 group-hover:bg-blue-50",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        hover: "group-hover:border-purple-400 group-hover:bg-purple-50",
      },
      amber: {
        bg: "bg-amber-50",
        text: "text-amber-600",
        border: "border-amber-200",
        hover: "group-hover:border-amber-400 group-hover:bg-amber-50",
      },
      emerald: {
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        border: "border-emerald-200",
        hover: "group-hover:border-emerald-400 group-hover:bg-emerald-50",
      },
      cyan: {
        bg: "bg-cyan-50",
        text: "text-cyan-600",
        border: "border-cyan-200",
        hover: "group-hover:border-cyan-400 group-hover:bg-cyan-50",
      },
      rose: {
        bg: "bg-rose-50",
        text: "text-rose-600",
        border: "border-rose-200",
        hover: "group-hover:border-rose-400 group-hover:bg-rose-50",
      },
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section ref={sectionRef} id="servicos" className="relative py-12 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-3 border border-blue-100">
            <Zap className="w-4 h-4 text-blue-600" />
            <span>Serviços</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">Como Posso Te Ajudar</h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Soluções completas de desenvolvimento, desde landing pages até sistemas empresariais complexos
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color)
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 ${colorClasses.border} ${colorClasses.hover} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className={`relative inline-flex items-center justify-center w-12 h-12 rounded-lg ${colorClasses.bg} ${colorClasses.text} mb-4 transition-all duration-300 group-hover:scale-110`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="relative text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                  {service.title}
                </h3>
                <p className="relative text-sm text-slate-600 mb-4 leading-relaxed">{service.description}</p>

                <div className="relative flex flex-wrap gap-1.5">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2.5 py-1 ${colorClasses.bg} ${colorClasses.text} text-xs rounded-full font-medium transition-all duration-200 hover:scale-105`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#contato"
            className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">Solicitar Orçamento Gratuito</span>
            <Zap className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
