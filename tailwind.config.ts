import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: () => ({
        white: "#F7F7F7",
        accent: "#EFECE6",
        gray: {
          light: "#BABABA",
          dark: "#737373",
        },
        jetblack: "#080808",
        teal: {
          light: "#048C80",
          dark: "#017373",
        },
      }),
    },
  },
  plugins: [],
};
export default config;
