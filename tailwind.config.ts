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
        primary: "#202328",
        secondary: "#2E333D",
        dark:"#131313",
        myBlue:"#6A8AFD",
        primaryTextColor: "#FBFCFF",
        secondaryTextColor: "#A5A8AC",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  corePlugins: {
  },
};
export default config;
