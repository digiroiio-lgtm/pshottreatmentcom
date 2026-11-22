import type { Config } from "tailwindcss";

// Dark theme: black surfaces, warm gold accents, serif headings.
// slate and gray scales are inverted on purpose (light text on dark surfaces), so existing utility classes keep their meaning.
const ink = {
  50: "#111111",
  100: "#191919",
  200: "#2a2a2a",
  300: "#3b3b3b",
  400: "#8f8b80",
  500: "#a7a396",
  600: "#bdb8aa",
  700: "#d3cfc3",
  800: "#e6e2d6",
  900: "#f1eee4",
  950: "#faf7ee",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "#101010",
        heading: "#d9bd62",
        slate: ink,
        gray: ink,
        // teal is the brand accent name used across components; it now maps to gold.
        teal: { 50: "#16120a", 100: "#211a0b", 200: "#4a3c17", 300: "#e7d28a", 400: "#d9bd62", 500: "#cdaa43", 600: "#c9a84c", 700: "#c9a84c", 800: "#d4b45a", 900: "#eddba0" },
        amber: { 50: "#1f1808", 100: "#2a2008", 200: "#5c4a1c", 500: "#e0b84a", 900: "#f3dc9c" },
        sky: { 50: "#0f1820", 100: "#13202b", 200: "#2a4455", 900: "#b9d8ee" },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Cambria", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
