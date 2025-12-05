import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 mt-8 border-t">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted">© {new Date().getFullYear()} REPLACE_WITH_NAME. Built with React + Tailwind.</p>
      </div>
    </footer>
  );
}
