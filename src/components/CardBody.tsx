import React from "react";
import styled from "@emotion/styled";
import { up } from "styled-breakpoints";

type CardBodyProps = { children: React.ReactElement | React.ReactElement[] };

const Body = styled.section`
  padding: 32px 48px;

  ${up("sm")} {
    padding: 24px 48px;
  }
`;

export default function CardBody({ children }: CardBodyProps) {
  return <Body>{children}</Body>;
}
