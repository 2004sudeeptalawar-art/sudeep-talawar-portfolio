import { useEffect } from "react";
import AOS from "aos";
import { projects, socialLinks } from "../data/portfolioData";

/* ── Small Icon Components ── */
function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}

/* ── ProjectCard ── */
function ProjectCard({ project, aosDelay }) {
  const borderClass = project.isFlagship
    ? "bg-gradient-to-br from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500/70 hover:via-white/20 hover:to-red-500/50"
    : "bg-white/10";

  return (
    <div data-aos="fade-up" data-aos-delay={aosDelay}>
      <div className={`p-[1px] rounded-2xl transition-all duration-300 ${borderClass}`}>
        <div className="rounded-2xl p-6 md:p-8 backdrop-blur-md bg-[#0f0f0f]/90">
          {/* Badge */}
          {project.badge && (
            <span className="inline-flex rounded-full px-3 py-1 bg-red-500/10 text-red-400 uppercase tracking-widest text-xs font-semibold mb-4">
              {project.badge}
            </span>
          )}

          {/* Number + Title Row */}
          <div className="flex items-baseline gap-3 md:gap-4 mb-4">
            <span className="text-4xl md:text-5xl font-black text-white/10 italic font-serif select-none leading-none shrink-0">
              {project.number}
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white break-words">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-white/60 leading-relaxed mb-6 max-w-2xl">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 bg-white/5 border border-white/10 text-xs font-bold text-white/70 transition-colors duration-200 hover:bg-red-600/20 hover:text-red-400 hover:border-red-500/30"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-semibold transition-all duration-200 hover:bg-white/10 hover:border-white/20"
              >
                <GitHubIcon />
                GitHub
              </a>
            )}
            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 text-white text-sm font-semibold transition-all duration-200 hover:bg-red-700 hover:shadow-[0_0_20px_rgba(255,42,42,0.3)]"
              >
                <ExternalLinkIcon />
                Live Demo
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/30 text-sm font-semibold cursor-not-allowed select-none">
                <ExternalLinkIcon />
                Demo Coming Soon
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Projects Section ── */
export default function Projects() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12"
    >
      <div className="max-w-5xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-flex rounded-full px-4 py-1.5 bg-white/5 border border-white/10 text-red-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Work that speaks for itself
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            A selection of projects that showcase my skills and passion for building.
          </p>
        </div>

        {/* ── Project Cards ── */}
        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              aosDelay={(index + 1) * 100}
            />
          ))}
        </div>

        {/* ── Explore All Repos ── */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="200">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
            <GitHubIcon />
            Explore All My Repositories
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

