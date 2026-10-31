import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import QRCode from "react-qr-code";
import stackImage from "../assets/about/profile.png";
import { aboutContent, personalInfo, socialLinks } from "../data/portfolioData";

const StarSVG = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
  </svg>
);

/* Small icon helpers for the visiting card back */
const EmailIcon = () => (
  <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const PhoneIcon = () => (
  <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);
const LocationIcon = () => (
  <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg className="w-4 h-4 text-red-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const GitHubIcon = () => (
  <svg className="w-4 h-4 text-red-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

/* Clickable row on the back — stops propagation so the card doesn't flip */
const BackRow = ({ icon, children, href, external }) => {
  const stop = (e) => e.stopPropagation();
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={stop}
      className="flex items-center gap-2.5 text-xs text-white/85 hover:text-white transition-colors duration-200"
    >
      {icon}
      <span className="truncate">{children}</span>
    </a>
  );
};

export default function About() {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    AOS.refresh();
  }, []);

  const qrValue = socialLinks.linkedin || `mailto:${personalInfo.emails.primary}`;

  return (
    <section
      id="about"
      className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* ── Left — ID Badge on Lanyard ── */}
        <motion.div
          className="md:w-[350px] shrink-0 relative flex flex-col items-center pt-32"
          initial={{ y: -300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ type: "spring", stiffness: 110, damping: 9, mass: 1.1 }}
        >
          {/* Lanyard string */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black rounded-b-full" />

          {/* Clip */}
          <div className="absolute top-[128px] left-1/2 -translate-x-1/2 w-8 h-5 bg-gray-400 rounded-sm z-10 shadow-md" />

          {/* ── Flip Card ── */}
          <button
            type="button"
            aria-label="Flip ID card"
            onClick={() => setFlipped((prev) => !prev)}
            className="relative w-full max-w-[280px] -rotate-3 hover:rotate-0 transition-transform duration-500 focus:outline-none cursor-pointer [perspective:1200px]"
            style={{ perspective: "1200px" }}
          >
            <div
              className="relative w-full aspect-[3/4] transition-transform duration-700"
              style={{
                transformStyle: "preserve-3d",
                WebkitTransformStyle: "preserve-3d",
                transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* ── FRONT FACE ── */}
              <div
                className="absolute inset-0"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <div className="bg-gray-900 w-full h-full rounded-2xl p-3 shadow-[0_25px_60px_rgba(0,0,0,0.5)] relative">
                  {/* Slot cutout */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-2.5 bg-gray-700 rounded-full" />
                  {/* Photo */}
                  <img
                    src={stackImage}
                    alt="SUDEEP TALAWAR — Python Full Stack Developer, TAP Academy student"
                    className="w-full h-full rounded-xl object-cover object-top mt-0"
                  />
                </div>
              </div>

              {/* ── BACK FACE ── */}
              <div
                className="absolute inset-0"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  WebkitTransform: "rotateY(180deg)",
                }}
              >
                <div className="bg-gradient-to-br from-[#141414] to-[#1f1f1f] w-full h-full rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
                  {/* Red top bar */}
                  <div className="w-full h-1.5 bg-[#ff2a2a] shrink-0" />

                  <div className="p-5 flex flex-col justify-between flex-1 text-left">
                    {/* Name + Title */}
                    <div>
                      <p className="text-xl font-black text-white leading-tight">
                        {personalInfo.brandName}
                        <span className="text-[#ff2a2a]">.</span>
                      </p>
                      <p className="text-xs uppercase tracking-widest text-red-400 mt-1">
                        {personalInfo.title}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-white/10 my-3" />

                    {/* Contact Rows */}
                    <div className="flex flex-col gap-2.5">
                      {personalInfo.emails.primary && (
                        <BackRow
                          icon={<EmailIcon />}
                          href={`mailto:${personalInfo.emails.primary}`}
                        >
                          {personalInfo.emails.primary}
                        </BackRow>
                      )}
                      {personalInfo.phone && (
                        <BackRow
                          icon={<PhoneIcon />}
                          href={`tel:${personalInfo.phone}`}
                        >
                          {personalInfo.phone}
                        </BackRow>
                      )}
                      {personalInfo.location && (
                        <BackRow
                          icon={<LocationIcon />}
                          href={`https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`}
                          external
                        >
                          {personalInfo.location}
                        </BackRow>
                      )}
                      {socialLinks.linkedin && (
                        <BackRow
                          icon={<LinkedInIcon />}
                          href={socialLinks.linkedin}
                          external
                        >
                          LinkedIn
                        </BackRow>
                      )}
                      {socialLinks.github && (
                        <BackRow
                          icon={<GitHubIcon />}
                          href={socialLinks.github}
                          external
                        >
                          GitHub
                        </BackRow>
                      )}
                    </div>

                    {/* QR Code */}
                    <div className="flex items-center gap-3 mt-auto pt-3">
                      <div
                        className="bg-white rounded-lg p-2 shrink-0"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <QRCode value={qrValue} size={76} />
                      </div>
                      <span className="text-[10px] text-white/60 leading-tight">
                        Scan to
                        <br />
                        connect
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>

          {/* Flip hint */}
          <p className="text-xs font-bold text-black/60 mt-4">
            Tap the card to flip ↻
          </p>
        </motion.div>

        {/* ── Right — Text ── */}
        <div className="flex-1" data-aos="fade-left">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            {aboutContent.heading}
          </h2>
          <p
            className="text-lg font-bold leading-relaxed text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
        </div>
      </div>

      {/* ── Decorative Stars ── */}
      <StarSVG className="absolute top-12 right-12 w-10 h-10 text-black opacity-30 animate-pulse" />
      <StarSVG
        className="absolute bottom-44 left-8 w-8 h-8 text-black opacity-30 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* ── Torn-Paper Divider ── */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}
