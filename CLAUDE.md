# Claude Code Context

This repo is the Yoink landing site. It is a Next.js 14 app-router site deployed on Vercel.

Before redesign work, read:

1. [docs/uoink-rename-plan.md](docs/uoink-rename-plan.md)
2. [docs/claude-redesign-brief.md](docs/claude-redesign-brief.md)
3. [docs/brand-style-guide.md](docs/brand-style-guide.md)
4. [README.md](README.md)
5. [app/site.ts](app/site.ts)
6. [app/page.tsx](app/page.tsx)
7. [components/SitePrimitives.tsx](components/SitePrimitives.tsx)
8. [app/v2-data.ts](app/v2-data.ts)

The goal is not a small polish pass. The goal is a full-site redesign and public rename from Yoink to Uoink that feels distinctive, tasteful, and human-made while preserving product truth, SEO surface, agent discoverability, route structure, and install accuracy.

Claude Code owns the visual and interaction redesign. Codex will review and handle backend, metadata, route wiring, Vercel deploy, and production verification.

Hard product facts:

- Public brand direction is Uoink, formerly Yoink.
- Yoink/Uoink v2 is Windows-only today.
- Mac is v2.1, not available now.
- Chrome Web Store listing is pending approval.
- Current download CTA points to GitHub Releases.
- Yoink uses a local helper plus browser extension.
- The agent path matters: MCP server, 13 tools, Operator Skill, `/agent-docs`, `/llms.txt`.
- Keep current `yoink_*` technical tool names unless the product repo has shipped `uoink_*` aliases.
- Do not remove `/privacy`.
- Do not invent testimonials, metrics, pricing, or platform support.

Commands:

```bash
npm run lint
npm run build
```
