import { useLang } from "../i18n/LangContext";
import { Reveal } from "../components/Reveal";

export function Testimonials() {
  const { t } = useLang();
  const ts = t.testimonials;
  return (
    <section className="section testi">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="span" className="eyebrow">
            {ts.eyebrow}
          </Reveal>
          <Reveal delay={100}>
            <h2>{ts.title}</h2>
          </Reveal>
        </div>
        <div className="testi-grid">
          {ts.items.map((it, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="testi-card">
                <div className="testi-mark">”</div>
                <p className="testi-q">{it.q}</p>
                <div className="testi-by">
                  <div className="a">{it.a}</div>
                  <div className="c">{it.c}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
