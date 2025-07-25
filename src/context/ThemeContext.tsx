import { DefaultTheme, BlackBlueTheme } from "@/src/constants/Themes";
import React, { createContext, useContext, useState } from "react";
import { setActiveTheme } from "@/src/constants/Colors";

export type ThemeType = "default" | "blackBlue";

const ThemeContext = createContext<{
  theme: ThemeType;
  setTheme: (t: ThemeType) => void;
}>({ theme: "default", setTheme: () => {} });

export const useThemeSwitcher = () => useContext(ThemeContext);

export const ThemeProviderCustom = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setThemeState] = useState<ThemeType>("default");

  const setTheme = (t: ThemeType) => {
    setActiveTheme(t);
    setThemeState(t);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const themes: ThemeType[] = ["default", "blackBlue"];
export const toggleTheme = (
  currentTheme: ThemeType,
  setTheme: (t: ThemeType) => void
) => {
  const index = themes.indexOf(currentTheme);
  const next = themes[(index + 1) % themes.length];
  setTheme(next);
};

export const getNavigationTheme = (theme: ThemeType) => {
  switch (theme) {
    case "blackBlue":
      return BlackBlueTheme;
    case "default":
    default:
      return DefaultTheme;
  }
};
