import styled from "@emotion/styled";
import React from "react";
import { up } from "styled-breakpoints";

type TextContentProps = { children: React.ReactElement };

const Content = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.base20};

  ${up("md")} {
    font-size: 21px;
    line-height: 32px;
  }

  b {
    font-weight: bold;
  }
`;

export default function TextContent({ children }: TextContentProps) {
  return <Content>{children}</Content>;
}
