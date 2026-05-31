import { useState } from "react";
import { useLang } from "../i18n/LangContext";
import { Reveal } from "../components/Reveal";

export function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div>
            <Reveal as="span" className="eyebrow">
              {c.eyebrow}
            </Reveal>
            <Reveal delay={100}>
              <h2 style={{ fontSize: "clamp(34px,4.4vw,58px)", marginTop: 22 }}>{c.title}</h2>
            </Reveal>
            <Reveal delay={180}>
              <p style={{ color: "var(--cream-faint)", marginTop: 20, fontSize: 18, maxWidth: 440 }}>{c.lede}</p>
            </Reveal>
            <Reveal delay={260}>
              <div className="contact-info" style={{ marginTop: 40 }}>
                {c.info.map((it, i) => (
                  <div className="cinfo" key={i}>
                    <div className="t">{it.t}</div>
                    <div className="d">{it.d}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <form onSubmit={submit}>
              <div className="field-row">
                <div className="field">
                  <label>{c.form.name}</label>
                  <input type="text" required />
                </div>
                <div className="field">
                  <label>{c.form.email}</label>
                  <input type="email" required />
                </div>
              </div>
              <div className="field">
                <label>{c.form.company}</label>
                <input type="text" />
              </div>
              <div className="field">
                <label>{c.form.type}</label>
                <select>
                  {c.types.map((ty, i) => (
                    <option key={i}>{ty}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label>{c.form.message}</label>
                <textarea required></textarea>
              </div>
              <button className="btn btn-gold" type="submit" style={{ width: "100%", justifyContent: "center" }}>
                {c.form.submit}
              </button>
              {sent ? <p className="form-sent">{c.form.sent}</p> : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
