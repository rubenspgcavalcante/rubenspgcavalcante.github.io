import styled from "@emotion/styled";
import mq from "./MediaQueries";

export const PageBlock = styled.div`
  height: 100vh;
  width: 100%;
`;

export const PageBlockContent = styled.div`
  width: 100%;
  padding: 0 4rem;

  ${mq.desktop} {
    width: 50%;
    margin: auto;
  }
`;
