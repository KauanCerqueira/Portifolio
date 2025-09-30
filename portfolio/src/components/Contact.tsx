import React from 'react';
import { MessageSquare, Smartphone, CheckCircle, Zap, Clock, Star } from 'lucide-react';

const Contact: React.FC = () => {
  const whatsappNumber = "5519993817292";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá,%20tenho%20interesse%20em%20seus%20serviços!`;

  const benefits = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Resposta Rápida",
      description: "Retorno em até 24h"
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Atendimento Personalizado",
      description: "Foco no seu projeto"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Orçamento Gratuito",
      description: "Sem compromisso"
    }
  ];

  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjMWYyOTM3IiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-2 text-sm font-semibold mb-6">
            <MessageSquare className="w-4 h-4 text-green-400" />
            <span className="text-green-300">Vamos Conversar</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Fale Comigo no{' '}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              WhatsApp
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Atendimento direto, rápido e sem complicação. Vamos transformar sua ideia em realidade.
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-700/50 overflow-hidden">
            {/* Card Header with Icon */}
            <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMCAxMGMxLjY1NyAwIDMgMS4zNDMgMyAzcy0xLjM0MyAzLTMgMy0zLTEuMzQzLTMtMyAxLjM0My0zIDMtMyIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
              
              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-lg mb-4 shadow-2xl">
                <Smartphone className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-2">Contato Direto</h3>
              <p className="text-green-100 text-lg">
                Estou online e pronto para te atender
              </p>
            </div>

            {/* Card Body */}
            <div className="p-10">
              <div className="text-center mb-8">
                <p className="text-slate-300 text-lg leading-relaxed">
                  Clique no botão abaixo e vamos conversar sobre seu projeto.<br />
                  Tire dúvidas, peça orçamento ou compartilhe suas ideias.
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center mb-10">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold px-12 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50"
                >
                  <Smartphone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  <span className="text-lg">Abrir WhatsApp</span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
                </a>
              </div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50 hover:border-green-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 text-green-400 mb-4 group-hover:scale-110 transition-transform">
                      {benefit.icon}
                    </div>
                    <h4 className="text-white font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-slate-400 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>

              {/* Availability Info */}
              <div className="mt-8 flex items-center justify-center space-x-2 text-slate-400">
                <Clock className="w-5 h-5 text-green-400" />
                <span className="text-sm">Disponível de segunda a sexta, 09h às 18h</span>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              Normalmente respondo em até 24 horas úteis 
              <span className="inline-block mx-2">•</span>
              <span className="text-green-400">100% de satisfação</span>
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-40 left-10 hidden lg:block">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl rotate-12 animate-pulse"></div>
        </div>
        <div className="absolute bottom-40 right-10 hidden lg:block">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full animate-bounce"></div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .animate-blob {
          animation: blob 20s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Contact;