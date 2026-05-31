import { useLang } from "../i18n/LangContext";
import { ImageSlot } from "../components/ImageSlot";
import { Reveal } from "../components/Reveal";
import { CountUp } from "../components/CountUp";

// Atelier / gifts shot for the story column. Swap src/assets/story.jpg for your own.
import storyPhoto from "../assets/story.jpg";

export function Story() {
  const { t } = useLang();
  const s = t.story;
  return (
    <section className="section story" id="story">
      <div className="wrap">
        <div className="story-grid">
          <div>
            <Reveal as="span" className="eyebrow">
              {s.eyebrow}
            </Reveal>
            <Reveal delay={100}>
              <h2 style={{ fontSize: "clamp(34px,4.4vw,60px)", color: "var(--cream)", marginTop: 22 }}>
                {s.title}
              </h2>
            </Reveal>
            <div className="story-body">
              {s.body.map((para, i) => (
                <Reveal key={i} delay={160 + i * 80}>
                  <p>{para}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={340}>
              <p className="story-pull">{s.pull}</p>
            </Reveal>
            <Reveal delay={420}>
              <p className="story-sig">{s.signature}</p>
            </Reveal>
            <Reveal delay={140}>
              <div className="story-stats" style={{ marginTop: 40 }}>
                {s.stats.map((st, i) => (
                  <div className="story-stat" key={i}>
                    <div className="v">
                      <CountUp value={st.v} />
                    </div>
                    <div className="l">{st.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="story-visual">
              <ImageSlot src={storyPhoto} alt="The Latte atelier" placeholder={t.media.story} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
