# Uoink Brand Style Guide

This guide documents the current Uoink landing-page brand system. Uoink is the public rename of the Yoink product. It is meant to keep future pages, docs, launch assets, and product screenshots consistent with the new brand direction.

For rename-specific migration notes, read [uoink-rename-plan.md](uoink-rename-plan.md).

## Brand Position

Uoink is a local-first YouTube research layer for creators, researchers, and AI agents.

Core line:

> Your YouTube bookmark for LLMs and agents.

New brand line:

> Uoink any video. Read it like a doc.

Conversion line:

> One click on a YouTube video. Transcript, screenshots, comments, and channel context - structured for Claude or ChatGPT, or callable directly by your MCP agent.

Short product explanation:

Uoink turns YouTube videos into structured local corpora that can be pasted into Claude and ChatGPT or called directly by MCP-compatible agents.

## Brand Personality

Yoink should feel:

- Editorial, not generic SaaS
- Direct, not breathless
- Builder-to-builder, not enterprise-polished
- Local-first and technically credible
- Creator-aware, but not creator-economy fluffy
- Confident enough to make strong claims, careful enough to explain constraints

Avoid:

- Startup puffery like "revolutionary", "supercharge", "unlock your potential"
- Generic SaaS gradients, glassmorphism, and pastel palettes
- Fake social proof, testimonials, or metrics
- Hiding setup reality behind vague install language
- Treating agents as the only audience; creators are still the primary audience

## Color System

The Uoink v3 direction replaces the previous dark-only palette with a warm print system.

Primary colors:

| Token | Hex | Use |
| --- | --- | --- |
| Ink | `#0A0A0A` | Primary text, dark surfaces |
| Ink Warm | `#15110D` | Warm dark panels |
| Vermillion | `#FF3D00` | Primary brand accent |
| Acid | `#FFD23F` | Signal color, magnet tips, stamps |
| Cream | `#FFF4EC` | Primary light background |
| Paper | `#F4EFE6` | Secondary paper background |
| Oxblood | `#7A1A00` | Deep warm accent |
| Muted | `#5B5650` | Secondary text on light backgrounds |

Implementation:

- Tailwind tokens live in [tailwind.config.ts](../tailwind.config.ts).
- CSS variables live in [app/globals.css](../app/globals.css).

Color rules:

- Use black as the dominant field.
- Use orange as a sharp signal, not a wash.
- Use white for headings and primary calls to action.
- Use ash for body copy and utility text.
- Do not introduce new accent colors unless a real brand asset requires it.
- Avoid gradients except subtle existing mockup effects.

## Typography

Wordmark font:

- `Bungee`
- Used only for the Uoink wordmark or very deliberate brand moments.

Display font:

- `Fraunces`
- Used for major headlines and editorial section titles.

Editorial italic:

- `Instrument Serif`
- Used for italic emphasis inside display headlines.

Body font:

- `Inter`
- Used for paragraphs, navigation, metadata, buttons, UI labels, and long-form content.

Mono font:

- `JetBrains Mono`
- Used for code snippets, MCP tool names, filenames, config examples, and technical identifiers.

Typography rules:

- Headlines should feel editorial, oversized, and print-system sharp.
- Body copy should be plain, readable, and specific.
- Eyebrows are all caps, small, tracked, and orange.
- Buttons are all caps, compact, and high contrast.
- Do not use negative letter spacing.
- Do not scale font size with viewport width.

## Logo System

Logo assets live in [public](../public):

- Legacy Yoink assets currently live in `public/`.
- New Uoink assets should include the magnet-U mark and Bungee wordmark.

Usage:

- Use the magnet-U wordmark once exported.
- Until new assets are committed, do not stretch or mutate legacy Yoink assets to fake Uoink.
- Use the full lockup only when space allows and the page needs stronger brand recognition.
- Keep generous clear space around the mark.
- Do not recolor, stretch, crop, rotate, or add effects to the logo.
- Do not place the logo on busy imagery.

## Layout System

The new site should use a warm print/editorial rhythm:

- Cream/paper fields
- Ink borders
- Vermillion panels
- Acid yellow stamps and magnet tips
- Dark product/demo panels
- Large Fraunces headlines
- Bungee wordmark
- JetBrains Mono strips and labels

Page sections should feel sparse. Empty space is part of the design.

Use cards for:

- Repeated feature items
- Route cards
- Technical panels
- Mockup frames

Do not:

- Nest cards inside cards
- Add floating decorative blobs or gradient orbs
- Add a generic SaaS hero split with a stock image
- Add new sections unless they clarify the conversion path

## Section Anatomy

Most sections should follow this order:

1. Eyebrow label
2. Large editorial headline
3. Plain-language body copy
4. Cards, table, mockup, or CTA

Eyebrow examples:

- `PRODUCT PATHS`
- `COMPETITIVE MOAT`
- `WHAT'S NEW IN V2`
- `HOW IT WORKS`
- `PRIVATE BY DESIGN`
- `BUILT BY REPLAYRYAN`

Eyebrow style:

- Orange
- Uppercase
- Letter spacing around `0.16em`
- 12 to 13px
- Semibold

## CTA Hierarchy

Primary audience:

Creators and operators who want to extract YouTube context now.

Primary CTA:

- `Download for Windows`
- White background on black sections
- Black text
- Windows icon when present

Secondary links:

- Agent docs
- Mac v2.1 notification
- GitHub

Rules:

- Do not give Agent docs equal visual weight in the hero.
- Do not show Mac as available. Say `Mac in v2.1`.
- Until Chrome Web Store approval, direct users to GitHub Releases.
- Be explicit about the install flow: helper installer, extension sideload, YouTube button.

## Voice And Copy

Voice:

- Specific
- Calm
- Slightly opinionated
- Technical when useful
- Human, not corporate

Good copy:

- "Transcript extraction is table stakes."
- "One installer, one local research engine."
- "Paste a URL and they rely on hallucinated summaries or fail entirely."
- "No Python install, no command line, no PATH wrangling."

Avoid:

- "Seamlessly unlock insights"
- "All-in-one content intelligence platform"
- "AI-powered magic"
- "Revolutionize your workflow"

When mentioning AI tools:

- Pair Claude and ChatGPT when describing paste workflows.
- Mention MCP agents when describing agent-native workflows.
- Use exact tool names when the section is for agents or crawlability: `yoink_video`, `classify_hook`, `analyze_comments`, `find_mentions`, `search_yoinks`.

## Product Claims

Currently true for v2:

- Windows-only packaged launch
- Chrome and Chromium browsers supported
- Chrome Web Store listing pending approval
- GitHub Releases direct download is the current CTA
- Local helper is about 120 MB
- 13 MCP tools
- 9 Hook Types
- Yoink Memory
- Playlist Mode up to 10 videos
- BYO Anthropic key for optional AI features
- API key handled through Windows Credential Manager
- No Yoink cloud, no telemetry, no remote logging
- MIT-licensed and open source

Do not claim:

- Mac is available
- Chrome Web Store install is live
- Podcast support is shipped
- Hosted cloud version exists
- Yoink sees or stores user data server-side

## Imagery And Mockups

Assets:

- `karpathy-thumbnail.jpg`
- `youtube-yoink-controls-crop.png`
- `screenshot-1.png` through `screenshot-5.png`
- `claude-logo-original.jpg`
- `chatgpt-logo-original.webp`
- `og-image.png`
- `og-image-color.png`

Rules:

- Product mockups must fit inside their card boundaries.
- Do not stretch screenshots.
- Crop screenshots around the relevant action.
- Highlight the Yoink button clearly when demonstrating the click flow.
- Text inside mockups must be aligned and readable.
- Avoid fake placeholders on production pages when a real asset is not available.
- If a demo video is not ready, leave a code TODO, not a visible "coming soon" box.

## Accessibility

Minimum expectations:

- Maintain high contrast on black backgrounds.
- Use descriptive alt text for meaningful images.
- Hide decorative images with empty alt text.
- Keep focus rings visible and orange.
- Ensure button text fits at 375px wide.
- Do not rely on orange alone for critical state if the state needs to be understood.

## SEO And Agent Discoverability

Human SEO:

- Use clear H1/H2 hierarchy.
- Keep important product claims in real text, not only images.
- Use descriptive page titles and meta descriptions.
- Link internally with descriptive anchor text.

Agent discoverability:

- Keep `/llms.txt` current.
- Keep MCP tool names as searchable text.
- Keep `/agent-docs` crawlable and plain.
- Keep config snippets copy-pasteable.
- Avoid hiding core product facts only inside graphics.

Canonical URL:

- Controlled by `NEXT_PUBLIC_CANONICAL_URL`.
- Default production fallback is `https://yoink-landing-five.vercel.app`.

## Component Patterns

Use existing primitives in [components/SitePrimitives.tsx](../components/SitePrimitives.tsx):

- `PageShell`
- `SiteHeader`
- `SiteFooter`
- `Section`
- `Eyebrow`
- `FeatureCard`
- `InstallCta`
- `PrivacyStrip`
- `LaunchArticleGrid`

Before adding a new component, check whether one of these can be reused with different copy.

## Do And Do Not

Do:

- Lead with the creator install path.
- Surface the agent path as the moat.
- Explain local-first privacy plainly.
- Show setup reality before users hit friction.
- Use orange for emphasis and navigation rhythm.
- Keep sections lean.

Do not:

- Add testimonials.
- Add a newsletter signup.
- Add a pricing page.
- Add a blog index unless there is a real content plan.
- Add new dependencies for simple UI.
- Reintroduce a generic SaaS visual language.

## Quick Reference

```text
Ink:        #0A0A0A
Ink Warm:   #15110D
Vermillion: #FF3D00
Acid:       #FFD23F
Cream:      #FFF4EC
Paper:      #F4EFE6
Oxblood:    #7A1A00
Muted:      #5B5650

Wordmark:   Bungee
Display:    Fraunces
Italic:     Instrument Serif
Body:       Inter
Mono:       JetBrains Mono

Primary CTA: Download for Windows
Agent CTA:   text link or secondary route
Mac copy:    Mac in v2.1
Install:     GitHub Releases until Web Store approval
```
