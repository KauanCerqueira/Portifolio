import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import LandingPagesShowcase from "./components/LandingPages";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="font-inter bg-dark text-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <LandingPagesShowcase />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
