/**
 * Dynamic robots.txt generator.  This route serves a plain‑text
 * robots.txt file, instructing search engine crawlers how to index
 * the site.  We allow all content to be crawled and point the
 * crawler to our sitemap.xml.  The base URL is taken from
 * `NEXT_PUBLIC_SITE_URL`, falling back to localhost if not set.
 */
export function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'localhost:3000';
  const body = `User-agent: *\nAllow: /\nSitemap: https://${baseUrl}/sitemap.xml`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}