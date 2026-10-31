import { useEffect } from "react";
import AOS from "aos";
import { internshipsList } from "../data/portfolioData";

function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] hover:border-red-400/30 flex flex-col"
    >
      {/* Top Row — Duration + Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-white/40 text-xs uppercase tracking-wider">
          {intern.duration}
        </span>
        <span className="inline-flex rounded-full px-3 py-1 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest">
          Internship
        </span>
      </div>

      {/* Role */}
      <h3 className="text-2xl font-black text-white leading-tight mb-1">
        {intern.role}
      </h3>

      {/* Organization */}
      <p className="uppercase text-red-200 text-sm font-semibold tracking-wide mb-5">
        {intern.organization}
      </p>

      {/* Skills Gained */}
      {intern.skills.length > 0 && (
        <div className="mb-5">
          <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">
            Skills Gained:
          </p>
          <ul className="space-y-1.5">
            {intern.skills.map((skill) => (
              <li
                key={skill}
                className="flex items-start gap-2 text-sm text-white/80"
              >
                <span className="text-red-300 mt-0.5">•</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies */}
      {intern.tech.length > 0 && (
        <div className="mt-auto pt-5 border-t border-white/10">
          <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-3">
            Technologies:
          </p>
          <div className="flex flex-wrap gap-2">
            {intern.tech.map((t) => (
              <span
                key={t}
                className="rounded-full px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono text-white/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Internships() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  if (internshipsList.length === 0) return null;

  return (
    <section className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
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

      {/* ── Decorative Star ── */}
      <svg
        className="absolute bottom-16 left-8 w-10 h-10 text-black opacity-20 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── Header ── */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
            Work Experience
          </h2>
          <p className="text-red-100 mt-4 max-w-xl mx-auto">
            Hands-on industry experience that shaped my professional skills.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {internshipsList.map((intern, index) => (
            <InternshipCard
              key={intern.organization}
              intern={intern}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

