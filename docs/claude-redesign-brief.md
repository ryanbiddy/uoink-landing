# Yoink Full-Site Redesign Brief For Claude Code

This brief exists so Claude Code can redesign the entire Yoink website with creative range while still protecting the product truth, conversion goals, agent discoverability, and deployment surface.

Update: the public brand direction is now Uoink. Read [uoink-rename-plan.md](uoink-rename-plan.md) before designing. Treat Uoink as the new public brand and Yoink as the current technical/product lineage.

## What We Are Trying To Do

The current site contains the right facts, but it still reads too much like a product launch page assembled from sections. The redesign should make the site feel more authored, more memorable, and more visually confident.

The site should still convert. It should not become art direction at the expense of clarity.

The highest-level goal:

> Make Uoink feel like a serious, indie-built research tool with taste.

It should not feel like every other AI-generated SaaS website.

## Primary Audiences

There are three user groups. The homepage should serve all three, and each audience route should feel intentionally designed for that person.

1. Creators and creator-operators
   - They want to analyze YouTube videos without watching everything at 2x.
   - They care about hooks, audience comments, competitor patterns, and content strategy.
   - This is the primary conversion audience.

2. Researchers and strategists
   - They want a private local corpus of videos in a niche.
   - They care about search, recurring entities, tools/products mentioned, comment themes, and pattern recognition.

3. Agent builders and technical users
   - They want YouTube context callable by agents.
   - They care about MCP, exact tool names, config snippets, local helper behavior, citations, and the Operator Skill.
   - This is the moat. It should be easy to find, but not overwhelm the human homepage.

## Product Truth

Uoink, formerly Yoink, has three paths:

1. Browser path
   - Click Yoink on a YouTube video.
   - Get a structured markdown corpus.
   - Paste into Claude, ChatGPT, or another AI tool.

2. Agent path
   - Local Model Context Protocol server.
   - 13 callable tools.
   - Agents can call `yoink_video`, `classify_hook`, `analyze_comments`, `search_yoinks`, and `find_mentions` directly.

3. Operator path
   - Portable `SKILL.md` using the agentskills.io standard.
   - Gives Claude, Cursor, OpenClaw, Hermes, and similar clients a workflow layer on top of the MCP tools.

Core output:

- Transcript
- Screenshots
- Comments
- Channel context
- Metadata
- Citations and timestamp references

Local-first claims:

- Core extraction runs locally.
- No Yoink cloud account.
- No telemetry, no analytics, no remote logging.
- Optional AI features use the user's own Anthropic API key.
- API key is handled through Windows Credential Manager.

Install truth:

- Windows packaged build is available now.
- Mac is v2.1.
- Chrome Web Store approval is pending.
- Current install path is GitHub Releases plus extension sideload.
- Helper is roughly 120 MB because it bundles what the user needs.

Do not claim:

- Mac is available now.
- Podcast support is shipped.
- Chrome Web Store install is live.
- A hosted cloud version exists.
- Yoink collects server-side usage or corpus data.

## Site Routes To Redesign

Do not redesign only the homepage. The whole site should feel coherent.

Required routes:

- `/` - homepage
- `/creators` - creator audience page
- `/agents` - agent builder page
- `/research` - research/content strategy page
- `/agent-docs` - technical agent docs and config snippets
- `/install` - direct install and sideload flow
- `/hooks` - Hook Type taxonomy article
- `/local-first` - local-first article
- `/getting-started` - Claude Code setup guide
- `/channel-audit` - 10-video audit article
- `/privacy` - privacy policy, can stay plain and conservative
- `/llms.txt` - agent-readable summary, do not turn into a styled page
- `/sitemap.xml` and `/robots.txt` - generated, do not break

## Homepage Success Criteria

A cold visitor should understand these in under 10 seconds:

- Yoink is for YouTube research.
- It gives Claude and ChatGPT actual video context.
- It also gives agents direct local MCP tools.
- It is Windows now, Mac later.
- The CTA is a direct Windows download.

The homepage should answer:

- What is this?
- Why not just paste the YouTube URL?
- What does Yoink extract?
- How does the install work?
- Is it local/private?
- Is this for creators, researchers, or agents?
- Where do agents find docs/config snippets?

The homepage should avoid:

- Too many equivalent feature grids.
- Repeating the same "three paths" idea in multiple ways.
- Looking like a template.
- Over-indexing on agent language before the human understands the product.

## Audience Page Success Criteria

### `/creators`

Should feel like:

> "This helps me study videos and create better work."

Must include:

- One-click paste flow
- Claude and ChatGPT
- Hooks
- Comments
- Playlist/audit use case
- Starter prompts
- CTA to install

### `/research`

Should feel like:

> "This helps me build a private corpus of a market or niche."

Must include:

- Yoink Memory
- Search across saved corpora
- `find_mentions`
- Entity extraction
- Comment Intelligence
- Playlist Mode
- CTA to install

### `/agents`

Should feel like:

> "This is the YouTube context layer my agent can call."

Must include:

- MCP server
- 13 tools
- Operator Skill
- Config snippets or links to `/agent-docs`
- Example agent flow
- CTA to `/agent-docs` and GitHub

### `/agent-docs`

Should prioritize clarity over visual flourish.

Must include:

- The 13 MCP tool names in real text
- Config snippet with placeholder path note
- Link to raw Skill
- Link to GitHub MCP docs
- Plain description of local server behavior

## Creative Direction

Use the Uoink Brand System v3 direction as the north star:

- Cream/paper/ink/vermillion/acid palette
- Magnet-U wordmark concept
- Bungee wordmark, Fraunces display, Instrument Serif italic, Inter body, JetBrains Mono UI
- Heist-poster/editorial-print system
- Strong borders, strips, stamps, numbered panels, address-bar/domain details
- Less generic dark SaaS; more authored product artifact

Claude has permission to change:

- Homepage section order
- Component composition
- Visual motifs
- Typography scale
- Page rhythm
- Mockup treatments
- Article layout
- Navigation treatment
- CTA placement
- Homepage storytelling

Claude should preserve:

- Dark editorial core unless there is a strong reason to evolve it
- Orange/black/white brand recognition
- Product truth
- Routes
- Agent docs and `/llms.txt`
- Install accuracy
- Performance discipline

Things to explore:

- More editorial landing page, less feature-grid launch page
- A "research desk" or "local corpus" visual metaphor
- Stronger product artifact views: markdown corpus, citations, MCP calls, hook classification
- Tactile, functional UI moments instead of generic decorative elements
- A calmer human homepage with deeper agent content routed cleanly
- A stronger distinction between "for humans" and "for agents"

Things to avoid:

- Purple/blue AI gradients
- Floating glass cards
- Orb backgrounds
- Generic AI head/brain/network imagery
- Stock photos
- Fake dashboards
- Fake testimonials
- Over-animated gimmicks
- Hiding the Windows/Web Store/install limitations

## Agent Discoverability Requirements

This site must remain strong for AI search and agent traffic.

Keep as real text:

- "Model Context Protocol"
- "MCP server"
- "Operator Skill"
- "agentskills.io"
- `yoink_video`
- `yoink_playlist`
- `search_yoinks`
- `get_yoink_corpus`
- `classify_hook`
- `analyze_comments`
- `find_mentions`
- "Claude"
- "ChatGPT"
- "Cursor"
- "Claude Desktop"

Do not bury these only in images.

Keep `/llms.txt` current and text/plain.

Keep `/agent-docs` crawlable.

Keep sitemap and canonical output correct through `app/site.ts`.

## SEO Requirements

The site should continue targeting:

- YouTube to Claude
- YouTube to ChatGPT
- YouTube transcript for ChatGPT
- YouTube to MCP
- YouTube hook types
- extract YouTube comments for AI
- summarize YouTube playlist
- local-first AI research tool

Each major page should have:

- One clear H1
- Descriptive H2s
- Metadata
- Internal links to related pages
- Real text, not text-only images

## Technical Constraints

Stack:

- Next.js 14 app router
- TypeScript
- Tailwind CSS
- Vercel

Rules:

- Do not add a UI library.
- Avoid new dependencies unless absolutely necessary.
- Keep JavaScript minimal.
- Preserve static rendering where possible.
- Keep `/privacy` working.
- Keep `/llms.txt` served as `text/plain`.
- `npm run lint` and `npm run build` must pass.

## Codex/Claude Collaboration Workflow

Recommended branch flow:

1. Claude creates a branch such as `claude/full-site-redesign`.
2. Claude redesigns the full site in code, not just a mockup.
3. Claude runs lint/build.
4. Claude leaves notes on any product claims it was unsure about.
5. Codex reviews the branch for:
   - product accuracy
   - backend/API breakage
   - metadata/schema/sitemap/llms correctness
   - install/download/canonical correctness
   - responsive regressions
   - Vercel deploy readiness
6. Codex fixes backend/wiring issues.
7. Codex deploys to Vercel and verifies production.

Claude should not try to solve backend/API uncertainty by inventing product facts. Leave TODOs or ask Codex/Ryan.

## Minimum Acceptance Checklist

Before handoff to Codex:

- Homepage redesigned
- `/creators` redesigned
- `/research` redesigned
- `/agents` redesigned
- `/agent-docs` still useful and crawlable
- `/install` still accurate
- Articles still readable
- `/privacy` still resolves
- `/llms.txt` unchanged or improved, still text/plain
- `npm run lint` passes
- `npm run build` passes
- Mobile at 375px is checked
- Tablet at 768px is checked
- Desktop at 1440px is checked

## Suggested Claude Code Prompt

Use this prompt when starting the redesign session:

```text
You are redesigning the Yoink landing site in this repo.

Read CLAUDE.md first, then docs/uoink-rename-plan.md, then docs/claude-redesign-brief.md, then docs/brand-style-guide.md.

I want a full-site redesign and public rename to Uoink, not a homepage polish pass. Give the site creative taste and make it feel human-made, editorial, and memorable rather than like a generic AI/SaaS template.

Keep the product truth: Uoink is the new public brand for the Yoink product. v2 is Windows now, Mac in v2.1, Chrome Web Store pending, GitHub Releases direct download, local helper + extension, 13 MCP tools, Operator Skill, local-first privacy, Claude and ChatGPT paste flow, and agent-native MCP flow.

Important: do not rename current technical MCP identifiers from yoink_* to uoink_* unless the product repo has shipped aliases. The public brand can say Uoink while agent docs remain technically accurate.

Creators are the primary audience. Agents are the moat. Keep agent content visible and crawlable, but make the homepage cleaner and more human.

Redesign these routes coherently:
- /
- /creators
- /research
- /agents
- /agent-docs
- /install
- /hooks
- /local-first
- /getting-started
- /channel-audit
- /privacy

Do not add testimonials, pricing, fake metrics, newsletter signup, stock photos, or a new UI library.

You may change layout, visual motifs, component structure, section order, typography scale, and page rhythm. Preserve route structure, metadata correctness, /llms.txt, sitemap/robots behavior, and install accuracy.

Run npm run lint and npm run build before you finish. Leave a clear summary of what changed, screenshots or viewport notes, and any TODOs for Codex/Ryan.
```
