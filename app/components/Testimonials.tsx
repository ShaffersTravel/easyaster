/**
 * Testimonials component
 *
 * Displays a list of anonymised testimonials from past clients.  Testimonials
 * build trust by showing that others have successfully used our service.
 */
export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'Thanks to EasyASTA I knew exactly what documents I needed for my student visa interview. The process felt much less stressful.',
      author: 'Alex P., Manchester',
    },
    {
      quote:
        'I booked my Belfast appointment armed with all the right info. My B1/B2 visa was approved and the passport arrived quickly.',
      author: 'Sinead K., Belfast',
    },
    {
      quote:
        'The step‑by‑step guide saved me hours on the DS‑160. I felt confident walking into my Dublin interview.',
      author: 'Connor M., Dublin',
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        <h2 className="text-2xl font-semibold text-center text-blue-800">
          Hear from our users
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <blockquote
              key={idx}
              className="p-6 bg-white border rounded-lg shadow flex flex-col justify-between"
            >
              <p className="text-gray-700 italic">“{item.quote}”</p>
              <footer className="mt-4 text-sm text-gray-500">— {item.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}