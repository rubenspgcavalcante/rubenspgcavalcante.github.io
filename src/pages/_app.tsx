import React from "react";
import Header from "@/template/Header";
import Body from "@/template/Body";
import { AppProps } from "next/app";
import "@/styles/main.css";
import "@/styles/reset.css";
import MainThemeProvider from "@/themes/MainThemeProvider";

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
