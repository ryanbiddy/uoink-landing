export const canonicalUrl = (process.env.NEXT_PUBLIC_CANONICAL_URL || "https://uoink.video").replace(/\/$/, "");

export const routes = [
  { path: "/", label: "Homepage" },
  { path: "/creators", label: "Creators" },
  { path: "/research", label: "Research" },
  { path: "/agents", label: "Agents" },
  { path: "/agent-docs", label: "Agent docs" },
  { path: "/install", label: "Install" },
  { path: "/hooks", label: "Hook taxonomy" },
  { path: "/privacy", label: "Privacy" },
];

export const defaultDescription =
  "One click on any YouTube video \u2192 transcript, screenshots, comments, channel context, into Claude, ChatGPT, or your MCP agent. Local-first. Open source.";
