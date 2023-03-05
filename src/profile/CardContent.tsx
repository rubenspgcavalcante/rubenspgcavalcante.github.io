import React from "react";
import styled from "@emotion/styled";
import { up } from "styled-breakpoints";
import Link from "next/link";

type CardContentProps = {};

const AboutSection = styled.section`
  padding: 32px 48px;

  ${up("sm")} {
    padding: 24px 48px;
  }
`;

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

const Content = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #333;

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
    currently living in London, UK.
    <br /> After many experiences on a wide range of business scopes, I can give
    a diverse point of view on user experiences and new features, with
    <b> high-quality standards</b>, openly communicating, prioritizing
    transparency, and an attitude open to feedback. I am passionate about
    building customer-focused products and{" "}
    <b>I will deliver end-to-end solutions</b> from scope and timelines to
    architecture, implementation, and observability, writing testable and
    maintainable code that performs and scales.
  </>
);

export default function CardContent({}: CardContentProps) {
  const title = "About";
  return (
    <AboutSection>
      <Title title={title}>{title}</Title>
      <Content>{about}</Content>

      <Link href={"/publications"}>Publications</Link>
    </AboutSection>
  );
}
