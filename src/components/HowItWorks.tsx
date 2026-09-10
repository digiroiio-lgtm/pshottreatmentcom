const steps = [
  {
    number: "01",
    title: "Contact Us on WhatsApp",
    desc: "Send us a message and our medical coordinator will reply within minutes. We speak English.",
    icon: "💬",
  },
  {
    number: "02",
    title: "Free Medical Consultation",
    desc: "Our certified doctor reviews your case and confirms whether you are a suitable candidate for P-Shot treatment.",
    icon: "👨‍⚕️",
  },
  {
    number: "03",
    title: "Travel & Treatment in Turkey",
    desc: "Fly to Istanbul. We handle transfers. Same-day treatment. Most patients are home within 48 hours.",
    icon: "✈️",
  },
];

export default function HowItWorks() {
  return (
    <section aria-labelledby="how-it-works-heading" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="how-it-works-heading"
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3"
          >
            How It Works
          </h2>
          <p className="text-gray-600 text-lg">
            3 simple steps to your P-Shot treatment
          </p>
        </div>
        <ol className="grid md:grid-cols-3 gap-8 list-none p-0">
          {steps.map((step) => (
            <li
              key={step.number}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 text-center"
            >
              <p className="text-5xl mb-4" aria-hidden="true">
                {step.icon}
              </p>
              <p className="text-sm font-bold text-blue-700 mb-2">
                STEP {step.number}
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
