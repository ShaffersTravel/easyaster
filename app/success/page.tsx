// Metadata for the payment success page.  This informs search engines
// that the page confirms a successful transaction and guides users
// about next steps.
export const metadata = {
  title: 'Payment Successful – UK→US Visa Service',
  description:
    'Thank you for your purchase. Your payment has been received and you will get a receipt and next steps by email.',
};

export default function SuccessPage() {
  return (
    <div className="text-center max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Payment successful</h1>
      <p>
        Thank you for your purchase! We have received your payment. Check your
        email for a receipt and further instructions.
      </p>
    </div>
  );
}