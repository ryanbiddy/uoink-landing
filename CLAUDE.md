# Claude Code Context

This repo is the Yoink landing site. It is a Next.js 14 app-router site deployed on Vercel.

Before redesign work, read:

1. [docs/claude-redesign-brief.md](docs/claude-redesign-brief.md)
2. [docs/brand-style-guide.md](docs/brand-style-guide.md)
3. [README.md](README.md)
4. [app/site.ts](app/site.ts)
5. [app/page.tsx](app/page.tsx)
6. [components/SitePrimitives.tsx](components/SitePrimitives.tsx)
7. [app/v2-data.ts](app/v2-data.ts)

The goal is not a small polish pass. The goal is a full-site redesign that feels distinctive, tasteful, and human-made while preserving Yoink's product truth, SEO surface, agent discoverability, route structure, and install accuracy.

Claude Code owns the visual and interaction redesign. Codex will review and handle backend, metadata, route wiring, Vercel deploy, and production verification.

Hard product facts:

- Yoink v2 is Windows-only today.
- Mac is v2.1, not available now.
- Chrome Web Store listing is pending approval.
- Current download CTA points to GitHub Releases.
- Yoink uses a local helper plus browser extension.
- The agent path matters: MCP server, 13 tools, Operator Skill, `/agent-docs`, `/llms.txt`.
- Do not remove `/privacy`.
- Do not invent testimonials, metrics, pricing, or platform support.

Commands:

```bash
npm run lint
npm run build
```

