import Image from "next/image";
import * as React from "react";
import { projects } from "@/utils";
import { Footer } from "@/components/Footer";
import { Landing } from "@/components/Landing";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  const mainRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <Landing mainRef={mainRef} />

      <main className={styles.main} id="main" ref={mainRef}>
        <div className={styles.transitionBlur} />

        <section className={styles.sectionTitle} aria-label="site-description">
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

        <section className={styles.showcase} aria-label="projects">
          {projects.map((project) => {
            return (
              <div className={styles.showcaseItem} key={project.title}>
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Go to ${project.title} project site`}
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

      <h3 className={styles.closing}>
        Thanks for scrolling this far. <br />
        Hope you enjoyed! 😎
      </h3>

      <h3 className={styles.closing}>
        You can visit me at{" "}
        <a
          href="http://miltonchung.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          my personal website.
        </a>
      </h3>

      <Footer />
    </>
  );
}
