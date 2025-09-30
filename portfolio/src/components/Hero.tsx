import React from "react";
import NeonButton from "./elements/NeonButton";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-radial from-dark-light to-dark pt-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Texto */}
        <div>
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Olá, eu sou Kauan<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Dev</span>
          </h1>
          <p className="text-lg text-gray mb-6">
            Desenvolvedor Fullstack apaixonado por criar experiências digitais incríveis e soluções inovadoras que fazem a diferença.
          </p>

          {/* Stack */}
          <div className="flex flex-wrap gap-3 mb-6">
            {["React", "TypeScript", "Node.js", "Next.js", "PostgreSQL", "Docker"].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm">
                {tech}
              </span>
            ))}
          </div>

          {/* Botões */}
          <div className="flex gap-4 flex-wrap">
            <NeonButton href="#projetos" primary>Ver Projetos</NeonButton>
            <NeonButton href="#contato">Entre em Contato</NeonButton>
          </div>
        </div>

        {/* Imagem */}
        <div className="hidden md:block animate-bounce">
          <div className="bg-dark-light border border-white/10 rounded-xl shadow-xl p-6">
            <div className="flex gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
            <pre className="text-light text-sm leading-6">
{`const developer = {
  name: 'Dev',
  role: 'Fullstack Developer',
  skills: ['React', 'Node.js', 'TypeScript'],
  passion: 'Building amazing products',
  code: () => 'All day, every day!'
};`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
