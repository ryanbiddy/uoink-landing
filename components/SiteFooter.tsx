type SiteFooterProps = {
  screenLabel: string;
};

export function SiteFooter({ screenLabel }: SiteFooterProps) {
  return (
    <footer className="site-footer" data-screen-label={`${screenLabel} / footer`}>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="wm-line"><uoink-mark></uoink-mark><span className="oink">OINK</span></span>
            <p>The YouTube layer for any AI. Local-first. Open source. Made in public.</p>
          </div>
          <div>
            <h5>Product</h5>
            <ul>
              <li><a href="/creators">For creators</a></li>
              <li><a href="/research">For research</a></li>
              <li><a href="/agents">For agents</a></li>
              <li><a href="/hooks">Hook taxonomy</a></li>
              <li><a href="/install">Install</a></li>
            </ul>
          </div>
          <div>
            <h5>Build</h5>
            <ul>
              <li><a href="/agent-docs">Agent docs</a></li>
              <li><a href="https://github.com/ryanbiddy/uoink">GitHub {"\u2192"}</a></li>
              <li><a href="https://github.com/ryanbiddy/uoink/blob/main/CHANGELOG.md">Changelog {"\u2192"}</a></li>
              <li><a href="/agent-docs#skill">Operator Skill</a></li>
              <li><a href="/llms.txt">llms.txt</a></li>
            </ul>
          </div>
          <div>
            <h5>About</h5>
            <ul>
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="https://ryanbiddy.com">Made by Ryan Biddy {"\u2192"}</a></li>
              <li><a href="https://github.com/ryanbiddy/uoink/blob/main/LICENSE">MIT License</a></li>
              <li><a href="mailto:hi@uoink.video">hi@uoink.video</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>uoink<span className="dot">.</span>video <span className="dot">{"\u00b7"}</span> v2.0 <span className="dot">{"\u00b7"}</span> {"\u00a9"} <span data-year>2026</span></span>
          <span>{"\u2605"} Take it. It&apos;s yours. {"\u2605"}</span>
        </div>
      </div>
    </footer>
  );
}
