import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Award, ExternalLink, ChevronDown } from "lucide-react";

const certs = [
  {
    title: "AI/ML Course",
    issuer: "Coursera",
    category: "Artificial Intelligence & Machine Learning",
    color: "#3B82F6",
    year: "2024",
    description: "Comprehensive course covering fundamental to advanced concepts in Artificial Intelligence and Machine Learning, including supervised learning, neural networks, and practical implementations.",
    skills: ["Machine Learning", "Neural Networks", "Python", "Deep Learning"],
  },
];

export function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="certifications" className="relative py-28 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-yellow-400 text-sm font-medium tracking-widest mb-3">ACHIEVEMENTS</div>
          <h2
            className="text-white"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700 }}
          >
            My{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
        </motion.div>

        <div className="space-y-5">
          {certs.map(({ title, issuer, category, color, year, description, skills }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="rounded-2xl border border-white/10 overflow-hidden"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <div
                className="p-6 flex items-center gap-5 cursor-pointer"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                {/* Badge */}
                <motion.div
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${color}30, rgba(255,255,255,0.05))`,
                    boxShadow: `0 0 20px ${color}25`,
                  }}
                >
                  <Award size={26} style={{ color }} />
                </motion.div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3
                        className="text-white"
                        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "1rem" }}
                      >
                        {title}
                      </h3>
                      <div className="text-white/60 text-sm">{issuer} · {category}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-white/40 text-sm">{year}</span>
                      <motion.div
                        animate={{ rotate: expanded === i ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={18} className="text-white/40" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expandable details */}
              <motion.div
                initial={false}
                animate={{ height: expanded === i ? "auto" : 0, opacity: expanded === i ? 1 : 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden"
              >
                <div
                  className="px-6 pb-6 border-t border-white/10 pt-5"
                  style={{ background: `${color}08` }}
                >
                  <p className="text-white/65 text-sm leading-relaxed mb-4">{description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 rounded-full"
                        style={{
                          background: `${color}15`,
                          color,
                          border: `1px solid ${color}30`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    className="mt-4 flex items-center gap-2 text-sm font-medium"
                    style={{ color }}
                  >
                    <ExternalLink size={14} /> View Certificate
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
