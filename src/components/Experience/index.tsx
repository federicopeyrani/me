import { ComponentProps } from "react";

import ExperienceEntry from "@/components/ExperienceEntry";
import Icon from "@/components/Icon";

import styles from "./Experience.module.scss";

const Experience: React.FC<ComponentProps<"section">> = (props) => (
  <section id="experience_root" className={styles.Experience} {...props}>
    <div data-scroll="" data-scroll-speed="1" className={styles.title}>
      Experience
    </div>

    <div
      data-scroll=""
      data-scroll-direction="horizontal"
      data-scroll-speed="4"
      data-scroll-target="#experience_root"
      className={styles.timeline}
    >
      <ExperienceEntry
        className={styles.area1}
        title="Bachelor in Computer Science and Engineering"
        subtitle="Politecnico di Milano"
        indicatorStart="September 2016"
        indicatorMiddle="September 2019"
      />

      <ExperienceEntry
        className={styles.area2}
        title="Master of Science in Computer Science and Engineering"
        subtitle="Politecnico di Milano"
        indicatorMiddle={<Icon symbol="school" />}
      />

      <div className={styles.separator} />

      <ExperienceEntry
        className={styles.area3}
        title="Front-end Developer Internship"
        subtitle="ContentWise"
        indicatorStart="September 2021"
        indicatorMiddle="April 2022"
      />

      <ExperienceEntry
        className={styles.area4}
        title="Junior Front-end Developer"
        subtitle="ContentWise"
        indicatorEnd="Now"
      />
    </div>
  </section>
);

export default Experience;
