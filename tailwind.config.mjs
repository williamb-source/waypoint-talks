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
          // Dark mode colors
          dark: '#0a0a0f',
          'dark-light': '#12121a',
          'dark-lighter': '#1a1a24',
          'dark-card': '#16161f',
          navy: '#0F172A',
          'navy-light': '#1E293B',
          cream: '#FAF5E5',
          'cream-dark': '#F5EDD8',
          gray: '#9ca3af',
          'gray-light': '#d1d5db',
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
