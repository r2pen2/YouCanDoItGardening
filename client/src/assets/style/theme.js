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

      text: "#666666",
      success: "#A6C437",
      white: "#ffffff",  
    },
    space: {},
    fonts: {},
    fontSizes: {
      xs: '.75rem', 
      sm: '0.875rem', 
      base: '1rem', 
      md: '1rem', 
      lg: '1.125rem', 
      xl: '1.25rem', 
      '2xl': '1.5rem', 
      '3xl': '1.875rem', 
      '4xl': '2.25rem', 
      '5xl': '3rem', 
      '6xl': '3.75rem', 
      '7xl': '4.5rem', 
      '8xl': '6rem', 
      '9xl': '8rem', 
    },
  }
})