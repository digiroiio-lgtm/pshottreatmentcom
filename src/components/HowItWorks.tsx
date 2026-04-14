export default function HowItWorks() {
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
      desc: "Our certified doctor will review your case and confirm you're a good candidate for P-Shot treatment.",
      icon: "👨‍⚕️",
    },
    {
      number: "03",
      title: "Travel & Treatment in Turkey",
      desc: "Fly to Istanbul. We handle transfers. Same-day treatment. You're back home within 48 hours.",
      icon: "✈️",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">How It Works</h2>
          <p className="text-gray-500 text-lg">3 simple steps to your P-Shot treatment</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center relative">
              <div className="text-5xl mb-4">{step.icon}</div>
              <div className="text-sm font-bold text-blue-600 mb-2">STEP {step.number}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
