export const metadata = {
  title: 'Legal & Privacy',
  description: 'Important legal information and disclosures',
};

export default function LegalPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Legal & Privacy</h1>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Not a law firm</h2>
        <p className="text-sm text-gray-700">
          We are not a law firm and do not provide legal advice. Only a licensed
          attorney or an authorized representative working for a Department of Justice–recognized
          organization may provide legal advice on immigration matters【833751466832220†L117-L146】. Our
          service provides general information to help you complete the DS‑160 and
          understand the visa process.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">No government affiliation</h2>
        <p className="text-sm text-gray-700">
          This website is a private service and is not affiliated with or endorsed
          by the U.S. Department of State, the Department of Homeland Security, or any
          government agency. All official forms and appointments must be submitted
          through government portals such as the Consular Electronic Application Center
          (CEAC) and the Visa Appointment Service【582395398831132†L80-L83】.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Privacy & data protection</h2>
        <p className="text-sm text-gray-700">
          We only collect your name and email address in order to send you helpful
          information about the visa process. We do not collect passports, dates of birth
          or other personally identifiable information during phase 1. You may
          request that we purge your data at any time via the admin dashboard.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Use at your own risk</h2>
        <p className="text-sm text-gray-700">
          While we strive to keep the information on this site up to date and
          accurate, visa rules and fees may change. Always check the official
          State Department or U.S. embassy websites for the most current policies
          and procedures. Your use of this site constitutes agreement that we are
          not liable for any errors or omissions.
        </p>
      </section>
    </div>
  );
}