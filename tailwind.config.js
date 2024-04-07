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
          50: '#ECFEFF',
          100: '#CFFAFE',
          200: '#A5F3FC',
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
          700: '#0E7490',
          800: '#155E75',
          900: '#164E63',
          950: '#083344',
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

