import { isLightTheme } from "@/utils/theme";
import styled from "@emotion/styled";
import { Inter } from "next/font/google";
import React from "react";
import { up } from "styled-breakpoints";

type Props = {
  children: React.ReactNode;
};

const Layout = styled.main`
  height: 100%;
  background: ${({ theme }) =>
    isLightTheme(theme)
      ? "radial-gradient(ellipse at center, #ffffff 30%, #ede8e2 100%)"
      : "radial-gradient(ellipse at center, #333 30%, #000 100%)"};

  ${up("md")} {
    padding: 2rem 1rem;
    height: auto;
  }
`;
const inter = Inter({ subsets: ["latin"] });

export default function Body({ children }: Props) {
  return <Layout className={inter.className}>{children}</Layout>;
}
