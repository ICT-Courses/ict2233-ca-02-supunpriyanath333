import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-12">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <motion.h1 initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }} className="text-4xl font-bold mb-2">
            Hi, I am <span className="text-brand-500">REPLACE_WITH_NAME</span>
          </motion.h1>
          <p className="text-lg text-muted mb-4">REPLACE_WITH_TAGLINE — Example: "I build responsive web apps with React."</p>
          <div className="flex gap-3">
            <a href="/projects" className="px-4 py-2 rounded bg-brand-500 text-white">View projects</a>
            <a href="/contact" className="px-4 py-2 rounded border">Contact</a>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/src/assets/profile.jpg" alt="profile" className="w-56 h-56 object-cover rounded-xl shadow-lg" />
        </div>
      </div>
    </section>
  );
}
