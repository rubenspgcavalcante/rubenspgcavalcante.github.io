import ThemeSwitchContext, { ThemeTypes } from "./ThemeSwitchContext";
import { ThemeProvider } from "@emotion/react";
import React, { useEffect, useMemo, useState } from "react";

type ThemeProviderProps = {
  children: React.ReactElement | React.ReactElement[];
};

const defaultTheme = {
  colors: {
    purpleLight: "#b457f2",
    purpleDark: "#7000e0",
    blueLight: "#58bedd",
  },
};

const themes = {
  light: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      base90: "#e5e5e5",
      base80: "#cccccc",
      base70: "#b2b2b2",
      base60: "#999999",
      base50: "#7f7f7f",
      base40: "#666666",
      base30: "#4c4c4c",
      base20: "#333333",
      base10: "#191919",
    },
  },
  dark: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      base10: "#e5e5e5",
      base20: "#cccccc",
      base30: "#b2b2b2",
      base40: "#999999",
      base50: "#7f7f7f",
      base60: "#666666",
      base70: "#4c4c4c",
      base80: "#333333",
      base90: "#191919",
    },
  },
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
