import React from "react";

interface ProjectCardProps {
  icon: string;
  title: string;
  description: string;
  tech: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ icon, title, description, tech }) => {
  return (
    <div className="bg-dark border border-white/10 rounded-xl p-6 hover:shadow-lg hover:border-primary transition">
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 flex items-center justify-center text-xl rounded-lg bg-gradient-to-r from-primary to-secondary">
          {icon}
        </div>
        <div className="flex gap-4 text-gray">
          <a href="#" className="hover:text-primary">🌐</a>
          <a href="#" className="hover:text-primary">🔗</a>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
