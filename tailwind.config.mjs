/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      karla: ["Karla", "sans-serif"],
      display: ["DM Serif Display", "sans-serif"],
    },
    colors: {
      primary: "rgb(var(--color-primary))",
      secondary: "rgb(var(--color-secondary))",
      neutral: "rgb(var(--color-neutral))",
      accent: "rgb(var(--color-primary-blend))",
      "dark-primary": "rgb(var(--color-primary-dark))",
    },
  },
  plugins: [],
};
