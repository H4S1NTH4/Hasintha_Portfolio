import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#080b0f",
        steel: "#111820",
        cyanwire: "#16e7ff",
        volt: "#f6d743",
        signal: "#45ffbc",
      },
      boxShadow: {
        glow: "0 0 35px rgba(22, 231, 255, 0.22)",
        panel: "inset 0 1px 0 rgba(255,255,255,0.12), 0 20px 80px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "circuit-grid":
          "linear-gradient(rgba(22,231,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(22,231,255,0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
