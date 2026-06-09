/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        base: '#ffffff',
        muted: '#f8fafc',
        subtle: '#f1f5f9',
        line: '#e2e8f0',
        baseText: '#0f172a',
        subText: '#475569',
        faintText: '#64748b',
        chipBg: '#f1f5f9',
        gold: '#f59e0b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
