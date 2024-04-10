/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary)",
        "secondary-color": "var(--secondary)",
        "accent-color": "var(--accent)",
        "lighter-primary-color": "var(--lighter-primary)",
        "accent-faded-color": "var(--accent-faded)",
      },
      screens: {
        "-sm": { max: "639px" },
      },
    },
  },
  plugins: [],
};
