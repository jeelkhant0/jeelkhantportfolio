import type { Metadata } from "next";
import { siteConfig } from "../data/site";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Python Developer`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "Python Developer",
    "AI systems",
    "Intelligent automation",
    "FastAPI",
    "LLM integration"
  ],
  openGraph: {
    title: `${siteConfig.name} | Python Developer`,
    description: siteConfig.description,
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};
