import * as React from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", updatePosition, false);

      return () => window.removeEventListener("scroll", updatePosition);
    }
  }, []);

  return scrollPosition;
};

export { useScrollPosition };
