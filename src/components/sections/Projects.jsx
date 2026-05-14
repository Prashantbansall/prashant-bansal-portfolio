import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="portfolio-container section-padding">
      <SectionHeading
        eyebrow="Featured Work"
        title="Featured Projects"
        subtitle="Real-world projects focused on full-stack development, clean UI, and practical problem-solving."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
