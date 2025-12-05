import React from "react";
import useDarkMode from "../hooks/useDarkMode";

export default function ThemeToggle() {
  const [isDark, toggle] = useDarkMode();
  return (
    <button
      onClick={toggle}
      aria-label="toggle theme"
      className="p-2 rounded-md border hover:shadow-sm"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
