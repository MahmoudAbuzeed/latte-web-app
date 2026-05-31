import { type CSSProperties, type ReactNode, createElement } from "react";
import { useReveal } from "../hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: CSSProperties;
}

/** Wraps children in a scroll-revealed element with an optional stagger delay. */
export function Reveal({
  children,
  delay = 0,
  as = "div",
  className = "",
  style = {},
}: RevealProps) {
  const ref = useReveal<HTMLElement>();
  return createElement(
    as,
    {
      ref,
      className: "reveal " + className,
      style: { transitionDelay: delay + "ms", ...style },
    },
    children,
  );
}
