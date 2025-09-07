export const metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions governing use of the EasyASTA website.',
};

/**
 * Terms of Service for EasyASTA. This document sets out the rules and
 * guidelines that users must agree to in order to use the site.  It
 * emphasises that EasyASTA is not a law firm, describes user
 * responsibilities, outlines the refund policy, and limits our
 * liability.  Drafted for informational purposes only; please seek
 * professional legal review before relying on this text.
 */
export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Terms of Service</h1>
      <p className="text-sm text-gray-600">Effective date: 6 September 2025</p>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
        <p className="text-sm text-gray-700">
          By accessing or using this website, you agree to be bound by these
          Terms of Service. If you do not agree with any part of these
          terms, you may not use the site.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">2. Not a Law Firm</h2>
        <p className="text-sm text-gray-700">
          EasyASTA is not a law firm and does not provide legal advice. The
          content on this site is for general informational purposes only and
          should not be relied upon as a substitute for professional legal
          guidance. Only a licensed attorney or authorized representative
          can provide legal advice specific to your circumstances.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">3. Scope of Service</h2>
        <p className="text-sm text-gray-700">
          Our service offers guidance on completing the DS‑160 visa
          application and scheduling visa interviews. We do not complete
          forms on your behalf, submit applications to the U.S. government
          or represent you before any agency. You are solely responsible for
          ensuring the accuracy and completeness of any forms you submit.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">4. User Responsibilities</h2>
        <p className="text-sm text-gray-700">
          You agree to use this site only for lawful purposes and in
          accordance with these terms. You must not: (a) misuse the site or
          interfere with its functioning; (b) copy or redistribute content
          without permission; (c) use the site for any fraudulent or
          unlawful activity; or (d) provide inaccurate or misleading
          information. Failure to comply may result in suspension or
          termination of your access.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">5. Refund Policy</h2>
        <p className="text-sm text-gray-700">
          We offer a 14‑day satisfaction guarantee on our service fees.
          If you are not satisfied with our service, you may request a
          refund of the fee you paid to us within 14 days of purchase.
          Government filing fees and payments to third parties (such as
          MRV fees) are non‑refundable. This refund policy does not
          guarantee any particular outcome for your visa application.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">6. Intellectual Property</h2>
        <p className="text-sm text-gray-700">
          The content, design and layout of this site are owned by
          EasyASTA or our licensors. You may not reproduce, distribute or
          create derivative works from any part of the site without our
          express permission, except for personal, non‑commercial use.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">7. Third‑Party Links</h2>
        <p className="text-sm text-gray-700">
          This site may contain links to third‑party websites. We are not
          responsible for the content or policies of those sites and
          provide links for informational purposes only. Visiting any
          third‑party site is at your own risk.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">8. Limitation of Liability</h2>
        <p className="text-sm text-gray-700">
          To the maximum extent permitted by law, EasyASTA and its
          affiliates will not be liable for any direct, indirect,
          incidental, consequential or punitive damages arising from your
          use of the site. We make no warranties as to the accuracy,
          completeness or suitability of the information provided.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">9. Modifications</h2>
        <p className="text-sm text-gray-700">
          We may modify these Terms of Service at any time. Changes will
          take effect when posted on this page. Your continued use of the
          site constitutes acceptance of the revised terms.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">10. Governing Law</h2>
        <p className="text-sm text-gray-700">
          These terms are governed by the laws of England and Wales. Any
          disputes arising from these terms will be subject to the
          jurisdiction of the courts of England and Wales.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">11. Contact</h2>
        <p className="text-sm text-gray-700">
          If you have any questions about these terms, please contact us
          via email at support@easyasta.com.
        </p>
      </section>
    </div>
  );
}