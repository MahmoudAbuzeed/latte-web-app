import type { MouseEvent } from "react";

/** Smooth-scrolls to a section by id, offsetting for the fixed nav. */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
}

/** Anchor click handler: prevent default jump, then smooth-scroll. */
export const goTo = (id: string) => (e: MouseEvent) => {
  e.preventDefault();
  scrollToId(id);
};
