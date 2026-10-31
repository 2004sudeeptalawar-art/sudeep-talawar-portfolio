import { useEffect } from "react";
import AOS from "aos";
import { softSkillsList } from "../data/portfolioData";

function SoftSkillCard({ skill, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group bg-[#f8f8f8] border border-gray-200 rounded-3xl p-6 min-h-[220px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_40px_rgba(255,42,42,0.1)] hover:border-red-200"
    >
      {/* Emoji Icon */}
      <div className="w-14 h-14 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:bg-red-50 group-hover:border-red-200 group-hover:scale-110">
        {skill.icon}
      </div>

      {/* Name */}
      <h3 className="uppercase text-sm font-black tracking-wider text-gray-900 mb-2">
        {skill.name}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed">
        {skill.desc}
      </p>
    </div>
  );
}

export default function SoftSkills() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  if (softSkillsList.length === 0) return null;

  return (
    <section className="bg-white bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* ── Top Torn-Paper Divider ── */}
      <div className="absolute top-0 left-0 w-full rotate-180 -translate-y-[1px] leading-none">
        <svg
          className="w-full h-12 md:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="#0a0a0a"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── Header ── */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-flex rounded-full px-4 py-1.5 bg-gray-100 border border-gray-200 text-gray-600 text-xs font-semibold uppercase tracking-widest mb-4">
            Core Competencies
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight">
            Professional Soft Skills
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            The interpersonal strengths that complement my technical abilities.
          </p>
        </div>

        {/* ── Skills Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsList.map((skill, index) => (
            <SoftSkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

