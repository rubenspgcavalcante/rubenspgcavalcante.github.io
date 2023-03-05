import { emptyFunction } from "@/utils/function";
import React, { createContext } from "react";

export type ThemeTypes = "light" | "dark";

type ThemeSwitchContextValue = {
  current: ThemeTypes | null;
  setTheme: (value: ThemeTypes) => void;
};

const defaultValue: ThemeSwitchContextValue = {
  current: null,
  setTheme: emptyFunction,
};

const ThemeSwitchContext = createContext<ThemeSwitchContextValue>(defaultValue);
export default ThemeSwitchContext;
