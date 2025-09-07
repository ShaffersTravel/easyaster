export const metadata = {
  title: 'Guarantee',
  description: 'Our 14‑day satisfaction guarantee for service fees and support.',
};

/**
 * The Guarantee page explains the terms of our satisfaction policy. We follow
 * industry standards by offering a 14‑day window during which clients may
 * request a refund of our service fee if they are not satisfied with the
 * guidance provided. This guarantee applies only to our fees—government
 * filing fees and payments to third parties are non‑refundable. We do not
 * guarantee visa approval and cannot refund based on the outcome of an
 * application. See the page for full details.
 */
export default function GuaranteePage() {
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Our Guarantee</h1>
      <p>
        We want you to feel confident in choosing our service. That’s why we
        offer a <strong>14‑day satisfaction guarantee</strong> on our service fees. If you
        decide within 14 days of purchase that our service isn’t right for
        you, simply contact us and we will refund 100% of the fee you paid to
        us. Please note that this guarantee covers only our service fees; any
        government filing fees or third‑party charges (such as the MRV fee)
        are non‑refundable. This policy mirrors the refund terms offered by
        leading competitors in the U.S. visa assistance market.
      </p>
      <p>
        We do not promise any particular outcome and cannot guarantee that a
        visa will be approved. Our role is to provide information, checklists
        and scheduling guidance so that you can prepare a complete and
        accurate application. Visa decisions rest solely with the U.S.
        Department of State.
      </p>
      <p>
        To request a refund under this policy, please email support with your
        order details within 14 days of purchase. We aim to process refund
        requests within five business days. If you have questions about our
        guarantee or would like to discuss your case, reach out via our
        support channels—we’re here to help.
      </p>
    </div>
  );
}