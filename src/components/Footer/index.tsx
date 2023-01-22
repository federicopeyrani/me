import Icon from "@/components/Icon";

import styles from "./Footer.module.scss";

const Footer: React.FC = () => (
  <footer className={styles.Footer}>
    <div className={styles.title}>Let&apos;s keep in touch</div>

    <div className={styles.contacts}>
      <a
        href="https://www.linkedin.com/in/federicopeyrani/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn <Icon symbol="call_made" />
      </a>

      <a
        href="https://github.com/federicopeyrani"
        target="_blank"
        rel="noreferrer"
      >
        GitHub <Icon symbol="call_made" />
      </a>
    </div>

    <div className={styles.separator} />

    <div className={styles.socials}>
      <a
        href="https://www.instagram.com/federico.kt"
        target="_blank"
        rel="noreferrer"
      >
        Instagram <Icon symbol="call_made" />
      </a>
    </div>
  </footer>
);

export default Footer;
