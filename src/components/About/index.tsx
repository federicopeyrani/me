import { ComponentProps } from "react";

import styles from "./About.module.scss";

const About: React.FC<ComponentProps<"section">> = (props) => {
  return (
    <section className={styles.About} {...props}>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consectetur, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, ut
          consequat nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies.
        </div>
      </div>
    </section>
  );
};

export default About;
