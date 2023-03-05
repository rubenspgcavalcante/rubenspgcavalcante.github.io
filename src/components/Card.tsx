import styled from "@emotion/styled";
import React from "react";
import { up } from "styled-breakpoints";

type Props = {
  children?: React.ReactNode;
};

const CardContainer = styled.section`
  max-width: 1024px;
  margin: auto;
  background-color: #fff;
  box-shadow: 3px 3px 12px #999;

  ${up("md")} {
    min-height: 80vh;
    border-radius: 12px;
  }
`;

export default function Card({ children }: Props) {
  return <CardContainer>{children}</CardContainer>;
}
