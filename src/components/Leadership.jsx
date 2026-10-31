import { useEffect } from "react";
import AOS from "aos";
import { leadershipList } from "../data/portfolioData";

function LeadershipItem({ item, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex items-start md:items-center w-full mb-12 last:mb-0">
      {/* ── Glowing Dot ── */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ff2a2a] z-10 shadow-[0_0_12px_rgba(255,42,42,0.6)]" />

      {/* ── Desktop Layout ── */}
      {/* Even = card LEFT, spacer RIGHT */}
      {/* Odd  = spacer LEFT, card RIGHT */}
      <div className="hidden md:flex w-full items-center">
        {isEven ? (
          <>
            <div
              className="w-[45%] pr-10 text-right"
              data-aos="fade-right"
              data-aos-delay={index * 100}
            >
              <Card item={item} alignRight />
            </div>
            <div className="w-[10%]" />
            <div className="w-[45%]" />
          </>
        ) : (
          <>
            <div className="w-[45%]" />
            <div className="w-[10%]" />
            <div
              className="w-[45%] pl-10 text-left"
              data-aos="fade-left"
              data-aos-delay={index * 100}
            >
              <Card item={item} />
            </div>
          </>
        )}
      </div>

      {/* ── Mobile Layout — always right of the line ── */}
      <div
        className="md:hidden ml-10 flex-1"
        data-aos="fade-up"
        data-aos-delay={index * 100}
      >
        <Card item={item} />
      </div>
    </div>
  );
}

function Card({ item, alignRight }) {
  return (
    <div
      className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-red-500/30 ${
        alignRight ? "ml-auto" : ""
      }`}
    >
      {item.badge && (
        <span className="inline-flex rounded-full px-3 py-1 bg-red-500/10 text-red-400 uppercase tracking-widest text-[10px] font-bold mb-3">
          {item.badge}
        </span>
      )}
      <h3 className="text-lg font-black text-white mb-1 transition-colors duration-200 hover:text-red-400">
        {item.title}
      </h3>
      <p className="font-mono uppercase text-red-400 text-xs tracking-wider mb-2">
        {item.role}
      </p>
      <p className="text-white/60 text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}

export default function Leadership() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  /* Don't render the section if there are no activities */
  if (leadershipList.length === 0) return null;

  return (
    <section className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* ── Top Torn-Paper Divider ── */}
      <div className="absolute top-0 left-0 w-full rotate-180 -translate-y-[1px] leading-none">
        <svg
          className="w-full h-12 md:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="#ff2a2a"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* ── Header ── */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-flex rounded-full px-4 py-1.5 bg-white/5 border border-white/10 text-red-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Activities
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Leadership & Engagement
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Initiatives and communities that shaped my growth beyond the classroom.
          </p>
        </div>

        {/* ── Vertical Timeline ── */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10" />

          {leadershipList.map((item, index) => (
            <LeadershipItem key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

