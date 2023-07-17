import { createTheme } from "@nextui-org/react";

const white = "#ffffff";

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
      xs: '1rem', 
      sm: '1.125rem', 
      base: '1.25rem', 
      md: '1.25rem', 
      lg: '1.5rem', 
      xl: '1.875rem', 
      '2xl': '2.25rem', 
      '3xl': '3rem', 
      '4xl': '3.75rem', 
      '5xl': '4.5rem', 
      '6xl': '6rem', 
      '7xl': '8rem', 
      '8xl': '9rem', 
      '9xl': '10rem', 
    },
  }
})