import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const jobTitles = [
    "Web Developer",
    "Frontend Developer",
    "UI/UX Designer",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  // Change title every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % jobTitles.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Variants for letters
  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Variants for container
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05 },
    },
  };

  return (
    <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2
          className="text-4xl md:text-5xl font-mono mb-6"
          style={{ color: "var(--text-main)" }}
        >
          Hi There!
        </h2>

        <h1
          className="text-4xl md:text-5xl font-bold mb-8"
          style={{ color: "var(--text-main)" }}
        >
          I'M <span style={{ color: "var(--accent)" }}>Supun Priyanath</span>
        </h1>

        {/* Animations*/}
        <div className="text-xl font-mono leading-relaxed mb-4 h-8 overflow-hidden flex">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTitleIndex}
              className="flex flex-wrap"
              variants={container}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              style={{ color: "var(--accent)" }}
            >
              {jobTitles[currentTitleIndex].split("").map((char, index) => (
                <motion.span key={index} variants={letter}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Home picture */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <img
          src="images/Home_image.png"
          alt="Developer Illustration"
          className="w-[320px] md:w-[420px]"
        />
      </motion.div>
    </section>
  );
}
