import CardBody from "@/components/CardBody";
import CardTitle from "@/components/CardTitle";
import TextContent from "@/components/TextContent";
import React from "react";

type CardContentProps = {};

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

export default function ProfileContent({}: CardContentProps) {
  return (
    <CardBody>
      <CardTitle title="About" />
      <TextContent>{about}</TextContent>
    </CardBody>
  );
}
