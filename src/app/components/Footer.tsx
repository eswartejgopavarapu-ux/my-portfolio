import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/eswartejgopavarapu-ux", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/eswar-tej-gopavarapu-406108404/", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:eswartejgopavarapu@gmail.com", label: "Email" },
];

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative py-12 px-6 border-t border-white/10">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "linear-gradient(to top, rgba(59,130,246,0.08), transparent)",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div
            className="text-white font-bold text-lg mb-1"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Gopavarapu Eswar Tej
            </span>
          </div>
          <div className="text-white/40 text-sm">
            Designed & Developed by Gopavarapu Eswar Tej
          </div>
          <div className="text-white/25 text-xs mt-1">© {new Date().getFullYear()} All rights reserved.</div>
        </div>

        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-colors"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>

        <motion.button
          onClick={scrollTop}
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(59,130,246,0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium"
        >
          <ArrowUp size={14} />
          Back to top
        </motion.button>
      </div>
    </footer>
  );
}
