import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        // 👇 Add CSS variables
        sans: ["var(--font-syncopate)"],
        mono: ["var(--font-montserrat)"],
      },
    },
    screens: {
      'mob': '320px',
      'mi': '450px',
      'sm': '640px',
      'md': '768px',
      '1000': '1000px',
      'lg': '1024px',
      'lx': '1050px',
      'xl': '1280px',
      '1xl': '1400px',
      '2xl': '1536px',
      '3xl': '1700px',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
