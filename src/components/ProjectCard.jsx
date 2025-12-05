import React from "react";

export default function ProjectCard({ title, description, img, tech = [], repo, demo }) {
  return (
    <article className="border rounded-lg overflow-hidden shadow-sm bg-card p-4">
      <img src={img} alt={title} className="w-full h-40 object-cover rounded-md mb-3" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-muted my-2">{description}</p>
      <p className="text-xs text-muted">Tech: {tech.join(", ")}</p>
      <div className="mt-3 flex gap-2">
        {repo && <a href={repo} target="_blank" rel="noreferrer" className="px-3 py-1 border rounded">Repo</a>}
        {demo && <a href={demo} target="_blank" rel="noreferrer" className="px-3 py-1 bg-brand-500 text-white rounded">Live</a>}
      </div>
    </article>
  );
}
