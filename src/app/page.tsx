import styles from "./page.module.css";

import { Bodoni_Moda } from "@next/font/google";
import cx from "classix";

import background from "public/background.png";

import Image from "next/image";

const bodoniModa = Bodoni_Moda({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

const Page = () => (
  <main className={styles.main}>
    <Image
      className={styles.background}
      src={background}
      alt="background"
      quality={100}
      placeholder="blur"
    />
    <div className={styles.title}>
      <span className={cx(styles.salutation, bodoniModa.className)}>
        Hello,{" "}
      </span>
      <span>my name is Federico</span>
    </div>
  </main>
);

export default Page;
