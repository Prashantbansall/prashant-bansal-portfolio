import SectionHeading from "../ui/SectionHeading";
import GlowCard from "../ui/GlowCard";
import SkillBadge from "../ui/SkillBadge";
import { skills } from "../../data/skills";

function Skills() {
  return (
    <section id="skills" className="portfolio-container section-padding">
      <SectionHeading
        eyebrow="Skills"
        title="Skills & Technologies"
        subtitle="Tools and technologies I use to build modern web applications."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <GlowCard key={group.category}>
            <h3 className="mb-4 text-xl font-semibold text-white">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}

export default Skills;
