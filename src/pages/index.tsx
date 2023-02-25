import Head from "next/head";
import Image from "next/image";
import styled from "@emotion/styled";
import Header from "@/template/Header";
import Body from "@/template/Body";

export default function Home() {
  return (
    <>
      <Header />
      <Body>Hello World!</Body>
    </>
  );
}
