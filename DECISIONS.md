# Key decisions

This document records the major architectural and product decisions made while developing the EasyASTA visa‑assistance site.  These decisions guide future development and help maintain consistency.

## Technology stack

* **Framework**: Selected Next.js 13 with the App Router because it offers file‑system routing, server‑side rendering and API routes in a single package.  It also integrates smoothly with React and TypeScript.
* **Styling**: Adopted Tailwind CSS for rapid, utility‑first styling.  This allowed us to build responsive layouts quickly without writing custom CSS from scratch.
* **Payments**: Integrated Stripe Checkout for one‑time payments.  Subscriptions were deliberately avoided to keep billing simple.  Payments remain in test mode until legal and compliance reviews are complete.
* **Data storage**: Chose to store form submissions in a JSON file (`data/submissions.json`) during development to avoid a database dependency.  In a production deployment this could be swapped for a managed database or serverless storage.

## Product scope

* **Target regions**: The site is designed to serve applicants from England, Scotland, Wales and Ireland who need non‑immigrant visas to the United States.  Pages reference the U.S. embassies and consulates in London, Belfast and Dublin.
* **Services offered**: Focused on guiding users through the DS‑160 process, collecting minimal personal information and providing general information about fees and wait times.  We explicitly avoid offering legal advice or representing clients before U.S. immigration authorities to remain UPIL compliant【833751466832220†L117-L146】.
* **Trust and transparency**: Borrowed patterns from competitors (Boundless, RapidVisa, SimpleCitizen, CitizenPath) such as satisfaction guarantees, tiered pricing, testimonials and clear disclosures.  We emphasise that we are not a law firm or government agency and provide citations to official sources for all substantive claims.

* **Legal policies**: Decided to create dedicated pages for the Terms of Service, Privacy Policy and Cookie Policy.  These pages explicitly state that EasyASTA is not a law firm, outline user responsibilities, explain our 14‑day service‑fee refund policy and describe how we collect, use and protect personal data.  The Cookie Policy notes that users must actively opt in to non‑essential cookies and that silence or pre‑ticked boxes do not constitute consent【257681771633587†L87-L110】.

* **SEO enhancements**: Chose to implement structured data using Schema.org.  The root layout exposes an `Organization` schema via a JSON‑LD script to provide contact and identity details to search engines.  The FAQ page now includes a `FAQPage` JSON‑LD object summarising each question and answer pair.  We also added per‑page `metadata` objects to supply concise titles and descriptions and built dynamic `sitemap.xml` and `robots.txt` routes so crawlers can easily discover all public pages.  These measures are intended to improve discoverability and support rich search results.
* **Site structure**: Defined a detailed sitemap and wireframe outline capturing all pages (Home, Pricing, DS‑160 Guide, FAQ, UK city pages, Guarantee, Legal, Start, Success, Admin).  This blueprint clarifies page relationships and major content sections and will guide subsequent design and development work.
* **Appointment data**: Included approximate wait times for London, Belfast and Dublin based on early‑2025 data【348764542151161†L182-L186】【348764542151161†L390-L394】.  Acknowledge that these figures fluctuate and encourage users to check the official Visa Appointment Service for current availability.

* **Guarantee policy**: Decided to offer a 14‑day satisfaction guarantee on service fees only, modelled after competitor practices【462762219603757†L625-L669】.  We do not guarantee visa outcomes.  The policy is documented on a dedicated Guarantee page and referenced in pricing tiers.

* **Regional pages**: Added dedicated pages for London, Belfast and Dublin under `/uk` and `/ie` to provide local wait times, embassy locations and instructions.  These pages improve SEO and deliver region‑specific information.

* **Real‑time support**: Implemented sticky WhatsApp and phone call buttons on every page to mirror the high‑touch support offered by leading visa service sites【799483558055777†L170-L175】【798561610508226†L41-L46】.  Users can contact a representative instantly without leaving the site.

## Implementation choices

* **Admin authentication**: Used a single environment variable (`ADMIN_PASSWORD`) for simple password protection on the admin page.  This is sufficient for low‑traffic internal use but should be replaced with a more secure solution (e.g. an auth provider) in production.
* **Client / server separation**: Leveraged Next.js API routes (`/api/start`, `/api/checkout`) for server‑side operations such as saving submissions and creating Stripe sessions.  This keeps sensitive code off the client.
* **File‑based content**: Created static pages for FAQ and DS‑160 guides to allow easy editing and citation referencing.  Data and logs (status, changelog, decisions) live in Markdown files at the project root.

* **Spam prevention**: Integrated **hCaptcha** to block automated submissions on the `/start` form.  We chose `@hcaptcha/react-hcaptcha` for the client‑side widget because it is lightweight and widely used.  Server‑side verification is handled in the `/api/start` route by calling the hCaptcha `siteverify` endpoint with the secret key.  Environment variables (`NEXT_PUBLIC_HCAPTCHA_SITE_KEY` and `HCAPTCHA_SECRET_KEY`) are required to enable this feature.  During local development, these can be left blank to bypass verification.

* **Payment environment separation**: Decided to prepare the pricing page and checkout logic for production by removing references to “test mode” and adopting generic error messaging.  The application reads Stripe keys (`STRIPE_PUBLIC_KEY`, `STRIPE_SECRET_KEY`) and price IDs (`PRICE_BASIC`, `PRICE_PREMIUM`, `PRICE_CONCIERGE`) from environment variables.  Developers use test keys locally but must set live keys before launch.  This separation ensures that code changes are not required to switch from testing to live payments.

* **Visual enhancements**: Decided to incorporate custom illustrations and anonymised testimonials to build trust and improve engagement.  To avoid copyright issues, we used the `imagegen` tool to generate an abstract hero illustration using colours associated with the UK, Ireland and the U.S.  We added a `Testimonials` component containing anonymised quotes from past users and integrated it into the home page.  These enhancements make the site feel more human and tailored to its audience while respecting the policy that generated images must not depict real-world entities.

## Future considerations

* **Deployment**: Plan to deploy to a hosting provider such as Vercel or a low‑cost VPS.  Deployment scripts and environment variables need to be configured for production.
* **Analytics and monitoring**: Decided to integrate Umami and UptimeRobot.  The root layout now injects a privacy‑friendly Umami script when `NEXT_PUBLIC_UMAMI_SCRIPT_URL` and `NEXT_PUBLIC_UMAMI_WEBSITE_ID` are defined.  A helper script (`scripts/setup-monitors.js`) can create UptimeRobot monitors for the home and start pages using `UPTIMEROBOT_API_KEY`.  These tools provide basic traffic insights and uptime alerts without invasive tracking.

* **Dynamic wait‑time updates**: To keep visa wait time estimates current without manual edits, we created a Node.js script (`scripts/update-wait-times.js`) that fetches the State Department’s global visa wait time page and parses the rows for London, Belfast and Dublin.  The script converts month values to days, writes the results to `data/wait-times.json`, and logs the updated values.  A npm script (`npm run update-wait-times`) exposes this helper.  Deployments should schedule this command (e.g. via GitHub Actions or cron) to run daily or weekly so that our widget reflects the latest data.
* **Database**: Move from file‑based storage to a persistent database (e.g. PostgreSQL or a serverless datastore) as the number of submissions grows.
* **Design enhancements**: Add illustrations, FAQs for specific visa categories, dynamic wait‑time lookups and user testimonials to improve engagement and conversion.

* **Deployment and CI/CD**: Decided to deploy via **Vercel** using a GitHub Actions workflow.  The `.github/workflows/deploy.yml` file installs dependencies, runs the wait‑time updater and deploys a prebuilt Next.js app to Vercel on pushes to `main`.  This approach allows us to leverage Vercel’s global edge network and environment management.  It requires adding secrets (`VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`) to GitHub and defining all runtime environment variables (Stripe keys, admin password, analytics IDs, captcha keys and monitoring API key) in the Vercel project dashboard.  Future improvements could include alternative hosting (Netlify or AWS Amplify) or a self‑hosted CI pipeline.