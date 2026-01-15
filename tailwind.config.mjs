/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#DCA54A',
          'gold-light': '#E8C175',
          'gold-dark': '#B8883D',
          navy: '#0F172A',
          'navy-light': '#1E293B',
          cream: '#FAF5E5',
          'cream-dark': '#F5EDD8',
          gray: '#4A4A4A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
