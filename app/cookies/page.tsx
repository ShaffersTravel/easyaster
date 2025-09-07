export const metadata = {
  title: 'Cookie Policy',
  description: 'Information about the cookies we use and how you can manage them.',
};

/**
 * Cookie Policy for EasyASTA.
 *
 * This document explains what cookies are, the types of cookies we use,
 * why we use them and how you can manage your cookie preferences. It
 * reflects guidance that cookie consent must be freely given and that
 * users must have a clear option to accept or decline non‑essential
 * cookies【257681771633587†L87-L112】. As a private visa‑help service, we
 * strive to minimise cookie use and respect your choices.
 */
export default function CookiePolicyPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Cookie Policy</h1>
      <p className="text-sm text-gray-600">Effective date: 6 September 2025</p>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">1. What are cookies?</h2>
        <p className="text-sm text-gray-700">
          Cookies are small text files placed on your device when you
          visit a website. They are widely used to make websites work
          efficiently and provide information to site owners. Cookies
          can be first‑party (set by the site you visit) or third‑party
          (set by another domain), and they may be session‑based
          (deleted when you close your browser) or persistent
          (remaining on your device until they expire or are deleted)
         【948609475361052†L156-L160】.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">2. Why we use cookies</h2>
        <p className="text-sm text-gray-700">
          We use cookies to:
        </p>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>
            <strong>Ensure essential functions.</strong> Some
            cookies are necessary for our website to function
            correctly, such as remembering your session or ensuring
            security. These do not require consent but are still
            explained for transparency【948609475361052†L169-L171】.
          </li>
          <li>
            <strong>Improve performance.</strong> We use
            performance cookies to collect anonymised data about how
            visitors interact with the site so we can improve
            usability【948609475361052†L169-L177】. These analytics cookies
            are non‑essential and require your consent.
          </li>
          <li>
            <strong>Remember preferences.</strong> Functional
            cookies remember choices you make, such as language or
            region settings【948609475361052†L169-L173】. These help
            personalise your experience but are optional.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">3. Your consent</h2>
        <p className="text-sm text-gray-700">
          Under the UK GDPR and ePrivacy regulations, consent for
          cookies must be freely given, specific and informed. This
          means we cannot assume consent through silence or inactivity
          and must provide a clear choice to accept or decline
          non‑essential cookies【257681771633587†L87-L110】. Our cookie
          banner presents both “Accept” and “Decline” options, and we
          do not use pre‑ticked boxes. You can withdraw your consent at
          any time via the banner or by adjusting your browser
          settings【948609475361052†L124-L146】.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">4. Types of cookies we use</h2>
        <p className="text-sm text-gray-700">
          Our site uses the following categories of cookies:
        </p>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>
            <strong>Strictly necessary cookies.</strong> These
            cookies enable core functionality such as secure login,
            managing your session and remembering your consent
            preferences. You cannot disable them via our cookie
            banner.【948609475361052†L169-L171】
          </li>
          <li>
            <strong>Performance cookies.</strong> These cookies
            collect anonymous information about how you use our site,
            such as which pages you visit and where you experience
            errors. We use this data to improve the website. These
            cookies are only set if you accept them【948609475361052†L175-L177】.
          </li>
          <li>
            <strong>Functionality cookies.</strong> These cookies
            remember your choices (like region or language) to
            personalise your experience. They are also optional and
            subject to your consent【948609475361052†L169-L173】.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">5. Managing cookies</h2>
        <p className="text-sm text-gray-700">
          You can manage your cookie preferences by using our cookie
          banner to accept or decline non‑essential cookies. Most
          browsers also allow you to view, delete or block cookies via
          their settings. To learn more, visit your browser’s help
          documentation. Remember that disabling certain cookies may
          affect your ability to use some features of our site.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">6. Changes to this policy</h2>
        <p className="text-sm text-gray-700">
          We may update this Cookie Policy from time to time. We will
          post the updated policy on this page with a revised effective
          date. Your continued use of our site after we post changes
          constitutes your acceptance of the updated policy.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">7. Contact us</h2>
        <p className="text-sm text-gray-700">
          If you have any questions about this Cookie Policy or how we
          use cookies, please contact us at support@easyasta.com.
        </p>
      </section>
    </div>
  );
}