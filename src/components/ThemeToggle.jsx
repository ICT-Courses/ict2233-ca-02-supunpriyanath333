import useDarkMode from "../hooks/useDarkMode";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="
        flex items-center gap-2 px-3 py-2 rounded-lg
        text-[var(--text-main)] hover:text-[var(--accent)] 
        transition
      "
      aria-label="Toggle Light Mode"
    >
      {/* Icon */}
      <span className="text-lg">{darkMode ? "🌙" : "☀️"}</span>

      {/* Label */}
      <span className="font-medium">
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </span>
    </button>
  );
}
