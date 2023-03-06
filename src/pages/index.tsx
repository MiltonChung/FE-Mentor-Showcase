import * as React from "react";
import { Landing } from "@/components/Landing";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import DashboardPic from "../../public/assets/projects/dashboard.png";
import { projects } from "@/utils";

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

        <section className={styles.showcase}>
          {projects.map((project) => {
            return (
              <div className={styles.showcaseItem} key={project.title}>
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.imageLink}
                >
                  <Image src={project.imageSrc} alt={project.title} />
                </a>
                <div className={styles.itemContent}>
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                  <div className={styles.links}>
                    <a href={project.githubLink} className="primary-link-btn">
                      Github
                    </a>
                    <a href={project.projectLink} className="primary-link-btn">
                      Live
                    </a>
                    <a href={project.feMentorLink} className="primary-link-btn">
                      FE Mentor
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </React.Fragment>
  );
}
