"use client";

import Image from "next/image";
import background from "public/background.png";

import Footer from "@/components/Footer";
import useLocomotiveScroll from "@/hooks/useLocomotiveScroll";

import styles from "./page.module.scss";

const Page = () => {
  const ref = useLocomotiveScroll<HTMLDivElement>();

  return (
    <div ref={ref} className={styles.container}>
      <section className={styles.main} data-scroll-section="">
        <Image
          className={styles.background}
          src={background}
          alt="background"
          quality={100}
          placeholder="blur"
          fill
        />

        <div
          className={styles.presentation}
          data-scroll=""
          data-scroll-speed="4"
        >
          <div className={styles.title}>
            <span className={styles.salutation}>Hello, </span>
            <span>my name is Federico</span>
          </div>

          <div className={styles.subtitle}>
            A front-end developer based in Milan, with a thriving passion for
            building curated experiences and beautiful UIs.
          </div>
        </div>
      </section>

      <section data-scroll-section="">
        <Footer />
      </section>
    </div>
  );
};

export default Page;
