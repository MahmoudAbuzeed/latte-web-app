import { useEffect } from "react";
import { useLang } from "./i18n/LangContext";
import { Nav } from "./sections/Nav";
import { Hero } from "./sections/Hero";
import { Products } from "./sections/Products";
import { Story } from "./sections/Story";
import { Process } from "./sections/Process";
import { WhereToBuy } from "./sections/WhereToBuy";
import { Testimonials } from "./sections/Testimonials";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export function App() {
  const { lang } = useLang();

  // Failsafe: never leave a reveal trapped invisible. After a short delay,
  // reveal anything already in view; below-fold items still animate on scroll.
  useEffect(() => {
    const id = window.setTimeout(() => {
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>(".reveal:not(.in)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh && r.bottom > 0) el.classList.add("in");
      });
    }, 2400);
    return () => window.clearTimeout(id);
  }, [lang]);

  return (
    <>
      <Nav />
      <Hero />
      <Products />
      <Story />
      <Process />
      <WhereToBuy />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
