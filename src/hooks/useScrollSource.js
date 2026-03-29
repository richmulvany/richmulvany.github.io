import { useEffect } from "react";
import useMediaQuery from "./useMediaQuery";

export default function useScrollSource(callback) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    let target;

    if (isDesktop) {
      target = document.getElementById("scroll-container");
    } else {
      target = window;
    }

    if (!target) return;

    const handleScroll = () => {
      const scrollTop =
        target === window
          ? window.scrollY
          : target.scrollTop;

      callback(scrollTop);
    };

    target.addEventListener("scroll", handleScroll);

    return () => {
      target.removeEventListener("scroll", handleScroll);
    };
  }, [isDesktop, callback]);
}