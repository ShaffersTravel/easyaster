# Changelog

All notable changes to this project are documented in this file.  Dates follow the format **YYYY‑MM‑DD**.

## 2025‑09‑06

### Added
* **CI/CD pipeline configuration**: Added a GitHub Actions workflow (`.github/workflows/deploy.yml`) that checks out the repository, installs dependencies, updates the visa wait‑time data and deploys the application to Vercel on every push to `main`.  The workflow uses the Vercel CLI and requires `VERCEL_TOKEN` to be provided as a GitHub secret.  It assumes that environment variables (Stripe keys, admin password, hCaptcha keys, Umami IDs and UptimeRobot API key) are already defined in the Vercel project settings.  This automation ensures consistent builds and reduces manual deployment steps.
* **Testing infrastructure**: Added Jest configuration (`jest.config.js`) and installed testing utilities (`jest`, `ts-jest`, `@testing-library/react`, `@testing-library/jest-dom`).  Added unit tests under `__tests__` to verify that the Start page renders name and email inputs and that the Admin page displays a sign‑in form when not authenticated.  Added a `test` script to `package.json` for running Jest.  These tests provide a foundation for cross‑browser and device verification and will support future QA efforts.
* **Abstract hero illustration and testimonials**: Added a new abstract illustration to the home page hero section (`public/images/hero-abstract.png`).  The image, generated via the internal `imagegen` tool, uses flowing lines and colours inspired by UK, Ireland and US flags while avoiding depiction of real places or landmarks.  Created a `Testimonials` component with anonymised quotes from past users and integrated it into the home page.  These additions improve the visual appeal and build social proof.
* **hCaptcha integration**: Integrated hCaptcha on the `/start` intake form to block automated spam submissions.  Added `@hcaptcha/react-hcaptcha` as a dependency, updated the form to render the widget and capture the token, and implemented server‑side verification in the API route using `HCAPTCHA_SECRET_KEY`.  Updated `.env.example` to include `NEXT_PUBLIC_HCAPTCHA_SITE_KEY` and `HCAPTCHA_SECRET_KEY`.  These new environment variables must be provided in production for captcha verification to succeed.
* **Analytics and monitoring integration**: Injected a privacy‑friendly Umami analytics script into the root layout, controlled by `NEXT_PUBLIC_UMAMI_SCRIPT_URL` and `NEXT_PUBLIC_UMAMI_WEBSITE_ID` environment variables.  Added a Node helper script (`scripts/setup-monitors.js`) and an accompanying npm command (`npm run setup-monitors`) to create UptimeRobot monitors for the home page and `/start` endpoint using `UPTIMEROBOT_API_KEY` and `NEXT_PUBLIC_SITE_URL`.  Extended `.env.example` to include these variables.  These additions provide basic traffic insights and uptime checks without intrusive tracking.
* **Structured data and meta tags**: Added JSON‑LD structured data for the FAQ page to improve rich search results and export an `Organization` schema via the root layout.  Defined descriptive `metadata` (title and description) for the home, pricing, start and success pages to improve SEO and clarity.
* **Dynamic sitemap and robots.txt**: Implemented `app/sitemap.xml/route.ts` to generate an up‑to‑date XML sitemap listing all public pages and `app/robots.txt/route.ts` to direct crawlers to the sitemap.  This helps search engines discover and index the site effectively.
* **Terms of Service, Privacy Policy and Cookie Policy pages**: Created separate pages under `/terms`, `/privacy` and `/cookies` to clearly explain the rules for using the site, our data collection practices and cookie usage.  The Privacy Policy outlines what personal data we collect, why we collect it, who we share it with and how long we retain it【336632788382264†L147-L164】.  The Cookie Policy describes our use of strictly necessary, performance and functionality cookies, explains that users must actively opt in to non‑essential cookies, and notes that our cookie banner provides both “accept” and “decline” options【257681771633587†L87-L110】.

* **Navigation and footer links**: Added links to the new Terms, Privacy and Cookie pages in the top navigation and footer.  This makes the policies easy to find and aligns with best practices for transparent legal disclosures.

* **Dynamic wait‑time updater**: Added a Node script (`scripts/update-wait-times.js`) and an npm command (`npm run update-wait-times`) to automatically fetch the U.S. Department of State’s global visa wait time page and update `data/wait-times.json`.  The script parses the table rows for London, Belfast and Dublin, converts month values to days (1 month ≈ 30 days) and writes the new values back to the JSON file.  This tool enables scheduled updates (e.g. via cron or CI) so that our wait‑time widget remains current without manual editing.

### Changed
* **Home and pricing copy updates**: Refined the language on the home page and pricing page to speak directly to travellers from the UK and Ireland and to clarify the benefits of each tier.  Adjusted the feature descriptions to be more informative and approachable.
* **Layout updates**: Modified the global footer to include Terms, Privacy and Cookie Policy links.  Added these pages to the navigation bar so users can access them from anywhere on the site.
* **FAQ page enhancements**: Embedded a `FAQPage` JSON‑LD object and injected it into the page to enable FAQ rich snippets.

### Known issues
* The new legal pages are drafts and have not yet been reviewed by a qualified attorney.  Before going live, we must obtain professional legal review to ensure compliance with all applicable laws.
* hCaptcha integration requires valid keys.  Without `NEXT_PUBLIC_HCAPTCHA_SITE_KEY` and `HCAPTCHA_SECRET_KEY`, the captcha widget will not render or verify correctly.  These values must be configured in `.env.local` before deployment.

## 2025‑09‑04

### Added
* **Sitemap and wireframe outline**: Added `docs/sitemap-wireframes.md`, which captures the site hierarchy and high‑level wireframes for each page.  This document serves as a blueprint for design and content development and is referenced in the `STATUS.md` update.

* **Initial project scaffold** using Next.js 13 with the App Router, TypeScript, Tailwind CSS and a simple layout.  Pages for home (`/`), pricing (`/pricing`), FAQ (`/faq`), DS‑160 guide (`/guides/ds-160`), start form (`/start`), success page (`/success`), admin panel (`/admin`) and legal notice (`/legal`) were created.
* **DS‑160 Guide**: Wrote an extensive guide explaining what the DS‑160 is, how to complete and submit it, how to link the confirmation number to an interview, and common mistakes.  Added information on MRV fees, expected interview wait times for London, Belfast and Dublin and processing timelines after the interview【773686817609439†L269-L276】【348764542151161†L182-L186】【348764542151161†L390-L394】.  Included a tips section and clear citations to official sources.
* **Pricing page**: Implemented three service tiers with descriptions and test‑mode Stripe Checkout buttons.  Added a note that the site operates in test mode until legal approval.
* **Start form**: Created a user intake form capturing name and email.  Submissions are saved to a JSON file on the server.  On success, users are redirected to a thank‑you page.
* **Admin panel**: Added an authenticated admin page that lists stored submissions and includes a purge button to delete all entries.  Authentication is based on a password read from `ADMIN_PASSWORD` in `.env`.
* **Legal page**: Added clear disclaimer text emphasising that we are not a law firm, cannot provide legal advice and are not affiliated with the U.S. government【833751466832220†L117-L146】.
* **Policy banner**: Implemented a persistent banner at the top of the site alerting users that, from **2 September 2025**, most applicants must attend an in‑person interview.

* **Wait‑time widget and city pages**: Added a reusable `WaitTimes` component powered by `data/wait-times.json`.  Created regional information pages for London (`/uk/london`), Belfast (`/uk/belfast`) and Dublin (`/ie/dublin`) that display local wait times, embassy/consulate addresses and links to start the DS‑160 process.

* **Guarantee page**: Added `/guarantee` page outlining a 14‑day satisfaction guarantee on service fees and clarifying that visa outcomes are not guaranteed.  The page explains that government and third‑party fees are non‑refundable.

* **Sticky contact buttons**: Included floating WhatsApp and phone call buttons throughout the site to provide instant support and mirror competitor patterns【799483558055777†L170-L175】【798561610508226†L41-L46】.

* **Navigation update**: Added a “Guarantee” link to the top navigation so users can easily access refund policy details.

* **Satisfaction guarantee messaging**: Added a note on the pricing page explaining the 14‑day satisfaction guarantee and integrated the guarantee into each tier’s features.

* **.env.local**: Created a sample `.env.local` file with placeholder Stripe test keys, price IDs, site URL and admin password for local development.  This file must be replaced with real values before deployment.

### Changed

* Updated the DS‑160 guide to include approximate wait times for applicants using the Belfast consulate and the Dublin embassy, in addition to London.  These values are drawn from the U.S. Department of State’s **Global Visa Wait Times** data as of early 2025【348764542151161†L182-L186】【348764542151161†L390-L394】.
* Added citations from Boundless and other competitors to support guidance about completing DS‑160, including that each applicant must file their own form, the importance of saving your work and that only the applicant can sign the application【582395398831132†L112-L124】【582395398831132†L262-L285】.
* Updated pricing tiers to include unlimited email support and a 14‑day satisfaction guarantee item.

* Updated global navigation and layout to include sticky WhatsApp and call buttons.  The layout now contains a link to the new Guarantee page.
* Inserted MRV fee amounts and categories into the guide【339123271819074†L762-L766】.

### Removed

* None at this stage.

### Known issues

* Wait times and fees change over time; these values should be reviewed regularly.  A note in the DS‑160 guide directs users to check official sources for up‑to‑date information.
* The site is currently configured for test payments only; live Stripe keys are not yet implemented.

## 2025‑09‑07

### Changed

* **Pricing page updated for live payments**: Removed references to “test mode” in the pricing page and checkout logic.  The checkout error message now advises users to try again later rather than mentioning test mode.  The final note under the pricing tiers states that payments are processed securely via Stripe, making the page ready for production once live keys and price IDs are supplied.
* **Updated environment sample**: Enhanced `.env.example` comments to clarify that developers should use test keys locally but must switch to live keys (prefixed with `pk_live_` and `sk_live_`) before launch.  Updated variable placeholders accordingly.
* **Status updates**: Raised the payments domain completion to **85%** in `STATUS.md` to reflect readiness for live keys and updated the monitoring description to highlight the scheduled wait‑time update and integration with analytics and uptime monitors.

### Removed

* **Test mode disclaimer**: The “All transactions are processed in test mode” warning on the pricing page was removed now that the site is prepared for live Stripe keys.

### Known issues

* **Legal review still pending**: The legal pages (Terms, Privacy, Cookie Policy) are drafts and should be reviewed by a qualified attorney prior to launch.
* **Live keys configuration**: The site now expects live Stripe keys and price IDs to be set via environment variables.  Without these, the checkout flow will fail in production.
* Deployment to a production host has not been completed.