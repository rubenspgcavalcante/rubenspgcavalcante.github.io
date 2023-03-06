import { Theme } from "@emotion/react";
import { themeDefaults } from "./themeDefaults";

export const themeLight: Theme = {
  ...themeDefaults,
  meta: {
    name: "light",
  },
  colors: {
    ...themeDefaults.colors,
    base90: "#e5e5e5",
    base80: "#cccccc",
    base70: "#b2b2b2",
    base60: "#999999",
    base50: "#7f7f7f",
    base40: "#666666",
    base30: "#4c4c4c",
    base20: "#333333",
    base10: "#191919",

    baseAlpha90: "rgba(255, 255, 255, 0.9)",
    baseAlpha80: "rgba(255, 255, 255, 0.8)",
    baseAlpha70: "rgba(255, 255, 255, 0.7)",
    baseAlpha60: "rgba(255, 255, 255, 0.6)",
    baseAlpha50: "rgba(255, 255, 255, 0.5)",
    baseAlpha40: "rgba(255, 255, 255, 0.4)",
    baseAlpha30: "rgba(255, 255, 255, 0.3)",
    baseAlpha20: "rgba(255, 255, 255, 0.2)",
    baseAlpha10: "rgba(255, 255, 255, 0.1)",

    background: "#FFF",
  },
};
