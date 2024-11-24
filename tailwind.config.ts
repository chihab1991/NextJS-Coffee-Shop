import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "white":"#FFFFFF",
        "rich-black":"#121212",
        "very-pale-orange": "#FFF4D8",
        "orange":"#F39C11",
        "dark-blue":"#0D1015",
        "dark-gray":"#555555",
        "brown":"#3D210C",
        "light-gray":"#DADADA",
      },
    },
  },
  plugins: [],
} satisfies Config;
