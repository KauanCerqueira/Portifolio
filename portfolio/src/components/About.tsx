import React from 'react';
import {
  Award, Briefcase, Trophy, Clock, Code2, Zap, Sparkles
} from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      value: '3+',
      label: 'Anos de Experiência',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      value: '20+',
      label: 'Projetos Concluídos',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: '80%',
      label: 'Redução de Tempo',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: '100%',
      label: 'Clientes Satisfeitos',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const skills = [
    { name: 'C# & .NET', level: 95 },
    { name: 'React & TypeScript', level: 90 },
    { name: 'Azure & DevOps', level: 85 },
    { name: 'Python & IA', level: 80 }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Sobre Mim</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Desenvolvedor Fullstack
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Transformo ideias em soluções digitais que geram resultados reais
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 group border border-slate-200"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${stat.gradient} text-white mb-3 group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                {stat.value}
              </div>
              <div className="text-xs text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - About Text */}
          <div className="space-y-6">
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                Sou <strong className="text-slate-900">Desenvolvedor Fullstack</strong> com foco em 
                criar soluções que fazem a diferença. Especializado em <strong className="text-slate-900">C#, 
                .NET, React e IA</strong>.
              </p>
              <p>
                Atualmente na <strong className="text-slate-900">Crespo e Caires Advocacia</strong>, 
                onde desenvolvo automações e sistemas inteligentes que economizam tempo e dinheiro.
              </p>
              <p>
                Minhas soluções já geraram <strong className="text-slate-900">redução significativa em tempo 
                de análise</strong> e impacto positivo em diversos projetos.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-2 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                <Code2 className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-semibold text-slate-700">Clean Architecture</span>
              </div>
              <div className="flex items-center space-x-2 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-100">
                <Zap className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold text-slate-700">IA & Automação</span>
              </div>
            </div>
          </div>

          {/* Right - Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Stack Principal</h3>
            
            <div className="grid grid-cols-2 gap-3">
              {['C# & .NET', 'React & TypeScript', 'Azure & DevOps', 'Python & IA', 'Docker & Kubernetes', 'PostgreSQL & Redis'].map((skill, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-xl border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all duration-300"
                >
                  <span className="text-sm font-semibold text-slate-700">{skill}</span>
                </div>
              ))}
            </div>

            {/* Tech Tags */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-slate-500 mb-3 uppercase tracking-wide">Outras Tecnologias</h4>
              <div className="flex flex-wrap gap-2">
                {['Selenium', 'Machine Learning', 'RabbitMQ', 'Grafana', 'Terraform', 'GitHub Actions'].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 hover:border-purple-300 hover:text-purple-600 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Vamos criar algo incrível juntos?</h3>
          <p className="mb-6 opacity-90 text-lg">
            Disponível para projetos freelancer e novos desafios
          </p>
          <a
            href="#contato"
            className="inline-flex items-center space-x-2 bg-white text-purple-600 hover:bg-slate-100 font-bold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <span>Fale Comigo</span>
            <Zap className="w-5 h-5" />
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
      `}</style>
    </section>
  );
};

export default About;