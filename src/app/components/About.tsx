import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Brain, Database, Eye, Code2, BarChart2 } from "lucide-react";

const stats = [
  { label: "CGPA", value: 6.8, suffix: "", decimals: 1 },
  { label: "AI Projects", value: 1, suffix: "+", decimals: 0 },
  { label: "Certifications", value: 1, suffix: "+", decimals: 0 },
  { label: "Technologies", value: 5, suffix: "+", decimals: 0 },
];

const interests = [
  { icon: Brain, label: "Artificial Intelligence", color: "#3B82F6" },
  { icon: Code2, label: "Machine Learning", color: "#8B5CF6" },
  { icon: Eye, label: "Computer Vision", color: "#06B6D4" },
  { icon: Code2, label: "Python Development", color: "#10B981" },
  { icon: BarChart2, label: "Data Analytics", color: "#F59E0B" },
];

function Counter({ end, decimals, duration = 2 }: { end: number; decimals: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const steps = 60;
    const increment = end / steps;
    const interval = (duration * 1000) / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Number(start.toFixed(decimals)));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [inView, end, decimals, duration]);

  return <span ref={ref}>{count.toFixed(decimals)}</span>;
}

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-28 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-blue-400 text-sm font-medium tracking-widest mb-3">WHO I AM</div>
          <h2
            className="text-white"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700 }}
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-white/75 leading-relaxed text-base mb-6">
              I am a passionate <span className="text-blue-400 font-medium">Artificial Intelligence and Data Science Engineering</span> student pursuing my B.Tech at{" "}
              <span className="text-purple-400 font-medium">Amrita Vishwa Vidyapeetham</span>, Coimbatore.
            </p>
            <p className="text-white/75 leading-relaxed text-base mb-8">
              I enjoy solving real-world problems using intelligent systems and continuously improving my technical and analytical skills. My goal is to build AI solutions that make a meaningful impact.
            </p>

            <div className="mb-8">
              <div className="text-white/50 text-sm mb-4 tracking-wider">DEEPLY INTERESTED IN</div>
              <div className="flex flex-wrap gap-3">
                {interests.map(({ icon: Icon, label, color }) => (
                  <motion.div
                    key={label}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10 text-sm font-medium text-white/80"
                    style={{
                      background: `${color}15`,
                      borderColor: `${color}30`,
                    }}
                  >
                    <Icon size={14} style={{ color }} />
                    {label}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ label, value, suffix, decimals }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="relative p-6 rounded-2xl border border-white/10 backdrop-blur-sm flex flex-col items-center text-center overflow-hidden"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${
                      ["#3B82F6", "#8B5CF6", "#06B6D4", "#10B981"][i]
                    }30, transparent 70%)`,
                  }}
                />
                <div
                  className="text-4xl font-black mb-1"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    background: `linear-gradient(135deg, ${
                      ["#3B82F6,#06B6D4", "#8B5CF6,#EC4899", "#06B6D4,#3B82F6", "#10B981,#06B6D4"][i]
                    })`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  <Counter end={value} decimals={decimals} />
                  {suffix}
                </div>
                <div className="text-white/60 text-sm font-medium">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
