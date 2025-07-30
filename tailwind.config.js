// tailwind.config.js
import {heroui} from "@heroui/react";
// const {heroui} = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // single component styles
    // "./node_modules/@heroui/theme/dist/components/button.js",
    // or you can use a glob pattern (multiple component styles)
    // './node_modules/@heroui/theme/dist/components/(button|snippet|code|input).js' ,
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}' 
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()]
}