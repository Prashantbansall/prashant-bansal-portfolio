import GlowCard from "./GlowCard";
import AnimatedButton from "./AnimatedButton";

function ProjectCard({ project }) {
  return (
    <GlowCard className="flex h-full flex-col overflow-hidden p-0">
      <div className="h-48 border-b border-white/10 bg-gradient-to-br from-violet-600/25 to-cyan-500/20" />

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-3 text-sm font-medium text-cyan-300">
          {project.category}
        </p>

        <h3 className="text-2xl font-bold text-white">{project.title}</h3>

        <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
          {project.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <AnimatedButton href={project.github} variant="secondary">
            GitHub
          </AnimatedButton>
          <AnimatedButton href={project.live} variant="primary">
            Live Demo
          </AnimatedButton>
        </div>
      </div>
    </GlowCard>
  );
}

export default ProjectCard;
