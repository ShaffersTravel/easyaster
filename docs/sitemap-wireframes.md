# Sitemap and wireframe outline

This document records the high‑level information architecture (sitemap) and page wireframes for the EasyASTA visa‑assistance application.  It is intended to guide implementation and ensure that all stakeholders share a consistent understanding of page relationships and major content sections.  The sitemap captures the hierarchy of pages, while the wireframe outlines the layout and key components of each page.

## Sitemap

Below is the proposed site hierarchy.  Indentation indicates parent/child relationships.  Each page name links to the corresponding route in the Next.js app.

```
/
├── pricing
│   ├── Basic tier
│   ├── Premium tier
│   └── Concierge tier
├── guides
│   └── ds-160
├── faq
├── uk
│   ├── london
│   ├── belfast
│   └── dublin
├── guarantee
├── legal
├── start
│   └── success
└── admin
```

- **Home (`/`)** — Introduction to EasyASTA, value proposition, call‑to‑action buttons (e.g. “Get Started”).  Displays trust badges, testimonials and the interview‑waiver policy banner.
- **Pricing (`/pricing`)** — Outlines service tiers (Basic, Premium, Concierge) with descriptions, pricing, bullet lists of included features and a checkout button for each.  Includes a brief note about the 14‑day satisfaction refund.
- **Guides DS‑160 (`/guides/ds-160`)** — Comprehensive article explaining what the DS‑160 is, how to complete it, wait‑time information for London/Belfast/Dublin and FAQs.  Contains internal anchor navigation for sections.
- **FAQ (`/faq`)** — List of frequently asked questions about DS‑160, payments, refunds, and contact options.  Could include collapsible panels for each question.
- **City pages (`/uk/london`, `/uk/belfast`, `/uk/dublin`)** — Provide city‑specific information (approximate wait times, directions to the consulate, local contact information) and call‑to‑action to start the process.
- **Guarantee (`/guarantee`)** — Details the satisfaction refund policy, emphasises that outcome guarantees are not offered and clarifies coverage limits.
- **Legal (`/legal`)** — Contains terms of service, privacy policy, and the disclaimer that EasyASTA is not a law firm nor affiliated with any government agency.
- **Start (`/start`)** — Intake form asking for name, email, visa category and other minimal details.  Submits to server and redirects to the success page upon completion.
- **Success (`/start/success`)** — Confirmation that the intake form was received and instructions for next steps.
- **Admin (`/admin`)** — Password‑protected dashboard listing form submissions with options to purge entries.

## Wireframe outlines

### Home page

* **Header** — Logo, navigation menu (Pricing, Guides, FAQ, Guarantee, Start, Admin) and sticky banner with interview‑waiver notice.
* **Hero section** — Clear headline and subheading explaining EasyASTA’s purpose; primary call‑to‑action button (“Start DS‑160 Assistance”).  Secondary call‑to‑action to view pricing.
* **Trust and testimonials** — Row of competitor‑inspired trust badges (e.g. satisfaction guarantee) and short testimonials.
* **Process overview** — Three‑step illustration explaining how the service works: fill DS‑160, prepare for the interview, get ongoing support.
* **Footer** — Contact details (WhatsApp button, phone number), links to legal pages and social media icons.

### Pricing page

* **Page header** — Title and brief explanation of the service levels.
* **Tier cards** — Three side‑by‑side cards (Basic, Premium, Concierge) listing included features and price.  Each card includes a “Checkout” button that creates a Stripe session.
* **Refund note** — Short paragraph summarising the 14‑day satisfaction refund policy with a link to the Guarantee page.

### DS‑160 guide page

* **Table of contents** — Sticky sidebar or top bar with links to sections (e.g. “What is DS‑160?”, “How to complete”, “Wait times”, “Fees”, “FAQ”).
* **Content sections** — Each section contains a heading, explanatory text and citation references.  Use bullet lists for tips and checklists.
* **Wait‑time table** — Small table or list summarising approximate interview wait times for London, Belfast and Dublin.  Includes a disclaimer that times may change and encourages users to check official sources【349442323721422†L347-L363】.
* **Call‑to‑action** — At the end of the article, prompt users to start their DS‑160 with a button linking to the Start page.

### City pages

* **Hero banner** — City‑specific photo and title (e.g. “U.S. Visa Assistance — London”).
* **Wait‑time widget** — Dynamic component displaying current estimated wait times for each visa category (visitor, student, worker).  Reads from a JSON file and updates regularly.
* **Local consulate info** — Address, map and instructions for attending interviews.
* **Local contact** — WhatsApp/call buttons with UK numbers.
* **Call‑to‑action** — Start the DS‑160 process.

### Guarantee page

* **Overview** — Clear statement of the 14‑day satisfaction refund policy.  Clarifies that refunds apply to service fees only and not government fees.
* **Limitations** — Explanation of what is not covered (e.g. outcome guarantees).  Encourages users to review the terms of service.

### Legal page

* **Disclaimer** — Statement that EasyASTA is not a law firm, cannot provide legal advice and is not affiliated with the U.S. government.
* **Terms of service** — Bullet points or paragraphs summarising user responsibilities and prohibited conduct.
* **Privacy policy** — Explanation of how personal data is collected, used and stored (minimal PII, file‑based storage during development).

### Start page

* **Form fields** — Name, email, visa category dropdown and optional note.  Each field is labelled clearly and validated.  A checkbox confirms that the applicant agrees to the terms of service and acknowledges the refund policy.
* **Submit button** — Triggers server‑side handling via `/api/start`.  Includes hCaptcha to deter spam.
* **Test mode notice** — Small note explaining that payments are in test mode and will not be processed.

### Admin page

* **Login prompt** — Password entry to access submissions.
* **Submissions list** — Table of entries showing name, email and date/time.  Includes a purge button to delete all entries.

---

### Purpose of this document

Creating a sitemap and wireframe provides a clear blueprint for the site’s structure and ensures all stakeholders understand how pages relate to one another before development begins.  As Webflow’s web design guide notes, a sitemap shows where each page fits into the site’s hierarchy【820205178957748†L162-L170】, while wireframes outline the content hierarchy within each page and help determine how much space to allocate to different elements【820205178957748†L304-L343】.  Business.com reinforces that both the sitemap and wireframes act as a blueprint guiding content distribution and placement within the website【285758238874156†L309-L321】.  By establishing these early, we minimise confusion, streamline the development process and avoid costly redesigns later.