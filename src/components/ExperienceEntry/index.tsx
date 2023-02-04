import cx from "classix";
import { ComponentProps, ReactNode } from "react";

import styles from "./ExperienceEntry.module.scss";

export type ExperienceEntryProps = ComponentProps<"div"> & {
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  indicatorStart?: ReactNode;
  indicatorEnd?: ReactNode;
};

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({
  className,
  title,
  subtitle,
  description,
  indicatorStart,
  indicatorEnd,
  children,
  ...props
}) => (
  <div className={cx(styles.ExperienceEntry, className)} {...props}>
    <div className={styles.indicators}>
      <div
        className={cx(
          styles.indicatorStart,
          "ExperienceEntry__footer__indicatorStart"
        )}
      >
        {indicatorStart}
      </div>

      <div
        className={cx(
          styles.indicatorEnd,
          "ExperienceEntry__footer__indicatorEnd"
        )}
      >
        {indicatorEnd}
      </div>
    </div>

    <div className={styles.separator} />

    <div className={styles.content}>
      <div className={styles.title}>{title}</div>
      {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      {description && <div className={styles.description}>{description}</div>}
    </div>

    {children}
  </div>
);

export default ExperienceEntry;
