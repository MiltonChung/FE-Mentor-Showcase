import * as React from "react";
import styles from "@/styles/Landing.module.scss";
import { DoubleDownArrowsIcon } from "@/Icons";

const Landing = () => {
  return (
    <header className={styles.header}>
      <div className={styles.overlay} />
      <div className={styles.landingImg} />

      <nav>
        <a
          href="http://miltonchung.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.navLink}
        >
          M<span className={styles.transition}>ilton </span>
          <span className={styles.initials}>C</span>
          <span className={styles.transition}>hung</span>
        </a>
      </nav>

      <div className={styles.landingTextContainer}>
        <h1>
          <span>FRONTEND MENTOR</span>
          <span>SOLUTIONS SHOWCASE</span>
        </h1>
        <h2>By Milton Chung</h2>
      </div>

      <a
        href="#main"
        className={styles.scrollNext}
        aria-label="scroll to main section"
      >
        <DoubleDownArrowsIcon />
      </a>
    </header>
  );
};

export { Landing };
