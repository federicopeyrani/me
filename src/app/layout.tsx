// noinspection HtmlRequiredTitleElement

import "@/styles/globals.css";
import { PropsWithChildren } from "react";
import { Karla as Font } from "@next/font/google";

const font = Font({ subsets: ["latin"] });

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <head />
    <body className={font.className}>{children}</body>
  </html>
);

export default Layout;
