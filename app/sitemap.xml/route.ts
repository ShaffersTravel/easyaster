import { NextResponse } from 'next/server';

/**
 * Dynamic sitemap generator.  This route outputs an XML sitemap listing
 * the key public pages on the site.  Search engines use this document
 * to discover and index pages more efficiently.  We include all
 * user‑facing routes while omitting internal or private paths (e.g.
 * `/admin`).  The sitemap references the base URL from
 * `NEXT_PUBLIC_SITE_URL`.  See
 * https://www.sitemaps.org/protocol.html for the XML format.
 */
export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'localhost:3000';
  const paths = [
    '/',
    '/pricing',
    '/faq',
    '/guides/ds-160',
    '/start',
    '/success',
    '/legal',
    '/guarantee',
    '/terms',
    '/privacy',
    '/cookies',
    '/uk/london',
    '/uk/belfast',
    '/ie/dublin',
  ];
  const lastmod = new Date().toISOString().split('T')[0];
  const urls = paths
    .map((path) => {
      const loc = `https://${baseUrl}${path}`;
      return `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`;
    })
    .join('');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    `${urls}</urlset>`;
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}