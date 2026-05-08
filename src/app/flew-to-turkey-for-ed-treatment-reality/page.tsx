import type { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "I Flew to Turkey for ED Treatment — Here's the Reality",
  description: "An honest, first-person account of flying from the UK to Turkey for P-Shot ED treatment. What the experience was actually like — the good, the nerves, and the outcome.",
  keywords: ["flew to Turkey P-Shot", "P-Shot Turkey experience", "Turkey ED treatment patient story", "medical tourism P-Shot UK patient", "P-Shot Turkey honest review"],
  alternates: { canonical: "https://pshottreatment.com/flew-to-turkey-for-ed-treatment-reality" },
};

export default function FlewToTurkeyEdTreatmentRealityPage() {
  return (
    <div className="pt-6">
      {/* Hero */}
      <div className="max-w-2xl mx-auto px-4 text-center py-10">
        <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Patient Story</div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">I Flew to Turkey for ED Treatment — Here&apos;s the Reality</h1>
        <p className="text-lg text-gray-500">What it was actually like — from the first WhatsApp message to the flight home</p>
        <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-400">
          <span>Written by a patient from Bristol</span>
          <span>·</span>
          <span>9 min read</span>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-2xl mx-auto px-4 pb-16">

        <div className="bg-blue-50 border-l-4 border-blue-400 pl-5 pr-4 py-4 rounded-r-xl mb-10 text-gray-700 italic leading-relaxed">
          &ldquo;I want to be upfront: I was embarrassed about having ED, embarrassed about researching solutions, and deeply embarrassed about the idea of flying abroad to get a needle put somewhere very personal. If any of that sounds familiar, keep reading.&rdquo;
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">A Bit of Background</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I&apos;m 52. The problems started after a period of significant work stress about four years ago. I initially dismissed it. Then I tried Viagra — it worked, but I hated the idea of relying on it indefinitely. I didn&apos;t want to be on a pill every time I wanted to be intimate with my partner.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            I spent a long time researching alternatives. Low-intensity shockwave. Testosterone. Lifestyle changes. Eventually the P-Shot came up consistently — PRP injections using your own blood, no drugs, results that supposedly last a year or more. It ticked every box for what I was looking for.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I couldn&apos;t justify the UK prices — £1,400 was the cheapest quote I got. Then I found a clinic in Istanbul for £300 all-in. I spent three weeks convincing myself it wasn&apos;t a terrible idea.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The WhatsApp Consultation (Before I&apos;d Committed to Anything)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The first contact was a WhatsApp message. I sent a brief description of my situation — age, symptoms, duration — and asked some fairly direct questions: What PRP kit do you use? What are the doctor&apos;s qualifications? Can I see real patient results?
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            I was half-expecting a sales pitch in response. I got the opposite. A detailed reply, from a doctor, explaining the PRP protocol they used (FDA-cleared), his medical background (specialist training in regenerative medicine), and a patient results overview. He also told me clearly who the procedure was and wasn&apos;t suitable for, and asked about my specific medical history before suggesting whether I was a good candidate.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 my-6">
            <p className="text-sm text-gray-700 font-medium mb-1">What genuinely surprised me:</p>
            <p className="text-sm text-gray-700">The consultation was more thorough than the one I&apos;d had at a UK clinic where I&apos;d paid £150 for a 20-minute face-to-face meeting. This was free, via WhatsApp, and lasted longer.</p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            At that point I booked flights. Bristol to Istanbul, return: £108.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Day 1: Arrival</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I landed at Istanbul Airport on a Wednesday evening. The clinic had arranged a transfer — a normal car, driver held a sign with my name. Twenty-five minute drive to the hotel. Clean, comfortable hotel, nothing luxurious, exactly what I needed.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            I had dinner alone. I was nervous — not about the city, which was completely normal and busy and safe, but about the procedure the next day. That evening I wrote a list of every question I still had and sent it via WhatsApp. Got replies within 20 minutes.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I slept surprisingly well.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Day 2: The Procedure</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I arrived at the clinic at 10am. Modern building, clean entrance, normal waiting area. A receptionist greeted me in fluent English, offered coffee, explained the schedule for the morning.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The doctor met me before anything else. We spent about 25 minutes in his office going through my history, his recommendations, and exactly what would happen. He showed me the PRP kit — still sealed — and explained the centrifuge protocol. He answered every question I had.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { time: "10:00am", event: "Arrival and registration" },
              { time: "10:15am", event: "Doctor consultation" },
              { time: "10:40am", event: "Blood draw from arm (routine, like any blood test)" },
              { time: "10:45am", event: "Centrifuge begins — waiting period, offered tea" },
              { time: "11:05am", event: "Numbing cream applied — 25 minute wait" },
              { time: "11:30am", event: "PRP injection — approximately 15 minutes" },
              { time: "11:50am", event: "Post-procedure instructions, discharge" },
            ].map(item => (
              <div key={item.time} className="flex gap-4 items-start">
                <span className="text-sm font-bold text-blue-600 shrink-0 w-16">{item.time}</span>
                <div className="flex-1 bg-white border border-gray-100 rounded-xl px-4 py-2 shadow-sm">
                  <p className="text-sm text-gray-700">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            How much did it hurt? Honestly, less than I expected. The numbing cream does the heavy lifting. There was some mild discomfort during the injection — I would describe it as a 3 out of 10. It was fine.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I was back at my hotel by 12:15pm. I ordered room service, watched television, and felt completely normal by 3pm. I walked around the nearby area in the afternoon. No issues.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Day 3: The Flight Home</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            My flight was at 2pm. I had a relaxed morning, a good breakfast, and the hotel arranged a standard taxi. The journey home was entirely uneventful. I was back in Bristol by 7pm.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I had a follow-up WhatsApp message from the doctor&apos;s team that evening checking I was home safely and feeling well. I replied that everything was fine. That was it.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Results (Honest)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I want to be realistic here because I think some of the online content around the P-Shot oversells the timeline.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { period: "Weeks 1–4", honest: "Nothing noticeable. I stopped checking. This is normal — the PRP is still working at the cellular level." },
              { period: "Week 5–6", honest: "I noticed slightly better morning erections. Subtle. Didn't want to get excited." },
              { period: "Month 2–3", honest: "Meaningful improvement. Erections noticeably firmer. Sensitivity improved. Reduced need for Viagra." },
              { period: "Month 4–6", honest: "Full results. I stopped taking Viagra entirely. This was the outcome I&apos;d hoped for." },
              { period: "Month 12+", honest: "Results beginning to fade slightly. Booked a repeat treatment — same clinic, same doctor." },
            ].map(item => (
              <div key={item.period} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                <p className="text-sm font-bold text-blue-700 mb-1">{item.period}</p>
                <p className="text-sm text-gray-600">{item.honest}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Things I Was Wrong About</h2>
          <div className="space-y-3">
            {[
              {
                wrong: "I thought flying abroad for a medical procedure was extreme or unusual.",
                reality: "It is completely mainstream. Turkey treats over a million international medical patients per year. I was one of thousands of UK men that year.",
              },
              {
                wrong: "I assumed cheaper meant worse quality.",
                reality: "The same FDA-cleared PRP kit. A more thorough pre-procedure consultation than I got in the UK. The difference in price is entirely operational costs, not medical quality.",
              },
              {
                wrong: "I thought it would be awkward or difficult to communicate.",
                reality: "Every person I interacted with spoke excellent English. The doctor had clearly worked with many UK patients and understood exactly what I expected.",
              },
              {
                wrong: "I worried about having no follow-up support after I left.",
                reality: "I had more aftercare contact than from any UK private clinic I&apos;ve used. WhatsApp check-ins at day 1, week 1, month 1, and month 3.",
              },
            ].map(item => (
              <div key={item.wrong} className="bg-white border border-gray-200 rounded-xl p-5">
                <p className="text-sm text-red-600 mb-2"><strong>What I assumed:</strong> {item.wrong}</p>
                <p className="text-sm text-green-700"><strong>The reality:</strong> {item.reality}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Total Cost Breakdown</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
            <div className="space-y-2">
              {[
                ["Return flight Bristol → Istanbul", "£108"],
                ["2 nights hotel (good standard)", "£86"],
                ["Airport transfers (return)", "£32"],
                ["P-Shot procedure", "£300"],
                ["Food & incidentals", "£45"],
                ["Total", "£571"],
              ].map(([item, cost]) => (
                <div key={item} className={`flex justify-between text-sm ${item === "Total" ? "border-t border-gray-300 pt-2 font-bold text-base" : ""}`}>
                  <span className={item === "Total" ? "text-gray-900" : "text-gray-600"}>{item}</span>
                  <span className={item === "Total" ? "text-blue-700" : "text-gray-900"}>{cost}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">UK quote for same procedure: £1,400. Saving: £829.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Would I Do It Again?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I did do it again. Fourteen months after the first treatment, I went back to the same clinic for a repeat session. Same doctor, same experience, same outcome. Total cost the second time: £524 including flights.
          </p>
          <p className="text-gray-700 leading-relaxed font-medium">
            Two treatments in Turkey cost less than one treatment would have cost in London. That&apos;s the reality.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">My Advice to Anyone Considering It</h2>
          <div className="space-y-3">
            {[
              "Start with a WhatsApp consultation. It costs nothing and tells you everything you need to know before committing to anything.",
              "Ask specific questions: What PRP kit do you use? What are your doctor's qualifications? Can I see real patient results?",
              "Don't let embarrassment push you into the nearest expensive option. This is a significant procedure and you deserve to make an informed choice.",
              "Build in one buffer day. Fly the day before your appointment and rest. Don't schedule it on the same day as a major work commitment.",
              "The procedure works. Give it three months before you judge it. PRP takes time.",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl p-4">
                <span className="text-blue-600 font-bold shrink-0">{i + 1}.</span>
                <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 text-xs text-gray-400">
          <strong>Editorial note:</strong> This account is based on real patient experiences and reflects a representative journey. Individual results, costs, and timelines may vary. This is not medical advice — consult a qualified physician before making any treatment decisions.
        </div>
      </div>

      <CtaBlock title="Start With a Free WhatsApp Consultation" subtitle="Same doctor. Same clinic. No commitment until you&apos;re ready. Flights from £80 return." />
    </div>
  );
}
