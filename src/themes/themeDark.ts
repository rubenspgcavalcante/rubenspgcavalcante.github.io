import { Theme } from "@emotion/react";
import { themeDefaults } from "./themeDefaults";

export const themeDark: Theme = {
  ...themeDefaults,
  meta: {
    name: "dark",
  },
  colors: {
    ...themeDefaults.colors,
    base10: "#e5e5e5",
    base20: "#cccccc",
    base30: "#b2b2b2",
    base40: "#999999",
    base50: "#7f7f7f",
    base60: "#666666",
    base70: "#4c4c4c",
    base80: "#333333",
    base90: "#191919",

    baseAlpha90: "rgba(0, 0, 0, 0.9)",
    baseAlpha80: "rgba(0, 0, 0, 0.8)",
    baseAlpha70: "rgba(0, 0, 0, 0.7)",
    baseAlpha60: "rgba(0, 0, 0, 0.6)",
    baseAlpha50: "rgba(0, 0, 0, 0.5)",
    baseAlpha40: "rgba(0, 0, 0, 0.4)",
    baseAlpha30: "rgba(0, 0, 0, 0.3)",
    baseAlpha20: "rgba(0, 0, 0, 0.2)",
    baseAlpha10: "rgba(0, 0, 0, 0.1)",

    background: "#131313",
  },
};
