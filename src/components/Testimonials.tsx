const reviews = [
  {
    name: 'Krishna',
    location: 'Karumandabam, Trichy',
    rating: 5,
    text: 'The technician arrived within 30 minutes and fixed my washing machine on the spot. Very professional and transparent about the cost. Highly recommend Hire Expert Service Center!',
  },
  {
    name: 'Rajkumar',
    location: 'Srirangam, Trichy',
    rating: 5,
    text: 'My AC was not cooling at all. They diagnosed the issue quickly — it was a gas leak. Refilled and serviced it the same day. Great service at a fair price.',
  },
  {
    name: 'Priya S.',
    location: 'Thillai Nagar, Trichy',
    rating: 5,
    text: 'Used their refrigerator repair service twice now. Both times the technicians were polite, knowledgeable, and honest. The 90-day warranty gives real peace of mind.',
  },
  {
    name: 'Murugan K.',
    location: 'KK Nagar, Trichy',
    rating: 5,
    text: 'My smart TV stopped displaying picture. They replaced the panel board and had it running in under an hour. Fast, clean work — will call again for sure.',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? 'text-yellow-400' : 'text-gray-300'}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 bg-white" id="reviews">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2>What Our Customers Say</h2>
          <p className="text-gray-600 mt-3">
            Trusted by thousands of households across Trichy
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <article key={r.name} className="card flex flex-col gap-3">
              <Stars count={r.rating} />
              <p className="text-gray-700 text-sm leading-relaxed flex-1">"{r.text}"</p>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{r.name}</p>
                <p className="text-xs text-gray-500">{r.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
