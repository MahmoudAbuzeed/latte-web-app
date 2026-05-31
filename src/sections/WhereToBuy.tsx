import { useLang } from "../i18n/LangContext";
import { Reveal } from "../components/Reveal";
import { goTo } from "../lib/scroll";

/** Mansoura-centred delivery/stockist hub: reach rings, expanding pings,
 *  spokes out to city dots. */
function DeliveryMap() {
  const { t } = useLang();
  const center = t.exporting.regions[0];
  const cx = 160;
  const cy = 160;
  const R = 116;
  const outer = t.exporting.regions.slice(1, 8);
  const dots = outer.map((_, i) => {
    const ang = (-90 + (360 / outer.length) * i) * (Math.PI / 180);
    return { x: cx + R * Math.cos(ang), y: cy + R * Math.sin(ang), d: 1.6 + i * 0.35 };
  });

  return (
    <div className="globe-wrap">
      <svg viewBox="0 0 320 320" width="100%" style={{ maxWidth: 360 }} aria-hidden="true">
        <defs>
          <radialGradient id="hub-core" cx="50%" cy="50%" r="60%">
            <stop offset="0" stopColor="#5e3a22" />
            <stop offset="1" stopColor="#2b1810" />
          </radialGradient>
        </defs>
        {/* concentric reach rings */}
        {[60, 90, 116].map((r, i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke="var(--gold-line)" strokeWidth="1" opacity="0.45" />
        ))}
        {/* expanding pings */}
        {[0, 1.5].map((delay, i) => (
          <circle key={"p" + i} cx={cx} cy={cy} r="44" fill="none" stroke="var(--gold)" strokeWidth="1">
            <animate attributeName="r" values="44;116" dur="3s" begin={delay + "s"} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0" dur="3s" begin={delay + "s"} repeatCount="indefinite" />
          </circle>
        ))}
        {/* spokes + city dots */}
        {dots.map((p, i) => (
          <g key={i}>
            <line x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="var(--gold-line)" strokeWidth="1" opacity="0.6" />
            <circle cx={p.x} cy={p.y} r="5" fill="var(--gold-bright)">
              <animate attributeName="opacity" values="0.35;1;0.35" dur={p.d + 1.4 + "s"} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
        {/* center hub: Mansoura */}
        <circle cx={cx} cy={cy} r="42" fill="url(#hub-core)" stroke="var(--gold)" strokeWidth="1.5" />
        <circle cx={cx} cy={cy} r="42" fill="none" stroke="var(--gold-bright)" strokeWidth="0.6" opacity="0.5" />
        <text
          x={cx}
          y={cy + 4}
          textAnchor="middle"
          style={{ fontFamily: "var(--serif)", fontSize: "17px", fill: "var(--gold-bright)" }}
        >
          {center}
        </text>
      </svg>
    </div>
  );
}

export function WhereToBuy() {
  const { t } = useLang();
  const ex = t.exporting;
  const loop = [...ex.marquee, ...ex.marquee];
  return (
    <section className="section export" id="export">
      <div className="wrap">
        <div className="section-head" style={{ maxWidth: 760 }}>
          <Reveal as="span" className="eyebrow">
            {ex.eyebrow}
          </Reveal>
          <Reveal delay={100}>
            <h2>{ex.title}</h2>
          </Reveal>
          <Reveal delay={180}>
            <p style={{ maxWidth: 620 }}>{ex.lede}</p>
          </Reveal>
        </div>
      </div>
      <div className="export-marquee marquee">
        <div className="marquee-track">
          {loop.map((m, i) => (
            <span className="m-item" key={i}>
              {m}
            </span>
          ))}
        </div>
      </div>
      <div className="wrap">
        <div className="export-grid">
          <div>
            <Reveal>
              <div className="export-stats">
                {ex.stats.map((s, i) => (
                  <div className="export-stat" key={i}>
                    <div className="v">{s.v}</div>
                    <div className="l">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="regions">
                {ex.regions.map((r, i) => (
                  <span className="region-chip" key={i}>
                    {r}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={200}>
              <a className="btn btn-gold" href="#contact" style={{ marginTop: 34 }} onClick={goTo("contact")}>
                {ex.cta}
              </a>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <DeliveryMap />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
