import WaitTimes from '../../components/WaitTimes';

export const metadata = {
  title: 'Dublin Visa Info',
  description: 'Local guidance for U.S. visa applicants in Ireland.',
};

export default function DublinPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">U.S. Visa Applicants in Dublin</h1>
      <p>
        Residents of the Republic of Ireland attend visa interviews at the U.S.
        Embassy in Dublin. Wait times here are typically shorter than in
        London or Belfast, but can still fluctuate. Check the most recent
        estimates below.
      </p>
      <WaitTimes city="dublin" />
      <h2 className="text-2xl font-semibold mt-4">Dublin Embassy</h2>
      <p>
        The U.S. Embassy in Dublin is located at 42 Elgin Road, Ballsbridge,
        Dublin 4, D04 TP30. Public transport access includes the DART to
        Lansdowne Road station or numerous bus routes. Parking in the area is
        limited, so plan accordingly. Arrive early for security screening.
      </p>
      <p>
        After completing your DS‑160 and paying the MRV fee, schedule your
        interview via the official appointment website. Bring your printed
        DS‑160 confirmation, fee receipt, appointment letter and all
        supporting documents to your interview.
      </p>
      <p>
        Begin your application: <a href="/start" className="underline text-blue-700">Start DS‑160 now</a>.
      </p>
    </div>
  );
}