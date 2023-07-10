import { createTheme } from "@nextui-org/react";

const orange200 = "#fdae93";
const orange300 = "#fc9067";
const orange400 = "#fb7846";
const orange500 = "#fb6225";
const orange600 = "#f05a21";
const orange700 = "#e2551c";

const blue200 = "#7fd4f6";
const blue300 = "#4cc2f2";
const blue400 = "#21b5f0";
const blue500 = "#00a8ee";
const blue600 = "#009bdf";
const blue700 = "#0088cc";

const white = "#ffffff";

const lightGray = "#b9b9b9";

export const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      primaryLight: "$purple200",
      primaryLightHover: "$purple300",
      primaryLightActive: "$purple400",
      primaryLightContrast: "$purple600",
      primary: "$purple600",
      primaryBorder: "$purple500",
      primaryBorderHover: "$purple600",
      primarySolidHover: "$purple700",
      primarySolidContrast: white,
      primaryShadow: "$purple600",

      success: "#A6C437",
      white: "#ffffff",  
    },
    space: {},
    fonts: {},
    fontSizes: {
      xs: '0.875rem', 
      sm: '1rem', 
      base: '1.125rem', 
      md: '1.125rem', 
      lg: '1.25rem', 
      xl: '1.5rem', 
      '2xl': '1.875rem', 
      '3xl': '2.25rem', 
      '4xl': '3rem', 
      '5xl': '3.75rem', 
      '6xl': '4.5rem', 
      '7xl': '6rem', 
      '8xl': '8rem', 
      '9xl': '10rem', 
    },
  }
})