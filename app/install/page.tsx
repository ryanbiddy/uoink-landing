import type { Metadata } from "next";
import { pages, pageMetadata as metadataContent } from "../_content/pages";
import { pageMetadata } from "@/lib/metadata";
import { StaticPage } from "@/components/StaticPage";

export const metadata: Metadata = pageMetadata({
  ...metadataContent.install,
  path: pages.install.path,
});

export default function Page() {
  return <StaticPage page={pages.install} />;
}
