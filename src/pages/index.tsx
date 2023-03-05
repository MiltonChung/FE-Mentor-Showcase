import * as React from "react";
import { Landing } from "@/components/Landing";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <React.Fragment>
      <Landing />

      <main className={styles.main}>
        <div className={styles.transitionBlur} />

        <section className={styles.sectionTitle}>
          <h3 className={styles.title}>Welcome to my solution showcase!</h3>
          <p className={styles.description}>
            This is a collection of my solutions to the challenges on{" "}
            <a
              href="https://www.frontendmentor.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend Mentor
            </a>
            . I hope you enjoy them!
          </p>
        </section>
      </main>
    </React.Fragment>
  );
}
