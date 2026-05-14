import AnimatedButton from "../ui/AnimatedButton";
import SectionHeading from "../ui/SectionHeading";
import { socialLinks } from "../../data/socialLinks";

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Connect"
        subtitle="Have an opportunity, project, or role in mind?"
      />

      <div className="mx-auto max-w-3xl text-center">
        <p className="text-slate-400 leading-8">
          I am open to full-stack developer roles, frontend developer
          opportunities, internships, entry-level software engineering roles,
          and project collaborations. Feel free to reach out through email,
          LinkedIn, or GitHub.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <AnimatedButton href={socialLinks.email}>Email Me</AnimatedButton>
          <AnimatedButton href={socialLinks.linkedin} variant="secondary">
            LinkedIn
          </AnimatedButton>
          <AnimatedButton href={socialLinks.github} variant="secondary">
            GitHub
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}

export default Contact;
