import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      
      },
      colors: {
        lime: "hsl(61, 70%, 52%)",
        red: "hsl(4, 69%, 50%)",
        white: "hsl(0, 0%, 100%)",
        slate: {
          100: "hsl(202, 86%, 94%)",
          300: "hsl(203, 41%, 72%)",
          500: "hsl(200, 26%, 54%)",
          700: "hsl(200, 24%, 40%)",
          900: "hsl(202, 55%, 16%)",
        },
      },
      fontFamily: { sans: ["Plus Jakarta Sans", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
