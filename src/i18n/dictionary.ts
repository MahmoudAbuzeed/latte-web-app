/* ============================================================
   LATTE — i18n dictionary (English + Egyptian Arabic)
   Fine-chocolate house · Mansoura, Egypt
   We curate premium imported chocolate into gift-ready products
   and supply merchants & stores across Egypt.
   ============================================================ */

export type Lang = "en" | "ar";

export interface NavLink {
  id: string;
  label: string;
}
export interface Stat {
  v: string;
  l: string;
}
export interface ProductItem {
  name: string;
  pct: string;
  note: string;
  desc: string;
  tag: string;
}
export interface ProcessStep {
  n: string;
  t: string;
  d: string;
}
export interface Testimonial {
  q: string;
  a: string;
  c: string;
}
export interface ContactInfo {
  t: string;
  d: string;
}
export interface FooterCol {
  h: string;
  links: string[];
}

export interface Content {
  dir: "ltr" | "rtl";
  media: { hero: string; product: string; story: string };
  nav: { links: NavLink[]; cta: string; langLabel: string };
  hero: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    titleC: string;
    lede: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
    stats: Stat[];
  };
  products: {
    eyebrow: string;
    title: string;
    lede: string;
    cta: string;
    items: ProductItem[];
  };
  story: {
    eyebrow: string;
    title: string;
    body: string[];
    pull: string;
    signature: string;
    stats: Stat[];
  };
  process: {
    eyebrow: string;
    title: string;
    lede: string;
    steps: ProcessStep[];
  };
  exporting: {
    eyebrow: string;
    title: string;
    lede: string;
    marquee: string[];
    stats: Stat[];
    regions: string[];
    cta: string;
  };
  testimonials: { eyebrow: string; title: string; items: Testimonial[] };
  contact: {
    eyebrow: string;
    title: string;
    lede: string;
    form: {
      name: string;
      email: string;
      company: string;
      type: string;
      message: string;
      submit: string;
      sent: string;
    };
    types: string[];
    info: ContactInfo[];
  };
  footer: {
    tagline: string;
    cols: FooterCol[];
    newsletter: { h: string; p: string; ph: string; btn: string };
    rights: string;
  };
}

export const DICTIONARY: Record<Lang, Content> = {
  en: {
    dir: "ltr",
    media: {
      hero: "Drop your hero gift photo",
      product: "Drop a product photo",
      story: "Drop a photo of your atelier / gifts",
    },
    nav: {
      links: [
        { id: "products", label: "Collection" },
        { id: "story", label: "Our Story" },
        { id: "process", label: "Our Craft" },
        { id: "export", label: "Where to Buy" },
        { id: "contact", label: "Contact" },
      ],
      cta: "Become a Stockist",
      langLabel: "العربية",
    },
    hero: {
      eyebrow: "Fine Chocolate · Mansoura, Egypt",
      titleA: "The art of",
      titleB: "chocolate",
      titleC: "",
      lede: "The world's finest chocolate, presented in ways you haven't seen before — handcrafted boxes, chocolate bouquets and original creations, found in shops across Egypt.",
      ctaPrimary: "Explore the Collection",
      ctaSecondary: "Where to Buy",
      scroll: "Scroll to discover",
      stats: [
        { v: "100%", l: "Premium imported chocolate" },
        { v: "12+", l: "Cities across Egypt" },
        { v: "50+", l: "Stores & stockists" },
      ],
    },
    products: {
      eyebrow: "The Collection",
      title: "Chocolate, in beautiful ways",
      lede: "Premium imported chocolate, composed into something worth giving — gift boxes, chocolate bouquets and bespoke creations for every occasion.",
      cta: "View full collection",
      items: [
        {
          name: "Signature Gift Box",
          pct: "24",
          note: "Chocolate pieces",
          desc: "An assortment of pralines, truffles and ganaches in our signature keepsake box.",
          tag: "Bestseller",
        },
        {
          name: "Petite Treat Box",
          pct: "12",
          note: "Chocolate pieces",
          desc: "A smaller box of handpicked favourites — perfect for a thank-you or a little 'because'.",
          tag: "",
        },
        {
          name: "Chocolate Rose Bouquet",
          pct: "15",
          note: "Chocolate roses",
          desc: "Foil-wrapped chocolate roses arranged and tied like a real bouquet.",
          tag: "Loved",
        },
        {
          name: "Bloom & Cocoa Bouquet",
          pct: "Mixed",
          note: "Flowers + chocolate",
          desc: "Fresh blooms and chocolate together in one striking hand-tied bouquet.",
          tag: "New",
        },
        {
          name: "Luxury Hamper",
          pct: "Grand",
          note: "Curated hamper",
          desc: "Chocolate, treats and keepsakes layered into a generous gift hamper.",
          tag: "",
        },
        {
          name: "Corporate & Custom",
          pct: "Bulk",
          note: "Made to order",
          desc: "Branded boxes and bulk gifting for companies, weddings and occasions.",
          tag: "",
        },
      ],
    },
    story: {
      eyebrow: "Our Story",
      title: "A gift, considered",
      body: [
        "Latte began in Mansoura with one belief: a gift should feel as considered as the moment it celebrates. We handpick the finest couverture from the world's most renowned chocolate houses, then dress it in the accessories and packaging it deserves.",
        "Then we do the part that matters: we curate, assemble and wrap every gift by hand, and supply them — retail-ready — to trusted shops across Egypt, so the perfect gift is always close to you.",
      ],
      pull: "We don't just sell chocolate — we find new and beautiful ways to enjoy it.",
      signature: "— The Latte Team",
      stats: [
        { v: "100%", l: "Imported premium chocolate" },
        { v: "12+", l: "Cities stocked" },
        { v: "50+", l: "Partner stores" },
        { v: "5K+", l: "Gifts enjoyed" },
      ],
    },
    process: {
      eyebrow: "Our Craft",
      title: "How your gift is made",
      lede: "From the chocolate we choose to the ribbon we tie, every Latte gift is finished by hand.",
      steps: [
        { n: "01", t: "Source", d: "We bring in premium imported chocolate, accessories and fine packaging." },
        { n: "02", t: "Curate", d: "We compose assortments — flavours, fillings and finishes that belong together." },
        { n: "03", t: "Assemble", d: "Boxes are filled and bouquets are tied, all by hand." },
        { n: "04", t: "Package", d: "Each gift is wrapped and finished — retail-ready and built to impress." },
        { n: "05", t: "Distribute", d: "Supplied to merchants and stores across Egypt, ready for you to find." },
      ],
    },
    exporting: {
      eyebrow: "Where to Buy",
      title: "Find Latte across Egypt.",
      lede: "Latte gifts are stocked by trusted shops and partners in cities across Egypt. Want to carry Latte in your store? We'd love to hear from you.",
      marquee: [
        "Available across Egypt",
        "Stocked in trusted shops",
        "Gift Boxes",
        "Chocolate Bouquets",
        "Become a Stockist",
        "Made in Mansoura",
      ],
      stats: [
        { v: "50+", l: "Partner stores" },
        { v: "12+", l: "Cities served" },
        { v: "100%", l: "Imported chocolate" },
        { v: "5K+", l: "Gifts enjoyed" },
      ],
      regions: ["Mansoura", "Cairo", "Alexandria", "Tanta", "Giza", "Damietta", "Zagazig", "Port Said"],
      cta: "Become a Stockist",
    },
    testimonials: {
      eyebrow: "Loved by gift-givers",
      title: "Made someone's day",
      items: [
        { q: "Picked up a Latte box from a shop in Mansoura for my mum — it looked like a piece of art.", a: "Birthday gift", c: "Mansoura" },
        { q: "We've stocked Latte for a year now — it practically sells itself, and customers keep coming back for it.", a: "Shop Owner", c: "Cairo" },
        { q: "The flower-and-chocolate bouquet was the highlight of the engagement. Everyone asked where it was from.", a: "Engagement gift", c: "Alexandria" },
      ],
    },
    contact: {
      eyebrow: "Get in Touch",
      title: "Stock Latte — or just say hi",
      lede: "Become a stockist, ask where to buy, or request corporate gifting — we read every message.",
      form: {
        name: "Full name",
        email: "Email address",
        company: "Company / shop (optional)",
        type: "I'm interested in",
        message: "Your message",
        submit: "Send request",
        sent: "Thank you — we'll be in touch shortly.",
      },
      types: ["Become a stockist / wholesale", "Where to buy", "Corporate & bulk gifting", "Press & partnerships"],
      info: [
        { t: "Head office", d: "Mansoura, Dakahlia, Egypt" },
        { t: "Email", d: "hello@lattechocolate.com" },
        { t: "Wholesale / WhatsApp", d: "+20 100 000 0000" },
      ],
    },
    footer: {
      tagline: "Premium chocolate — made in Mansoura, found across Egypt.",
      cols: [
        { h: "Explore", links: ["Collection", "Our Story", "Our Craft", "Where to Buy"] },
        { h: "For Stores", links: ["Become a Stockist", "Wholesale", "Corporate Gifts", "Packaging"] },
        { h: "Connect", links: ["Instagram", "Facebook", "WhatsApp", "Contact"] },
      ],
      newsletter: { h: "The Latte Letter", p: "New collections and seasonal gifts, a few times a year.", ph: "Your email", btn: "Subscribe" },
      rights: "© 2026 Latte Chocolate. Made in Mansoura.",
    },
  },

  ar: {
    dir: "rtl",
    media: {
      hero: "اسحب هنا صورة الهدية الرئيسية",
      product: "اسحب صورة المنتج",
      story: "اسحب صورة الأتيليه أو الهدايا",
    },
    nav: {
      links: [
        { id: "products", label: "تشكيلتنا" },
        { id: "story", label: "حكايتنا" },
        { id: "process", label: "شغل إيدينا" },
        { id: "export", label: "فين تلاقينا" },
        { id: "contact", label: "كلّمنا" },
      ],
      cta: "اطلب بالجملة",
      langLabel: "English",
    },
    hero: {
      eyebrow: "شوكولاتة فاخرة · المنصورة، مصر",
      titleA: "فنّ",
      titleB: "الشوكولاتة",
      titleC: "",
      lede: "أحسن شوكولاتة في الدنيا، بنقدّمها بشكل مختلف ومميّز — علب وبوكيهات شوكولاتة وأفكار مبتكرة، هتلاقيها في محلات في كل مصر.",
      ctaPrimary: "اتفرّج على التشكيلة",
      ctaSecondary: "فين تلاقينا",
      scroll: "انزل تكتشف",
      stats: [
        { v: "٪١٠٠", l: "شوكولاتة مستوردة فاخرة" },
        { v: "+١٢", l: "مدينة في مصر" },
        { v: "+٥٠", l: "محل وموزّع" },
      ],
    },
    products: {
      eyebrow: "تشكيلتنا",
      title: "شوكولاتة بطرق تجنّن",
      lede: "شوكولاتة مستوردة فاخرة، متنسّقة بشكل يستاهل الإهداء — علب وبوكيهات شوكولاتة وأفكار حسب الطلب لكل مناسبة.",
      cta: "اتفرّج على التشكيلة كلها",
      items: [
        { name: "علبة لاتيه المميّزة", pct: "٢٤", note: "قطعة شوكولاتة", desc: "تشكيلة برالين وترافل وجاناش في علبة لاتيه اللي تتحفظ للذكرى.", tag: "الأكتر مبيعًا" },
        { name: "علبة صغيّرة", pct: "١٢", note: "قطعة شوكولاتة", desc: "علبة أصغر من المفضّلات المنتقاة — تمام لـ«شكرًا» أو «علشان خاطرك».", tag: "" },
        { name: "بوكيه ورد شوكولاتة", pct: "١٥", note: "وردة شوكولاتة", desc: "ورد شوكولاتة مغلّف ومتنسّق ومتلفوف زي البوكيه الحقيقي.", tag: "محبوب" },
        { name: "بوكيه ورد وشوكولاتة", pct: "مكس", note: "ورد + شوكولاتة", desc: "ورد طبيعي وشوكولاتة مع بعض في بوكيه واحد يلفت النظر.", tag: "جديد" },
        { name: "سلّة فخمة", pct: "فخمة", note: "سلّة منسّقة", desc: "شوكولاتة وحاجات حلوة وهدايا متترصّ في سلّة هدية كبيرة.", tag: "" },
        { name: "هدايا شركات وحسب الطلب", pct: "بالجملة", note: "حسب الطلب", desc: "علب بعلامتك وهدايا بالجملة للشركات والأفراح والمناسبات.", tag: "" },
      ],
    },
    story: {
      eyebrow: "حكايتنا",
      title: "هدية… مدروسة",
      body: [
        "لاتيه بدأت في المنصورة بفكرة واحدة: إن الهدية لازم تبقى مدروسة قدّ المناسبة. بننتقي أفخم شوكولاتة مستوردة من أعرق بيوت الشوكولاتة في العالم، ونختارلها الإكسسوار والتغليف اللي يليق بفخامتها.",
        "وبعدين بنعمل الجزء المهم: بنرصّ ونجهّز ونغلّف كل هدية بإيدينا، ونوزّعها جاهزة على أحسن المحلات في مصر — عشان الهدية المظبوطة تبقى دايمًا قريّبة منك.",
      ],
      pull: "إحنا مش بنبيع شوكولاتة بس — إحنا بنلاقي طرق جديدة وحلوة تستمتع بيها.",
      signature: "— فريق لاتيه",
      stats: [
        { v: "٪١٠٠", l: "شوكولاتة مستوردة فاخرة" },
        { v: "+١٢", l: "مدينة موجودين فيها" },
        { v: "+٥٠", l: "محل شريك" },
        { v: "+٥ آلاف", l: "هدية فرّحت ناس" },
      ],
    },
    process: {
      eyebrow: "شغل إيدينا",
      title: "هديتك بتتجهّز إزاي",
      lede: "من الشوكولاتة اللي بنختارها لحد الشريطة اللي بنربطها، كل هدية لاتيه بتتعمل بإيدينا.",
      steps: [
        { n: "٠١", t: "الاختيار", d: "بنجيب شوكولاتة مستوردة فاخرة، والإكسسوار والتغليف الراقي." },
        { n: "٠٢", t: "التنسيق", d: "بنركّب التشكيلات — نكهات وحشوات ولمسات تكمّل بعضها." },
        { n: "٠٣", t: "التجهيز", d: "بنملا العلب ونلفّ البوكيهات، كله بإيدينا." },
        { n: "٠٤", t: "التغليف", d: "كل هدية بتتغلّف وتتزيّن، جاهزة للعرض وتبهر." },
        { n: "٠٥", t: "التوزيع", d: "بنوصّلها للتجار والمحلات في كل مصر، جاهزة إنك تلاقيها." },
      ],
    },
    exporting: {
      eyebrow: "فين تلاقينا",
      title: "هتلاقي لاتيه في كل مصر.",
      lede: "هدايا لاتيه موجودة في محلات وشركاء موثوقين في مدن كتير في مصر. عايز تبيع لاتيه في محلك؟ يشرّفنا تكلّمنا.",
      marquee: ["موجودين في كل مصر", "في أحسن المحلات", "علب هدايا", "بوكيهات شوكولاتة", "كن موزّعنا", "متعمول في المنصورة"],
      stats: [
        { v: "+٥٠", l: "محل شريك" },
        { v: "+١٢", l: "مدينة بنخدمها" },
        { v: "٪١٠٠", l: "شوكولاتة مستوردة" },
        { v: "+٥ آلاف", l: "هدية فرّحت ناس" },
      ],
      regions: ["المنصورة", "القاهرة", "الإسكندرية", "طنطا", "الجيزة", "دمياط", "الزقازيق", "بورسعيد"],
      cta: "اطلب بالجملة",
    },
    testimonials: {
      eyebrow: "ناس بتحب تهدي",
      title: "فرّحنا ناس كتير",
      items: [
        { q: "اشتريت علبة لاتيه من محل في المنصورة لأمي — شكلها كان زي اللوحة.", a: "هدية عيد ميلاد", c: "المنصورة" },
        { q: "بقالنا سنة بنبيع لاتيه في المحل — بتتباع لوحدها والزباين بترجع تطلبها.", a: "صاحب محل", c: "القاهرة" },
        { q: "بوكيه الورد والشوكولاتة كان أحلى حاجة في الخطوبة. كل الناس سألت بتاع مين.", a: "هدية خطوبة", c: "الإسكندرية" },
      ],
    },
    contact: {
      eyebrow: "كلّمنا",
      title: "وزّع لاتيه… أو سلّم بس",
      lede: "توزيع وجملة، أو بتدوّر تلاقينا فين، أو هدايا شركات — إحنا بنقرا كل رسالة.",
      form: {
        name: "الاسم بالكامل",
        email: "الإيميل",
        company: "الشركة / المحل (اختياري)",
        type: "أنا مهتم بـ",
        message: "رسالتك",
        submit: "ابعت الطلب",
        sent: "ميرسي — هنتواصل معاك قريّب.",
      },
      types: ["توزيع / جملة", "أماكن البيع", "هدايا شركات وبالجملة", "صحافة وشراكات"],
      info: [
        { t: "المقر الرئيسي", d: "المنصورة، الدقهلية، مصر" },
        { t: "الإيميل", d: "hello@lattechocolate.com" },
        { t: "الجملة / واتساب", d: "٠٠٠٠ ٠٠٠ ١٠٠ ٢٠+" },
      ],
    },
    footer: {
      tagline: "شوكولاتة فاخرة — متعمولة في المنصورة، وموجودة في كل مصر.",
      cols: [
        { h: "اتفرّج", links: ["تشكيلتنا", "حكايتنا", "شغل إيدينا", "فين تلاقينا"] },
        { h: "للمحلات", links: ["كن موزّعنا", "الجملة", "هدايا شركات", "التغليف"] },
        { h: "تواصل", links: ["إنستجرام", "فيسبوك", "واتساب", "كلّمنا"] },
      ],
      newsletter: { h: "جواب لاتيه", p: "تشكيلات جديدة وهدايا المواسم، كام مرة في السنة.", ph: "إيميلك", btn: "اشترك" },
      rights: "© ٢٠٢٦ لاتيه شوكولاتة. متعمول في المنصورة.",
    },
  },
};
