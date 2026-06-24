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
  icon: "mail" | "github" | "linkedin";
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
  name: "Jeel Khant",
  role: "Python Developer building AI-driven systems and intelligent automation tools",
  location: "United States",
  email: "hello@jeelpatel.dev",
  description:
    "I design and ship AI-enhanced Python applications, from workflow automation to intelligent backend services that reduce manual effort and improve decision quality.",
  headline: "Building AI-driven software with Python that automates real work.",
  heroSummary:
    "I help teams turn repetitive workflows into reliable automation systems using Python, LLM tooling, and scalable backend architecture.",
  aboutFocus: [
    "Production-grade Python backend systems",
    "LLM and AI workflow integration",
    "Automation architecture for high-volume operations"
  ],
  trustMetrics: [
    { value: "68%", label: "Faster ticket routing" },
    { value: "75%", label: "Less manual data entry" },
    { value: "32%", label: "Downtime reduction in pilot" }
  ] satisfies TrustMetric[],
  experience: [
    {
      role: "Python Backend Developer",
      company: "Tech Solutions Inc.",
      duration: "2021 - Present",
      description: [
        "Architected scalable automation workflows using Python.",
        "Integrated LLM tooling to reduce manual data processing by 75%.",
        "Designed and maintained RESTful APIs for internal tools."
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Startup Co.",
      duration: "2020 - 2021",
      description: [
        "Built data extraction scripts with BeautifulSoup and Pandas.",
        "Assisted in deploying machine learning models to production."
      ]
    }
  ] satisfies ExperienceItem[],
  sectionCopy: {
    projects:
      "End-to-end systems focused on measurable outcomes through AI integration and Python automation.",
    skills: "Capabilities used to build robust AI-driven backend systems.",
    contact:
      "Open to collaborating on Python backend systems, AI integrations, and process automation initiatives."
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
    title: "Have a workflow that should run itself?",
    description: "Let's design a practical AI + Python automation solution for your team.",
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
    { label: "Email", value: "hello@jeelpatel.dev", href: "mailto:hello@jeelpatel.dev", icon: "mail" },
    { label: "GitHub", value: "github.com/jeelkhant0", href: "https://github.com/jeelkhant0", icon: "github" },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/jeelpatel",
      href: "https://linkedin.com/in/jeelpatel",
      icon: "linkedin"
    }
  ] satisfies ContactLink[],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/jeelkhant0", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/jeelpatel", icon: "linkedin" }
  ] satisfies SocialLink[]
};
