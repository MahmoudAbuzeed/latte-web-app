/* ---------- LOGO (wordmark + cocoa-pod monogram) ---------- */

export function LatteMark({ size = 38 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="lg-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e3bd7e" />
          <stop offset="0.5" stopColor="#c79a5b" />
          <stop offset="1" stopColor="#9c7338" />
        </linearGradient>
      </defs>
      {/* cocoa pod */}
      <path
        d="M24 3c8 5 13 13 13 21 0 11-6 21-13 21S11 35 11 24C11 16 16 8 24 3z"
        fill="none"
        stroke="url(#lg-gold)"
        strokeWidth="2"
      />
      <path
        d="M24 6v36M17 9c2 6 2 24 0 30M31 9c-2 6-2 24 0 30"
        stroke="url(#lg-gold)"
        strokeWidth="1.1"
        opacity="0.7"
      />
      {/* bean */}
      <ellipse cx="24" cy="24" rx="4.4" ry="7" fill="url(#lg-gold)" />
    </svg>
  );
}

export function Logo({ size = 38 }: { size?: number }) {
  return (
    <a href="#top" className="logo" style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      <LatteMark size={size} />
      <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span
          style={{
            fontFamily: "var(--serif)",
            fontSize: size * 0.74,
            color: "var(--cream)",
            letterSpacing: "0.04em",
            fontWeight: 500,
          }}
        >
          Latte
        </span>
        <span
          style={{
            fontFamily: "var(--sans)",
            fontSize: 9.5,
            letterSpacing: "0.42em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginTop: 3,
          }}
        >
          Chocolat
        </span>
      </span>
    </a>
  );
}
