const reviews = [
  { name: 'Krishna', location: 'Karumandabam', initials: 'K', color: '#2563eb', text: 'Technician arrived within 25 minutes and fixed my washing machine on the spot. Completely transparent about the cost. Highest recommendation!', rating: 5 },
  { name: 'Rajkumar', location: 'Srirangam', initials: 'R', color: '#ea580c', text: 'AC was not cooling at all — diagnosed a gas leak and refilled it the same day. Professional, quick, and very fair pricing.', rating: 5 },
  { name: 'Priya S.', location: 'Thillai Nagar', initials: 'P', color: '#7c3aed', text: 'Used their refrigerator repair service twice. Both times excellent — polite technicians, genuine parts, and the 90-day warranty gives peace of mind.', rating: 5 },
  { name: 'Murugan K.', location: 'KK Nagar', initials: 'M', color: '#059669', text: 'Smart TV stopped showing picture. They replaced the main board in under an hour. Fast, clean work. Will definitely call again.', rating: 5 },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(180deg,#f8faff 0%,#fff 100%)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="badge mb-4">Customer Reviews</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-3 mt-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-700 font-bold text-lg">4.9</span>
            <span className="text-gray-400 text-sm">· Trusted by 5,000+ households</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <article key={r.name}
              className="bg-white rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1.5
                         transition-all duration-300 p-6 border border-gray-100 flex flex-col gap-4 relative overflow-hidden">
              {/* Decorative quote mark */}
              <span className="absolute top-4 right-5 text-6xl font-black leading-none select-none pointer-events-none"
                style={{ color: r.color, opacity: 0.07 }}>
                "
              </span>

              <Stars count={r.rating} />

              <p className="text-gray-700 text-sm leading-relaxed flex-1">
                "{r.text}"
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: r.color }}>
                  {r.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.location}, Trichy</p>
                </div>
                <div className="ml-auto">
                  <span className="text-green-500 text-xs font-semibold bg-green-50 px-2 py-1 rounded-full">✓ Verified</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
