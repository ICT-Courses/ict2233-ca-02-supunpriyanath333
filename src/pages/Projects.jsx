import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const GITHUB_USER = "REPLACE_WITH_GITHUB_USERNAME";

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        const top = data.sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at)).slice(0,6);
        setRepos(top);
      } catch (err) {
        console.error(err);
      }
    }
    fetchRepos();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {repos.length === 0 ? (
          <p className="text-muted">No repos found or loading...</p>
        ) : (
          repos.map(repo => (
            <ProjectCard
              key={repo.id}
              title={repo.name}
              description={repo.description || "No description"}
              img="/src/assets/profile.jpg"
              tech={["React", "JS"]}
              repo={repo.html_url}
              demo={repo.homepage || null}
            />
          ))
        )}
      </div>
    </div>
  );
}
