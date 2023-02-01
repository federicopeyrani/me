"use client";

import Footer from "@/components/Footer";
import useLocomotiveScroll from "@/hooks/useLocomotiveScroll";

import styles from "./page.module.scss";

const Page = () => {
  const ref = useLocomotiveScroll<HTMLDivElement>();

  return (
    <div ref={ref} className={styles.container}>
      <section className={styles.main} data-scroll-section="">
        <div className={styles.header}>
          <span data-scroll="" data-scroll-speed="1">
            Federico Peyrani
          </span>
        </div>

        <div
          className={styles.presentation}
          data-scroll=""
          data-scroll-speed="2"
        >
          <div className={styles.title}>
            <p>
              <span className={styles.salutation}>Hello, </span>
              <span>my name</span>
            </p>
            <p>
              <span>is Federico</span>
            </p>
          </div>

          <div className={styles.subtitle}>
            A front-end developer based in Milan, with a thriving passion for
            building curated experiences and beautiful UIs
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
