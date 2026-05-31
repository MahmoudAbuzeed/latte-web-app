import { useEffect, useRef } from "react";

/**
 * Scroll-reveal hook. Adds the `.in` class once the element enters the
 * viewport, which the `.reveal` CSS animates from. IntersectionObserver works
 * reliably in a real browser (the original prototype used a scroll/rect hack
 * only because the design-tool preview iframe throttled observers).
 *
 * Progressive enhancement: `.reveal` defaults to visible; it is only hidden
 * (then animated in) while `html.reveal-on` is present, so content can never
 * get trapped invisible.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}
