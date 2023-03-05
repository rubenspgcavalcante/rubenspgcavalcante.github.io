import styled from "@emotion/styled";
import React from "react";
import { up } from "styled-breakpoints";

type CardsSpacerProps = {};

const Spacer = styled.hr`
  border: none;
  margin-block-start: 0.15rem;
  margin-block-end: 0.15rem;

  ${up("md")} {
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
  }
`;

export default function CardsSpacer({}: CardsSpacerProps) {
  return <Spacer />;
}
