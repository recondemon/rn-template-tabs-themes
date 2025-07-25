import { ThemeType } from "@/context/ThemeContext";
import { BlackBlueTheme, DefaultTheme } from "./Themes";

const themeMap: Record<ThemeType, typeof DefaultTheme.colors> = {
  default: DefaultTheme.colors,
  blackBlue: BlackBlueTheme.colors,
};

let activeTheme: ThemeType = "default";

export const setActiveTheme = (theme: ThemeType) => {
  activeTheme = theme;
};

export const getColors = () => {
  return themeMap[activeTheme];
};
