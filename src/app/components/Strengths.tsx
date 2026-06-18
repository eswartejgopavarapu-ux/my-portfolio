import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { BookOpen, Rocket, Zap } from "lucide-react";

const strengths = [
  {
    icon: BookOpen,
    title: "Self Learner",
    description: "Proactively seek out new knowledge and skills, constantly expanding expertise through independent study and hands-on experimentation.",
    color: "#3B82F6",
    gradient: "from-blue-500/20 to-blue-600/10",
  },
  {
    icon: Rocket,
    title: "Self Motivated",
    description: "Driven by an internal passion for excellence. Setting ambitious goals and consistently pushing forward without needing external pressure.",
    color: "#8B5CF6",
    gradient: "from-purple-500/20 to-purple-600/10",
  },
  {
    icon: Zap,
    title: "Quick Learner",
    description: "Rapidly absorb and apply new concepts and technologies, adapting swiftly to new tools and environments with minimal ramp-up time.",
    color: "#06B6D4",
    gradient: "from-cyan-500/20 to-cyan-600/10",
  },
];

export function Strengths() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="strengths" className="relative py-28 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-green-400 text-sm font-medium tracking-widest mb-3">WHAT DRIVES ME</div>
          <h2
            className="text-white"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700 }}
          >
            Core{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Strengths
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strengths.map(({ icon: Icon, title, description, color, gradient }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.15 }}
              whileHover={{ scale: 1.04, y: -8 }}
              className={`relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br ${gradient} backdrop-blur-sm overflow-hidden`}
            >
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-15"
                style={{ background: color, filter: "blur(40px)" }}
              />

              {/* Animated icon */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/10"
                style={{ background: `${color}20` }}
              >
                <Icon size={28} style={{ color }} />
              </motion.div>

              <h3
                className="text-white mb-3"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.15rem" }}
              >
                {title}
              </h3>

              <p className="text-white/65 text-sm leading-relaxed">{description}</p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(to right, transparent, ${color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
