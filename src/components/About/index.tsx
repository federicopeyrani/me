import { ComponentProps } from "react";

import styles from "./About.module.scss";

const About: React.FC<ComponentProps<"section">> = (props) => (
  <section className={styles.About} {...props}>
    <div className={styles.container}>
      <div className={styles.title}>
        <div
          data-scroll=""
          data-scroll-speed="6"
          data-scroll-direction="horizontal"
          className={styles.overline}
        >
          /001
        </div>
        <h2
          data-scroll=""
          data-scroll-speed="4"
          data-scroll-direction="horizontal"
        >
          About
        </h2>
      </div>

      <div className={styles.content}>
        <div
          data-scroll=""
          data-scroll-speed="-6"
          data-scroll-direction="horizontal"
        >
          Ciao! I&apos;m a 25-year-old Italian frontend engineer with a knack
          for creating captivating digital experiences. Armed with{" "}
          <span className={styles.bold}>ReactJS</span>, NextJS, TypeScript, and
          Sass, I craft beautiful user interfaces that come to life.
        </div>
      </div>
    </div>

    <div
      className={styles.more}
      data-scroll=""
      data-scroll-speed="2"
      data-scroll-direction="vertical"
    >
      Figma is my playground when it comes to translating imaginative designs
      into reality. I&apos;ve dabbled in{" "}
      <span className={styles.bold}>Android</span> development, wielding Kotlin
      like a pro to create an awesome app for Android TV. But hey, I&apos;m not
      just a frontend aficionado! While it is my forte, I&apos;m{" "}
      <span className={styles.emphasis}>
        always up for a challenge beyond the borders of the browser
      </span>
      . From Dockerfiles to CI/CD tools and serverless functions, I love
      exploring the diverse landscape of computer science and engineering
      (I&apos;ve even dabbled with embedded devices for IoT! Because apparently,
      my curiosity doesn&apos;t stop at just making web apps look cool—I like to
      tinker with the tiny too). Oh, and did I mention my casual forays into the
      world of <span className={styles.bold}>digital design</span>? It&apos;s a
      passion that fuels my creativity.
    </div>
  </section>
);

export default About;
