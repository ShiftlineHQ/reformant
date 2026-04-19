function Marquee() {
  const unis = [
    'oxford', 'stanford', 'imperial', 'mit', 'nyu', 'ucla', 'utoronto', 'ethz', 'tu delft'
  ];
  return (
    <section className="marquee" aria-label="Used by students at">
      <div className="container">
        <p className="marquee__label">used by students at</p>
        <div className="marquee__track">
          {unis.map(u => <span key={u} className="marquee__item">{u}</span>)}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="container">
        <div className="how" style={{ padding: 'clamp(48px, 6vw, 96px)' }}>
          <div className="how__header">
            <div>
              <span className="eyebrow">how it works</span>
              <h2 className="display display--xl" style={{ marginTop: 14 }}>
                2 steps to <em className="italic-accent">nail it</em> every time.
              </h2>
            </div>
            <p className="lede">
              no complicated setup. no prompt engineering. no "templates library." drop what you have, come back to a finished draft.
            </p>
          </div>

          <div className="steps">
            <article className="step-card">
              <span className="badge badge--1">step 1</span>
              <h3>throw anything at it</h3>
              <p>pdf, github repo, lecture notes, or just a topic. reformant reads everything and figures out what the paper should say.</p>
              <div className="step-card__visual">
                <span className="chip"><Icon.Doc size={14}/>pdf</span>
                <span className="chip"><Icon.Github size={14}/>github</span>
                <span className="chip"><Icon.Sparkles size={14}/>topic</span>
                <span className="chip">.docx</span>
                <span className="chip">lecture</span>
              </div>
            </article>

            <article className="step-card" style={{ background: '#FFF6E5', border: '1px solid rgba(242,182,63,0.3)' }}>
              <span className="badge badge--2">step 2</span>
              <h3>go touch grass ☕</h3>
              <p>seriously. make coffee. watch a movie. ai is on it. you'll get a notification when it's done — usually 2–4 minutes.</p>
              <div className="step-card__visual" style={{ borderTopColor: 'rgba(242,182,63,0.35)' }}>
                <span className="chip" style={{ background: 'rgba(255,255,255,0.7)' }}>
                  <Icon.Clock size={14}/>
                  ~3 min
                </span>
                <span className="chip" style={{ background: 'rgba(255,255,255,0.7)' }}>
                  <span className="dot" style={{ width: 8, height: 8, boxShadow: 'none' }} />
                  working on it
                </span>
              </div>
            </article>

            <article className="step-card">
              <span className="badge badge--3">step 3</span>
              <h3>just hit submit</h3>
              <p>you get a polished draft in your uni's format, ready to export or tweak. bibliography included. charts drawn. done.</p>
              <ul className="check-list">
                <li><span className="check-list__box" style={{ color: 'var(--green-deep)' }}><Icon.Check size={10}/></span> uni formatting, sorted</li>
                <li><span className="check-list__box" style={{ color: 'var(--green-deep)' }}><Icon.Check size={10}/></span> bibliography included</li>
                <li><span className="check-list__box" style={{ color: 'var(--green-deep)' }}><Icon.Check size={10}/></span> charts &amp; rich media</li>
              </ul>
            </article>
          </div>

          {/* Callout */}
          <aside className="callout" role="figure" aria-label="20 pages done for you">
            <div className="callout__number" aria-hidden="true">20</div>
            <div>
              <div className="callout__label">meanwhile</div>
              <p className="callout__text">
                <strong>pages done for you.</strong><br/>
                structure, citations, charts — all in.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

window.Marquee = Marquee;
window.HowItWorks = HowItWorks;
