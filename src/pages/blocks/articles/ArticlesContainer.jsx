import React from "react";
import { useInView } from "react-intersection-observer";
import Articles from "./Articles";

export default function ArticlesContainer({ articles }) {
  const { ref, inView } = useInView({ threshold: 0.5 });

  if (!articles) return null;

  return (
    <div ref={ref}>
      <Articles articles={articles} expand={inView} />
    </div>
  );
}
