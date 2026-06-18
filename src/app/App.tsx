import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { ParticleBackground } from "./components/ParticleBackground";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Interests } from "./components/Interests";
import { Certifications } from "./components/Certifications";
import { Strengths } from "./components/Strengths";
import { Hobbies } from "./components/Hobbies";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{
        background: darkMode
          ? "#050816"
          : "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0c1a3f 100%)",
      }}
    >
      <ParticleBackground />
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode((d) => !d)} />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Interests />
        <Certifications />
        <Strengths />
        <Hobbies />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
