import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const location = useLocation(); 

  
  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur"
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        
        <h1
          className="text-2xl font-bold"
          style={{ color: "var(--accent)" }}
        >
          Supun Priyanath
        </h1>

        {/* Navigation*/}
        <div className="flex gap-6 items-center text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative transition-colors duration-200"
              style={{
                color: isActive(link.path)
                  ? "var(--accent)"
                  : "var(--text-main)",
                fontWeight: isActive(link.path) ? "bold" : "normal",
              }}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 w-full h-[2px] bg-[var(--accent)] transition-all duration-200`}
                style={{
                  transform: isActive(link.path)
                    ? "scaleX(1)"
                    : "scaleX(0)",
                  transformOrigin: "left",
                }}
              ></span>
            </Link>
          ))}

          {/*Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
