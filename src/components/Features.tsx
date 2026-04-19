import { Icon } from './icons';

export function Features() {
  return (
    <section className="section" id="features" style={{ background: '#fafcf5' }}>
      <div className="container">
        <div className="section-header section-header--center">
          <span className="eyebrow">what it actually does</span>
          <h2 className="display display--xl">
            every boring part, <em className="italic-accent">handled</em>.
          </h2>
          <p className="lede" style={{ textAlign: 'center' }}>
            you focus on the thinking. we'll handle formatting, references, charts, and everything in between.
          </p>
        </div>

        <div className="features features--bento">
          <article className="feature feature--dark" style={{ minHeight: 260 }}>
            <div className="feature__icon" style={{ color: 'var(--lime)' }}>
              <Icon.Sparkles size={22} />
            </div>
            <h4>any input. any output.</h4>
            <p>drop a pdf syllabus, a github repo, a photo of your lecture whiteboard. we figure out the rest.</p>
            <div style={{ display: 'flex', gap: 8, marginTop: 'auto', flexWrap: 'wrap' }}>
              <span className="chip" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.1)' }}>.pdf</span>
              <span className="chip" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.1)' }}>.docx</span>
              <span className="chip" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.1)' }}>github</span>
              <span className="chip" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.1)' }}>topic</span>
              <span className="chip" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.1)' }}>images</span>
            </div>
          </article>

          <article className="feature feature--lime">
            <div className="feature__icon"><Icon.Citation size={22}/></div>
            <h4>citations, real ones.</h4>
            <p>apa, mla, harvard, ieee, oxford. every claim sourced to peer-reviewed work.</p>
          </article>

          <article className="feature feature--yellow">
            <div className="feature__icon"><Icon.Chart size={22}/></div>
            <h4>charts &amp; diagrams.</h4>
            <p>generated inline from your data or the literature. not stock images.</p>
          </article>

          <article className="feature">
            <div className="feature__icon" style={{ background: 'rgba(239,149,244,0.2)' }}><Icon.Shield size={22}/></div>
            <h4>your uni's formatting.</h4>
            <p>pick your school, get the exact template — margins, headers, cover page, table of contents.</p>
          </article>

          <article className="feature">
            <div className="feature__icon"><Icon.Clock size={22}/></div>
            <h4>draft in 3 minutes.</h4>
            <p>a 20-page paper ready before your coffee's even warm. priority mode shaves it to under a minute.</p>
          </article>

          <article className="feature feature--pink">
            <div className="feature__icon" style={{ background: 'rgba(255,255,255,0.5)' }}><Icon.Doc size={22}/></div>
            <h4>export anywhere.</h4>
            <p>.docx, .pdf, overleaf, notion, google docs. keep editing in whatever you like.</p>
          </article>

          <article className="feature">
            <div className="feature__icon"><Icon.Sparkles size={22}/></div>
            <h4>tone that's yours.</h4>
            <p>trained on your previous work. sounds like you, not like chatgpt.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function Compare() {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="eyebrow">why not just diy</span>
          <h2 className="display display--lg">
            the old way vs. <em className="italic-accent">autopilot</em>.
          </h2>
        </div>

        <div className="compare">
          <div className="compare__col compare__col--bad">
            <div className="compare__header">
              <Icon.X size={16} /> doing it yourself at 2am
            </div>
            <ul className="compare__list">
              <li><span className="compare__mark"><Icon.X size={10}/></span> 6 hours re-reading the same paragraph</li>
              <li><span className="compare__mark"><Icon.X size={10}/></span> formatting bibliography by hand</li>
              <li><span className="compare__mark"><Icon.X size={10}/></span> "how do I insert a figure caption"</li>
              <li><span className="compare__mark"><Icon.X size={10}/></span> three rewrites to hit the word count</li>
              <li><span className="compare__mark"><Icon.X size={10}/></span> googling your uni's margin rules</li>
              <li><span className="compare__mark"><Icon.X size={10}/></span> crying quietly. no sleep.</li>
            </ul>
          </div>
          <div className="compare__col compare__col--good">
            <div className="compare__header">
              <Icon.Check size={16} /> reformant autopilot
            </div>
            <ul className="compare__list">
              <li><span className="compare__mark"><Icon.Check size={10}/></span> 3 minutes from upload to draft</li>
              <li><span className="compare__mark"><Icon.Check size={10}/></span> bibliography drawn automatically</li>
              <li><span className="compare__mark"><Icon.Check size={10}/></span> figures, captions, citations inline</li>
              <li><span className="compare__mark"><Icon.Check size={10}/></span> exactly the word count you asked for</li>
              <li><span className="compare__mark"><Icon.Check size={10}/></span> your uni's template, pre-loaded</li>
              <li><span className="compare__mark"><Icon.Check size={10}/></span> 8 hours of sleep. unheard of.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
