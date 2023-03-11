import * as React from "react";
import { DoubleDownArrowsIcon } from "@/Icons";
import styles from "@/styles/Landing.module.scss";
import { useScrollPosition } from "./useScrollPosition";

type LandingProps = {
  mainRef: React.RefObject<HTMLDivElement>;
};

const frontend = "FRONTEND".split("");
const mentor = "MENTOR".split("");
const solutions = "SOLUTIONS".split("");
const showcase = "SHOWCASE".split("");

const Landing: React.FC<LandingProps> = ({ mainRef }) => {
  const scrollPosition = useScrollPosition();

  const scrollToMain = () => {
    if (mainRef.current) {
      mainRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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
          <div className={styles.firstLine}>
            <div className={styles.textWord}>
              {frontend.map((letter, index) => {
                const xPos = index * 20 * (scrollPosition / 1000); // adjust this value to change the horizontal position of each letter
                const yPos = scrollPosition / 2; // adjust this value to change the speed of the letter's movement
                const angle =
                  (Math.random() * 360 - 180) * (scrollPosition / 1000);

                return (
                  <div
                    style={{
                      transform: `translate(${xPos}px, ${yPos}px) rotate(${
                        scrollPosition / 5
                      }deg) rotateZ(${angle}deg)`, // add a random rotation around the Z-axis to give each letter a random direction
                      opacity: 1 - scrollPosition / (index + 1) / 500, // adjust this value to change the opacity of the letter
                    }}
                    key={index + letter}
                    className={styles.landingText}
                  >
                    {letter}
                  </div>
                );
              })}
            </div>

            <div className={styles.textWord}>
              {mentor.map((letter, index) => {
                const xPos = index * 20 * (scrollPosition / 1000); // adjust this value to change the horizontal position of each letter
                const yPos = scrollPosition / 2; // adjust this value to change the speed of the letter's movement
                const angle =
                  (Math.random() * 360 - 180) * (scrollPosition / 1000);

                return (
                  <div
                    style={{
                      transform: `translate(${xPos}px, ${yPos}px) rotate(${
                        scrollPosition / 5
                      }deg) rotateZ(${angle}deg)`, // add a random rotation around the Z-axis to give each letter a random direction
                      opacity: 1 - scrollPosition / (index + 1) / 500, // adjust this value to change the opacity of the letter
                    }}
                    key={index + letter}
                    className={styles.landingText}
                  >
                    {letter}
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.secondLine}>
            <div className={styles.textWord}>
              {solutions.map((letter, index) => {
                const xPos = index * 20 * (scrollPosition / 1000); // adjust this value to change the horizontal position of each letter
                const yPos = scrollPosition / 2; // adjust this value to change the speed of the letter's movement
                const angle =
                  (Math.random() * 360 - 180) * (scrollPosition / 1000);

                return (
                  <div
                    style={{
                      transform: `translate(${xPos}px, ${yPos}px) rotate(${
                        scrollPosition / 5
                      }deg) rotateZ(${angle}deg)`, // add a random rotation around the Z-axis to give each letter a random direction
                      opacity: 1 - scrollPosition / (index + 1) / 500, // adjust this value to change the opacity of the letter
                    }}
                    key={index + letter}
                    className={styles.landingText}
                  >
                    {letter}
                  </div>
                );
              })}
            </div>
            <div className={styles.textWord}>
              {showcase.map((letter, index) => {
                const xPos = index * 20 * (scrollPosition / 1000); // adjust this value to change the horizontal position of each letter
                const yPos = scrollPosition / 2; // adjust this value to change the speed of the letter's movement
                const angle =
                  (Math.random() * 360 - 180) * (scrollPosition / 1000);

                return (
                  <div
                    style={{
                      transform: `translate(${xPos}px, ${-yPos}px) rotate(${
                        scrollPosition / 5
                      }deg) rotateZ(${angle}deg)`, // add a random rotation around the Z-axis to give each letter a random direction
                      opacity: 1 - scrollPosition / (index + 1) / 500, // adjust this value to change the opacity of the letter
                    }}
                    key={index + letter}
                    className={styles.landingText}
                  >
                    {letter}
                  </div>
                );
              })}
            </div>
          </div>
        </h1>
        <h2>By Milton Chung</h2>
      </div>

      <button
        onClick={scrollToMain}
        className={styles.scrollNext}
        aria-label="scroll to main section"
      >
        <DoubleDownArrowsIcon />
      </button>
    </header>
  );
};

export { Landing };
