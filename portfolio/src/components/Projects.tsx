"use client"

import type React from "react"
import { useState } from "react"
import { TrendingUp, Clock, Users, Zap, Code2, Sparkles, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

interface Project {
  title: string
  category: string
  description: string
  challenge: string
  solution: string
  impact: {
    icon: React.ReactNode
    label: string
    value: string
  }[]
  technologies: string[]
  gradient: string
  bgGradient: string
}

const Projects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0)

  const projects: Project[] = [
    {
      title: "Projeto Glados",
      category: "IA Jurídica",
      description:
        "Plataforma inovadora para interpretação automatizada de iniciais jurídicas usando NLP, Machine Learning e regras de negócio complexas.",
      challenge:
        "A equipe jurídica gastava horas analisando manualmente publicações legais complexas, resultando em gargalos operacionais e alto custo de processamento.",
      solution:
        "Sistema inteligente que combina NLP, Machine Learning e regras de negócio para análise automatizada com alta precisão e processamento em tempo real.",
      impact: [
        { icon: <TrendingUp className="w-4 h-4" />, label: "Produtividade", value: "+300%" },
        { icon: <Clock className="w-4 h-4" />, label: "Tempo Reduzido", value: "80%" },
        { icon: <Users className="w-4 h-4" />, label: "Equipe Impactada", value: "10 pessoas" },
      ],
      technologies: ["C#", "Machine Learning", "NLP", "Azure", "PostgreSQL", "Python"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-600 via-pink-600 to-blue-600",
    },
    {
      title: "Automação Jurídica",
      category: "RPA & Automação",
      description:
        "Sistema de automação que revolucionou a análise de publicações jurídicas, processando documentos complexos com precisão e velocidade.",
      challenge:
        "O processo manual de análise de publicações jurídicas consumia recursos significativos e estava sujeito a erros humanos.",
      solution:
        "RPA com Selenium integrado a sistemas de IA para análise contextual. Automatiza todo o fluxo de captura, processamento e classificação de publicações jurídicas.",
      impact: [
        { icon: <Clock className="w-4 h-4" />, label: "Economia", value: "80%" },
        { icon: <TrendingUp className="w-4 h-4" />, label: "ROI", value: "+400%" },
        { icon: <Zap className="w-4 h-4" />, label: "Processos/dia", value: "1000+" },
      ],
      technologies: ["Selenium", "C#", ".NET Core", "AI", "SQL Server", "Azure"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-600 via-cyan-600 to-teal-600",
    },
    {
      title: "API Corporativa Escalável",
      category: "Backend & Integração",
      description:
        "APIs RESTful de alta performance para integração de sistemas internos e externos, com arquitetura limpa e segurança robusta.",
      challenge:
        "A empresa possuía sistemas legados isolados sem comunicação entre si, causando duplicação de dados e processos ineficientes.",
      solution:
        "APIs RESTful seguindo Clean Architecture e princípios SOLID. Implementação de autenticação JWT, rate limiting, cache distribuído com Redis e mensageria com RabbitMQ.",
      impact: [
        { icon: <TrendingUp className="w-4 h-4" />, label: "Requests/seg", value: "10K+" },
        { icon: <Clock className="w-4 h-4" />, label: "Latência", value: "<100ms" },
        { icon: <Users className="w-4 h-4" />, label: "Sistemas Integrados", value: "15+" },
      ],
      technologies: ["ASP.NET Core", "Docker", "Kubernetes", "Azure", "Redis", "RabbitMQ"],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-600 via-emerald-600 to-teal-600",
    },
    {
      title: "Automação Administrativa",
      category: "Automação & RPA",
      description:
        "Automação completa de setores administrativos com Selenium e .NET, eliminando processos manuais repetitivos.",
      challenge:
        "Processos administrativos manuais e repetitivos consumiam tempo valioso da equipe, gerando erros e atrasos.",
      solution:
        "Robôs de automação usando Selenium e .NET que executam tarefas administrativas 24/7. Sistema de logs e alertas integrado com tratamento robusto de exceções.",
      impact: [
        { icon: <Clock className="w-4 h-4" />, label: "Tempo Salvo", value: "70%" },
        { icon: <TrendingUp className="w-4 h-4" />, label: "Eficiência", value: "+250%" },
        { icon: <Zap className="w-4 h-4" />, label: "Tarefas/dia", value: "500+" },
      ],
      technologies: ["Selenium", "C#", ".NET", "SQL Server", "Windows Services"],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-600 via-red-600 to-pink-600",
    },
  ]

  const projectsPerPage = 2
  const totalPages = Math.ceil(projects.length / projectsPerPage)
  const currentProjects = projects.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section id="projetos" className="py-12 bg-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full px-3 py-1.5 text-sm font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portfólio</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">Projetos que Geram Resultados</h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Cases reais com impacto mensurável em produtividade e redução de custos
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {currentProjects.map((project, index) => (
            <div key={index} className="flex flex-col">
              {/* Colorful Hero Card */}
              <div className={`relative bg-gradient-to-br ${project.bgGradient} rounded-2xl p-6 mb-4 overflow-hidden`}>
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                      backgroundSize: "30px 30px",
                    }}
                  ></div>
                </div>

                <div className="relative z-10 text-white">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-slate-900 text-xs font-bold shadow-lg mb-3">
                        {project.category}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-white/90 leading-relaxed">{project.description}</p>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-xl">
                        <Zap className="w-8 h-8" />
                      </div>
                    </div>
                  </div>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    {project.impact.map((metric, idx) => (
                      <div
                        key={idx}
                        className="bg-white/10 backdrop-blur-lg rounded-xl p-3 border border-white/20 hover:bg-white/20 transition-all duration-300"
                      >
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/20 text-white mb-2">
                          {metric.icon}
                        </div>
                        <div className="text-xl font-bold mb-0.5">{metric.value}</div>
                        <div className="text-xs text-white/80">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Additional Info */}
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="space-y-2">
                      <div>
                        <div className="text-xs font-semibold text-white/70 mb-1">Desafio:</div>
                        <p className="text-sm text-white/90">{project.challenge}</p>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white/70 mb-1">Solução:</div>
                        <p className="text-sm text-white/90">{project.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <div className="flex items-center space-x-2 mb-3">
                  <Code2 className="w-4 h-4 text-purple-600" />
                  <h4 className="text-sm font-bold text-slate-900">Stack Tecnológica</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:border-purple-300 hover:text-purple-600 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <button
            onClick={prevPage}
            className="flex items-center justify-center w-10 h-10 bg-white hover:bg-slate-50 border-2 border-slate-200 rounded-xl transition-all duration-300 group"
            aria-label="Página anterior"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600 group-hover:-translate-x-1 transition-transform" />
          </button>

          <div className="flex space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentPage
                    ? "w-6 h-2 bg-gradient-to-r from-purple-500 to-pink-500"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Ir para página ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            className="flex items-center justify-center w-10 h-10 bg-white hover:bg-slate-50 border-2 border-slate-200 rounded-xl transition-all duration-300 group"
            aria-label="Próxima página"
          >
            <ChevronRight className="w-5 h-5 text-slate-600 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Counter */}
        <div className="text-center mb-6">
          <span className="text-sm text-slate-500 font-medium">
            Página {currentPage + 1} de {totalPages} • {projects.length} projetos
          </span>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contato"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-xl hover:shadow-purple-500/30 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            <span>Quer um Projeto Assim?</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
