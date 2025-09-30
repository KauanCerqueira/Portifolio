import React from "react";

const GithubStats: React.FC = () => {
  const stats = [
    { number: "50+", label: "Repositórios Públicos" },
    { number: "1.2k+", label: "Contribuições este ano" },
    { number: "200+", label: "Pull Requests" },
    { number: "150+", label: "Stars recebidas" },
  ];

  return (
    <section className="py-20 bg-dark">
      <h2 className="text-center text-4xl font-bold mb-4">
        GitHub <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Activity</span>
      </h2>
      <p className="text-center text-gray mb-12">Minha contribuição para a comunidade open source</p>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-dark-light p-6 rounded-xl text-center border border-white/10">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {s.number}
            </div>
            <p className="text-gray mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GithubStats;
