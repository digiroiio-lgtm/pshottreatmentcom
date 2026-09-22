export function TestimonialDisclosure() {
  return (
    <p className="text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-xl p-4">
      Anonymous experiences are not medical evidence. No Review or AggregateRating structured data is emitted unless source, consent and calculation can be verified.
    </p>
  );
}

export default function Testimonials() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <div className="border border-gray-200 rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-950 mb-3">No unverified testimonials</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          The previous repository included named quotations and an aggregate five-star review claim without a review source or verification method. Those claims are not published here.
        </p>
        <TestimonialDisclosure />
      </div>
    </section>
  );
}
