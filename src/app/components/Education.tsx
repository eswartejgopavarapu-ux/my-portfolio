import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { GraduationCap, BookOpen, School } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    degree: "B.Tech",
    field: "Artificial Intelligence & Data Science Engineering",
    institution: "Amrita Vishwa Vidyapeetham",
    location: "Coimbatore",
    score: "CGPA: 6.8",
    status: "Ongoing",
    color: "#3B82F6",
    year: "2022 – Present",
  },
  {
    icon: BookOpen,
    degree: "Intermediate (MPC)",
    field: "Mathematics, Physics, Chemistry",
    institution: "Bhashyam Junior College",
    location: "",
    score: "CGPA: 9.0",
    status: "Completed",
    color: "#8B5CF6",
    year: "2020 – 2022",
  },
  {
    icon: School,
    degree: "Schooling",
    field: "Secondary Education",
    institution: "Tiny Tots School",
    location: "",
    score: "Marks: 515",
    status: "Completed",
    color: "#06B6D4",
    year: "Up to 2020",
  },
];

export function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-28 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-purple-400 text-sm font-medium tracking-widest mb-3">MY BACKGROUND</div>
          <h2
            className="text-white"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700 }}
          >
            Education{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute left-8 top-0 bottom-0 w-0.5 origin-top"
            style={{
              background: "linear-gradient(to bottom, #3B82F6, #8B5CF6, #06B6D4)",
            }}
          />

          <div className="space-y-10">
            {timeline.map(({ icon: Icon, degree, field, institution, location, score, status, color, year }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                className="relative pl-20"
              >
                {/* Icon dot */}
                <div
                  className="absolute left-0 w-16 h-16 rounded-full flex items-center justify-center border-2"
                  style={{
                    background: `${color}20`,
                    borderColor: `${color}60`,
                    boxShadow: `0 0 20px ${color}30`,
                  }}
                >
                  <Icon size={22} style={{ color }} />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 6, scale: 1.01 }}
                  className="p-6 rounded-2xl border border-white/10 backdrop-blur-sm relative overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `radial-gradient(circle at 0% 50%, ${color}25, transparent 60%)`,
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div>
                        <h3
                          className="text-white mb-1"
                          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.1rem" }}
                        >
                          {degree}
                        </h3>
                        <div className="text-white/70 text-sm mb-1">{field}</div>
                        <div className="font-medium" style={{ color, fontSize: "0.95rem" }}>
                          {institution}{location ? ` — ${location}` : ""}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span
                          className="text-xs px-3 py-1 rounded-full font-medium"
                          style={{
                            background: `${color}20`,
                            color,
                            border: `1px solid ${color}40`,
                          }}
                        >
                          {status}
                        </span>
                        <span className="text-white/40 text-xs">{year}</span>
                      </div>
                    </div>
                    <div
                      className="inline-block text-sm font-semibold px-3 py-1 rounded-lg mt-1"
                      style={{ background: `${color}15`, color }}
                    >
                      {score}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
