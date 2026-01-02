export default function ProjectCard({ title, description, tech, github }) {
  return (
    <div
      className="
        rounded-xl p-6 border transition-all duration-500 transform hover:scale-105
        bg-[var(--bg-mid)] border-white/20 shadow-md
        text-[var(--text-main)]
        flex flex-col items-center
      "
    >
      {/* Project Title */}
      <h3 className="font-semibold mb-2 text-xl text-[var(--accent)] text-center">{title}</h3>

      {/* Description */}
      <p className="text-sm mb-2 text-[var(--text-sec)] text-center">{description}</p>

      {/* Tech Stack */}
      <p className="text-xs mb-4 text-[var(--text-sec)] text-center">{tech}</p>

      {/* GitHub Button */}
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-block px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300
          bg-[var(--accent)] text-[var(--text-main)] hover:brightness-110
        "
      >
        GitHub
      </a>
    </div>
  );
}
