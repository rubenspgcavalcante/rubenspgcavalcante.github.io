import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

type ThemeProviderProps = {
  children: React.ReactElement | React.ReactElement[];
};

const ContainerDiv = styled.div``;

const theme = {
  colors: {
    purpleLight: "#b457f2",
    purpleDark: "#7000e0",
    blueLight: "#58bedd",
  },
};

export default function MainThemeProvider({ children }: ThemeProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
