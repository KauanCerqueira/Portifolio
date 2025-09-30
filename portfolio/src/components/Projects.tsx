import React from "react";
import ProjectCard from "./elements/ProjectCard";

const Projects: React.FC = () => {
  const projects = [
    {
      icon: "🚀",
      title: "E-Commerce Platform",
      description: "Plataforma completa de e-commerce com carrinho de compras, pagamentos integrados e painel administrativo.",
      tech: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    },
    {
      icon: "📱",
      title: "Task Manager App",
      description: "Aplicativo de gerenciamento de tarefas com autenticação, colaboração em tempo real e notificações.",
      tech: ["React Native", "Firebase", "Redux"],
    },
    {
      icon: "🤖",
      title: "API REST Microservices",
      description: "Arquitetura de microserviços escalável com autenticação JWT, cache Redis e documentação Swagger.",
      tech: ["Node.js", "Docker", "Redis", "MongoDB"],
    },
  ];

  return (
    <section id="projetos" className="py-20 bg-dark-light">
      <h2 className="text-center text-4xl font-bold mb-4">
        Projetos em <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Destaque</span>
      </h2>
      <p className="text-center text-gray mb-12">Alguns dos meus trabalhos recentes e contribuições open source</p>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
