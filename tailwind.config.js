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
      },
      fontSize: {
        "2xl-responsive": ["clamp(45px, 4.75vw, 1000px)", "4.75rem"],
        "xl-responsive": ["clamp(32px, 2.75vw, 600px)", "2rem"],
        "lg-responsive": ["clamp(15px, 1.25vw, 250px)", "1.5rem"],
      },
    },
  },
  plugins: [],
};
