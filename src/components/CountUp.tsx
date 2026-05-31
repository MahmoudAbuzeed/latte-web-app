import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

/**
 * Animates a numeric value up from zero when it enters view. Pure-number latin
 * values (with optional prefix/suffix, e.g. "12+", "50+") animate; anything
 * else (Arabic numerals, "Mixed", "Grand") renders as-is.
 */
export function CountUp({ value }: { value: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const m = String(value).match(/^(\D*)(\d+)(\D*)$/);
    if (!m) {
      setShown(value);
      return;
    }
    if (!inView) {
      setShown(m[1] + "0" + m[3]);
      return;
    }
    const [, pre, numStr, post] = m;
    const target = parseInt(numStr, 10);
    const dur = 1400;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setShown(pre + Math.round(target * eased) + post);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, inView]);

  return <span ref={ref}>{shown}</span>;
}
