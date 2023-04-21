"use client";

import { Analytics } from "@vercel/analytics/react";

import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Experience from "@/components/Experience";
import Title from "@/components/Title";
import useLocomotiveScroll from "@/hooks/useLocomotiveScroll";

import styles from "./page.module.scss";

const Page = () => {
  const ref = useLocomotiveScroll<HTMLDivElement>();

  return (
    <div ref={ref} className={styles.container}>
      <Title data-scroll-section="" />
      <About data-scroll-section="" />
      <Experience data-scroll-section="" />
      <Contacts data-scroll-section="" />

      {
        // no intention to do anything nefarious with the data, pinky swear,
        // just curios to see if anyone visits my page c:
      }
      <Analytics />
    </div>
  );
};

export default Page;
