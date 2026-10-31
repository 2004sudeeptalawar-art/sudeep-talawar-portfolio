import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { emailjsConfig, personalInfo, socialLinks } from "../data/portfolioData";

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  /* ── Parallax ── */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  /* ── Submit Handler ── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    const form = formRef.current;
    const firstName = form.querySelector("#firstName").value.trim();
    const lastName = form.querySelector("#lastName").value.trim();
    const email = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message").value.trim();

    if (!firstName || !email || !message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    const { serviceId, templateId, publicKey } = emailjsConfig;
    const placeholders = [
      "YOUR_EMAILJS_SERVICE_ID",
      "YOUR_EMAILJS_TEMPLATE_ID",
      "YOUR_EMAILJS_PUBLIC_KEY",
    ];
    const isConfigured =
      serviceId &&
      templateId &&
      publicKey &&
      !placeholders.includes(serviceId) &&
      !placeholders.includes(templateId) &&
      !placeholders.includes(publicKey);

    if (!isConfigured) {
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(`From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`)}`,
        "_blank",
      );
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.sendForm(serviceId, templateId, form, publicKey);
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputClass =
    "bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/50 focus:border-white focus:outline-none transition-colors duration-200 w-full";

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* ── Giant Parallax "Contact" ── */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/[0.03]"
          style={{ fontFamily: "'Impact','Arial Black',sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* ── Red Card ── */}
      <div
        className="relative z-10 bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] ml-auto p-8 md:p-16"
        data-aos="fade-up"
      >
        {/* Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <span className="uppercase tracking-[0.2em] text-white/80 text-sm font-semibold">
            Reach Me
          </span>
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors duration-200"
            >
              DM on Instagram
            </a>
          )}
        </div>

        {/* ── Form ── */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left — Inputs */}
            <div className="flex flex-col gap-8">
              <input
                id="firstName"
                name="first_name"
                type="text"
                placeholder="First Name *"
                required
                className={inputClass}
              />
              <input
                id="lastName"
                name="last_name"
                type="text"
                placeholder="Last Name"
                className={inputClass}
              />
              <input
                id="email"
                name="user_email"
                type="email"
                placeholder="Email *"
                required
                className={inputClass}
              />
            </div>

            {/* Right — Textarea */}
            <div className="flex flex-col">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message *"
                required
                rows={5}
                className={`${inputClass} resize-none min-h-[120px] h-full`}
              />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col gap-6">
            {/* Permission Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer text-white/70 text-sm">
              <input
                type="checkbox"
                required
                className="mt-1 w-4 h-4 accent-white rounded shrink-0"
              />
              <span>
                I agree that my data will be used to process my request and I can
                withdraw consent at any time.
              </span>
            </label>

            {/* Note */}
            <p className="text-white/50 text-xs leading-relaxed max-w-lg">
              Your message will be sent directly to my inbox. I typically respond
              within 24–48 hours. For urgent inquiries, email me at{" "}
              <a
                href={`mailto:${personalInfo.emails.primary}`}
                className="underline underline-offset-2 text-white/70 hover:text-white transition-colors duration-200"
              >
                {personalInfo.emails.primary}
              </a>
              .
            </p>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={status === "sending"}
                className={`group inline-flex items-center gap-3 px-8 py-3.5 rounded-full border-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  status === "sending"
                    ? "border-white/20 text-white/40 cursor-not-allowed"
                    : status === "success"
                      ? "border-green-400 text-green-400"
                      : status === "error"
                        ? "border-red-900 bg-red-900 text-white"
                        : "border-white text-white hover:bg-white hover:text-[#ff2a2a]"
                }`}
              >
                {status === "sending" && (
                  <>
                    <svg
                      className="w-4 h-4 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </>
                )}
                {status === "success" && "Sent Successfully ✓"}
                {status === "error" && "Failed — Try Again"}
                {status === "idle" && (
                  <>
                    Send Message
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
