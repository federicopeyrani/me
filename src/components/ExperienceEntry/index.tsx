import cx from "classix";
import { ComponentProps, ReactNode } from "react";

import styles from "./ExperienceEntry.module.scss";

export type ExperienceEntryProps = ComponentProps<"div"> & {
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  indicatorStart?: ReactNode;
  indicatorMiddle?: ReactNode;
  indicatorEnd?: ReactNode;
};

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({
  className,
  title,
  subtitle,
  description,
  indicatorStart,
  indicatorMiddle,
  indicatorEnd,
  children,
  ...props
}) => (
  <div className={cx(styles.ExperienceEntry, className)} {...props}>
    <div className={styles.indicators}>
      <div className={styles.indicatorStart}>{indicatorStart}</div>

      {indicatorMiddle && (
        <div className={styles.indicatorMiddle}>{indicatorMiddle}</div>
      )}

      {indicatorEnd && (
        <div className={styles.indicatorEnd}>{indicatorEnd}</div>
      )}
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
