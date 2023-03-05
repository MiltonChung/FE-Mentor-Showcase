import * as React from "react";
import styles from "@/styles/Landing.module.scss";
import Image from "next/image";
import LandingImg from "../../public/assets/landing2.jpg";

const Landing = () => {
  return (
    <header className={styles.header}>
      <div className={styles.overlay} />
      <Image className={styles.landingImg} src={LandingImg} alt="landing" />

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
          <span>SOLUTION SHOWCASE</span>
        </h1>
        <h2>By Milton Chung</h2>
      </div>
    </header>
  );
};

export { Landing };
