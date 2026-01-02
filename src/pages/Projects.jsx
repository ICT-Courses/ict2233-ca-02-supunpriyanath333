import ProjectCard from "../components/ProjectCard"; 
import useDarkMode from "../hooks/useDarkMode"; 

export default function Projects() {
  useDarkMode();

  const projectData = [
    {
      title: "Cum & Eat Food Delivery",
      description:
        "A full-stack food delivery platform where users can browse from a local restaurants, place orders, and track deliveries in real-time.",
      tech: "React • Tailwind • Node.js • MongoDB",
      github: "https://github.com/supunpriyanath333/CUM-EAT-Food-Delivery-App",
    },
    {
      title: "UniSpace",
      description:
        "A collaborative platform for university students to Book Leture halls, share resources, manage study times, and organize events.",
      tech: "React • Tailwind • Firebase • REST API",
      github: "https://github.com/supunpriyanath333/UniSpace-Booking-App",
    },
    {
      title: "Japura Eats",
      description:
        "A modern food pre ordering web focusing on USJ canteens, featuring menus, online orders and tracking.",
      tech: "React • Tailwind • Express • PostgreSQL",
      github: "https://github.com/ICT-Courses/ict-2233-final-project-submission-group-11",
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
