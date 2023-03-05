import styled from "@emotion/styled";
import React from "react";
import { up } from "styled-breakpoints";

type CardHeaderProps = {
  children: React.ReactElement | React.ReactElement[];
};

const Bg = styled.header`
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 48px;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.purpleDark} 0%,
    ${({ theme }) => theme.colors.purpleLight} 40%,
    ${({ theme }) => theme.colors.blueLight} 100%
  );

  ${up("md")} {
    border-radius: 12px 12px 0 0;
  }
  ${up("sm")} {
    height: 128px;
    flex-direction: row;
  }
`;

const HeaderTextBlock = styled.section`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #fff;
  position: relative;
  font-weight: bold;

  ${up("lg")} {
    font-size: 48px;
  }
`;

const Description = styled.h2`
  font-size: 24px;
  color: #fff;
  position: relative;
  font-weight: bold;
  margin-top: 32px;

  ${up("lg")} {
    font-size: 36px;
  }
`;

const title = "Hi! I'm Rubens Cavalcante";
const desc = "Senior Frontend Engineer - London, UK";

export default function CardHeader({ children }: CardHeaderProps) {
  return (
    <Bg>
      <HeaderTextBlock>
        <Title>{title}</Title>
        <Description>{desc}</Description>
      </HeaderTextBlock>
      {children}
    </Bg>
  );
}
