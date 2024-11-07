import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#111111',
          200: '#1c1c1c',
        },
        grey: '#8a8c90',
        white: '#f8f8f8',
        orange: '#fd6718',
        purple: '#8D48A0',
        red: {
          100: '#fb0d0d',
          200: '#d63838',
        },
        green: '#0ec554',
      },
      fontFamily: {
        firacode: 'var(--font-fira-code)',
      },

      fontWeight: {
        light: '300',
        regular: '400',
        semiBold: '600',
        bold: '700',
      },
    },
  },

  plugins: [],
};
export default config;
