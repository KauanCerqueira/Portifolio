const About = () => {
  return (
    <section id="about" className="py-20 max-w-5xl mx-auto px-6">
      <h2 className="text-4xl font-display font-bold text-center mb-12 text-text-primary">
        Sobre Mim
      </h2>
      <div className="bg-base-light p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform duration-500">
        <p className="text-lg text-text-secondary leading-relaxed font-sans">
          Sou desenvolvedor apaixonado por tecnologia, criando interfaces modernas
          e experiências digitais únicas. Tenho experiência em{" "}
          <span className="text-accent-purple font-semibold">React</span>,{" "}
          <span className="text-accent-purple font-semibold">TypeScript</span> e{" "}
          <span className="text-accent-purple font-semibold">Node.js</span>.
        </p>
      </div>
    </section>
  );
};

export default About;
