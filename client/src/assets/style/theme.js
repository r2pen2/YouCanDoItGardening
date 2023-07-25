import { createTheme } from "@nextui-org/react";

const white = "#ffffff";

export const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      primaryLight: "$purple200",
      primaryLightHover: "$purple300",
      primaryLightActive: "#890058",
      primaryLightContrast: "#730050",
      primary: "#4F0341",
      primaryBorder: "#730050",
      primaryBorderHover: "#730050",
      primarySolidHover: "#37034f",
      primarySolidContrast: white,
      primaryShadow: "#730050",

      success: "#A6C437",
      white: "#ffffff",
    },
    space: {},
    fonts: {},
    fontSizes: {
      xs: '0.75rem', 
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