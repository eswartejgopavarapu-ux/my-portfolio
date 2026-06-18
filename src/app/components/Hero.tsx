import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ChevronDown, Download, Mail, Eye } from "lucide-react";
import resumePdf from "../../imports/G Eswar Tej BTech.pdf";

const typewriterPhrases = [
  "Building Intelligent Solutions with AI",
  "Crafting Data-Driven Applications",
  "Designing Machine Learning Systems",
  "Engineering Edge-Optimized AI",
  "Exploring the Future with Python",
];

function useTypewriter(phrases: string[], speed = 60, pause = 2000) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const delay = deleting ? speed / 2 : charIndex === current.length ? pause : speed;

    const timer = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (!deleting && charIndex === current.length) {
        setDeleting(true);
      } else if (deleting && charIndex > 0) {
        setText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, phraseIndex, phrases, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(typewriterPhrases);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setGlowPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Mouse-follow glow */}
      <div
        className="fixed pointer-events-none z-10 transition-all duration-300"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)`,
          left: `${glowPos.x}%`,
          top: `${glowPos.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Gradient mesh background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 40%, rgba(59,130,246,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 70%, rgba(139,92,246,0.10) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-blue-400 font-medium tracking-widest text-sm mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            👋 Hello, I'm
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white leading-tight mb-2"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 800,
            }}
          >
            Gopavarapu{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Eswar Tej
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-1 mb-6"
          >
            {["AI & Data Science Student", "Aspiring Machine Learning Engineer", "Future AI Innovator"].map(
              (role, i) => (
                <div
                  key={i}
                  className="text-white/70 font-medium"
                  style={{ fontSize: "clamp(0.95rem, 2vw, 1.2rem)" }}
                >
                  {role}
                </div>
              )
            )}
          </motion.div>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-10 h-10 flex items-center"
          >
            <span className="text-cyan-400 font-medium text-base md:text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
              {typed}
              <span className="animate-pulse ml-0.5 text-blue-400">|</span>
            </span>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59,130,246,0.4)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("#projects")}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-sm transition-all"
            >
              <Eye size={16} /> View Projects
            </motion.button>
            <motion.a
              href={resumePdf}
              download="Gopavarapu_Eswar_Tej_Resume.pdf"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6,182,212,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-400/40 bg-cyan-400/10 text-cyan-300 font-semibold text-sm backdrop-blur-sm transition-all hover:bg-cyan-400/20"
            >
              <Download size={16} /> Download Resume
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("#contact")}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 bg-white/5 text-white/80 font-semibold text-sm backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <Mail size={16} /> Contact Me
            </motion.button>
          </motion.div>
        </div>

        {/* Profile visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center items-center"
        >
          <div className="relative">
            {/* Outer glow rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #3B82F6, #8B5CF6, #06B6D4, #3B82F6)",
                padding: 2,
                borderRadius: "50%",
                width: 320,
                height: 320,
              }}
            >
              <div
                className="w-full h-full rounded-full"
                style={{ background: "#050816" }}
              />
            </motion.div>

            {/* Floating avatar */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 flex items-center justify-center"
              style={{ width: 320, height: 320 }}
            >
              <div
                className="rounded-full flex items-center justify-center text-8xl"
                style={{
                  width: 280,
                  height: 280,
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.3), rgba(139,92,246,0.2), rgba(6,182,212,0.1))",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <span style={{ fontSize: 100 }}>🧑‍💻</span>
              </div>
            </motion.div>

            {/* Orbit dots */}
            {[0, 120, 240].map((deg) => (
              <motion.div
                key={deg}
                animate={{ rotate: 360 }}
                transition={{ duration: 8 + deg / 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
                style={{ transformOrigin: "160px 160px" }}
              >
                <div
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    background: deg === 0 ? "#3B82F6" : deg === 120 ? "#8B5CF6" : "#06B6D4",
                    top: 10,
                    left: "50%",
                    transform: `translateX(-50%) rotate(${deg}deg)`,
                    boxShadow: `0 0 10px ${deg === 0 ? "#3B82F6" : deg === 120 ? "#8B5CF6" : "#06B6D4"}`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollToSection("#about")}
      >
        <span className="text-white/40 text-xs tracking-widest">SCROLL</span>
        <ChevronDown className="text-blue-400" size={20} />
      </motion.div>
    </section>
  );
}
