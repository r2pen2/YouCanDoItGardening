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
      xs: '0.75rem', 
      sm: '1.875rem', 
      base: '1rem', 
      md: '1rem', 
      lg: '1.25rem', 
      xl: '1.5rem', 
      '2xl': '1.875rem', 
      '3xl': '2.25rem', 
      '4xl': '3rem', 
      '5xl': '3.75rem', 
      '6xl': '4.5rem', 
      '7xl': '6rem', 
      '8xl': '8rem', 
      '9xl': '9rem', 
    },
  }
})