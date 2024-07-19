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
        primary: {
          50: "#fffae7",
          100: "#fff4d0",
          200: "#ffe9a0",
          300: "#ffde71",
          400: "#ffd341",
          500: "#ffc812",
          600: "#cca00e",
          700: "#99780b",
          800: "#665007",
          900: "#332804",
          950: "#1a1402",
        },
        secondary: "#18181b",
        body: "#09090b",
      },
    },
  },
  plugins: [],
};
export default config;
