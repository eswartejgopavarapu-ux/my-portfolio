import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Brain, Cog, Eye, BarChart2, Cpu } from "lucide-react";

const interests = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Building systems that can reason, learn, and adapt to solve complex real-world challenges autonomously.",
    color: "#3B82F6",
  },
  {
    icon: Cog,
    title: "Machine Learning",
    description: "Crafting algorithms that learn patterns from data to make accurate predictions and decisions.",
    color: "#8B5CF6",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Teaching machines to understand and interpret the visual world using deep learning techniques.",
    color: "#06B6D4",
  },
  {
    icon: BarChart2,
    title: "Data Science",
    description: "Extracting insights and value from complex datasets to drive intelligent decision-making.",
    color: "#10B981",
  },
  {
    icon: Cpu,
    title: "Edge AI",
    description: "Deploying efficient AI models on resource-constrained edge devices for real-time inference.",
    color: "#F59E0B",
  },
];

export function Interests() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="interests" className="relative py-28 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-purple-400 text-sm font-medium tracking-widest mb-3">PASSIONS</div>
          <h2
            className="text-white"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700 }}
          >
            AI{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Interests
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {interests.map(({ icon: Icon, title, description, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              onHoverStart={() => setHovered(title)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative p-6 rounded-2xl border border-white/10 backdrop-blur-sm cursor-default overflow-hidden transition-all"
              style={{
                background:
                  hovered === title
                    ? `linear-gradient(135deg, ${color}20, rgba(255,255,255,0.05))`
                    : "rgba(255,255,255,0.04)",
                boxShadow: hovered === title ? `0 0 40px ${color}25, 0 20px 40px rgba(0,0,0,0.3)` : "none",
              }}
            >
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-20 transition-opacity"
                style={{
                  background: color,
                  filter: "blur(30px)",
                  opacity: hovered === title ? 0.4 : 0.15,
                }}
              />

              <motion.div
                animate={hovered === title ? { rotate: [0, -10, 10, 0], scale: 1.2 } : { rotate: 0, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: `${color}20`,
                  border: `1px solid ${color}40`,
                }}
              >
                <Icon size={22} style={{ color }} />
              </motion.div>

              <h3
                className="text-white mb-2"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "0.95rem" }}
              >
                {title}
              </h3>

              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={
                  hovered === title
                    ? { opacity: 1, height: "auto" }
                    : { opacity: 0, height: 0 }
                }
                className="text-white/60 text-xs leading-relaxed overflow-hidden"
              >
                {description}
              </motion.p>

              {hovered !== title && (
                <div className="text-white/40 text-xs mt-1">Hover to learn more</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
