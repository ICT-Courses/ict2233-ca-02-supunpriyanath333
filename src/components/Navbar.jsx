import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const linkClass = ({ isActive }) =>
  "px-3 py-2 rounded-md text-sm font-medium " + (isActive ? "bg-gray-200 dark:bg-gray-800" : "hover:bg-gray-100 dark:hover:bg-gray-900");

export default function Navbar() {
  return (
    <header className="py-4 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <NavLink to="/" className="text-xl font-bold">REPLACE_WITH_NAME</NavLink>
        <nav className="flex items-center gap-2">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
