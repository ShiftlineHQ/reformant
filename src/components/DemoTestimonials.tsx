import { useEffect, useState } from 'react';
import { Icon } from './icons';

export function Demo() {
  const [step, setStep] = useState(0);
  const steps = [
    { label: 'parsing input', pct: 100 },
    { label: 'drafting structure', pct: 100 },
    { label: 'pulling citations', pct: 72 },
    { label: 'generating figures', pct: 34 },
  ];

  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % 4), 1600);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="demo">
          <div>
            <span className="eyebrow">a peek</span>
            <h2 className="display display--lg" style={{ marginTop: 14 }}>
              one prompt in. <em className="italic-accent">whole paper</em> out.
            </h2>
            <p className="lede" style={{ marginTop: 16 }}>
              say what it's about, how long, and which uni. done. we'll match your tone, pick relevant sources, and draw the charts too.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
              <a className="btn btn--primary btn--lg" href="#start">try it yourself <Icon.Arrow size={14}/></a>
              <a className="btn btn--ghost btn--lg" href="#demo">watch demo</a>
            </div>
          </div>

          <div className="demo__window" aria-hidden="true">
            <div className="demo__chrome">
              <span className="tdot"/><span className="tdot"/><span className="tdot"/>
              <span className="demo__chrome__url">app.reformant.com/new</span>
            </div>
            <div className="demo__body">
              <label style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>prompt</label>
              <div className="demo__input demo__input--typing" style={{ marginTop: 8 }}>
                <Icon.Sparkles size={16} />
                10-page essay on renewable energy in europe, harvard style
              </div>
              <div className="demo__pills">
                <span className="demo__pill"><Icon.Doc size={12}/> syllabus.pdf</span>
                <span className="demo__pill" style={{ background: 'var(--yellow)' }}><Icon.Github size={12}/> energy-data</span>
                <span className="demo__pill" style={{ background: 'var(--pink)' }}>oxford · harvard</span>
              </div>
              <div className="demo__progress">
                {steps.map((s, i) => {
                  const active = i === step;
                  const done = i < step || (step === steps.length - 1 && i === step);
                  return (
                    <div className="demo__progress-row" key={s.label}>
                      <span style={{
                        width: 16, height: 16, borderRadius: '50%',
                        background: done ? 'var(--lime)' : active ? 'var(--yellow)' : 'rgba(29,58,0,0.1)',
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--green-deep)', flexShrink: 0
                      }}>
                        {done && <Icon.Check size={9}/>}
                      </span>
                      <span style={{ flexShrink: 0, minWidth: 120 }}>{s.label}</span>
                      <div className="demo__progress-bar">
                        <div className="demo__progress-fill" style={{ width: (done ? 100 : active ? s.pct : 0) + '%', transition: 'width .8s ease' }}/>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const items = [
    { quote: "handed in a 15-page thesis at 3pm that i started at 11am. my supervisor said it was my best work yet. i am not okay.", name: "amelia t.", role: "msc economics, lse", avatar: 'var(--lime)' },
    { quote: "i fed it my github repo and got a 20-page technical report with actual architecture diagrams. still don't fully believe it.", name: "marco r.", role: "cs, tu delft", avatar: 'var(--yellow)' },
    { quote: "bibliography. it did the bibliography. you don't understand. it did the bibliography.", name: "priya s.", role: "law, oxford", avatar: 'var(--pink)' },
    { quote: "the fact that it matches my uni's weird margin rules alone is worth the $12.", name: "jonas w.", role: "engineering, eth zürich", avatar: 'var(--lime)' },
    { quote: "i proofread it thinking i'd find ai slop. it caught two things i was actually wrong about.", name: "sofia m.", role: "biology, stanford", avatar: 'var(--yellow)' },
    { quote: "we're not talking about this in the group chat and that's the only rule.", name: "alex k.", role: "history, nyu", avatar: 'var(--pink)' },
  ];

  return (
    <section className="section" id="testimonials" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div className="section-header section-header--center">
          <span className="eyebrow">
            <span className="stars">
              <Icon.Star/><Icon.Star/><Icon.Star/><Icon.Star/><Icon.Star/>
            </span>
            4.9 on the student grapevine
          </span>
          <h2 className="display display--lg">
            students are <em className="italic-accent">unwell</em> about this.
          </h2>
        </div>

        <div className="testimonials">
          {items.map((t, i) => (
            <figure className="tcard" key={i}>
              <blockquote className="tcard__quote">"{t.quote}"</blockquote>
              <figcaption className="tcard__author">
                <div className="tcard__avatar" style={{ background: t.avatar }}>{t.name[0].toUpperCase()}</div>
                <div className="tcard__meta">
                  <div className="tcard__name">{t.name}</div>
                  <div className="tcard__role">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
