# Known issues & limitations

This file lists current limitations, bugs and areas needing improvement.  Addressing these items will be prioritised in future sprints.

## Data freshness

* **Wait‑time estimates may quickly become outdated.**  The DS‑160 guide cites wait times for London, Belfast and Dublin based on early‑2025 data【348764542151161†L182-L186】【348764542151161†L390-L394】.  These numbers change weekly.  We added a helper script (`scripts/update-wait-times.js`) that pulls the latest figures from the State Department’s global wait time table and writes them to `data/wait-times.json`.  However, this script must be executed regularly (e.g. via cron or CI) to keep the values current, and it depends on continued availability of the State Department page.
* **Fee amounts could change.**  Visa fees are subject to periodic adjustments.  The MRV fee amounts listed are accurate at the time of writing【339123271819074†L762-L766】.

## Functionality

* **Live payment configuration required.**  Stripe Checkout is configured to use environment variables for API keys and price IDs.  To process real transactions, you must supply live keys (`pk_live_`/`sk_live_`) and corresponding price IDs in `.env.local` or your hosting environment.  Without these, the checkout flow will return an error.
* **No real authentication or user accounts.**  Admin access uses a hard‑coded password from the environment.  There is no user login or session management.
* **File‑based storage.**  Submissions are stored in a JSON file (`data/submissions.json`).  This is not suitable for concurrent writes or large scale and will not persist across deployments.

## Design & content

* **Lack of images and testimonials.**  The site currently contains mostly text.  To build trust, we should add high‑quality illustrations, trust badges and anonymised testimonials similar to those used by competitors.  Images must be licensed appropriately.
* **Further visual polish needed.**  We added a custom abstract illustration and testimonials, but more artwork and user stories could enhance engagement.  Additional regional imagery (e.g. UK and Ireland landscapes) may require sourcing from free image libraries or generating more abstract visuals.
* **Accessibility and localisation.**  We need to conduct an accessibility audit (e.g. proper aria labels, colour contrast) and consider translation for non‑English speakers.
* **Content polish and additional pages.**  The new city pages, guarantee page and separate Terms, Privacy and Cookie Policy pages have been implemented, but they could benefit from more visuals, local FAQs and links to official resources.  We still need to add testimonials and regional imagery to build trust.  The legal policy drafts must be reviewed and approved by a qualified attorney before launch.

## Deployment and monitoring

* **No production deployment.**  The site runs locally via `npm run dev`.  We must configure deployment to a hosting provider, set environment variables and ensure HTTPS.
* **CI/CD environment variables.**  The new GitHub Actions workflow deploys to Vercel using a token secret.  However, the actual runtime environment variables (Stripe keys, admin password, hCaptcha keys, Umami keys and UptimeRobot API key) must be manually configured in the Vercel dashboard.  The workflow will fail or the deployed app will malfunction if these values are missing or incorrect.
* **Analytics and uptime monitors require configuration.**  We integrated Umami and prepared an UptimeRobot monitor script, but these features are disabled until you provide the necessary environment variables (`NEXT_PUBLIC_UMAMI_SCRIPT_URL`, `NEXT_PUBLIC_UMAMI_WEBSITE_ID` and `UPTIMEROBOT_API_KEY`) and run the setup script in production.

* **Captcha keys missing.**  The hCaptcha widget on the start form requires `NEXT_PUBLIC_HCAPTCHA_SITE_KEY` (client) and `HCAPTCHA_SECRET_KEY` (server) to function.  If these variables are left blank, the captcha will not render or verify, and the API route will bypass verification.  Before launch, generate keys via the hCaptcha dashboard and populate these values in `.env.local`.