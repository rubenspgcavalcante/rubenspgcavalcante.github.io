import React from "react";
import styled from "@emotion/styled";
import { up } from "styled-breakpoints";

type CardContentProps = {};

const AboutSection = styled.section`
  padding: 32px 48px;

  ${up("sm")} {
    padding: 24px 48px;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 18px;
`;

const Content = styled.p`
  font-size: 18px;
  line-height: 24px;

  ${up("md")} {
    font-size: 21px;
    line-height: 32px;
  }

  b {
    font-weight: bold;
  }
`;

const about: React.ReactElement = (
  <>
    I am a Front-end Engineer with <b>15 years of JavaScript experience</b>,
    specialized in ReactJS and TypeScript ecosystems, with a Computer Science
    bachelor&apos;s degree from the State University of Ceará. I am a Brazilian
    currently living in London, UK. After many experiences on a wide range of
    business scopes, I can give a diverse point of view on user experiences and
    new features, with high-quality standards, openly communicating,
    prioritizing transparency, and an attitude open to feedback. I am passionate
    about building customer-focused products and I will deliver end-to-end
    solutions from scope and timelines to architecture, implementation, and
    observability, writing testable and maintainable code that performs and
    scales.
  </>
);

export default function CardContent({}: CardContentProps) {
  return (
    <AboutSection>
      <Title>{"About"}</Title>
      <Content>{about}</Content>
    </AboutSection>
  );
}
