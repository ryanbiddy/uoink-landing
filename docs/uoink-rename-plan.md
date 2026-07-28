# Uoink Rename Plan

Source reference:

- Local design file: `Uoink Brand System v3.html` (kept locally, not in this repo)

## Decision

The public brand is moving from Yoink to Uoink.

Pronunciation stays essentially the same. The spelling changes so the brand owns its term, the wordmark becomes a magnet-U, and the domain can become `uoink.video`.

## Brand Logic

Uoink works because:

- The mark is a U, not a forced Y.
- "Uoink" reads as "you-oink": the user is inside the action.
- `uoink.video` is short, available, and names the category.
- It stops competing with the common verb "yoink" in search, social, and trademark context.

Core brand thought:

> You-oink that video.

Prototype hero thought:

> Uoink any video. Read it like a doc.

## New Visual System

Colors:

| Token | Hex | Role |
| --- | --- | --- |
| Ink | `#0A0A0A` | Primary text, dark surfaces |
| Ink Warm | `#15110D` | Warm dark panels |
| Vermillion | `#FF3D00` | Primary brand accent |
| Acid | `#FFD23F` | Signal color, magnet tips, stamps |
| Cream | `#FFF4EC` | Primary light background |
| Paper | `#F4EFE6` | Secondary paper background |
| Oxblood | `#7A1A00` | Deep warm accent |
| Muted | `#5B5650` | Secondary text on light backgrounds |

Fonts:

| Role | Font |
| --- | --- |
| Wordmark | Bungee |
| Display | Fraunces |
| Editorial italic | Instrument Serif |
| Body | Inter |
| Mono/UI | JetBrains Mono |

Modes:

- Loud: vermillion field, ink borders, acid stamp/tips.
- Dark: ink field, cream text, vermillion action.
- Light: cream/paper field, ink borders, vermillion accents.

Visual register:

- Heist poster
- Print system
- Heavy borders
- Browser/address-bar details
- Stamps, strips, numbered panels
- Warm paper instead of generic SaaS white

## Copy Updates

Use:

- Brand name: `Uoink`
- Verb: `uoink`
- Domain: `uoink.video`
- Email target, when ready: `hi@uoink.video`

Examples:

- "Uoink any video. Read it like a doc."
- "Watching is the slow path. Uoink it."
- "Just uoinked that Karpathy talk - Claude has the whole thing now."
- "Uoink ships a local MCP server with thirteen tools your agent can call."

## Migration Caution

Do not rename technical identifiers until the product repo supports them.

Current shipping product truth may still include:

- `yoink_video`
- `yoink_playlist`
- `search_yoinks`
- `get_yoink_corpus`
- `%LOCALAPPDATA%\Yoink\`
- `skills/yoink/SKILL.md`
- GitHub repo: `github.com/ryanbiddy/yoink`

The brand-system file proposes future replacements:

- `uoink_video`
- `uoink_playlist`
- `%LOCALAPPDATA%\Uoink\`
- `skills/uoink/SKILL.md`
- `github.com/ryanbiddy/uoink`

For the landing site, keep old technical identifiers visible where they are the real current interface. If the product repo adds aliases, the site can say:

> New `uoink_*` MCP tools with `yoink_*` aliases for compatibility.

Until then, do not claim `uoink_*` tools are callable.

## Website Implications

For the redesign:

- The public site should brand as Uoink.
- Early copy can say `Uoink, formerly Yoink` where helpful.
- Keep SEO coverage for old Yoink queries during transition.
- Keep agent docs technically accurate even if the visual brand says Uoink.
- Do not change canonical to `https://uoink.video` until the domain is connected and resolving.
- Do not remove `yoink` tool names from `/agent-docs` or `/llms.txt` until backend aliases exist.

## Claude Design Direction

Claude should use `Uoink Brand System v3` as the design north star:

- Magnet-U wordmark
- Vermillion/acid/cream/ink palette
- Fraunces/Bungee/JetBrains Mono typography
- Heist/print/stamp visual language
- Homepage hero with live corpus panel
- Agent docs page with cream background and code blocks
- Product popup/cards in dark mode

The product story remains:

- YouTube video to structured corpus
- Claude and ChatGPT paste flow
- Local MCP agent path
- Operator Skill
- Local-first privacy
- Windows now, Mac v2.1

