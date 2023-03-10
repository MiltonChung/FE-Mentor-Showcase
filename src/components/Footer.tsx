import * as React from "react";
import { footerSocials } from "../utils";
import styles from "@/styles/Footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    document.body.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <button
        aria-label="scroll to top"
        type="button"
        onClick={scrollToTop}
        className={styles.scrollToTop}
      >
        <span>Back to top</span>
      </button>

      <div className={styles.socialContainer}>
        {footerSocials.map(({ link, logo: Logo, title }) => {
          return (
            <a
              key={title}
              className={styles.socialLink}
              href={link}
              target="_blank"
              rel="noreferrer nofollow"
              title={title}
            >
              <Logo />
            </a>
          );
        })}
      </div>

      <div className={styles.creditContainer}>
        <small>
          Created with{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://www.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </small>
        <small>Designed and created by Milton Chung &copy; {currentYear}</small>
      </div>
    </footer>
  );
};

export { Footer };
