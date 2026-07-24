export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "AI & Machine Learning",
    items: ["NumPy", "Pandas", "Scikit-learn", "Python AI Integration"]
  },
  {
    category: "Backend Development",
    items: ["Python", "Flask", "Node.js", "Express.js", "REST APIs"]
  },
  {
    category: "Frontend Development",
    items: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Mobile Development",
    items: ["Flutter", "Dart", "Cross-Platform Apps"]
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "SQLite", "SQL"]
  },
  {
    category: "Tools & Core Concepts",
    items: ["Git", "GitHub", "VS Code", "Postman", "DSA", "OOP"]
  }
];
