import type { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Flying to Turkey for ED Treatment: Is It Worth It?",
  description: "Is it worth flying to Turkey for erectile dysfunction treatment? We break down the costs, logistics, medical quality, and what real patients say about medical tourism for ED.",
  keywords: ["flying to Turkey ED treatment", "medical tourism erectile dysfunction", "P-Shot Turkey worth it", "Turkey medical tourism ED", "ED treatment abroad"],
  alternates: { canonical: "https://pshottreatment.com/flying-to-turkey-ed-treatment" },
};

export default function FlyingToTurkeyEdTreatmentPage() {
  return (
    <div className="pt-6">
      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Flying to Turkey for ED Treatment</h1>
        <p className="text-xl text-gray-500">Is the journey worth it? Everything you need to know before booking your flight</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-10">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">The Short Answer: Yes, For Most Men It&apos;s Absolutely Worth It</h2>
          <p className="text-gray-700 leading-relaxed">
            Flying to Turkey for P-Shot treatment typically costs £440–£570 all-in (flights + hotel + treatment). The same procedure in the UK costs £1,200–£2,000. That&apos;s a saving of up to £1,500 – enough to pay for several holidays. The medical quality is comparable and in many cases exceeds what UK private clinics offer, because Turkish clinics competing for international patients have strong incentive to maintain high standards.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Full Cost Breakdown: UK vs Flying to Turkey</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm text-left border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Cost Item</th>
                <th className="px-4 py-3 font-semibold">UK (London)</th>
                <th className="px-4 py-3 font-semibold text-blue-700">Turkey (Istanbul)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["P-Shot procedure", "£1,200–£2,000", "£300"],
                ["Return flight", "—", "£80–£150 (from London)"],
                ["2 nights hotel (good standard)", "—", "£60–£120"],
                ["Airport transfers", "—", "£20–£40"],
                ["Food & extras", "—", "£30–£60"],
                ["TOTAL", "£1,200–£2,000", "£490–£670"],
                ["Your saving", "—", "£730–£1,500+"],
              ].map(([item, uk, turkey]) => (
                <tr key={item} className={`bg-white ${item === "Your saving" ? "font-bold text-green-700" : ""}`}>
                  <td className="px-4 py-3 font-medium text-gray-900">{item}</td>
                  <td className="px-4 py-3 text-gray-600">{uk}</td>
                  <td className={`px-4 py-3 font-semibold ${item === "Your saving" ? "text-green-600" : "text-blue-700"}`}>{turkey}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">How the Typical Turkey P-Shot Trip Works</h2>
        <div className="space-y-4 mb-10">
          {[
            { day: "Before travel", action: "Free WhatsApp consultation with our doctor. Share your medical history. All questions answered. Procedure and logistics confirmed." },
            { day: "Day 1 (Arrival)", action: "Fly into Istanbul. We can arrange airport pickup. Check into hotel. Rest or explore the city." },
            { day: "Day 2 (Treatment)", action: "Arrive at clinic for your appointment. Consultation, blood draw, PRP preparation, numbing, and P-Shot injection. 60–90 minutes total. Same-day discharge." },
            { day: "Day 2 (Evening)", action: "Relax at hotel. Most patients feel completely normal by evening. Light activity only." },
            { day: "Day 3 (Depart)", action: "Return flight home. Take aftercare instructions with you. Our team is available on WhatsApp for any questions." },
          ].map(item => (
            <div key={item.day} className="flex gap-4">
              <div className="w-32 shrink-0">
                <span className="text-sm font-bold text-blue-700">{item.day}</span>
              </div>
              <div className="flex-1 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                <p className="text-sm text-gray-700">{item.action}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Is Turkey Safe for Medical Treatment?</h2>
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10">
          <p className="text-gray-700 mb-4">Turkey is one of the world&apos;s most established medical tourism destinations, attracting over <strong>1.4 million medical tourists per year</strong>. The key quality indicators:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "JCI-Accredited Hospitals", desc: "Turkey has more JCI-accredited (Joint Commission International) hospitals than most European countries." },
              { title: "EU-Trained Doctors", desc: "Most doctors treating international patients are trained to European or US standards, many with Western postgraduate qualifications." },
              { title: "Medical Tourism Track Record", desc: "Turkey is a top destination for hair transplants, dental work, bariatric surgery and cosmetic procedures – with outstanding international reviews." },
              { title: "English-Speaking Staff", desc: "Clinics targeting international patients maintain English-speaking medical and support staff throughout your visit." },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-xl p-4 border border-green-100">
                <h3 className="font-bold text-green-800 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">What Our UK & European Patients Say</h2>
        <div className="space-y-4 mb-10">
          {[
            { from: "London, UK", text: "I was nervous about going abroad for something this personal. But from the moment I arrived it felt completely professional. The doctor spent 30 minutes with me before the procedure. I honestly wish I hadn't waited so long worrying about it." },
            { from: "Amsterdam, Netherlands", text: "€1,800 vs €300. I did the maths and it took me about 10 minutes to book the flight. Istanbul is a beautiful city. Treated it as a long weekend. Procedure was done in 90 minutes. Doctor was excellent. Would 100% recommend." },
            { from: "Manchester, UK", text: "The whole trip was under £600. The clinic was modern, clean, and private. I was back at work Monday. Six weeks later I started noticing the difference. Best decision I've made." },
          ].map(review => (
            <div key={review.from} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-gray-700 italic mb-3">&ldquo;{review.text}&rdquo;</p>
              <p className="text-xs text-gray-400 font-semibold">— Patient from {review.from}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Concerns Answered</h2>
        <div className="space-y-3 mb-10">
          {[
            { q: "What if something goes wrong after I leave?", a: "We provide full written aftercare instructions and WhatsApp support. Our team is available for follow-up consultations remotely. Serious complications are extremely rare." },
            { q: "Is the PRP quality as good as in the UK?", a: "Yes. We use the same FDA-cleared PRP centrifuge kits and medical consumables used by UK and US clinics." },
            { q: "Do I need to speak Turkish?", a: "No. Our entire team speaks English and is experienced with international patients." },
            { q: "Can I fly the same day as treatment?", a: "We recommend staying overnight. Flying same-day is possible but we advise against it for comfort reasons." },
            { q: "Do I need to bring anything?", a: "Just your passport for identification. We handle everything else. No need to bring medical records unless you have a specific condition to discuss." },
          ].map(item => (
            <div key={item.q} className="bg-white border border-gray-200 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">❓ {item.q}</p>
              <p className="text-sm text-gray-600">✅ {item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <CtaBlock title="Start Planning Your P-Shot Trip to Turkey" subtitle="Free WhatsApp consultation. We handle everything from consultation to aftercare." />
    </div>
  );
}
