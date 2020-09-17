import React from "react";
import { Global, css } from "@emotion/core";
import emotionReset from "emotion-reset";

export default function CSSReset() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        *,
        *::after,
        *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }
      `}
    />
  );
}
