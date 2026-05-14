import AnimatedButton from "../ui/AnimatedButton";
import GlowCard from "../ui/GlowCard";
import { socialLinks } from "../../data/socialLinks";

function ResumeCTA() {
  return (
    <section id="resume" className="mx-auto max-w-7xl px-6 py-24">
      <GlowCard className="text-center">
        <p className="mb-3 text-sm font-medium text-cyan-300">Resume</p>

        <h2 className="text-3xl font-bold text-white md:text-5xl">
          Want to know more about my experience?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-slate-400">
          Download my resume to explore my technical skills, project experience,
          education, and full-stack development work in a concise format.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <AnimatedButton href={socialLinks.resume}>
            Download Resume
          </AnimatedButton>
          <AnimatedButton href="#projects" variant="secondary">
            View Projects
          </AnimatedButton>
        </div>
      </GlowCard>
    </section>
  );
}

export default ResumeCTA;
