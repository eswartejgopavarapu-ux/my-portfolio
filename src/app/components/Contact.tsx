import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Mail, Phone, Globe, Send } from "lucide-react";

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Telugu", level: "Native" },
  { name: "Hindi", level: "Read" },
];

const EMAIL = "eswartejgopavarapu@gmail.com";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const openMail = () => {
    window.location.href = `mailto:${EMAIL}?subject=Hello%20Eswar%20Tej&body=Hi%20Eswar%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.%0A%0A`;
  };

  return (
    <section id="contact" className="relative py-28 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-cyan-400 text-sm font-medium tracking-widest mb-3">GET IN TOUCH</div>
          <h2
            className="text-white"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700 }}
          >
            Contact{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-white/50 text-sm mt-3 max-w-md mx-auto">
            Have a project, internship opportunity, or just want to say hello? I'm always open to new conversations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {/* Email card */}
          <motion.a
            href={`mailto:${EMAIL}`}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            whileHover={{ scale: 1.04, y: -6 }}
            className="flex flex-col items-center text-center p-7 rounded-2xl border border-white/10 backdrop-blur-sm group transition-all cursor-pointer"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all group-hover:scale-110"
              style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)" }}
            >
              <Mail size={24} className="text-blue-400" />
            </div>
            <div className="text-white/50 text-xs mb-1 tracking-wider">EMAIL</div>
            <div className="text-white text-sm font-medium group-hover:text-blue-300 transition-colors break-all">
              {EMAIL}
            </div>
          </motion.a>

          {/* Phone card */}
          <motion.a
            href="tel:+919000102226"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25 }}
            whileHover={{ scale: 1.04, y: -6 }}
            className="flex flex-col items-center text-center p-7 rounded-2xl border border-white/10 backdrop-blur-sm group transition-all cursor-pointer"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all group-hover:scale-110"
              style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)" }}
            >
              <Phone size={24} className="text-purple-400" />
            </div>
            <div className="text-white/50 text-xs mb-1 tracking-wider">PHONE</div>
            <div className="text-white text-sm font-medium group-hover:text-purple-300 transition-colors">
              +91 9000102226
            </div>
          </motion.a>

          {/* Languages card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35 }}
            className="flex flex-col items-center text-center p-7 rounded-2xl border border-white/10 backdrop-blur-sm"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
              style={{ background: "rgba(6,182,212,0.15)", border: "1px solid rgba(6,182,212,0.3)" }}
            >
              <Globe size={24} className="text-cyan-400" />
            </div>
            <div className="text-white/50 text-xs mb-3 tracking-wider">LANGUAGES</div>
            <div className="flex flex-col gap-2 w-full">
              {languages.map(({ name, level }) => (
                <div key={name} className="flex items-center justify-between px-2">
                  <span className="text-white/80 text-sm">{name}</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(6,182,212,0.15)", color: "#06B6D4", border: "1px solid rgba(6,182,212,0.3)" }}
                  >
                    {level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45 }}
          className="flex justify-center"
        >
          <motion.button
            onClick={openMail}
            whileHover={{ scale: 1.06, boxShadow: "0 0 50px rgba(59,130,246,0.4), 0 0 100px rgba(139,92,246,0.2)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-base relative overflow-hidden group"
          >
            {/* Shimmer */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)",
              }}
            />
            <Send size={18} />
            Send Mail
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
