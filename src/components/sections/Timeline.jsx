import SectionHeading from "../ui/SectionHeading";
import GlowCard from "../ui/GlowCard";
import { timeline } from "../../data/timeline";

function Timeline() {
  return (
    <section id="journey" className="portfolio-container section-padding">
      <SectionHeading
        eyebrow="Journey"
        title="My Journey"
        subtitle="A quick look at my academic and development journey."
      />

      <div className="mx-auto max-w-3xl space-y-5">
        {timeline.map((item, index) => (
          <GlowCard key={item.title}>
            <p className="mb-2 text-sm font-medium text-cyan-300">
              0{index + 1}
            </p>
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {item.description}
            </p>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
