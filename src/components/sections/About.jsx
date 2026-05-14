import SectionHeading from "../ui/SectionHeading";
import GlowCard from "../ui/GlowCard";

const highlights = [
  "Full-Stack Development",
  "Modern UI Engineering",
  "Problem Solving",
  "AI-Powered Projects",
];

function About() {
  return (
    <section id="about" className="portfolio-container section-padding">
      <SectionHeading
        eyebrow="About Me"
        title="Driven by clean code, strong fundamentals, and meaningful products."
        subtitle="I enjoy turning ideas into functional, polished, and scalable web applications."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <GlowCard>
          <p className="text-slate-300 leading-8">
            I am a Computer Science graduate focused on building modern,
            scalable, and user-friendly web applications. My work combines
            strong programming fundamentals, full-stack development, clean UI
            design, and practical problem-solving through real-world projects.
          </p>
        </GlowCard>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => (
            <GlowCard key={item}>
              <h3 className="font-semibold text-white">{item}</h3>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
