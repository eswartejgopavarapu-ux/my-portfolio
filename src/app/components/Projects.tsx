import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Github, Zap, Cpu, Eye, Shield, Activity } from "lucide-react";

const features = [
  { icon: Zap, text: "Real-Time Defect Detection" },
  { icon: Cpu, text: "Edge Device Optimization" },
  { icon: Eye, text: "Computer Vision-Based Analysis" },
  { icon: Shield, text: "Resource Efficient Framework" },
  { icon: Activity, text: "AI-Driven Inspection System" },
];

const tags = ["Python", "Computer Vision", "AI", "Machine Learning", "Edge AI"];

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-28 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-blue-400 text-sm font-medium tracking-widest mb-3">WHAT I BUILT</div>
          <h2
            className="text-white"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700 }}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Project
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-white/10"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          {/* Left: visual */}
          <div
            className="relative min-h-72 flex items-center justify-center overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15), rgba(6,182,212,0.1))",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="grid grid-cols-6 gap-3 p-8">
                {Array.from({ length: 30 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.1, 0.8] }}
                    transition={{ duration: 2 + (i % 5) * 0.4, repeat: Infinity, delay: i * 0.08 }}
                    className="w-5 h-5 rounded-sm"
                    style={{
                      background: i % 3 === 0 ? "#3B82F6" : i % 3 === 1 ? "#8B5CF6" : "#06B6D4",
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="relative z-10 text-center px-8">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-blue-400/50 flex items-center justify-center"
                style={{ background: "rgba(59,130,246,0.15)" }}
              >
                <Eye size={40} className="text-blue-400" />
              </motion.div>
              <div className="text-white/60 text-sm">AI Vision System</div>
            </div>
          </div>

          {/* Right: details */}
          <div className="p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{ background: "rgba(59,130,246,0.15)", color: "#60a5fa", border: "1px solid rgba(59,130,246,0.3)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3
                className="text-white mb-4 leading-tight"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.05rem" }}
              >
                Joint Entropy-Guided NMS-Free Lightweight and Resource-Efficient Framework for Edge-Optimized Autonomous Power Line Inspection of Insulator Defects
              </h3>

              <p className="text-white/65 text-sm leading-relaxed mb-6">
                Developed an AI-powered defect detection system for power line insulators. The framework is optimized for edge devices, enabling efficient real-time inspection with reduced computational resources while maintaining high accuracy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {features.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-sm text-white/70">
                    <Icon size={14} className="text-cyan-400 shrink-0" />
                    {text}
                  </div>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 25px rgba(59,130,246,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-300 font-medium text-sm w-fit"
            >
              <Github size={16} />
              View on GitHub
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
