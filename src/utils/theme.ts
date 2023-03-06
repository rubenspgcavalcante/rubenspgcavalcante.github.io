import { Theme } from "@emotion/react";

export const isLightTheme = (theme: Theme) => theme.meta.name === "light";

export const onLightTheme =
  (callBack: (theme: Theme) => string) => (theme: Theme) =>
    isLightTheme(theme) ? callBack(theme) : "";
