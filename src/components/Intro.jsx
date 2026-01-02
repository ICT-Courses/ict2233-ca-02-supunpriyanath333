import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">
          LET ME <span className="text-[var(--accent)]">INTRODUCE</span> MYSELF
        </h2>

        <p className="leading-relaxed mb-4 text-[var(--text-sec)]">
         I am an undergraduate student at the University of Sri Jayewardenepura who passionate about software engineering and 
         UI/UX design, with a strong interest in creating modern, responsive and user-friendly web applications.
        </p>

        <p className="leading-relaxed mb-4 text-[var(--text-sec)]">
          I enjoy <span className="text-[var(--accent)]"> designing and developing interfaces </span>
           using <span className="text-[var(--accent)]"> React, JavaScript, and CSS, modern
          JavaScript and translating Figma designs into interactive web experiences</span>.
        </p>

        <p className="leading-relaxed text-[var(--text-sec)]">
         Currently, I am focused on enhancing my full-stack development skills and contributing 
         to open-source projects, while exploring innovative ways to improve user experience and interface design.
        </p>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <img
          src="images/dp.jpeg"
          alt="My profile"
          className="w-60 h-60 object-cover rounded-full
                     border-4 border-[var(--accent)]
                     shadow-lg shadow-[var(--accent)]/30"
        />
      </motion.div>

    </section>
  );
}
