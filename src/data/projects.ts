export type Project = {
  title: string;
  highlight: string;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    title: "MyReview—AI-Based Review Automation System",
    highlight: "AI Automation",
    problem: "Businesses struggled to efficiently manage, process, and report on high volumes of customer reviews manually.",
    solution: "Engineered an AI-powered system with role-based dashboards for managing businesses, accounts, and automated review workflows.",
    result: "Improved review processing speed by 30% and significantly increased operational efficiency.",
    technologies: ["Python", "Flask", "SQLite", "HTML/CSS", "JavaScript"]
  },
  {
    title: "PROJEX – AI-Powered Project Collaboration",
    highlight: "Full-Stack System",
    problem: "Students and faculty needed a unified platform for secure, organized project collaboration and review.",
    solution: "Developed an AI-powered collaboration platform with role-based authentication, project management, and responsive dashboards.",
    result: "Enabled efficient data management and AI-assisted project tracking for academic teams.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "AI"]
  },
  {
    title: "Task Planner Agent",
    highlight: "Intelligent Automation",
    problem: "File organization and task scheduling were tedious and lacked context-aware automation.",
    solution: "Developed an AI-powered task planning agent with persistent memory for context-aware task execution and file automation.",
    result: "Streamlined file organization and fully automated task scheduling through modular AI.",
    technologies: ["Python", "Streamlit", "OpenAI API", "JSON"]
  },
  {
    title: "TrackMyFlight",
    highlight: "Mobile Application",
    problem: "Users needed a reliable, on-the-go solution to track real-time flight statuses and schedules.",
    solution: "Built a cross-platform mobile application utilizing REST APIs to fetch and display live flight information and journey details.",
    result: "Delivered a smooth, responsive app experience with up-to-the-minute flight tracking.",
    technologies: ["Flutter", "Dart", "REST API"]
  }
];
