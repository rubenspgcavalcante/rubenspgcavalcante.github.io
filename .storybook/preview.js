import React from "react";
import CSSReset from "../src/commons/style/CSSReset";
import GlobalStyles from "../src/commons/style/GlobalStyles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  Story => (
    <>
      <CSSReset />
      <GlobalStyles />
      <Story />
    </>
  ),
];
