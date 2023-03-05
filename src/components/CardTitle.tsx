import React from "react";
import styled from "@emotion/styled";

type CardTitleProps = { title: string };

const Title = styled.h1`
  font-weight: bold;
  font-size: 42px;
  margin-bottom: 18px;
  display: inline-block;
  color: #666;

  ::before {
    content: attr(title);
    background-clip: text;
    color: transparent;
    position: absolute;
    margin-left: -1px;
    margin-top: -1px;
    background-image: linear-gradient(
      45deg,
      ${({ theme }) => theme.colors.purpleDark} 0%,
      ${({ theme }) => theme.colors.purpleLight} 40%,
      ${({ theme }) => theme.colors.blueLight} 100%
    );
  }
`;

export default function CardTitle({ title }: CardTitleProps) {
  return <Title title={title}>{title}</Title>;
}
