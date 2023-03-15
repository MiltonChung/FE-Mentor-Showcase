import * as React from "react";
import { DoubleDownArrowsIcon } from "@/Icons";
import styles from "@/styles/Landing.module.scss";
import { useScrollPosition } from "./useScrollPosition";
import { AnimatedWord } from "./AnimatedWord";

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
      setTimeout(() => {
        mainRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 90);
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
        {scrollPosition > 1400 ? (
          <h1>FRONTEND MENTOR SOLUTIONS SHOWCASE</h1>
        ) : (
          <h1>
            <div className={styles.firstLine}>
              <div className={styles.textWord}>
                <AnimatedWord
                  word={frontend}
                  scrollPosition={scrollPosition}
                  xPosition={200 * (scrollPosition / 500)}
                  yPosition={scrollPosition * -0.7}
                />
              </div>

              <div className={styles.textWord}>
                <AnimatedWord
                  word={mentor}
                  scrollPosition={scrollPosition}
                  xPosition={scrollPosition * 2}
                  yPosition={-scrollPosition / 2}
                />
              </div>
            </div>

            <div className={styles.secondLine}>
              <div className={styles.textWord}>
                <AnimatedWord
                  word={solutions}
                  scrollPosition={scrollPosition}
                  xPosition={-30 * (scrollPosition / 600)}
                  yPosition={scrollPosition / 2}
                />
              </div>

              <div className={styles.textWord}>
                <AnimatedWord
                  word={showcase}
                  scrollPosition={scrollPosition}
                  xPosition={200 * (scrollPosition / 500)}
                  yPosition={scrollPosition * 0.7}
                />
              </div>
            </div>
          </h1>
        )}

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
