"use client";

import { useState } from 'react';

// Metadata for the pricing page.  Provides search engines with a
// descriptive title and summary of the pricing tiers and guarantee.
export const metadata = {
  title: 'Pricing – UK→US Visa Service',
  description:
    'Choose from our Basic, Premium or Concierge service tiers. All plans include unlimited support and a 14‑day satisfaction guarantee on service fees.',
};

interface Tier {
  id: string;
  name: string;
  price: string;
  features: string[];
}

const tiers: Tier[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: '£49',
    features: [
      'DS‑160 overview and checklist',
      'Unlimited email support',
      'Interview scheduling guidance',
      '14‑day satisfaction guarantee (service fees only)',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '£99',
    features: [
      'Everything in Basic',
      'Priority email support',
      'Document review before submission',
      '14‑day satisfaction guarantee (service fees only)',
    ],
  },
  {
    id: 'concierge',
    name: 'Concierge',
    price: '£199',
    features: [
      'Everything in Premium',
      'One‑on‑one video consultation',
      'Dedicated case manager',
      '14‑day satisfaction guarantee (service fees only)',
    ],
  },
];

export default function PricingPage() {
  const [loading, setLoading] = useState(false);

  async function handleCheckout(tierId: string) {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: tierId }),
      });
      if (!res.ok) throw new Error('Failed to create session');
      const { url } = await res.json();
      // Redirect to Stripe Checkout
      window.location.href = url;
    } catch (err) {
      // In production this will display a generic error message.  We avoid
      // referencing test mode here so the message remains accurate when live
      // Stripe keys are configured.
      alert('Unable to initiate checkout. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Pricing</h1>
      <p className="mb-6 text-gray-600">
        Choose the service tier that fits your journey. Each plan is designed for
        travellers from the UK and Ireland and comes with unlimited email support and
        clear guidance through every step.
      </p>
      <p className="mb-4 text-xs text-gray-600">
        Our 14‑day satisfaction guarantee applies to the service fee in every plan. If you’re
        not satisfied, contact us within 14 days for a refund of our fee. Government and
        third‑party fees are non‑refundable.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <div key={tier.id} className="border rounded-lg p-6 bg-white shadow">
            <h2 className="text-xl font-semibold mb-2">{tier.name}</h2>
            <p className="text-3xl font-bold mb-4">{tier.price}</p>
            <ul className="mb-4 list-disc list-inside text-sm text-gray-600 space-y-1">
              {tier.features.map((feat) => (
                <li key={feat}>{feat}</li>
              ))}
            </ul>
            <button
              onClick={() => handleCheckout(tier.id)}
              disabled={loading}
              className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 disabled:opacity-50"
            >
              {loading ? 'Loading…' : 'Checkout'}
            </button>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-gray-500">Payments are processed securely through Stripe. Prices are indicative and subject to change.</p>
    </div>
  );
}