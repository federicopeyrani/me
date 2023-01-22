// noinspection HtmlRequiredTitleElement

import "@/styles/globals.css";

import { Karla as Font } from "@next/font/google";
import { PropsWithChildren } from "react";

const font = Font({ subsets: ["latin"] });

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <head />
    <body className={font.className}>{children}</body>
  </html>
);

export default Layout;
