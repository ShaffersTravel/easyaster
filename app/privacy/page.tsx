export const metadata = {
  title: 'Privacy Policy',
  description: 'How we collect, use and protect your personal information.',
};

/**
 * Privacy Policy for EasyASTA.
 *
 * This document describes what personal data we collect when you use our
 * services, why we collect it, who we share it with and how long we retain
 * it.  It also outlines your rights under the UK General Data Protection
 * Regulation (UK GDPR) and related data protection laws.  We are not a
 * law firm and this policy is provided for general informational
 * purposes only; please consult a qualified attorney for legal advice.
 */
export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="text-sm text-gray-600">Effective date: 6 September 2025</p>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">1. Introduction</h2>
        <p className="text-sm text-gray-700">
          EasyASTA (“we,” “us” or “our”) respects your privacy and is
          committed to protecting your personal information. This Privacy
          Policy explains how we collect, use, store and disclose
          information about you when you visit our website or use our
          services. A well‑written privacy policy should tell you what
          data is collected, why it is collected, who can access it and
          how long it will be stored【336632788382264†L147-L164】.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">2. Information we collect</h2>
        <p className="text-sm text-gray-700">
          We collect the following types of information when you use our
          website:
        </p>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>
            <strong>Information you provide.</strong> When you fill out
            our forms or contact us, we collect your name, email
            address and any other details you choose to share. We do not
            request passport numbers, dates of birth or other sensitive
            information during phase 1.
          </li>
          <li>
            <strong>Payment information.</strong> If you purchase a
            service, your payment details (such as card number and
            billing address) are processed securely by our payment
            processor (Stripe). We do not store full payment card
            numbers on our servers.
          </li>
          <li>
            <strong>Technical data.</strong> We may collect your IP
            address, browser type, device information and usage data
            through cookies or analytics tools. This helps us improve
            our website and is generally aggregated and anonymised.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">3. How we use your information</h2>
        <p className="text-sm text-gray-700">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>Provide, operate and improve our services and website.</li>
          <li>Communicate with you about your inquiries and purchases.</li>
          <li>Process payments and send you receipts or confirmation
          emails.</li>
          <li>Protect the security and integrity of our systems.</li>
          <li>Comply with legal obligations.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">4. How we share information</h2>
        <p className="text-sm text-gray-700">
          We do not sell or rent your personal information. We may share
          information with third parties in the following circumstances:
        </p>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>
            <strong>Service providers.</strong> We use reputable third
            parties (such as Stripe for payment processing and hosting
            providers) to help us run our business. They may access
            your information only to perform tasks on our behalf and
            must protect it.
          </li>
          <li>
            <strong>Legal requirements.</strong> We may disclose your
            information if required by law or to protect our rights or
            the rights of others.
          </li>
          <li>
            <strong>Business transfers.</strong> In the event of a
            merger, acquisition or asset sale, your personal
            information may be transferred to a successor entity.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">5. Data retention</h2>
        <p className="text-sm text-gray-700">
          We retain your personal information only for as long as
          necessary to fulfil the purposes for which it was collected,
          including any legal, accounting or reporting requirements. We
          regularly review the data we hold and delete or anonymise
          information when it is no longer needed.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">6. Security</h2>
        <p className="text-sm text-gray-700">
          We take reasonable measures to protect your personal
          information using encryption, secure servers and access
          controls. However, no method of transmission or storage is
          completely secure; as such, we cannot guarantee absolute
          security【336632788382264†L147-L164】.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">7. Your rights</h2>
        <p className="text-sm text-gray-700">
          Under applicable data protection laws, you have the right to
          access, correct, delete or restrict the processing of your
          personal data. You may also object to our processing or
          request that we transfer your information. To exercise these
          rights, please contact us at support@easyasta.com.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">8. Cookies and tracking</h2>
        <p className="text-sm text-gray-700">
          We use cookies and similar technologies to enhance your
          experience and analyse how our site is used. Some cookies are
          essential for the site to function, while others help us
          understand user behaviour. You can find more information in
          our Cookie Policy and can manage your preferences via our
          cookie banner.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">9. Changes to this policy</h2>
        <p className="text-sm text-gray-700">
          We may update this Privacy Policy from time to time. We will
          post the updated policy on this page with a revised effective
          date. Your continued use of our site after we post changes
          constitutes your acceptance of the updated policy.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">10. Contact us</h2>
        <p className="text-sm text-gray-700">
          If you have any questions or concerns about this Privacy
          Policy or how we handle your data, please contact us at
          support@easyasta.com.
        </p>
      </section>
    </div>
  );
}