import { ComponentProps } from "react";

import Icon from "@/components/Icon";

import styles from "./Title.module.scss";

const Title: React.FC<ComponentProps<"section">> = (props) => (
  <section className={styles.Title} {...props}>
    <div className={styles.header}>
      <span data-scroll="" data-scroll-speed="1">
        Federico Peyrani
      </span>
    </div>

    <div className={styles.presentation} data-scroll="" data-scroll-speed="2">
      <div className={styles.title}>
        <p>
          <span className={styles.salutation}>Hello, </span>
          <span>my name</span>
        </p>
        <p>
          <span>is Federico</span>
        </p>
      </div>

      <div className={styles.separator} />

      <div className={styles.subtitle}>
        A front-end developer based in Milan, with a thriving passion for
        building curated experiences and beautiful UIs
      </div>
    </div>

    <Icon className={styles.icon} symbol="south" />
  </section>
);

export default Title;
