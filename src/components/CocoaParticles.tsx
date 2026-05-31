import { useMemo } from "react";

/** Floating cocoa specks that drift up through the hero. Offsets are
 *  generated once so they stay stable across re-renders. */
export function CocoaParticles({ count = 16 }: { count?: number }) {
  const parts = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        size: 4 + Math.random() * 12,
        dur: 14 + Math.random() * 18,
        delay: -Math.random() * 24,
      })),
    [count],
  );

  return (
    <div
      style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}
      aria-hidden="true"
    >
      {parts.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: p.left + "%",
            bottom: "-40px",
            width: p.size,
            height: p.size,
            animationDuration: p.dur + "s",
            animationDelay: p.delay + "s",
          }}
        />
      ))}
    </div>
  );
}
