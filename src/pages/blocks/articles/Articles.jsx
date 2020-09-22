import React, { useState, useMemo } from "react";
import styled from "@emotion/styled";
import Typist from "react-typist";
import { animated, useSpring, useTrail } from "react-spring";

import { PageBlock } from "../../../commons/style/Page";
import ArticleCard from "./ArticleCard";

const wavePattern =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%23000000' fill-opacity='0.32' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E";

const notepadPattern =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

const Block = styled(PageBlock)`
  background-color: #363636;
  background-image: url("${wavePattern}");
  display: flex;
  height: ${({ autoHeight }) => (autoHeight ? "auto" : "100vh")};
`;

const UnwrappingPaper = styled(animated.div)`
  background-color: #ffffff;
  background-image: url("${notepadPattern}");
  margin: auto;
  align-self: center;
  border-radius: 10px;
  width: 0;
  height: 0;
  padding: 3rem 8rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #333;
`;

const CardsBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  content-visibility: auto;
  overflow: hidden;
  border-bottom: 1px #fefefe dashed;
  height: 80vh;
`;

const SeeMore = styled.div`
  background-image: url("${notepadPattern}");
  border-top: 4px dashed #444;
  height: 4rem;
  position: relative;
  top: -2rem;
  background: white;
  box-shadow: 0 -3px 1px rgba(0, 0, 0, 0.5);
`;

const AnimatedArticleCard = animated(ArticleCard);
const FlexAnimatedArticleCard = styled(AnimatedArticleCard)`
  flex-grow: 1;
  flex: 1 0 auto;
  margin: 22px 16px;
`;

const config = { mass: 5, tension: 2000, friction: 200 };

export default function Articles({ articles, expand }) {
  const [seeMore, setSeeMore] = useState(false);
  const [animationSteps, setAnimationSteps] = useState({
    STEP_ONE: false,
    STEP_TWO: false,
  });

  const [stepOneDone, stepTwoDone] = useMemo(
    () =>
      Object.keys(animationSteps).map(step => () => {
        if (!animationSteps[step]) {
          setAnimationSteps({ ...animationSteps, [step]: true });
        }
      }),
    [animationSteps]
  );

  const animation = useSpring({
    to: async (next, cancel) => {
      if (expand && !animationSteps.STEP_ONE) {
        await next({ width: "20%", height: "10vh" });

        await next({ width: "100%" });
        await next({ height: "100vh", borderRadius: 0 });
      }
    },
    from: { width: "0%", height: "0vh", borderRadius: "10px" },
    onRest: () => stepOneDone(),
  });

  const cardsAnimation = useTrail(articles?.length, {
    config,
    opacity: animationSteps.STEP_TWO ? 1 : 0,
    x: animationSteps.STEP_TWO ? 0 : 50,
    from: { opacity: 0, x: 50 },
  });

  return (
    <Block autoHeight={seeMore}>
      <UnwrappingPaper style={animation}>
        {animationSteps.STEP_ONE && (
          <Title>
            <Typist onTypingDone={stepTwoDone}>I love to write articles</Typist>
          </Title>
        )}
        {animationSteps.STEP_TWO && (
          <>
            <CardsBlock>
              {cardsAnimation.map(({ x, ...rest }, index) => (
                <FlexAnimatedArticleCard
                  key={articles[index].id}
                  article={articles[index]}
                  style={{
                    ...rest,
                    transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
                  }}
                />
              ))}
            </CardsBlock>
            <SeeMore />
          </>
        )}
      </UnwrappingPaper>
    </Block>
  );
}
