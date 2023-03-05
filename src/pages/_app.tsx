import "@/styles/main.css";
import "@/styles/reset.css";
import Body from "@/template/Body";
import Header from "@/template/Header";
import MainThemeProvider from "@/themes/MainThemeProvider";
import { AppProps } from "next/app";
import React from "react";

export default function RootApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <MainThemeProvider>
        <Body>
          <Component {...pageProps} />
        </Body>
      </MainThemeProvider>
    </>
  );
}
