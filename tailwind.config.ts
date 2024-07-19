import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: () => ({
        white: "#F7F7F7",
        accent: "#EFECE6",
        gray: {
          light: "#BABABA",
          dark: "#737373",
        },
        carbon: "#333333",
        jetblack: "#080808",
        teal: {
          lighter: "#AAD9D1",
          light: "#048C80",
          dark: "#017373",
        },
      }),
    },
  },
  plugins: [],
};
export default config;
