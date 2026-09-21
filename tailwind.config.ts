import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "rgb(var(--c-950) / <alpha-value>)",
          900: "rgb(var(--c-900) / <alpha-value>)",
          800: "rgb(var(--c-800) / <alpha-value>)",
          700: "rgb(var(--c-700) / <alpha-value>)",
        },
        line: "rgb(var(--c-line) / 0.12)",
        foam: "rgb(var(--c-foam) / <alpha-value>)",
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        // Fixed dark ink — always dark regardless of theme. Used for text and
        // scrims sitting on surfaces that are constant across themes (the
        // amber accent color, photo overlays).
        ink: "#14181D",
        volt: {
          DEFAULT: "#F5B700",
          dim: "rgb(var(--c-volt-dim) / <alpha-value>)",
        },
        copper: {
          DEFAULT: "#C8672B",
          dim: "#6E3A19",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(245,183,0,0) 0%, rgba(245,183,0,0.06) 50%, rgba(245,183,0,0) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
