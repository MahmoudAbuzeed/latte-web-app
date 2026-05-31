import { type CSSProperties } from "react";

interface ImageSlotProps {
  /** Real photo URL (import an asset or pass a remote URL). When omitted,
   *  a designed, captioned empty-state placeholder is shown instead. */
  src?: string;
  alt: string;
  /** Caption shown in the empty state (localized "drop a photo" copy). */
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Replaces the design-tool-only `<image-slot>` custom element. Renders a real
 * `<img>` when `src` is provided; otherwise an elegant placeholder so the
 * layout still looks intentional until brand photography is dropped in.
 *
 * To add a real photo: place the file in `src/assets/`, import it, and pass it
 * as `src` from the section (see the marked import points in each section).
 */
export function ImageSlot({ src, alt, placeholder, className = "", style }: ImageSlotProps) {
  if (src) {
    return (
      <span className={"img-slot " + className} style={style}>
        <img src={src} alt={alt} loading="lazy" />
      </span>
    );
  }
  return (
    <span className={"img-slot is-empty " + className} style={style} role="img" aria-label={alt}>
      <span className="img-slot-cap">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="9" cy="10" r="2" />
          <path d="M3 17l5-4 4 3 3-3 6 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {placeholder ? <span>{placeholder}</span> : null}
      </span>
    </span>
  );
}
