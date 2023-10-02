import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainbg: "#242323",
        secondbg: "#ccc",
        primary: "#f5f5f5",
        secondary: "#e5e5e5",
        third: "#d5d5d5",
        success: "#4caf50",
        danger: "#f44336",
        info: "#2196f3",
      },
    },
  },
  plugins: [],
};
export default config;
