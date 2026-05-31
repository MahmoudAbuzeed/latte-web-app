import { Fragment } from "react";
import { useLang } from "../i18n/LangContext";
import { CocoaParticles } from "../components/CocoaParticles";
import { ImageSlot } from "../components/ImageSlot";
import { Reveal } from "../components/Reveal";
import { goTo } from "../lib/scroll";

// Hero product shot. Swap src/assets/hero.jpg for your own brand photography.
import heroPhoto from "../assets/hero.jpg";

function HeroVisual() {
  const { t } = useLang();
  return (
    <div className="hero-stage">
      <div className="bar-scene">
        <div className="bar-glow" />
        <div className="hero-photo">
          <ImageSlot src={heroPhoto} alt="Latte signature gift" placeholder={t.media.hero} />
          <span className="hero-photo-tag">L</span>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const { t } = useLang();
  const h = t.hero;
  return (
    <header className="hero" id="top">
      <CocoaParticles count={18} />
      <div className="hero-grid">
        <div className="hero-copy">
          <Reveal as="span" className="eyebrow">
            {h.eyebrow}
          </Reveal>
          <Reveal delay={120}>
            <h1>
              {h.titleA}
              <br />
              <em className="shimmer">{h.titleB}</em>
              {h.titleC ? (
                <Fragment>
                  <br />
                  {h.titleC}
                </Fragment>
              ) : null}
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="hero-lede">{h.lede}</p>
          </Reveal>
          <Reveal delay={340}>
            <div className="hero-cta">
              <a className="btn btn-gold" href="#products" onClick={goTo("products")}>
                {h.ctaPrimary}
              </a>
              <a className="btn btn-ghost" href="#export" onClick={goTo("export")}>
                {h.ctaSecondary}
              </a>
            </div>
          </Reveal>
          <Reveal delay={440}>
            <div className="hero-stats">
              {h.stats.map((s, i) => (
                <div className="hero-stat" key={i}>
                  <div className="v">{s.v}</div>
                  <div className="l">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <HeroVisual />
      </div>
    </header>
  );
}
