import { useEffect, useRef } from "react";

const LocomotiveScrollLazy =
  typeof window !== "undefined" ? import("locomotive-scroll") : undefined;

const useLocomotiveScroll = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (LocomotiveScrollLazy === undefined) {
      return undefined;
    }

    LocomotiveScrollLazy.then((module) => {
      if (ref.current === null) {
        return;
      }

      return new module.default({
        el: ref.current,
        smooth: true,
      });
    });
  }, []);

  return ref;
};

export default useLocomotiveScroll;
