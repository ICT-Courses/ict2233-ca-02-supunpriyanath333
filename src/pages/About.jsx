import React from "react";

export default function About() {
  return (
    <div>
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="mt-4 text-muted">
        Replace this paragraph with background, education, technical and soft skills.
        Example: Diploma in Scientific Tea Manufacturing and Quality Management, University details, and career goal.
      </p>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-2">
          <li className="p-2 border rounded">React</li>
          <li className="p-2 border rounded">Tailwind</li>
          <li className="p-2 border rounded">Git/GitHub</li>
          <li className="p-2 border rounded">JavaScript</li>
        </ul>
      </section>
    </div>
  );
}
