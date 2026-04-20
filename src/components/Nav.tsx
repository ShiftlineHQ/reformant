import { useEffect, useState } from "react";
import { Icon } from "./icons";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="nav"
      style={{ boxShadow: scrolled ? "0 1px 0 rgba(29,58,0,0.08)" : "none" }}
    >
      <div className="container">
        <div className="nav__inner">
          <a href="#top" aria-label="reformant — home">
            <img
              className="nav__logo"
              src={`${import.meta.env.BASE_URL}assets/logo.svg`}
              alt="reformant"
              width="126"
              height="28"
            />
          </a>
          <nav className="nav__links" aria-label="Primary">
            <a href="#how">how it works</a>
            <a href="#features">features</a>
            <a href="#pricing">pricing</a>
            <a href="#faq">faq</a>
          </nav>
          <div className="nav__cta">
            <a
              className="btn btn--plain"
              href="#login"
              style={{ display: "none" }}
            >
              sign in
            </a>
            <a className="btn btn--ghost" href="#login">
              sign in
            </a>
            <a className="btn btn--primary" href="#start">
              start writing <Icon.Arrow size={14} />
            </a>
            <button
              className="nav__toggle"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <Icon.Menu />
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div
            style={{
              padding: "12px 0 20px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              borderTop: "1px solid var(--border)",
            }}
          >
            <a href="#how" onClick={() => setMobileOpen(false)}>
              how it works
            </a>
            <a href="#features" onClick={() => setMobileOpen(false)}>
              features
            </a>
            <a href="#pricing" onClick={() => setMobileOpen(false)}>
              pricing
            </a>
            <a href="#faq" onClick={() => setMobileOpen(false)}>
              faq
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
