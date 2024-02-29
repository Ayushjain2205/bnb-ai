import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#F3BA2F",
          secondary: "#0c0e12",
          "base-100": "#faf3f2",
          "background-color": "#fff",
        },
        dev: {
          primary: "#F3BA2F",
          secondary: "#7A7A7A",
          neutral: "#23243e",
          "base-100": "#faf3f2",
          "background-color": "#0c0e12",
        },
      },
    ],
  },
};
export default config;
