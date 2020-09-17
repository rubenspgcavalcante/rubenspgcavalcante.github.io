import React from "react";
import CSSReset from "../style/CSSReset";
import GlobalStyles from "../style/GlobalStyles";
import { Helmet } from "react-helmet";
import sitePreview from "../../assets/meta/site-preview.png";

export default function Template({ children }) {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="author" content="Rubens Pinheiro Gonçalves Cavalcante" />
        <meta
          name="description"
          content="Senior Frontend Engineer, gamer, surfer and curious soul. Born on Fortaleza/Brazil, living in Berlin/Germany"
        />
        <meta name="theme-color" content="#333" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://rubenspgcavalcante.github.io"
        />
        <meta property="og:image" content={sitePreview} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <title>Rubens, Frontend Engineer</title>
      </Helmet>
      <CSSReset />
      <GlobalStyles />
      <>{children}</>
    </>
  );
}
