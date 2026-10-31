import { useEffect } from "react";
import AOS from "aos";
import { technicalSkills } from "../data/portfolioData";

function SkillBadge({ name }) {
  return (
    <span className="inline-flex rounded-full px-4 py-2 bg-white/5 border border-white/10 text-white text-sm font-medium transition-colors duration-200 hover:bg-red-600/20">
      {name}
    </span>
  );
}

function SkillCard({ category, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(255,42,42,0.1)]"
    >
      <h3 className="uppercase font-black text-white text-lg tracking-wide pb-3 mb-4 border-b border-white/10">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} />
        ))}
      </div>
    </div>
  );
}

export default function TechnicalSkills() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section
      id="skills"
      className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 relative overflow-hidden"
    >
      {/* ── Blurred Background Circles ── */}
      <div className="absolute -top-48 -left-48 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── Header ── */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-flex rounded-full px-4 py-1.5 bg-white/5 border border-white/10 text-red-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Technical Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            My Skillset
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* ── Skills Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technicalSkills.categories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

