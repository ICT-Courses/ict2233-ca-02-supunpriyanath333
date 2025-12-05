import React from "react";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <section>
        <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 border rounded">Project 1</div>
          <div className="p-4 border rounded">Project 2</div>
          <div className="p-4 border rounded">Project 3</div>
        </div>
      </section>
    </div>
  );
}
