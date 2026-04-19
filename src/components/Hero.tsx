import { Icon } from './icons';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__blobs" aria-hidden="true">
        <div className="blob blob--lime" />
        <div className="blob blob--yellow" />
        <div className="blob blob--pink" />
      </div>

      <div className="container">
        <div className="hero__grid">
          <div>
            <span className="eyebrow">university autopilot</span>
            <h1 className="display display--hero hero__headline">
              write <em className="italic-accent">brilliant</em> reports while you sleep.
            </h1>
            <p className="hero__sub">
              throw anything at it — a pdf, a github link, or just a topic — and reformant drafts the whole paper. structure, citations, charts, uni formatting. all in.
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary btn--lg" href="#start">
                start writing free <Icon.Arrow size={16} />
              </a>
              <a className="btn btn--ghost btn--lg" href="#how">see how it works</a>
            </div>
            <div className="hero__meta">
              <span><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#6D9232" strokeWidth="1.4"/><path d="M4 7l2 2 4-4" stroke="#6D9232" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg> no credit card</span>
              <span><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#6D9232" strokeWidth="1.4"/><path d="M4 7l2 2 4-4" stroke="#6D9232" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg> 3 free reports</span>
              <span><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#6D9232" strokeWidth="1.4"/><path d="M4 7l2 2 4-4" stroke="#6D9232" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg> cancel anytime</span>
            </div>
          </div>

          <div className="hero__doc-wrap" aria-hidden="true">
            <div className="doc-stack">
              <div className="doc doc--back-2" />
              <div className="doc doc--back" />
              <div className="doc doc--front">
                <div className="doc__byline">Draft · 12 pages</div>
                <h3 className="doc__title">A Comparative Study of<br/>Renewable Energy Systems</h3>
                <div className="doc__lines">
                  <div className="doc__line doc__line--h" />
                  <div className="doc__line" />
                  <div className="doc__line" />
                  <div className="doc__line" style={{ width: '85%' }} />
                  <div className="doc__line" style={{ width: '92%' }} />
                  <div className="doc__line" style={{ width: '78%' }} />
                </div>
                <div className="doc__chart">
                  <div className="doc__chart-title">Figure 2 · Energy output (kWh)</div>
                  <div className="doc__bar" style={{ width: '100%' }} />
                  <div className="doc__bar" style={{ width: '78%' }} />
                  <div className="doc__bar" style={{ width: '58%' }} />
                  <div className="doc__bar" style={{ width: '40%' }} />
                </div>
                <div className="doc__citation">[1] Smith, J. (2024). Nature Energy, 9(4).</div>
              </div>

              <div className="doc-float doc-float--tl">
                <span className="dot" />
                citations · 24
              </div>
              <div className="doc-float doc-float--ml">
                <span className="dot dot--yellow" />
                drafting chapter 3…
              </div>
              <div className="doc-float doc-float--br">
                <span className="dot dot--pink" />
                apa · oxford · harvard
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
