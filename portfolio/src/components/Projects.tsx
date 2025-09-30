import React, { useState, useEffect } from 'react';
import { TrendingUp, Clock, Users, Zap, Code2, Sparkles, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  impact: {
    icon: React.ReactNode;
    label: string;
    value: string;
  }[];
  technologies: string[];
  gradient: string;
  bgGradient: string;
}

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'challenge' | 'solution'>('challenge');
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects: Project[] = [
    {
      title: 'Projeto Glados',
      category: 'IA Jurídica',
      description: 'Plataforma inovadora para interpretação automatizada de iniciais jurídicas usando NLP, Machine Learning e regras de negócio complexas.',
      challenge: 'A equipe jurídica gastava horas analisando manualmente publicações legais complexas, resultando em gargalos operacionais e alto custo de processamento. Era necessária uma solução que mantivesse precisão enquanto acelerava drasticamente o processo.',
      solution: 'Desenvolvimento de um sistema inteligente que combina NLP, Machine Learning e regras de negócio para análise automatizada. A plataforma classifica documentos legais com alta precisão, integra-se a múltiplos sistemas e processa em tempo real.',
      impact: [
        { icon: <TrendingUp className="w-5 h-5" />, label: 'Produtividade', value: '+300%' },
        { icon: <Clock className="w-5 h-5" />, label: 'Tempo Reduzido', value: '80%' },
        { icon: <Users className="w-5 h-5" />, label: 'Equipe Impactada', value: '10 pessoas' },
      ],
      technologies: ['C#', 'Machine Learning', 'NLP', 'Azure', 'PostgreSQL', 'Python'],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-600 via-pink-600 to-blue-600',
    },
    {
      title: 'Automação Jurídica',
      category: 'RPA & Automação',
      description: 'Sistema de automação que revolucionou a análise de publicações jurídicas, processando documentos complexos com precisão e velocidade.',
      challenge: 'O processo manual de análise de publicações jurídicas consumia recursos significativos e estava sujeito a erros humanos. A empresa precisava de uma solução escalável que processasse milhares de documentos diariamente.',
      solution: 'Implementação de RPA com Selenium integrado a sistemas de IA para análise contextual. O sistema automatiza todo o fluxo de captura, processamento e classificação de publicações jurídicas, com validação em múltiplas etapas.',
      impact: [
        { icon: <Clock className="w-5 h-5" />, label: 'Economia', value: '80%' },
        { icon: <TrendingUp className="w-5 h-5" />, label: 'ROI', value: '+400%' },
        { icon: <Zap className="w-5 h-5" />, label: 'Processos/dia', value: '1000+' },
      ],
      technologies: ['Selenium', 'C#', '.NET Core', 'AI', 'SQL Server', 'Azure'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-600 via-cyan-600 to-teal-600',
    },
    {
      title: 'API Corporativa Escalável',
      category: 'Backend & Integração',
      description: 'APIs RESTful de alta performance para integração de sistemas internos e externos, com arquitetura limpa e segurança robusta.',
      challenge: 'A empresa possuía sistemas legados isolados sem comunicação entre si, causando duplicação de dados e processos ineficientes. Era necessário criar uma camada de integração robusta e escalável.',
      solution: 'Desenvolvimento de APIs RESTful seguindo Clean Architecture e princípios SOLID. Implementação de autenticação JWT, rate limiting, cache distribuído com Redis e mensageria com RabbitMQ para processamento assíncrono.',
      impact: [
        { icon: <TrendingUp className="w-5 h-5" />, label: 'Requests/seg', value: '10K+' },
        { icon: <Clock className="w-5 h-5" />, label: 'Latência', value: '<100ms' },
        { icon: <Users className="w-5 h-5" />, label: 'Sistemas Integrados', value: '15+' },
      ],
      technologies: ['ASP.NET Core', 'Docker', 'Kubernetes', 'Azure', 'Redis', 'RabbitMQ'],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-600 via-emerald-600 to-teal-600',
    },
    {
      title: 'Automação Administrativa',
      category: 'Automação & RPA',
      description: 'Automação completa de setores administrativos com Selenium e .NET, eliminando processos manuais repetitivos.',
      challenge: 'Processos administrativos manuais e repetitivos consumiam tempo valioso da equipe, gerando erros e atrasos. A empresa buscava automatizar tarefas operacionais sem comprometer a segurança.',
      solution: 'Criação de robôs de automação usando Selenium e .NET que executam tarefas administrativas 24/7. Sistema de logs e alertas integrado, com tratamento robusto de exceções e recuperação automática de falhas.',
      impact: [
        { icon: <Clock className="w-5 h-5" />, label: 'Tempo Salvo', value: '70%' },
        { icon: <TrendingUp className="w-5 h-5" />, label: 'Eficiência', value: '+250%' },
        { icon: <Zap className="w-5 h-5" />, label: 'Tarefas/dia', value: '500+' },
      ],
      technologies: ['Selenium', 'C#', '.NET', 'SQL Server', 'Windows Services'],
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-600 via-red-600 to-pink-600',
    },
    {
      title: 'DevOps & CI/CD Pipeline',
      category: 'DevOps & Cloud',
      description: 'Implementação completa de pipelines de CI/CD com GitHub Actions e Azure DevOps, incluindo testes automatizados e deploy contínuo.',
      challenge: 'Deploys manuais eram lentos, propensos a erros e causavam downtime frequente. A equipe precisava de um processo confiável e automatizado para entregas contínuas.',
      solution: 'Estruturação de pipelines CI/CD completos com GitHub Actions e Azure DevOps. Implementação de testes automatizados, análise de código com SonarQube, deploy em Kubernetes e monitoramento com Grafana.',
      impact: [
        { icon: <Clock className="w-5 h-5" />, label: 'Deploy Time', value: '-90%' },
        { icon: <TrendingUp className="w-5 h-5" />, label: 'Uptime', value: '99.9%' },
        { icon: <Zap className="w-5 h-5" />, label: 'Deploys/mês', value: '100+' },
      ],
      technologies: ['Azure DevOps', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'],
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-600 via-purple-600 to-pink-600',
    },
  ];

  const currentProject = projects[currentIndex];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setActiveTab('challenge');
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setActiveTab('challenge');
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
    setActiveTab('challenge');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
      setActiveTab('challenge');
    }, 8000);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section id="projetos" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Portfólio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Projetos que Geram Resultados
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Cases reais com impacto mensurável em produtividade e redução de custos
          </p>
        </div>

        {/* Project Title */}
        <div className="text-center mb-8">
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
            {currentProject.title}
          </h3>
          <p className="text-lg text-slate-600">
            {currentProject.description}
          </p>
        </div>

        {/* Hero Visual */}
        <div className={`relative bg-gradient-to-br ${currentProject.bgGradient} rounded-3xl p-12 mb-12 overflow-hidden`}>
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px',
              }}
            ></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center text-white">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-white/20 backdrop-blur-xl rounded-3xl mb-6 shadow-2xl">
              <Zap className="w-16 h-16" />
            </div>
            
            <div className="inline-block px-6 py-2 bg-white/90 backdrop-blur-sm rounded-full text-slate-900 text-sm font-bold shadow-lg mb-8">
              {currentProject.category}
            </div>

            {/* Impact Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
              {currentProject.impact.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 text-white mb-3">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold mb-1">{metric.value}</div>
                  <div className="text-sm text-white/80">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mb-12">
          {/* Tab Headers */}
          <div className="flex border-b border-slate-200">
            <button
              onClick={() => setActiveTab('challenge')}
              className={`flex-1 px-6 py-4 text-sm font-semibold transition-all duration-300 ${
                activeTab === 'challenge'
                  ? `bg-gradient-to-r ${currentProject.gradient} text-white`
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              O Desafio
            </button>
            <button
              onClick={() => setActiveTab('solution')}
              className={`flex-1 px-6 py-4 text-sm font-semibold transition-all duration-300 ${
                activeTab === 'solution'
                  ? `bg-gradient-to-r ${currentProject.gradient} text-white`
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              A Solução
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'challenge' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-start space-x-3">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${currentProject.gradient} flex items-center justify-center`}>
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Contexto do Problema</h4>
                    <p className="text-slate-600 leading-relaxed">{currentProject.challenge}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'solution' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-start space-x-3">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${currentProject.gradient} flex items-center justify-center`}>
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Como Resolvi</h4>
                    <p className="text-slate-600 leading-relaxed">{currentProject.solution}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Technologies */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <Code2 className="w-6 h-6 text-purple-600" />
            <h4 className="text-xl font-bold text-slate-900">Stack Tecnológica</h4>
          </div>
          <div className="flex flex-wrap gap-3">
            {currentProject.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white border-2 border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:border-purple-300 hover:text-purple-600 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <button
            onClick={prevProject}
            className="flex items-center justify-center w-12 h-12 bg-white hover:bg-slate-50 border-2 border-slate-200 rounded-xl transition-all duration-300 group"
            aria-label="Projeto anterior"
          >
            <ChevronLeft className="w-6 h-6 text-slate-600 group-hover:-translate-x-1 transition-transform" />
          </button>

          <div className="flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? `w-8 h-2 bg-gradient-to-r ${currentProject.gradient}`
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir para projeto ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextProject}
            className="flex items-center justify-center w-12 h-12 bg-white hover:bg-slate-50 border-2 border-slate-200 rounded-xl transition-all duration-300 group"
            aria-label="Próximo projeto"
          >
            <ChevronRight className="w-6 h-6 text-slate-600 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Counter */}
        <div className="text-center mb-8">
          <span className="text-sm text-slate-500 font-medium">
            Projeto {currentIndex + 1} de {projects.length}
          </span>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contato"
            className={`inline-flex items-center space-x-2 bg-gradient-to-r ${currentProject.gradient} hover:shadow-2xl hover:shadow-purple-500/50 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105`}
          >
            <span>Quer um Projeto Assim?</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .animate-blob {
          animation: blob 15s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Projects;