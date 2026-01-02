import { motion } from "framer-motion";
import {
  Code,
  Database,
  Palette,
  Github,
  Figma,
  Terminal,
  Laptop
} from "lucide-react";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20 space-y-24">

      {/* ================= KNOW WHO I'M ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">
          KNOW WHO <span className="text-[var(--accent)]">I'M</span>
        </h2>

        <p className="leading-relaxed max-w-3xl text-[var(--text-sec)]">
          Hi, I'm <span className="text-[var(--accent)]">Supun Priyanath</span>, an
          undergraduate student with a strong interest in web application
          development. I enjoy building responsive, interactive, and
          user-friendly web applications using modern technologies.
        </p>

        <p className="leading-relaxed mt-4 max-w-3xl text-[var(--text-sec)]">
          I am particularly interested in <span className="text-[var(--accent)]">
          React</span>, modern JavaScript, and UI/UX design. I love learning new
          technologies and contributing to open-source projects whenever
          possible.
        </p>
      </motion.div>

      {/* ================= PROFESSIONAL SKILLSET ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-10 text-center">
          PROFESSIONAL <span className="text-[var(--accent)]">SKILLSET</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            { icon: <Code />, label: "JavaScript" },
            { icon: <Code />, label: "React" },
            { icon: <Palette />, label: "Tailwind CSS" },
            { icon: <Database />, label: "REST APIs" },
            { icon: <Code />, label: "HTML & CSS" },
            { icon: <Database />, label: "MySQL" },
            { icon: <Terminal />, label: "Git" },
            { icon: <Github />, label: "GitHub" }
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-2
                         bg-white/5 backdrop-blur
                         border border-white/10
                         rounded-xl p-6"
            >
              <div className="text-[var(--accent)]">{skill.icon}</div>
              <p className="text-sm text-[var(--text-main)]">{skill.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ================= TOOLS I USE ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-10 text-center">
          TOOLS <span className="text-[var(--accent)]">I USE</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            { icon: <Laptop />, label: "VS Code" },
            { icon: <Github />, label: "GitHub" },
            { icon: <Figma />, label: "Figma" },
            { icon: <Terminal />, label: "Terminal" }
          ].map((tool, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-2
                         bg-white/5 backdrop-blur
                         border border-white/10
                         rounded-xl p-6"
            >
              <div className="text-[var(--accent)]">{tool.icon}</div>
              <p className="text-sm text-[var(--text-main)]">{tool.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
