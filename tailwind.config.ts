// // tailwind.config.js
// module.exports = {
//   //   content: [
//   //     "./app/**/*.{js,ts,jsx,tsx}",
//   //     "./pages/**/*.{js,ts,jsx,tsx}",
//   //     "./components/**/*.{js,ts,jsx,tsx}",
//   //   ],
//   content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         brand: {
//           Blue: "#2947A9",
//           orange: "#F9995D",
//           white: "#FFFFFF",
//           Darkblue: "#0B267D",
//           gray: "#667299",
//         },
//       },
//     },
//   },
//   plugins: [],
// };

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2947A9",
        orange: "#F9995D",
        white: "#FFFFFF",
        darkblue: "#0B267D",
        gray: "#667299",
      },
    },
  },
};
export default config;
