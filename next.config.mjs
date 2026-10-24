/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  // Archived: this deployment still serves stale v2 pages, so send every path
  // to the maintained site. uoink.app has each legacy route.
  async redirects() {
    return [{ source: "/:path*", destination: "https://uoink.app/:path*", permanent: true }];
  },
};

export default nextConfig;
