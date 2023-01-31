"use client";

import Image from "next/image";
import background from "public/background.png";

import Footer from "@/components/Footer";
import Icon from "@/components/Icon";

import styles from "./page.module.scss";

const Page = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <Image
        className={styles.background}
        src={background}
        alt="background"
        quality={100}
        placeholder="blur"
        fill
      />

      <div className={styles.presentation}>
        <div className={styles.title}>
          <span className={styles.salutation}>Hello, </span>
          <span>my name is Federico</span>
        </div>

        <div className={styles.subtitle}>
          I&apos;m a front-end developer based in Milan with a keen passion for
          building <span className={styles.emphasis}>curated experiences</span>{" "}
          and{" "}
          <span className={styles.emphasis}>
            beautiful <span className={styles.emphasis}>UI</span>s
          </span>
          .
        </div>
      </div>

      <Icon className={styles.scrollIcon} symbol="south" />
    </main>

    <Footer />
  </div>
);

export default Page;
