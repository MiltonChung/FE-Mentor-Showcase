import * as React from "react";

type RefObject<T> = {
  readonly current: T | null;
};

const useOnScreen = <T extends Element>(
  ref: RefObject<T>,
  rootMargin: string = "0px"
): boolean => {
  const [isIntersecting, setIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    const element = ref.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
};

export default useOnScreen;
