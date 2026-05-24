type ActiveLink = "creators" | "research" | "agents" | "hooks" | "install" | null;

type TopChromeProps = {
  active?: ActiveLink;
  navCtaHref?: string;
  navCtaText?: string;
  screenLabel: string;
};

const links = [
  { id: "creators", href: "/creators", label: "Creators" },
  { id: "research", href: "/research", label: "Research" },
  { id: "agents", href: "/agents", label: "Agents" },
  { id: "hooks", href: "/hooks", label: "Hooks" },
  { id: "install", href: "/install", label: "Install" },
] as const;

export function TopChrome({ active = null, navCtaHref = "/install", navCtaText = "\u2193 Get Uoink", screenLabel }: TopChromeProps) {
  return (
    <>
      <div className="ticker" role="banner" data-screen-label={`${screenLabel} / top-ticker`}>
        <div className="container row">
          <span><span className="star">{"\u2605"}</span> <b>UOINK v2.0</b> {"\u00b7"} the YouTube layer for any AI</span>
          <span>uoink.video {"\u00b7"} Windows live {"\u00b7"} Mac v2.1 in queue {"\u00b7"} CWS pending <span className="star">{"\u2605"}</span></span>
        </div>
      </div>

      <nav className="top-nav" aria-label="primary" data-screen-label={`${screenLabel} / nav`}>
        <div className="container nav-inner">
          <a href="/" className="brand" aria-label="Uoink home">
            <span className="wm-line"><uoink-mark></uoink-mark><span className="oink">OINK</span></span>
          </a>
          <div className="nav-links" role="menubar">
            {links.map((link) => (
              <a key={link.id} href={link.href} className={active === link.id ? "active" : undefined}>{link.label}</a>
            ))}
          </div>
          <a className="nav-cta" href={navCtaHref}>{navCtaText}</a>
          <button className="nav-burger" data-nav-burger aria-label="Open menu">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 4h12M2 8h12M2 12h12" /></svg>
          </button>
        </div>
      </nav>

      <div className="mobile-menu" data-mobile-menu aria-hidden="true" data-screen-label={`${screenLabel} / mobile-menu`}>
        <button className="close" data-nav-close aria-label="Close">{"\u2715"}</button>
        <span className="wm-line" style={{ fontSize: 48, color: "var(--vermillion)" }}><uoink-mark></uoink-mark><span className="oink">OINK</span></span>
        <div className="links">
          {links.slice(0, 3).map((link) => (
            <a key={link.id} href={link.href} className={active === link.id ? "active" : undefined}>{link.label}</a>
          ))}
          <a href="/agent-docs">Agent docs</a>
          {links.slice(3).map((link) => (
            <a key={link.id} href={link.href} className={active === link.id ? "active" : undefined}>{link.label}</a>
          ))}
          <a href="/privacy">Privacy</a>
        </div>
        <a className="nav-cta" href="/install">{"\u2193"} Get Uoink for Windows</a>
      </div>
    </>
  );
}
