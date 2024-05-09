import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: {
            100: '#F4D4F9',
            200: '#9553A0',
            300: '#814E9B',
            400: '#4F2877',
            500: '#4C336A',
            600: '#00000017',
          },
          gray: {
            100: '#F5F5F5',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
