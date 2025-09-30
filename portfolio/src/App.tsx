import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import GithubStats from "./components/GithubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="font-inter bg-dark text-white">
      <Header />
      <Hero />
      <Projects />
      <GithubStats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
