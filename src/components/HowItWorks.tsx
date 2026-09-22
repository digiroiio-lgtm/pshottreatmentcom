const steps = [
  { title: "Ask and verify", text: "Request the legal provider, clinic address, treating clinician, registration details, protocol, evidence summary and itemised fee." },
  { title: "Clinical assessment", text: "A qualified clinician should review your ED history, medication, health risks, likely cause and established alternatives before deciding suitability." },
  { title: "Consent or decline", text: "Read the consent information, including experimental status and uncertainty. You should be free not to proceed after the assessment." },
  { title: "Procedure and aftercare", text: "If appropriate and consented, blood is drawn, processed to prepare PRP and injected. Written aftercare and an emergency route should follow." },
];

export default function HowItWorks() {
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-950 text-center mb-3">A safer patient journey</h2>
        <p className="text-gray-600 text-center mb-9">Treatment should follow verification, assessment and informed consent.</p>
        <ol className="grid md:grid-cols-2 gap-5">
          {steps.map((step, index) => (
            <li key={step.title} className="bg-white border border-gray-200 rounded-2xl p-6 flex gap-4">
              <span className="w-10 h-10 shrink-0 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold">{index + 1}</span>
              <div><h3 className="font-bold text-gray-950 mb-2">{step.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{step.text}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
