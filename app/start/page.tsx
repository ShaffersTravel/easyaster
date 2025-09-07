"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the hCaptcha component because it references
// browser‑only APIs (window) which are not available during
// server‑side rendering.  This prevents hydration warnings.
const HCaptcha = dynamic(() => import('@hcaptcha/react-hcaptcha'), {
  ssr: false,
});

// Metadata for the start page.  This page initiates the user flow by
// collecting a name and email address.  A clear title and description
// improve SEO and help users understand what to expect when they land
// on this page.
export const metadata = {
  title: 'Get Started – UK→US Visa Service',
  description:
    'Provide your name and email to begin your DS‑160 visa journey. We’ll send you a checklist and further instructions by email.',
};

export default function StartPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    // Ensure the captcha has been solved before allowing submission
    if (!captchaToken) {
      setCaptchaError('Please complete the captcha verification.');
      return;
    }
    try {
      const res = await fetch('/api/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, token: captchaToken }),
      });
      if (!res.ok) throw new Error('Failed to submit');
      setSubmitted(true);
    } catch (err) {
      setError('There was an error submitting your information.');
    }
  }

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">Thank you!</h1>
        <p>We have received your details. You will receive an email from us shortly with next steps.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Get started</h1>
      <p className="text-gray-600 mb-6">Enter your name and email to begin the process. We’ll send you a checklist and further instructions.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
        {/* Display any form‑level error messages */}
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {/* Display any captcha‑specific errors */}
        {captchaError && <p className="text-red-500 text-sm">{captchaError}</p>}
        {/* hCaptcha widget – loaded dynamically to avoid SSR issues */}
        <div className="flex justify-center">
          <HCaptcha
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || ''}
            onVerify={(token) => {
              setCaptchaToken(token);
              setCaptchaError(null);
            }}
            onError={() => {
              setCaptchaError('Captcha error. Please reload and try again.');
            }}
            onExpire={() => {
              // token expired; reset the token so user must solve again
              setCaptchaToken(null);
              setCaptchaError('Captcha expired. Please complete it again.');
            }}
          />
        </div>
        <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800">
          Start
        </button>
      </form>
      <p className="text-xs text-gray-500 mt-4">
        By submitting, you confirm that you understand we are not a law firm and do not provide legal advice.
      </p>
    </div>
  );
}