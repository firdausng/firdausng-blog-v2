const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.slate,
        green: colors.emerald,
        purple: colors.violet,
        yellow: colors.amber,
        pink: colors.fuchsia,
        primary: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
        app: {
          DEFAULT: "#64748B",
          darkest: '#0F172A',
          dark: '#334155',
          light: '#E2E8F0',
          lightest: '#F1F5F9',
        },
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
  safelist: [
    'text-2xl',
    'text-3xl',
    {
      pattern: /grid-cols-.+/,
      variants: ['md'],
    },
    {
      pattern: /(bg-|dark:bg-).+/
    },
  ],
}

