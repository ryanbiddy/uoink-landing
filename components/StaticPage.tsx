import type { pages } from "@/app/_content/pages";
import { SiteFooter } from "@/components/SiteFooter";
import { TopChrome } from "@/components/TopChrome";

type PageContent = (typeof pages)[keyof typeof pages];

export function StaticPage({ page }: { page: PageContent }) {
  return (
    <div className={`site-shell ${page.mode}`} data-screen-label={page.screenLabel}>
      <TopChrome
        active={page.active}
        navCtaHref={page.navCtaHref}
        navCtaText={page.navCtaText}
        screenLabel={page.screenLabel}
      />
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
      <SiteFooter screenLabel={page.screenLabel} />
    </div>
  );
}
