import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

export default function Body({ children }: Props) {
  return <main className={inter.className}>{children}</main>;
}
