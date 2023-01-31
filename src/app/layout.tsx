// noinspection HtmlRequiredTitleElement

import "@/styles/globals.css";

import { Bodoni_Moda, Karla } from "@next/font/google";
import cx from "classix";
import { PropsWithChildren } from "react";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  display: "swap",
});

const bodoni_moda = Bodoni_Moda({
  variable: "--font-emphasis",
  style: ["italic"],
  subsets: ["latin"],
  display: "swap",
});

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <html lang="en" className={cx(karla.variable, bodoni_moda.variable)}>
    <head />
    <body>{children}</body>
  </html>
);

export default Layout;
