import WaitTimes from '../../components/WaitTimes';

export const metadata = {
  title: 'London Visa Info',
  description: 'Local guidance for U.S. visa applicants in London and the surrounding region.',
};

export default function LondonPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">U.S. Visa Applicants in London</h1>
      <p>
        If you live in England or Wales, you will typically interview at the
        U.S. Embassy in London. Below you’ll find estimated interview wait
        times, directions to the embassy and links to schedule your
        appointment. Remember to complete your DS‑160 first and bring the
        confirmation page to your interview.
      </p>
      <WaitTimes city="london" />
      <h2 className="text-2xl font-semibold mt-4">London Embassy</h2>
      <p>
        The U.S. Embassy in London is located at 33 Nine Elms Lane, London SW11
        7US. The nearest tube station is Vauxhall. Please arrive 15 minutes
        before your scheduled appointment and be prepared for security
        screening. Only applicants may enter the embassy unless you require
        special assistance.
      </p>
      <p>
        For detailed directions, public transport options and parking
        information, visit the official embassy website. To minimise delays,
        book your interview as early as possible and monitor the appointment
        portal for earlier slots.
      </p>
      <p>
        Ready to start? <a href="/start" className="underline text-blue-700">Begin your DS‑160 journey</a> today.
      </p>
    </div>
  );
}