import Link from 'next/link';
import Testimonials from './components/Testimonials';

// Metadata for the home page.  Defining a title and description here
// helps search engines understand what the page is about and improves
// SEO.  The description succinctly summarises our service for UK and
// Ireland applicants seeking U.S. visas.
export const metadata = {
  title: 'Home – UK→US Visa Service',
  description:
    'Simplify your U.S. visa journey from the UK or Ireland with guidance on the DS‑160 form, interview scheduling and visa wait times.',
};

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero section with abstract illustration and key message */}
      <section className="flex flex-col items-center text-center py-12 space-y-6">
        <div className="w-full max-w-4xl">
          <img
            src="/images/hero-abstract.png"
            alt="Abstract journey illustration"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="px-4">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Simplify your U.S. visa journey</h1>
          <p className="max-w-3xl mx-auto text-gray-700 text-base leading-relaxed">
            Getting a non‑immigrant visa to the United States from the UK or Ireland can feel daunting.
            We demystify the DS‑160 application, show you how to book your interview, and explain
            appointment wait times for embassies in London, Belfast and Dublin. Whether you’re travelling
            for business, tourism, study or work, we’re here to help.
          </p>
          <div className="mt-6">
            <Link
              href="/start"
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md shadow hover:bg-blue-800"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-lg shadow border">
          <h2 className="text-xl font-semibold mb-2">Step‑by‑step guidance</h2>
          <p className="text-sm text-gray-600">
            Learn exactly what the DS‑160 asks for and how to complete it without mistakes.
            Our guide is tailored to travellers from the UK and Ireland and outlines every
            section of the form in plain language【582395398831132†L211-L233】.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow border">
          <h2 className="text-xl font-semibold mb-2">Appointment insights</h2>
          <p className="text-sm text-gray-600">
            Find out how to book your embassy interview via the official Visa Appointment
            Service and see current wait times for London, Belfast and Dublin【773686817609439†L250-L284】.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow border">
          <h2 className="text-xl font-semibold mb-2">Fees & timelines</h2>
          <p className="text-sm text-gray-600">
            Understand the government fees for each visa category and how long it might
            take to receive your passport back after the interview【339123271819074†L762-L766】.
          </p>
        </div>
      </section>

      {/* Testimonials section */}
      <Testimonials />
    </div>
  );
}