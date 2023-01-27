import localFont from "@next/font/local";
import cx from "classix";
import { ComponentProps } from "react";

import styles from "./Icon.module.scss";

const icons = localFont({
  src: "../../../node_modules/material-symbols/material-symbols-outlined.woff2",
  display: "block",
});

export type IconProps = Omit<ComponentProps<"span">, "children"> & {
  symbol: string;
};

const Icon: React.FC<IconProps> = ({ className, symbol, ...props }) => (
  <span className={cx(icons.className, styles.Icon, className)} {...props}>
    {symbol}
  </span>
);

export default Icon;
