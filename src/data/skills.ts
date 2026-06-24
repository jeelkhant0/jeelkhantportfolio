export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Python & Backend",
    items: ["Python", "FastAPI", "Django", "Flask", "AsyncIO", "REST API Design"]
  },
  {
    category: "AI & Data",
    items: ["LLM Integration", "Prompt Engineering", "Pandas", "Scikit-learn", "Vector Databases", "RAG Systems"]
  },
  {
    category: "Automation & Infrastructure",
    items: ["Workflow Automation", "Celery", "Redis", "Docker", "CI/CD", "Linux"]
  },
  {
    category: "Databases & Tools",
    items: ["PostgreSQL", "MongoDB", "Git", "GitHub Actions", "Pytest", "Monitoring & Logging"]
  }
];
