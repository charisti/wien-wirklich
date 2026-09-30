/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#22303C",
        paper: "#EAE2CF",
        card: "#F7F1E3",
        brick: "#7A8A2E",
        moss: "#4B6455",
        turkis: "#2F7A72",
        rule: "#C7BB9E",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
