import { useLang } from "../i18n/LangContext";
import { Reveal } from "../components/Reveal";
import { useInView } from "../hooks/useInView";

export function Process() {
  const { t } = useLang();
  const pr = t.process;
  const { ref: trackRef, inView: lit } = useInView<HTMLDivElement>();

  return (
    <section className="section" id="process">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="span" className="eyebrow">
            {pr.eyebrow}
          </Reveal>
          <Reveal delay={100}>
            <h2>{pr.title}</h2>
          </Reveal>
          <Reveal delay={180}>
            <p>{pr.lede}</p>
          </Reveal>
        </div>
        <div className={"process-track" + (lit ? " lit" : "")} ref={trackRef}>
          <div className="process-line">
            <div className="process-line-fill" style={{ width: lit ? "100%" : "0%" }} />
          </div>
          <div className="process-steps">
            {pr.steps.map((st, i) => (
              // className must stay static: the reveal hook adds `.in` imperatively,
              // so a changing className here would wipe it on re-render. `lit` lives
              // on .process-track instead (see .process-track.lit .pstep-dot in CSS).
              <Reveal key={i} delay={i * 110} className="pstep">
                <div className="pstep-dot">{st.n}</div>
                <h4>{st.t}</h4>
                <p>{st.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
