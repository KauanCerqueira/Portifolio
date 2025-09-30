import React from "react";

const Contact: React.FC = () => {
  const contacts = [
    { icon: "📧", title: "Email", info: "dev@exemplo.com", link: "mailto:dev@exemplo.com" },
    { icon: "💼", title: "LinkedIn", info: "/in/seu-perfil", link: "#" },
    { icon: "🐙", title: "GitHub", info: "/seu-usuario", link: "#" },
  ];

  return (
    <section id="contato" className="py-20 bg-dark-light">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Vamos <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Conversar</span>
        </h2>
        <p className="text-gray mb-12">
          Tem um projeto em mente? Adoraria saber mais sobre suas ideias e como posso ajudar a transformá-las em realidade.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {contacts.map((c, i) => (
            <div key={i} className="bg-dark border border-white/10 p-6 rounded-xl hover:border-primary transition">
              <div className="text-3xl mb-2">{c.icon}</div>
              <h3 className="font-semibold mb-1">{c.title}</h3>
              <a href={c.link} className="text-primary">{c.info}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
