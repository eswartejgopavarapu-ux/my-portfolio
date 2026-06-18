import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Code2, Database, Wrench, Monitor } from "lucide-react";

const categories = [
  {
    icon: Code2,
    label: "Programming",
    color: "#3B82F6",
    skills: [
      { name: "Python", level: 80 },
      { name: "C", level: 65 },
    ],
  },
  {
    icon: Database,
    label: "Databases",
    color: "#8B5CF6",
    skills: [
      { name: "MySQL", level: 70 },
    ],
  },
  {
    icon: Wrench,
    label: "Tools",
    color: "#06B6D4",
    skills: [
      { name: "VS Code", level: 90 },
    ],
  },
  {
    icon: Monitor,
    label: "Operating Systems",
    color: "#10B981",
    skills: [
      { name: "Windows", level: 85 },
    ],
  },
];

function ProgressCircle({ level, color, size = 80 }: { level: number; color: string; size?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const r = (size - 12) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - level / 100);

  return (
    <div ref={ref} className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={6} />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={6}
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={inView ? { strokeDashoffset: offset } : { strokeDashoffset: circ }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ filter: `drop-shadow(0 0 6px ${color})` }}
        />
      </svg>
      <span
        className="absolute text-sm font-bold"
        style={{ color }}
      >
        {level}%
      </span>
    </div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-28 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-cyan-400 text-sm font-medium tracking-widest mb-3">WHAT I KNOW</div>
          <h2
            className="text-white"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700 }}
          >
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(({ icon: Icon, label, color, skills }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12 }}
              onHoverStart={() => setHovered(label)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ scale: 1.04, y: -8 }}
              className="p-6 rounded-2xl border border-white/10 backdrop-blur-sm transition-all cursor-default relative overflow-hidden"
              style={{
                background: hovered === label
                  ? `linear-gradient(135deg, ${color}15, rgba(255,255,255,0.05))`
                  : "rgba(255,255,255,0.04)",
                boxShadow: hovered === label ? `0 0 40px ${color}20` : "none",
              }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
                style={{ background: color, filter: "blur(40px)" }}
              />
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-white/10"
                style={{ background: `${color}20` }}
              >
                <Icon size={22} style={{ color }} />
              </div>
              <h3
                className="text-white mb-4"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "1rem" }}
              >
                {label}
              </h3>
              <div className="space-y-5">
                {skills.map(({ name, level }) => (
                  <div key={name} className="flex items-center gap-4">
                    <ProgressCircle level={level} color={color} size={64} />
                    <span className="text-white/75 text-sm font-medium">{name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
