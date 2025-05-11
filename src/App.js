import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import DomiBanner from "./components/DomiBanner";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from "aos";
import "aos/dist/aos.css";

import "./styles-v3.css";

function App() {
  useEffect(() => {
    AOS.init({ once: false, duration: 800 });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <DomiBanner />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
