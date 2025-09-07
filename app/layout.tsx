import './globals.css';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'UK & Ireland to U.S. Visa Service',
  description: 'Guidance for DS‑160 and U.S. visa interview scheduling for applicants in England, Scotland, Wales and Ireland.',
};

/**
 * RootLayout wraps every page in the application. It defines a
 * navigation bar, a persistent policy banner and a footer with
 * important legal disclosures. Because it is a server component by
 * default, it cannot use client-only hooks. All interactive
 * functionality should live in child components.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  const year = new Date().getFullYear();
  return (
    <html lang="en">
      <head>
        {/* Organization structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'EasyASTA',
              url: `https://${process.env.NEXT_PUBLIC_SITE_URL ?? 'localhost:3000'}`,
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+44 1234 567 890',
                  contactType: 'customer service',
                  areaServed: ['GB', 'IE'],
                  availableLanguage: ['English'],
                },
              ],
            }),
          }}
        />

        {/* Umami analytics script (privacy‑friendly) */}
        {process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL && process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID ? (
          <script
            async
            defer
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
          />
        ) : null}
      </head>
      <body className="flex flex-col min-h-screen">
        <PolicyBanner />
        <nav className="bg-white shadow">
          <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="text-2xl font-semibold text-blue-700">UK→US Visa Service</div>
            <div className="mt-2 sm:mt-0 flex flex-wrap space-x-4 text-sm text-gray-700">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/pricing" className="hover:underline">Pricing</Link>
              <Link href="/faq" className="hover:underline">FAQ</Link>
              <Link href="/guides/ds-160" className="hover:underline">DS‑160 Guide</Link>
              <Link href="/start" className="hover:underline">Start</Link>
              <Link href="/legal" className="hover:underline">Legal</Link>
              <Link href="/guarantee" className="hover:underline">Guarantee</Link>
              <Link href="/terms" className="hover:underline">Terms</Link>
              <Link href="/privacy" className="hover:underline">Privacy</Link>
              <Link href="/cookies" className="hover:underline">Cookies</Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-8 flex-1">
          {children}
        </main>
        {/* sticky contact rail for WhatsApp and phone support */}
        <a
          href="https://wa.me/447700900000"
          aria-label="WhatsApp"
          className="fixed right-4 bottom-20 rounded-full shadow-lg px-4 py-3 bg-green-600 text-white hover:bg-green-700"
        >
          WhatsApp
        </a>
        <a
          href="tel:+441234567890"
          aria-label="Call us"
          className="fixed right-4 bottom-4 rounded-full shadow-lg px-4 py-3 bg-blue-700 text-white hover:bg-blue-800"
        >
          Call us
        </a>
        <footer className="bg-gray-100 text-xs text-center py-4 px-2 border-t space-y-1">
          <p className="text-gray-600">
            We are not a law firm and are not affiliated with the U.S. government. This site provides general information and does not constitute legal advice.
          </p>
          <div className="space-x-3">
            <Link href="/terms" className="underline text-gray-600 hover:text-blue-600">Terms</Link>
            <Link href="/privacy" className="underline text-gray-600 hover:text-blue-600">Privacy</Link>
            <Link href="/cookies" className="underline text-gray-600 hover:text-blue-600">Cookies</Link>
          </div>
          <p className="text-gray-600">© {year} UK→US Visa Service. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

function PolicyBanner() {
  return (
    <div className="bg-blue-700 text-white text-sm py-2 px-4 text-center">
      From Sept 2 2025 most applicants require in‑person interviews.{' '}
      <a
        href="https://travel.state.gov/content/travel/en/News/visas-news/interview-waiver-update-july-25-2025.html"
        className="underline"
      >
        Learn more
      </a>
      .
    </div>
  );
}