import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      {/* LEFT TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2
          className="text-4xl md:text-5xl font-mono mb-4"
          style={{ color: "var(--text-main)" }}
        >
          Hi There!
        </h2>

        <h1
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{ color: "var(--text-main)" }}
        >
          I'M <span style={{ color: "var(--accent)" }}>Supun Priyanath</span>
        </h1>

        <p
          className="text-xl font-mono"
          style={{ color: "var(--accent)" }}
        >
          Open Source Contributor
        </p>
      </motion.div>

      {/* RIGHT ILLUSTRATION */}
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
