import ThemeSwitch from "@/components/ThemeSwitch";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { up } from "styled-breakpoints";

type CardHeaderProps = {
  children: React.ReactElement | React.ReactElement[];
};

const Bg = styled.header`
  @property --myColor1 {
    syntax: "<color>";
    initial-value: ${({ theme }) => theme.colors.purpleDark};
    inherits: false;
  }

  @property --myColor2 {
    syntax: "<color>";
    initial-value: ${({ theme }) => theme.colors.purpleLight};
    inherits: false;
  }

  @property --myColor3 {
    syntax: "<color>";
    initial-value: ${({ theme }) => theme.colors.yellowLight};
    inherits: false;
  }

  height: 180px;
  padding: 24px 48px 48px;
  background: linear-gradient(
    45deg,
    var(--myColor1) 0%,
    var(--myColor2) 40%,
    var(--myColor3) 100%
  );
  transition: --myColor1 8s, --myColor2 3s, --myColor3 0.5s;

  &[data-theme="dark"] {
    --myColor1: ${({ theme }) => theme.colors.purpleLight};
    --myColor2: ${({ theme }) => theme.colors.purpleDark};
    --myColor3: ${({ theme }) => theme.colors.blueLight};
  }

  ${up("md")} {
    border-radius: 12px 12px 0 0;
  }
  ${up("sm")} {
    height: 128px;
    flex-direction: row;
  }
`;

const TopRow = styled.div`
  position: relative;
`;

const BottomRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  ${up("sm")} {
    flex-direction: row;
  }
`;

const HeaderTextBlock = styled.section`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.base10};
  text-shadow: -2px 1px 2px ${({ theme: { colors } }) => colors.baseAlpha30};
  position: relative;
  font-weight: bold;

  ${up("lg")} {
    font-size: 48px;
  }
`;

const Description = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.base10};
  text-shadow: -1px 1px 1px ${({ theme: { colors } }) => colors.baseAlpha30};
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
  const theme = useTheme();
  return (
    <Bg data-theme={theme.meta.name}>
      <TopRow>
        <ThemeSwitch />
      </TopRow>
      <BottomRow>
        <HeaderTextBlock>
          <Title>{title}</Title>
          <Description>{desc}</Description>
        </HeaderTextBlock>
        {children}
      </BottomRow>
    </Bg>
  );
}
