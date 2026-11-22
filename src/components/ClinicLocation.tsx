import Image from "next/image";
import { clinicPhotos } from "@/content/images";
import { CLINIC } from "@/lib/clinic";

/** Clinic address, phone and email. Phone and email links are tracked by ClickTracker. */
export default function ClinicLocation({ heading = "Clinic location and contact" }: { heading?: string }) {
  return (
    <section aria-labelledby="location-heading" data-location className="rounded-2xl border border-slate-200 bg-surface p-6">
      <h2 id="location-heading" className="text-2xl font-bold text-heading mb-4">{heading}</h2>
      <div className="md:grid md:grid-cols-[1fr_auto] md:gap-6">
      <div>
      <address className="not-italic space-y-2 text-slate-700">
        <p><strong className="text-heading">{CLINIC.name}</strong></p>
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
      </div>
      <div className="mt-5 md:mt-0 grid grid-cols-2 gap-3 md:w-72">
        {[clinicPhotos.building, clinicPhotos.reception].map((photo) => (
          <figure key={photo.src} className="overflow-hidden rounded-xl border border-teal-700/40">
            <div className="relative aspect-[3/4]">
              <Image src={photo.src} alt={photo.alt} fill sizes="9rem" className="object-cover" />
            </div>
            <figcaption className="sr-only">{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
      </div>
    </section>
  );
}
