import { useRef } from "react";
import { useLang } from "../i18n/LangContext";
import { ImageSlot } from "../components/ImageSlot";
import { Reveal } from "../components/Reveal";
import type { ProductItem } from "../i18n/dictionary";

// Product shots in collection order. Swap any file in src/assets/ for your own.
import product1 from "../assets/product-1.jpg";
import product2 from "../assets/product-2.jpg";
import product3 from "../assets/product-3.jpg";
import product4 from "../assets/product-4.jpg";
import product5 from "../assets/product-5.jpg";
import product6 from "../assets/product-6.jpg";

const productPhotos: (string | undefined)[] = [
  product1, // Signature Gift Box
  product2, // Petite Treat Box
  product3, // Chocolate Rose Bouquet
  product4, // Bloom & Cocoa Bouquet
  product5, // Luxury Hamper
  product6, // Corporate & Custom
];

function ProductCard({ p, idx, ph }: { p: ProductItem; idx: number; ph: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (0.5 - py) * 10;
    const ry = (px - 0.5) * 12;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
    el.style.setProperty("--mx", px * 100 + "%");
    el.style.setProperty("--my", py * 100 + "%");
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  };

  return (
    <div className="pcard" ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="pcard-photo">
        <ImageSlot src={productPhotos[idx]} alt={p.name} placeholder={ph} />
        {p.tag ? <span className="pcard-tag">{p.tag}</span> : null}
      </div>
      <div className="pcard-body">
        <div className="pcard-sheen" />
        <div className="pcard-top">
          <div className="pcard-pct">{p.pct}</div>
          <div className="pcard-note">{p.note}</div>
        </div>
        <h3>{p.name}</h3>
        <p>{p.desc}</p>
      </div>
    </div>
  );
}

export function Products() {
  const { t } = useLang();
  const pr = t.products;
  return (
    <section className="section" id="products">
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
        <div className="product-grid">
          {pr.items.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <ProductCard p={p} idx={i} ph={t.media.product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
