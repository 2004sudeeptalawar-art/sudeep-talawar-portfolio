// ============================================================
// portfolioData.js — Sudeep Talawar's Portfolio Data
// This one file controls ALL the text and links on the website.
// ============================================================

export const personalInfo = {
  name: "SUDEEP TALAWAR",
  firstName: "SUDEEP TALAWAR",
  brandName: "SUDEEP TALAWAR",
  title: "Python Full Stack Developer",
  location: "Bengaluru, India",
  phone: "+918310857533",
  emails: {
    primary: "2004sudeeptalawar@gmail.com",
    secondary: "",
  },
  summary:
    "I am a Computer Science Engineering graduate skilled in Python, web development, and databases, passionate about learning new technologies, solving problems, and growing as a software developer.",
  resumeUrl: "/Sudeep_Talawar_BE_2026_CSE.pdf",
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/2004sudeeptalawar-art",
  linkedin: "https://linkedin.com/in/sudeep-talawar",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Sudeep Talawar",
  titleHighlight: "Python Full Stack Developer",
  subtitle:
    "Building intelligent web applications with Python, AI, and modern frameworks to solve real-world problems.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:2004sudeeptalawar@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: {
    text: "Download Resume",
    href: "/Sudeep_Talawar_BE_2026_CSE.pdf",
  },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">SUDEEP TALAWAR</span>, a Python Full Stack Developer based in Bengaluru, India. I specialize in building web applications and AI-powered solutions using Python, Django, Flask, and modern frontend technologies. Currently sharpening my skills through the placement training program at TAP Academy, I am driven by a passion for solving real-world problems and growing as a software professional.`,
  techStack: ["Python", "Django", "React", "AI"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description:
    "A structured approach from understanding the problem to shipping the solution.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding the problem, studying user needs, and exploring the best technologies and approaches to deliver value.",
    },
    {
      number: "02",
      title: "Design",
      text: "I plan the architecture, map out data flows, and create a clean structure that balances simplicity with scalability.",
    },
    {
      number: "03",
      title: "Develop",
      text: "I write clean, modular code using Python, Django, Flask, and React, integrating APIs and databases to bring ideas to life.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "I test thoroughly, fix edge cases, and deploy using platforms like Render and Streamlit Cloud for seamless user access.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [
        { name: "Python" },
        { name: "JavaScript" },
        { name: "SQL" },
        { name: "C" },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React" },
        { name: "Tailwind CSS" },
        { name: "HTML5 & CSS3" },
        { name: "JavaScript (ES6+)" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Django" },
        { name: "Flask" },
        { name: "REST APIs" },
        { name: "FastAPI" },
      ],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "NLP" },
        { name: "Scikit-learn" },
        { name: "OpenAI API" },
        { name: "Streamlit" },
        { name: "TextRank & K-Means" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL" },
        { name: "SQLite" },
        { name: "PostgreSQL" },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git & GitHub" },
        { name: "VS Code" },
        { name: "Postman" },
        { name: "Render" },
        { name: "Vite" },
      ],
    },
  ],
};

export const leadershipList = [];

export const internshipsList = [
  {
    organization: "Tap Academy",
    role: "Python Full Stack Intern",
    duration: "June 2026 – Present",
    skills: [
      "Backend Development",
      "Database Integration",
      "REST APIs",
      "Debugging",
    ],
    tech: [
      "Python",
      "Django",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
      "Git",
    ],
  },
];

export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "I break complex challenges into smaller parts, debugging methodically until I find the root cause.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "I explain technical concepts clearly to teammates and mentors, ensuring everyone stays aligned.",
  },
  {
    name: "Time Management",
    icon: "⏱️",
    desc: "I prioritize tasks effectively, meeting deadlines across multiple projects during my internship.",
  },
  {
    name: "Creativity",
    icon: "🎨",
    desc: "I find innovative approaches, like combining K-Means clustering with TextRank for hybrid text summarization.",
  },
];

export const projects = [
  {
    id: "ai-resume-screening-agent",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "AI Resume Screening Agent",
    description:
      "AI-powered application that analyzes resumes, matches skills with job descriptions, ranks candidates, and identifies skill gaps.",
    techTags: ["Python", "Streamlit", "NLP", "Scikit-learn", "OpenAI API"],
    links: {
      github:
        "https://github.com/2004sudeeptalawar-art/AI-Resume",
      demo: "https://ai-resume-screener-sudeep.streamlit.app/",
    },
    isFlagship: true,
  },
  {
    id: "fashion-store-ecommerce",
    number: "02",
    badge: null,
    title: "Fashion Store E-Commerce Web Application",
    description:
      "Web application that allows users to register, log in, browse fashion products, manage a shopping cart, and place orders.",
    techTags: ["HTML", "CSS", "JavaScript", "Flask", "MySQL", "Pytest"],
    links: {
      github: "https://github.com/2004sudeeptalawar-art/fashion-store-ecommerce",
      demo: "https://fashion-store-ecommerce-1.onrender.com/",
    },
    isFlagship: false,
  },
  {
    id: "hybrid-text-summarization",
    number: "03",
    badge: null,
    title: "Hybrid Text Summarization using Deep Learning",
    description:
      "Summarizes large text documents by preprocessing text, grouping similar sentences using K-Means clustering, and ranking important sentences with TextRank.",
    techTags: ["Python", "NLP", "K-Means", "TextRank"],
    links: {
      github: "",
      demo: "",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    { name: "Python Full Stack Development", issuer: "Tap Academy", icon: "🏅" },
  ],
  viewAllUrl: "https://linkedin.com/in/sudeep-talawar",
};

export const education = {
  degree: "B.E Computer Science and Engineering",
  institution: "Government Engineering College Challakere",
  cgpa: "2022 - 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Python Full Stack Developer",
    "Python · Django · Flask · React",
    "Building AI-powered web solutions",
  ],
  credential: "B.E Computer Science and Engineering",
  copyright: `© ${new Date().getFullYear()} SUDEEP TALAWAR | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId:
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey:
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

