import { useLang } from "../i18n/LangContext";
import { Logo } from "../components/Logo";

export function Footer() {
  const { t } = useLang();
  const f = t.footer;
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo size={40} />
            <p>{f.tagline}</p>
            <div className="news">
              <input type="email" placeholder={f.newsletter.ph} />
              <button className="btn btn-gold" style={{ padding: "12px 20px" }}>
                {f.newsletter.btn}
              </button>
            </div>
          </div>
          {f.cols.map((col, i) => (
            <div className="footer-col" key={i}>
              <h5>{col.h}</h5>
              {col.links.map((l, j) => (
                <a key={j} href="#">
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bot">
          <span>{f.rights}</span>
          <span>{f.newsletter.h}</span>
        </div>
      </div>
    </footer>
  );
}
