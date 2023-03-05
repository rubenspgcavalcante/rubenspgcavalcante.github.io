import styled from "@emotion/styled";
import { Inter } from "next/font/google";
import React from "react";
import { up } from "styled-breakpoints";

type Props = {
  children: React.ReactNode;
};

const Layout = styled.div`
  height: 100%;

  ${up("md")} {
    padding-top: 2rem;
    height: auto;
  }
`;
const inter = Inter({ subsets: ["latin"] });

export default function Body({ children }: Props) {
  return <Layout className={inter.className}>{children}</Layout>;
}
