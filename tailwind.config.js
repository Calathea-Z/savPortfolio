/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Color Palette
        canvas: '#FAF8F5',        // Background Canvas
        paper: '#F2B798',          // Secondary Background Paper
        earth: '#4C5C54',          // Text / Neutral Earth
        honey: '#FCD28F',          // Primary Brand / Logo Honey
        clay: '#E9907D',           // Secondary Accent Clay
        aqua: '#B8CBC8',           // Accent Aqua
      },
      fontFamily: {
        fraunces: ['var(--font-fraunces)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
