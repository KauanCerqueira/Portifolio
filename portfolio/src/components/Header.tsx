
import React from "react";

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-dark/95 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center py-4">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          &lt;Dev /&gt;
        </div>
        <ul className="hidden md:flex gap-8 font-medium">
          <li><a href="#home" className="hover:text-primary transition">Home</a></li>
          <li><a href="#projetos" className="hover:text-primary transition">Projetos</a></li>
          <li><a href="#sobre" className="hover:text-primary transition">Sobre</a></li>
          <li><a href="#contato" className="hover:text-primary transition">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
