import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import LandingPagesShowcase from "./components/LandingPages";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import NLKTransportes from "./landingPages/NLKTransportes";
import FitLife from "./landingPages/FitLife";
import PetCare from "./landingPages/PetCare";
import DigitalBoost from "./landingPages/DigitalBoost";
import SweetHome from "./landingPages/SweetHome";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
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
          }
        />

        {/* Rotas das landing pages */}
        <Route path="/landing/nlk-transportes" element={<NLKTransportes />} />
        <Route path="/landing/fitlife" element={<FitLife />} />
        <Route path="/landing/petcare" element={<PetCare />} />
        <Route path="/landing/digitalboost" element={<DigitalBoost />} />
        {<Route path="/landing/sweethome" element={<SweetHome />} />}
      </Routes>
    </Router>
  );
}

export default App;
