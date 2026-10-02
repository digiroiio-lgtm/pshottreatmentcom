import Link from "next/link";
import { CLINIC, DOCTOR } from "@/lib/clinic";
import { AssessmentButton, WhatsAppCTA } from "./cta";
import GoogleRatingBadge from "./GoogleRatingBadge";
import TrackView from "./TrackView";
import type { TreatmentId } from "@/content/types";

const initials = DOCTOR.name.replace("Dr. ", "").split(" ").map((p) => p[0]).slice(0, 2).join("");

export function DoctorCredentials({ compact = false }: { compact?: boolean }) {
  return (
    <TrackView event="doctor_profile_view">
      <section aria-labelledby="doctor-heading" data-doctor className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
        <div className="flex flex-col sm:flex-row gap-6">
          {DOCTOR.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={DOCTOR.photo} alt={`${DOCTOR.name}, ${DOCTOR.title}`} width={160} height={200} className="w-32 h-40 object-cover rounded-xl shrink-0" />
          ) : (
            <div aria-hidden="true" className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-teal-900 text-white flex items-center justify-center text-3xl font-bold shrink-0">{initials}</div>
          )}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-800 mb-1">Your physician</p>
            <h2 id="doctor-heading" className="text-2xl font-bold text-slate-950">{DOCTOR.name}</h2>
            <p className="text-slate-700 mb-3">{DOCTOR.title}, {CLINIC.name}</p>
            <p className="text-slate-700 text-sm leading-relaxed mb-3">
              Responsible for assessment and treatment planning at the clinic, with a clinical focus on male sexual health and penile rehabilitation.
            </p>
            <GoogleRatingBadge />
          </div>
        </div>
        {!compact && (
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-semibold text-slate-950 mb-2">Qualifications</h3>
              <ul className="space-y-1.5 text-sm text-slate-700">
                {DOCTOR.credentials.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-950 mb-2">Clinical focus</h3>
              <ul className="space-y-1.5 text-sm text-slate-700">
                {DOCTOR.focus.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-950 mb-2">Education and roles</h3>
              <ul className="space-y-1.5 text-sm text-slate-700">
                <li>• {DOCTOR.education}</li>
                {DOCTOR.roles.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
            {DOCTOR.publications.length > 0 && (
              <div>
                <h3 className="font-semibold text-slate-950 mb-2">Publications</h3>
                <ul className="space-y-1.5 text-sm text-slate-700">{DOCTOR.publications.map((item) => <li key={item}>• {item}</li>)}</ul>
              </div>
            )}
            {DOCTOR.memberships.length > 0 && (
              <div>
                <h3 className="font-semibold text-slate-950 mb-2">Professional memberships</h3>
                <ul className="space-y-1.5 text-sm text-slate-700">{DOCTOR.memberships.map((item) => <li key={item}>• {item}</li>)}</ul>
              </div>
            )}
          </div>
        )}
        <p className="mt-5 text-sm"><Link href={DOCTOR.path} className="font-semibold text-teal-800 underline underline-offset-2">Read the full profile</Link></p>
      </section>
    </TrackView>
  );
}

export function DoctorReviewCTA({ treatment = "not-sure", placement }: { treatment?: TreatmentId; placement: string }) {
  return (
    <div className="rounded-2xl bg-teal-50 border border-teal-200 p-6 flex flex-col md:flex-row md:items-center gap-4 justify-between">
      <div>
        <p className="font-bold text-slate-950">Ask the urologist about your case</p>
        <p className="text-sm text-slate-700">Send your history and the clinic will advise which options may be relevant. Suitability is decided after medical assessment.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 shrink-0">
        <AssessmentButton label="Ask the Urologist" treatment={treatment} placement={placement} />
        <WhatsAppCTA label="WhatsApp" treatment={treatment} placement={placement} variant="outline" />
      </div>
    </div>
  );
}
