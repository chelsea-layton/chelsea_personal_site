/** Production: set NEXT_PUBLIC_SITE_URL in hosting (e.g. https://example.com, no trailing slash). */
export function siteUrlString(): string {
  let u =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";
  if (u.endsWith("/")) u = u.slice(0, -1);
  return u;
}

export function siteMetadataBase(): URL {
  return new URL(`${siteUrlString()}/`);
}
