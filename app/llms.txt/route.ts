import { canonicalUrl, routes } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# Uoink

Uoink is a local-first YouTube research tool. One click on any YouTube video creates a structured markdown corpus with transcript, screenshots, top comments, channel context, and metadata. The corpus can be pasted into Claude or ChatGPT, or called directly by an MCP-compatible agent through Uoink's local server.

Windows v2.0 is live. Mac v2.1 is in queue. Chrome Web Store approval is pending; install currently runs through the GitHub release and extension sideload flow.

Core capabilities:
- Browser path: one-click Uoink button on YouTube, corpus copied to clipboard and saved locally.
- Agent path: local Model Context Protocol server with 13 callable tools.
- Operator path: portable agentskills.io Skill for Claude, Cursor, OpenClaw, Hermes, and similar clients.
- Local-first: no Uoink cloud service, no telemetry, no remote logging.
- Optional AI: Hook Type classification, Comment Intelligence, and Entity Extraction use the user's own Anthropic API key.

MCP tools:
uoink_video, uoink_playlist, get_job_status, cancel_job, list_recent_uoinks, search_uoinks, get_uoink_corpus, analyze_comments, classify_hook, get_taxonomy, get_citation_map, get_uoink_health, find_mentions.

Canonical pages:
${routes.map((route) => `- ${route.label}: ${canonicalUrl}${route.path === "/" ? "" : route.path}`).join("\n")}

Source: https://github.com/ryanbiddy/uoink
Marketing site: ${canonicalUrl}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
