import * as React from "react";
import { Landing } from "@/components/Landing";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import { projects } from "@/utils";

export default function Home() {
  return (
    <React.Fragment>
      <Landing />

      <main className={styles.main} id="main">
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
            . The goal of Frontend Mentor challenges is to replicate the given
            design as close as possible.
          </p>

          <p className={styles.description}>
            Each project has three links: Github, Live, and Frontend Mentor
            solutions page. I documented every project I did on each of the
            project Github links. I share what the design looks like, challenges
            I faced, what I learned, and time spent on each project. Note that I
            started doing these projects back when I started to learn web
            development so some of the solutions are not the best, but it&apos;s
            a great way to look back and see how far I&apos;ve come.
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
                  <div className={styles.overlay} />
                </a>
                <div className={styles.itemContent}>
                  <div className={styles.contentText}>
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                    <p>Completed on: {project.dateCompleted}</p>
                  </div>

                  <div className={styles.links}>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="primary-link-btn"
                    >
                      Github
                    </a>
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="primary-link-btn"
                    >
                      Live
                    </a>
                    <a
                      href={project.feMentorLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="primary-link-btn"
                    >
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
