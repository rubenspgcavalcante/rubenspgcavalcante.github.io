import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";

const Card = styled.a`
  @keyframes small-float {
    to {
      box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.2);
      left: -2px;
      top: -2px;
    }
  }

  @keyframes small-float-back {
    from {
      box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.2);
      left: -2px;
      top: -2px;
    }
    to {
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
      left: 0;
      top: 0;
    }
  }

  left: 0;
  top: 0;
  position: relative;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  max-width: 24rem;
  display: flex;
  flex-flow: column;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  animation-name: small-float-back;
  animation-duration: 200ms;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:visited {
    color: inherit;
  }

  &:hover {
    animation-name: small-float;
    animation-duration: 200ms;
    animation-fill-mode: forwards;
  }
`;

const BodyContent = styled.div`
  justify-content: normal;
`;

const CardImg = styled.div`
  width: 100%;
  height: 180px;

  background-image: url("${({ source }) => source}");
  background-position: center;
  background-size: cover;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  margin: 16px 8px;
`;

const Description = styled.h2`
  font-size: 18px;
  margin: 16px;
`;

const HR = styled.hr`
  border: 1px solid #f3f3f3;
  width: 100%;
  height: 1px;
`;

const BottomInfo = styled.i`
  font-size: 12px;
  font-weight: bold;
  color: #888;
  text-align: right;
  margin: 0 4px 6px 0;
`;

const Footer = styled.div`
  display: flex;
`;

export default function ArticleCard({ article, className, style }) {
  if (!article) return null;
  const { title, description, imageUrl, url } = article;

  return (
    <Card className={className} style={style} href={url} target="__blank">
      <BodyContent>
        <Title>{title}</Title>
        <CardImg source={imageUrl} />
        <Description>{description}</Description>
      </BodyContent>
      <Footer>
        <HR />
        <BottomInfo>
          Published on Medium <FontAwesomeIcon icon={faMedium} />
        </BottomInfo>
      </Footer>
    </Card>
  );
}
