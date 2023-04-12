/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  screens: {
    sm: "640px",
    // => @media (min-width: 640px) { ... }
    md: "768px",
    // => @media (min-width: 768px) { ... }
    lg: "1024px",
    // => @media (min-width: 1024px) { ... }
    xl: "1280px",
    // => @media (min-width: 1280px) { ... }
    "2xl": "1536px",
    // => @media (min-width: 1536px) { ... }
  },
  extend: {
    colors: {
      primary: "#006E75",
      brand1: "#006E75",
      brand2: "#348C93",
      brand3: "#57ABB2",
      brand4: "#77CBD2",
      grey0: "#0B0D0D",
      grey1: "#212529",
      grey2: "#495057",
      grey3: "#868E96",
      grey4: "#ADB5BD",
      grey5: "#CED4DA",
      grey6: "#CED4DA",
      grey7: "#E9ECEF",
      grey8: "#F1F3F5",
      grey9: "#F8F9FA",
      grey10: "#FDFDFD",
      whiteFixed: "#FFFFFF",
      alert1: "#CD2B31",
      alert2: "#FDD8D8",
      alert3: "#FFE5E5",
      success1: "#18794E",
      success2: "#CCEBD7",
      success3: "#DDF3E4",
    },
  },
};
export const plugins = [];
