export type Project = {
  title: string;
  problem: string;
  solution: string;
  technologies: string[];
  result: string;
  highlight: string;
};

export const projects: Project[] = [
  {
    title: "AI Support Ticket Router",
    problem:
      "Operations teams were manually categorizing incoming support tickets, causing delayed response times and routing mistakes.",
    solution:
      "Built a Python service using LLM-based intent classification and confidence thresholds to auto-route tickets into the right queue.",
    technologies: ["Python", "FastAPI", "OpenAI API", "PostgreSQL", "Docker"],
    result:
      "Reduced first-response routing time by 68% and improved assignment accuracy across high-volume requests.",
    highlight: "Intent classification + confidence gating"
  },
  {
    title: "Invoice Automation Pipeline",
    problem:
      "Finance staff spent hours extracting invoice details from PDFs and entering records into internal systems.",
    solution:
      "Developed an OCR + validation workflow with Python and async workers to parse invoices and sync structured data to ERP APIs.",
    technologies: ["Python", "Celery", "Redis", "Tesseract OCR", "REST APIs"],
    result:
      "Cut manual data-entry workload by 75% while improving consistency and audit traceability.",
    highlight: "OCR + async task orchestration"
  },
  {
    title: "Predictive Maintenance Insights",
    problem:
      "Equipment downtime was detected too late because maintenance signals were scattered across logs and sensor outputs.",
    solution:
      "Created a Python analytics pipeline that scored risk based on telemetry patterns and generated proactive maintenance alerts.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Kafka", "Grafana"],
    result:
      "Enabled earlier intervention, lowering unplanned downtime events by 32% in pilot operations.",
    highlight: "Telemetry scoring + proactive alerting"
  }
];
