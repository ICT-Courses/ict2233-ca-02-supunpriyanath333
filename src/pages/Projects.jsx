import ProjectCard from "../components/ProjectCard"; 
import useDarkMode from "../hooks/useDarkMode"; 

export default function Projects() {
  useDarkMode();

  const projectData = [
    {
      title: "Cum & Eat Food Delivery",
      description:
        "A full-stack food delivery platform where users can browse restaurants, place orders, and track deliveries in real-time.",
      tech: "React • Tailwind • Node.js • MongoDB",
      github: "https://github.com/yourusername/cum-eat-food-delivery",
    },
    {
      title: "UniSpace",
      description:
        "A collaborative platform for university students to share resources, manage study groups, and organize events.",
      tech: "React • Tailwind • Firebase • REST API",
      github: "https://github.com/yourusername/unispace",
    },
    {
      title: "Japura Eats",
      description:
        "A modern restaurant ordering app focusing on local cuisines, featuring menus, online orders, and delivery tracking.",
      tech: "React • Tailwind • Express • PostgreSQL",
      github: "https://github.com/yourusername/japura-eats",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="text-3xl font-bold mb-10 text-[var(--accent)]">
        Projects
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            tech={project.tech}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}
