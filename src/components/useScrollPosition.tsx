import * as React from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    const updatePosition = () => {
      if (
        Math.abs(window.pageYOffset - scrollPosition) < 35 &&
        window.pageYOffset > 200
      )
        return;

      setScrollPosition(window.pageYOffset);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", updatePosition, { passive: false });

      return () => window.removeEventListener("scroll", updatePosition);
    }
  }, [scrollPosition]);

  return scrollPosition;
};

export { useScrollPosition };
