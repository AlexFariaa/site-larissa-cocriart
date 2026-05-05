import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* ── Brand Palette ─────────────────────────── */
      colors: {
        brand: {
          bg:     "#2d0e44",
          deeper: "#1a0829",
          purple: "#6d1f8d",
          lilac:  "#d29ee1",
          orange: "#c56428",
          blue:   "#4187af",
        },
      },
      /* ── Typography ────────────────────────────── */
      fontFamily: {
        heading:   ["var(--font-heading)",   "Georgia", "serif"],
        signature: ["var(--font-signature)", "cursive"],
        body:      ["var(--font-body)",      "system-ui", "sans-serif"],
      },
      /* ── Glow Shadows ──────────────────────────── */
      boxShadow: {
        "glow-purple": "0 0 20px 4px #6d1f8d80",
        "glow-lilac":  "0 0 20px 4px #d29ee180",
        "glow-orange": "0 0 20px 4px #c5642880",
        "glow-blue":   "0 0 20px 4px #4187af80",
      },
      /* ── Gradients ─────────────────────────────── */
      backgroundImage: {
        "gradient-mystic": "linear-gradient(135deg,#2d0e44 0%,#6d1f8d 50%,#2d0e44 100%)",
        "gradient-aurora": "linear-gradient(135deg,#2d0e44,#6d1f8d,#4187af,#2d0e44)",
      },
      backgroundSize: {
        "300%": "300%",
      },
      /* ── Keyframes & Animations ────────────────── */
      keyframes: {
        aurora: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%":     { backgroundPosition: "100% 50%" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%,100%": { boxShadow: "0 0 10px 2px #6d1f8d80" },
          "50%":     { boxShadow: "0 0 30px 8px #d29ee180" },
        },
        "float": {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-8px)" },
        },
      },
      animation: {
        aurora:      "aurora 8s ease infinite",
        "fade-up":   "fade-up 0.6s ease forwards",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        float:       "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
