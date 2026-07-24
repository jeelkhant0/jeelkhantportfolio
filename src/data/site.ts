export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin";
};

export type ContactLink = {
  label: string;
  href: string;
  value: string;
  icon: "mail" | "github" | "linkedin" | "phone";
};

export type TrustMetric = {
  value: string;
  label: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  description: string[];
};

export const siteConfig = {
  name: "Jeel D. Khant",
  role: "AI & Software Developer",
  location: "India",
  email: "jeelkhant600@gmail.com",
  description:
    "AI-Focused Software Developer with hands-on experience in developing web, AI, and software applications. Passionate about building AI-powered solutions, solving real-world problems, and contributing to innovative software development teams.",
  headline: "Building AI-powered solutions and robust software applications.",
  heroSummary:
    "I engineer AI-driven web and mobile applications using Python, the MERN Stack, and Flutter to solve real-world problems and streamline business workflows.",
  aboutFocus: [
    "AI & Machine Learning Integration",
    "Full-Stack Web Development (MERN/Next.js)",
    "Cross-Platform Mobile Apps (Flutter)"
  ],
  trustMetrics: [
    { value: "30%", label: "Faster review processing" },
    { value: "4+", label: "Major projects shipped" },
    { value: "100%", label: "Client satisfaction" }
  ] satisfies TrustMetric[],
  experience: [
    {
      role: "AI/ML & MERN Stack Intern",
      company: "TejasKP AI Software",
      duration: "Jan 2026 - Jun 2026",
      description: [
        "Built and deployed the AI-based Review Automation System to automate review management and analytics.",
        "Led the AI/ML domain by mentoring interns, assigning technical tasks, and tracking project progress.",
        "Collaborated directly with clients to gather requirements, implement custom features, and provide deployment support."
      ]
    },
    {
      role: "Software & App Development Intern",
      company: "Tankar Solutions (Remote)",
      duration: "Oct 2025 - Jan 2026",
      description: [
        "Engineered cross-platform mobile applications using Flutter and Dart.",
        "Built 'TrackMyFlight', a Flutter application integrating REST APIs for real-time flight tracking.",
        "Implemented features across multiple client projects in an Agile environment."
      ]
    },
    {
      role: "Web Development Intern",
      company: "InternPe (Remote)",
      duration: "Oct 2023 - Apr 2024",
      description: [
        "Implemented responsive web modules using JavaScript, React.js, and REST APIs.",
        "Enhanced application performance by improving state management and minimizing unnecessary re-renders.",
        "Resolved application issues through debugging and structured testing to improve stability."
      ]
    }
  ] satisfies ExperienceItem[],
  sectionCopy: {
    projects:
      "A showcase of my recent work in AI automation, full-stack web platforms, and mobile applications.",
    skills: "Core technical proficiencies used to build end-to-end software solutions.",
    contact:
      "Open to collaborating on innovative AI solutions, robust full-stack applications, and software development initiatives."
  },
  ctas: {
    primary: {
      label: "View Projects",
      href: "#projects"
    },
    secondary: {
      label: "Contact Me",
      href: "#contact"
    }
  },
  footerCta: {
    title: "Looking for a dedicated developer?",
    description: "Let's discuss how I can bring AI and robust software engineering to your team.",
    label: "Start a Conversation",
    href: "#contact"
  },
  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ] satisfies NavItem[],
  contactLinks: [
    { label: "Email", value: "jeelkhant600@gmail.com", href: "mailto:jeelkhant600@gmail.com", icon: "mail" },
    { label: "GitHub", value: "github.com/jeelkhant0", href: "https://github.com/jeelkhant0", icon: "github" },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/jeelkhant",
      href: "https://linkedin.com/in/jeelkhant",
      icon: "linkedin"
    }
  ] satisfies ContactLink[],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/jeelkhant0", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/jeelkhant", icon: "linkedin" }
  ] satisfies SocialLink[]
};
