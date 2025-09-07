/**
 * A small component to display approximate interview wait times for a given
 * consular post. It reads data from the JSON file located in the project’s
 * `data` directory. When adding new cities or updating wait times, edit
 * `data/wait-times.json` and this component will automatically reflect
 * those changes at build time. The component accepts a `city` prop that
 * corresponds to keys in the JSON (e.g. "london", "belfast", "dublin").
 */
import waitTimes from '../../data/wait-times.json';

interface WaitTimesProps {
  city: keyof typeof waitTimes;
}

export default function WaitTimes({ city }: WaitTimesProps) {
  // Look up the data for the provided city. If the city isn’t found,
  // fallback to undefined and display nothing.
  const info = (waitTimes as any)[city];
  if (!info) return null;
  return (
    <div className="rounded border p-4 text-sm bg-blue-50">
      <p className="font-semibold capitalize">{city} interview wait (approx.):</p>
      <ul className="mt-1 list-disc pl-5 space-y-1">
        <li>Visitor (B1/B2): ~{info.visitorDays} days</li>
        <li>Students (F/M/J): ~{info.studentDays} days</li>
        <li>Work (H/L/O/P/Q): ~{info.workerDays} days</li>
      </ul>
      <p className="mt-2 text-gray-600">Source: {info.source}. Always check the official portal for current wait times.</p>
    </div>
  );
}