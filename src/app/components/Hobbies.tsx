import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const hobbies = [
  {
    emoji: "🏏",
    title: "Playing Cricket",
    description: "Team sport that sharpens strategic thinking, coordination, and the spirit to compete.",
    backContent: "Cricket taught me teamwork, focus under pressure, and the value of practice. There's nothing like a well-timed shot or a perfect delivery.",
    color: "#10B981",
    bgGradient: "from-emerald-500/20 to-green-600/10",
  },
  {
    emoji: "🎬",
    title: "Watching Movies",
    description: "Exploring stories across genres — a source of inspiration and creative thinking.",
    backContent: "Films fuel my imagination and help me see problems from different angles. Cinema is storytelling at its finest, blending art and technology.",
    color: "#F59E0B",
    bgGradient: "from-amber-500/20 to-yellow-600/10",
  },
];

export function Hobbies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section id="hobbies" className="relative py-28 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-orange-400 text-sm font-medium tracking-widest mb-3">BEYOND CODE</div>
          <h2
            className="text-white"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700 }}
          >
            My{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Hobbies
            </span>
          </h2>
          <p className="text-white/50 text-sm mt-3">Hover to flip the cards</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {hobbies.map(({ emoji, title, description, backContent, color, bgGradient }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="cursor-pointer"
              style={{ perspective: 1000, height: 240 }}
              onHoverStart={() => setFlipped(i)}
              onHoverEnd={() => setFlipped(null)}
              onClick={() => setFlipped(flipped === i ? null : i)}
            >
              <motion.div
                animate={{ rotateY: flipped === i ? 180 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front */}
                <div
                  className={`absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br ${bgGradient} p-8 flex flex-col items-center justify-center text-center`}
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="text-5xl mb-4">{emoji}</div>
                  <h3
                    className="text-white mb-2"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.1rem" }}
                  >
                    {title}
                  </h3>
                  <p className="text-white/60 text-sm">{description}</p>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 rounded-2xl border border-white/10 p-8 flex flex-col items-center justify-center text-center"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    background: `linear-gradient(135deg, ${color}25, rgba(255,255,255,0.05))`,
                  }}
                >
                  <div className="text-4xl mb-4">{emoji}</div>
                  <p className="text-white/80 text-sm leading-relaxed">{backContent}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
