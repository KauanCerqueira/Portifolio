import React from 'react';
import { Code, Cpu, Zap, Globe, Database, Shield } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: string[];
  gradient: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Landing Pages & Sites',
      description: 'Landing pages de alta conversão e sites institucionais modernos e responsivos que capturam leads e geram resultados.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Sistemas Web Fullstack',
      description: 'Desenvolvimento completo de sistemas web escaláveis com arquitetura robusta, do backend ao frontend.',
      technologies: ['C#', 'ASP.NET Core', 'React', 'SQL Server'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Automação Inteligente',
      description: 'Automatize processos repetitivos e aumente a produtividade com soluções personalizadas usando Selenium e IA.',
      technologies: ['Selenium', 'Python', 'C#', '.NET'],
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Inteligência Artificial',
      description: 'Integração de IA em seus processos: análise de documentos, classificação automática e processamento de linguagem natural.',
      technologies: ['Machine Learning', 'NLP', 'Python', 'Azure AI'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'APIs RESTful',
      description: 'APIs escaláveis e seguras para integração de sistemas, com documentação completa e boas práticas.',
      technologies: ['ASP.NET Core', 'Swagger', 'PostgreSQL', 'Docker'],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'DevOps & Cloud',
      description: 'Implementação de CI/CD, containerização e deploy em nuvem para garantir escalabilidade e confiabilidade.',
      technologies: ['Azure', 'Docker', 'Kubernetes', 'GitHub Actions'],
      gradient: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            <span>Serviços</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Como Posso Te Ajudar
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Soluções completas de desenvolvimento, desde landing pages até sistemas empresariais complexos
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contato"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <span>Solicitar Orçamento Gratuito</span>
            <Zap className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
