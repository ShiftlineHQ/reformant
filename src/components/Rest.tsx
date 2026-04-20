import { useState } from "react";
import { Icon, Eyebrow } from "./icons";

export function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-header section-header--center">
          <Eyebrow>pricing</Eyebrow>
          <h2 className="display display--xl">
            pick your <em className="italic-accent">vibe</em>.
          </h2>
          <p className="lede" style={{ textAlign: "center" }}>
            no hidden fees. no surprises. just results. cancel anytime — your
            prof won't know either way.
          </p>
        </div>

        <div className="pricing-wrap">
          <svg
            className="pricing-wrap__blob"
            viewBox="0 0 320 160"
            aria-hidden="true"
          >
            <path
              d="M 273.125 46.862 C 261.251 34.988 234.194 40.86 201.547 59.681 C 191.771 23.285 176.79 0 159.996 0 C 143.203 0 128.223 23.284 118.447 59.678 C 85.802 40.858 58.746 34.987 46.872 46.861 C 34.997 58.737 40.87 85.796 59.694 118.446 C 23.291 128.222 0 143.204 0 160 L 320 160 C 320 143.204 296.708 128.222 260.304 118.446 C 279.128 85.797 285.001 58.738 273.125 46.862 Z"
              fill="currentColor"
            />
          </svg>

          <div className="pricing-grid">
            <article className="pcard pcard--free">
              <div>
                <div className="pcard__tag">free forever</div>
                <div className="pcard__price" style={{ marginTop: 12 }}>
                  $0<small>/ month</small>
                </div>
                <p className="pcard__sub" style={{ marginTop: 10 }}>
                  good enough to try. not enough to rely on.
                </p>
              </div>
              <div className="pcard__divider" />
              <ul className="pcard__list">
                <li>
                  <span className="pcard__check">
                    <Icon.Check size={10} />
                  </span>{" "}
                  3 reports per month
                </li>
                <li>
                  <span className="pcard__check">
                    <Icon.Check size={10} />
                  </span>{" "}
                  pdf &amp; topic import
                </li>
                <li>
                  <span className="pcard__check">
                    <Icon.Check size={10} />
                  </span>{" "}
                  up to 10 pages
                </li>
                <li>
                  <span className="pcard__check">
                    <Icon.Check size={10} />
                  </span>{" "}
                  basic citations
                </li>
                <li style={{ opacity: 0.5 }}>
                  <span
                    className="pcard__check"
                    style={{
                      background: "rgba(29,58,0,0.15)",
                      color: "var(--green-deep)",
                    }}
                  >
                    <Icon.X size={10} />
                  </span>{" "}
                  no github import
                </li>
                <li style={{ opacity: 0.5 }}>
                  <span
                    className="pcard__check"
                    style={{
                      background: "rgba(29,58,0,0.15)",
                      color: "var(--green-deep)",
                    }}
                  >
                    <Icon.X size={10} />
                  </span>{" "}
                  no priority queue
                </li>
              </ul>
              <div className="pcard__cta">
                <a
                  className="btn btn--ghost btn--lg"
                  href="#start"
                  style={{ width: "100%" }}
                >
                  get started free <Icon.Arrow size={14} />
                </a>
              </div>
            </article>

            <article className="pcard pcard--pro">
              <span className="pcard__popular">most popular</span>
              <div>
                <div className="pcard__tag">unlimited power</div>
                <div
                  className="pcard__price"
                  style={{ marginTop: 12, color: "var(--white)" }}
                >
                  $12<small>/ month</small>
                </div>
                <p className="pcard__sub" style={{ marginTop: 10 }}>
                  for when deadlines don't care about your feelings.
                </p>
              </div>
              <div className="pcard__divider" />
              <ul className="pcard__list">
                <li>
                  <span className="pcard__check">
                    <Icon.Check size={10} />
                  </span>{" "}
                  unlimited reports
                </li>
                <li>
                  <span className="pcard__check">
                    <Icon.Check size={10} />
                  </span>{" "}
                  github &amp; code import
                </li>
                <li>
                  <span className="pcard__check">
                    <Icon.Check size={10} />
                  </span>{" "}
                  up to 60 pages
                </li>
                <li>
                  <span className="pcard__check">
                    <Icon.Check size={10} />
                  </span>{" "}
                  every citation style
                </li>
                <li>
                  <span className="pcard__check">
                    <Icon.Check size={10} />
                  </span>{" "}
                  charts, diagrams &amp; rich media
                </li>
                <li>
                  <span className="pcard__check">
                    <Icon.Check size={10} />
                  </span>{" "}
                  priority generation (&lt;60s)
                </li>
                <li>
                  <span className="pcard__check">
                    <Icon.Check size={10} />
                  </span>{" "}
                  tone-match from past work
                </li>
              </ul>
              <div className="pcard__cta">
                <a
                  className="btn btn--lime btn--lg"
                  href="#start"
                  style={{ width: "100%" }}
                >
                  power up <Icon.Arrow size={14} />
                </a>
              </div>
            </article>
          </div>

          <p
            style={{
              textAlign: "center",
              marginTop: 28,
              color: "var(--muted)",
              fontSize: 14,
            }}
          >
            student discount auto-applied with .edu/.ac email. billed monthly.
            cancel whenever.
          </p>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState(0);
  const items = [
    {
      q: "is this cheating?",
      a: "we're a drafting tool. you review, edit, own. same as a research assistant or tutor. we don't submit for you — you do, and what you submit is your responsibility. most students use us to skip the structuring drudgework so they can spend time on the thinking that actually matters.",
    },
    {
      q: "will my university detect it?",
      a: "everything reformant writes passes current ai-detection tools. but you should still review and edit the draft like you would any first pass. your paper is better when it's yours.",
    },
    {
      q: "what if the sources are made up?",
      a: "they're not. every citation is fetched from a real paper in the literature — semantic scholar, crossref, arxiv — and cross-verified before it ends up in your draft. you can click any citation to see the source.",
    },
    {
      q: "how accurate is the content?",
      a: "for undergrad coursework, very. for primary research or novel claims, use your judgment — we mark anything speculative with a flag and suggest you verify. always review before submitting.",
    },
    {
      q: "what languages does it work in?",
      a: "every language. we support all major languages and dialects.",
    },
    {
      q: "do you keep my work?",
      a: "we store your drafts so you can come back to them. they're encrypted, private, and never used to train models. delete anything anytime — it's gone for good.",
    },
    {
      q: "can i cancel anytime?",
      a: "yes, anytime, no questions asked. you keep access until the end of your billing period. your prof won't know either way.",
    },
  ];
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-header section-header--center">
          <Eyebrow>questions, honestly</Eyebrow>
          <h2 className="display display--lg">
            the things you'd ask a <em className="italic-accent">friend</em>.
          </h2>
        </div>
        <div className="faq">
          {items.map((it, i) => (
            <div className="faq__item" key={i} data-open={open === i}>
              <button
                className="faq__q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                {it.q}
                <span className="faq__icon">
                  <Icon.Plus size={14} />
                </span>
              </button>
              <div className="faq__a">{it.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="section section--tight" id="start">
      <div className="container">
        <div className="final-cta">
          <div className="final-cta__blob-1" aria-hidden="true" />
          <div className="final-cta__blob-2" aria-hidden="true" />
          <h2>
            your deadline is friday.
            <br />
            <em>ours was tuesday.</em>
          </h2>
          <div className="final-cta__right">
            <p className="final-cta__sub">
              start free. three reports on us. no card, no commitment, no
              judgement.
            </p>
            <div className="final-cta__row">
              <a className="btn btn--lime btn--lg" href="#start">
                start writing <Icon.Arrow size={14} />
              </a>
              <a
                className="btn"
                href="#demo"
                style={{
                  background: "transparent",
                  color: "var(--lime)",
                  border: "1px solid rgba(173,242,63,0.35)",
                }}
              >
                watch 60s demo
              </a>
            </div>
            <p className="final-cta__small">
              cancel anytime. your prof won't know either way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img
              src="/assets/favicon.svg"
              alt="reformant"
              height="28"
              width="28"
              style={{ height: 28, width: 28 }}
            />
            <p className="footer__brand-tag">
              university autopilot. drop anything in. get a polished paper out.
              built for students who'd rather be doing anything else.
            </p>
            <div className="footer__social">
              <a href="#" aria-label="Telegram">
                <Icon.Telegram />
              </a>
            </div>
          </div>
          <div className="footer__col">
            <h5>product</h5>
            <ul>
              <li>
                <a href="#how">how it works</a>
              </li>
              <li>
                <a href="#features">features</a>
              </li>
              <li>
                <a href="#pricing">pricing</a>
              </li>
              <li>
                <a href="#">changelog</a>
              </li>
              <li>
                <a href="#">roadmap</a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h5>resources</h5>
            <ul>
              <li>
                <a href="#faq">faq</a>
              </li>
              <li>
                <a href="#">blog</a>
              </li>
              <li>
                <a href="#">help center</a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h5>company</h5>
            <ul>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
              <li>
                <a href="#">privacy</a>
              </li>
              <li>
                <a href="#">terms</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bar">
          <div>
            © 2026 Shiftline HQ. made for students, by students who were also
            very tired.
          </div>
          <div>english · russian</div>
        </div>
      </div>
    </footer>
  );
}
