import { CLINIC } from "@/lib/clinic";

/** Clinic address, phone and email. Phone and email links are tracked by ClickTracker. */
export default function ClinicLocation({ heading = "Clinic location and contact" }: { heading?: string }) {
  return (
    <section aria-labelledby="location-heading" data-location className="rounded-2xl border border-slate-200 bg-white p-6">
      <h2 id="location-heading" className="text-2xl font-bold text-slate-950 mb-4">{heading}</h2>
      <address className="not-italic space-y-2 text-slate-700">
        <p><strong className="text-slate-950">{CLINIC.name}</strong></p>
        <p>
          {CLINIC.streetAddress}
          <br />
          {CLINIC.postalCode} {CLINIC.district} / {CLINIC.region}, {CLINIC.country}
        </p>
        {CLINIC.phone && <p>Phone / WhatsApp: <a href={`tel:${CLINIC.phone}`} className="font-semibold text-teal-800 underline underline-offset-2">{CLINIC.phoneDisplay}</a></p>}
        {CLINIC.email && <p>Email: <a href={`mailto:${CLINIC.email}`} className="font-semibold text-teal-800 underline underline-offset-2">{CLINIC.email}</a></p>}
      </address>
      {CLINIC.mapUrl && (
        <p className="mt-4">
          <a href={CLINIC.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-slate-300 hover:bg-slate-50 font-semibold px-5 py-2.5 text-slate-900">
            Get directions on Google Maps
          </a>
        </p>
      )}
    </section>
  );
}
