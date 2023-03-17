import * as React from "react";
import styles from "@/styles/Landing.module.scss";

type AnimatedWordProps = {
  word: string[];
  scrollPosition: number;
  xPosition: number;
  yPosition: number;
  rotationAngle?: number;
};

const AnimatedWord: React.FC<AnimatedWordProps> = ({
  word,
  scrollPosition,
  xPosition,
  yPosition,
  rotationAngle = (Math.random() * 360 - 180) * (scrollPosition / 1000),
}) => {
  return (
    <>
      {word.map((letter, index) => {
        return (
          <h1
            style={{
              color: `rgba(${255 - (scrollPosition / 10) * Math.random()}, ${
                255 - (scrollPosition / 3) * Math.random()
              }, 255, ${1 - scrollPosition / 5000})`,
              transform: `translate(${xPosition * Math.random()}px, ${
                yPosition * Math.random()
              }px) rotate(${
                scrollPosition / 5
              }deg) rotateZ(${rotationAngle}deg)`,
              opacity: 1 - scrollPosition / (index + 1) / 500,
            }}
            className={styles.letter}
            key={index + letter}
          >
            {letter}
          </h1>
        );
      })}
    </>
  );
};

export { AnimatedWord };
