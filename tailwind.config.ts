import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#f8fafc",
        surface: "#ffffff",
        surfaceSoft: "#f1f5f9",
        border: "#cbd5e1",
        text: "#0f172a",
        muted: "#475569",
        brand: "#0d9488",
        brandStrong: "#0f766e"
      },
      boxShadow: {
        soft: "0 12px 40px -22px rgba(15, 23, 42, 0.15)",
        glow: "0 0 0 1px rgba(13, 148, 136, 0.2), 0 20px 50px -24px rgba(13, 148, 136, 0.25)"
      },
      backgroundImage: {
        radialGlow: "radial-gradient(circle at top, rgba(13, 148, 136, 0.08), transparent 58%)"
      }
    }
  },
  plugins: []
};

export default config;
