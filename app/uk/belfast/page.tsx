import WaitTimes from '../../components/WaitTimes';

export const metadata = {
  title: 'Belfast Visa Info',
  description: 'Local guidance for U.S. visa applicants in Northern Ireland.',
};

export default function BelfastPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">U.S. Visa Applicants in Belfast</h1>
      <p>
        Applicants from Northern Ireland usually attend their visa interview at
        the U.S. Consulate in Belfast. Wait times here are generally shorter
        than London, but slots can still fill quickly—especially during peak
        travel seasons.
      </p>
      <WaitTimes city="belfast" />
      <h2 className="text-2xl font-semibold mt-4">Belfast Consulate</h2>
      <p>
        The U.S. Consulate General Belfast is at 5 Lister Court, Laganbank Road,
        Belfast BT7 2EJ. Plan your journey by checking public transport or
        parking arrangements ahead of time. Arrive early to allow for security
        screening. Only applicants may enter unless special circumstances
        apply.
      </p>
      <p>
        Appointments must be scheduled online after you complete your DS‑160
        and pay the MRV fee. Don’t forget to bring the printed DS‑160
        confirmation page and all required documents to your interview.
      </p>
      <p>
        Get started now: <a href="/start" className="underline text-blue-700">Complete your DS‑160</a>.
      </p>
    </div>
  );
}