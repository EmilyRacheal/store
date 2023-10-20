import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kamel: {
          grey: "#AFAFAF",
          spanishgray: "#979797",
          ghostwhite: "#F9F9F9",
          chinesewhite: "#E0E0E0",
          red: "#FF0000",
          green: "#155F5B",
          raisinblack: "#232323",
          lightsilver: "#D9D9D9",
          orange: "#FF6700",
        },
      },
    },
  },
  plugins: [],
};
export default config;
