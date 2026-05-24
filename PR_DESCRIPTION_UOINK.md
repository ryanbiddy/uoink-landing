# Site update: Uoink v3 production port

## What changed

- Ported the Claude Design static prototype into a production Next.js App Router site.
- Added all eight routes: `/`, `/creators`, `/research`, `/agents`, `/agent-docs`, `/install`, `/hooks`, `/privacy`.
- Extracted the shared top ticker/nav/mobile menu and footer into React components.
- Preserved the locked Uoink v3 Heist brand system, global CSS, custom `<uoink-mark>` element, favicons, manifest, and OG card.
- Removed the prototype-only inline React/Babel Tweaks panel from production.
- Added page metadata, Open Graph/Twitter cards, schema.org `SoftwareApplication`, `robots.txt`, `sitemap.xml`, and `/llms.txt`.
- Added a mobile overflow guard for inline prototype grids so the site collapses more safely on narrow screens.

## Decisions made

- Used Next.js 14 App Router instead of Next.js 15 so the site builds against the existing local/Vercel-compatible runtime already used by the landing repo. The app is static-prerendered and can be upgraded later with minimal surface area.
- Defaulted canonical URLs to `https://uoink.video` via `NEXT_PUBLIC_CANONICAL_URL`, so previews or a domain change can be handled with one env var.
- Kept Uoink as the public brand and updated visible installer copy to `Uoink-Setup-2.0.0.exe`.
- Kept `uoink_*` tool names in the public agent-facing copy, matching the new brand direction.
- Kept the product repo links pointed at `github.com/ryanbiddy/uoink`, per the handoff, even though the product repo rename is still an open product task.

## Verification

- `next build` passes.
- All public routes return `200` locally.
- `/llms.txt` returns `text/plain; charset=utf-8`.
- `/sitemap.xml` and `/robots.txt` render locally.
- Checked desktop homepage and mobile install screenshots with headless Edge.

## TODOs for Ryan

- Create the empty GitHub repo `ryanbiddy/uoink-site`, then push this local repo to `main`.
- Connect `ryanbiddy/uoink-site` to Vercel and add `uoink.video` plus `www.uoink.video`.
- Point DNS to Vercel and verify HTTPS provisioning.
- Publish the real GitHub Release assets: `Uoink-Setup-2.0.0.exe` and the extension sideload zip.
- Confirm the Chrome Web Store title rename timing: resubmit as Uoink now, or keep Yoink until the product migration lands.
- Confirm MCP alias strategy: hard rename to `uoink_*` now, or soft-alias `yoink_*` for 6 months.
- Confirm install directory migration from `%LOCALAPPDATA%\Yoink\` to `%LOCALAPPDATA%\Uoink\`.
- Confirm the Mac v2.1 waitlist destination.
- Decide whether `/llms.txt` needs additional product repo details after the rename lands.

## Not done

- Did not rename the product repo or change product code.
- Did not create the GitHub repo or Vercel project because this environment has no GitHub CLI token, GitHub token, or Vercel token available.
- Did not add analytics, testimonials, fake metrics, pricing, or unsupported platform claims.
