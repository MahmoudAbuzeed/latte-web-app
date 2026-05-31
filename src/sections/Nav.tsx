import { useEffect, useState } from "react";
import { useLang } from "../i18n/LangContext";
import { Logo } from "../components/Logo";
import { scrollToId } from "../lib/scroll";

export function Nav() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };

  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <Logo size={36} />
      <div className={"nav-links" + (open ? " open" : "")}>
        {t.nav.links.map((l) => (
          <a key={l.id} className="nav-link" href={"#" + l.id} onClick={go(l.id)}>
            {l.label}
          </a>
        ))}
        {/* CTA inside the drawer on mobile (top-bar CTA is hidden < 920px) */}
        <a className="btn btn-gold nav-cta-mobile" href="#contact" onClick={go("contact")}>
          {t.nav.cta}
        </a>
      </div>
      <div className="nav-right">
        <button className="lang-toggle" onClick={() => setLang(lang === "en" ? "ar" : "en")}>
          <span style={{ fontSize: 13 }}>⇄</span> {t.nav.langLabel}
        </button>
        <a className="btn btn-gold" href="#contact" onClick={go("contact")} style={{ padding: "11px 22px" }}>
          {t.nav.cta}
        </a>
        <button className="nav-burger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
          </svg>
        </button>
      </div>
    </nav>
  );
}
