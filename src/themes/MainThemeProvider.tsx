import ThemeSwitchContext, { ThemeTypes } from "./ThemeSwitchContext";
import { ThemeProvider } from "@emotion/react";
import React, { useEffect, useMemo, useState } from "react";
import { themeLight } from "./themeLight";
import { themeDark } from "./themeDark";

type ThemeProviderProps = {
  children: React.ReactElement | React.ReactElement[];
};

const themes = {
  light: themeLight,
  dark: themeDark,
};

export default function MainThemeProvider({ children }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeTypes>("light");
  const theme = useMemo(() => themes[currentTheme], [currentTheme]);
  const themeSwitchContextValue = useMemo(
    () => ({
      current: currentTheme,
      setTheme: setCurrentTheme,
    }),
    [currentTheme, setCurrentTheme]
  );

  useEffect(() => {
    if (window?.matchMedia === undefined) {
      return;
    }

    const changeTheme = (ev: MediaQueryListEvent) => {
      setCurrentTheme(ev.matches ? "light" : "dark");
    };

    window
      .matchMedia("(prefers-color-scheme: light)")
      .addEventListener("change", changeTheme);

    return () =>
      window
        .matchMedia("(prefers-color-scheme: light)")
        .removeEventListener("change", changeTheme);
  }, []);

  return (
    <ThemeSwitchContext.Provider value={themeSwitchContextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeSwitchContext.Provider>
  );
}
