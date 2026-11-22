import Link from "next/link";
import Image from "next/image";
import type { LocalizedPage } from "@/content/localized";
import { getPage } from "@/content";
import { clinicPhotos } from "@/content/images";
import { CLINIC, DOCTOR } from "@/lib/clinic";
import { getSources } from "@/lib/evidence";
import { ASSESSMENT_PATH, SITE_NAME, SITE_URL, absoluteUrl, whatsappUrl } from "@/lib/site-config";
import { organization, physician } from "./JsonLd";
import SourceList from "./SourceList";

const ctaClass = "inline-flex items-center justify-center rounded-full font-semibold px-6 py-3 transition-colors";

function Ctas({ page, placement }: { page: LocalizedPage; placement: string }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a href={whatsappUrl(page.whatsappMessage)} target="_blank" rel="noopener noreferrer" data-wa data-cta={page.ui.whatsapp} data-placement={`${page.lang}-${placement}`} className={`${ctaClass} bg-green-700 hover:bg-green-800 text-white`}>
        {page.ui.whatsapp}
      </a>
      <Link href={ASSESSMENT_PATH} data-cta={page.ui.cta} data-placement={`${page.lang}-${placement}`} hrefLang="en" className={`${ctaClass} bg-teal-700 hover:bg-teal-800 text-black`}>
        {page.ui.cta}
      </Link>
    </div>
  );
}

function schema(page: LocalizedPage) {
  const url = absoluteUrl(page.path);
  const crumbs = [{ name: page.ui.home, item: `${SITE_URL}/` }, { name: page.breadcrumb, item: url }];
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization(),
      physician(),
      {
        "@type": "MedicalWebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.metaTitle,
        description: page.description,
        inLanguage: page.lang,
        dateModified: page.modified,
        isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: SITE_NAME, url: `${SITE_URL}/` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        reviewedBy: { "@id": `${SITE_URL}/#physician` },
        speakable: { "@type": "SpeakableSpecification", cssSelector: ["[data-direct-answer]"] },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        translationOfWork: { "@id": `${absoluteUrl(page.enPath)}#webpage` },
      },
      { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: c.item })) },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        url,
        inLanguage: page.lang,
        mainEntity: page.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };
}

export default function LocalizedPageView({ page }: { page: LocalizedPage }) {
  const english = getPage(page.enPath);
  const related = (english?.related ?? []).slice(0, 4).map((p) => getPage(p)).filter(Boolean);
  return (
    <div lang={page.lang} data-page-kind="localized" className="pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(page)).replace(/</g, "\\u003c") }} />
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 pt-6 text-sm text-slate-600">
        <Link href="/" className="hover:text-teal-800">{page.ui.home}</Link> <span aria-hidden="true">/</span> <span className="text-slate-800">{page.breadcrumb}</span>
      </nav>
      <header className="max-w-4xl mx-auto px-4 pt-6 pb-6">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <p className="text-sm font-bold uppercase tracking-wider text-teal-800">{page.eyebrow}</p>
          <span className="rounded-full border border-amber-200 bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">{page.evidenceLabel}</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-heading leading-tight mb-5 text-balance">{page.h1}</h1>
        <div data-direct-answer className="rounded-2xl bg-slate-50 border border-slate-200 p-5 mb-5">
          <p className="text-sm font-bold text-teal-800 mb-1">{page.answer.q}</p>
          <p className="text-lg text-slate-800 leading-relaxed">{page.answer.a}</p>
        </div>
        <Ctas page={page} placement="hero" />
        <p className="text-sm text-slate-600 mt-4">{page.ui.confidential}</p>
        <p className="text-sm text-slate-600 mt-2">
          {page.ui.englishVersion}{" "}
          <Link href={page.enPath} hrefLang="en" className="font-semibold text-teal-800 underline underline-offset-2">{page.ui.englishLink}</Link>
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 space-y-10">
        <section aria-labelledby="takeaways-heading" className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <h2 id="takeaways-heading" className="text-xl font-bold text-heading mb-3">{page.ui.takeaways}</h2>
          <ul className="space-y-2 text-slate-800">{page.takeaways.map((t) => <li key={t}>• {t}</li>)}</ul>
        </section>

        {page.sections.map((section) => (
          <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`}>
            <h2 id={`${section.id}-heading`} className="text-2xl md:text-3xl font-bold text-heading mb-4">{section.heading}</h2>
            {section.paragraphs?.map((p) => <p key={p} className="text-slate-700 leading-relaxed mb-3">{p}</p>)}
            {section.bullets && <ul className="space-y-2 text-slate-700">{section.bullets.map((b) => <li key={b} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-600" />{b}</li>)}</ul>}
            {section.steps && (
              <ol className="space-y-3">
                {section.steps.map((step, i) => (
                  <li key={step.title} className="flex gap-4 rounded-xl border border-slate-200 bg-surface p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-700 font-bold text-black">{i + 1}</span>
                    <div><p className="font-semibold text-heading">{step.title}</p><p className="text-sm text-slate-700">{step.text}</p></div>
                  </li>
                ))}
              </ol>
            )}
          </section>
        ))}

        <aside className="rounded-2xl border border-teal-700/40 bg-surface p-6 md:p-8 glow-gold">
          <p className="text-2xl font-bold text-heading mb-2 font-serif">{page.ui.cta}</p>
          <p className="text-slate-700 mb-5">{page.ui.ctaText}</p>
          <Ctas page={page} placement="mid" />
        </aside>

        <section aria-labelledby="doctor-heading" data-doctor className="rounded-2xl border border-slate-200 bg-surface p-6 flex flex-col sm:flex-row gap-5">
          {DOCTOR.photo && <Image src={DOCTOR.photo} alt={`${DOCTOR.name}, ${DOCTOR.title}, ${CLINIC.name}`} width={128} height={160} className="w-28 h-36 object-cover object-top rounded-xl border border-teal-700/50" />}
          <div>
            <h2 id="doctor-heading" className="text-xl font-bold text-heading mb-2">{page.ui.doctorHeading}</h2>
            <p className="text-slate-700 text-sm leading-relaxed mb-3">{page.ui.doctorText}</p>
            <Link href={DOCTOR.path} hrefLang="en" className="text-sm font-semibold text-teal-800 underline underline-offset-2">{DOCTOR.name}</Link>
          </div>
        </section>

        <div className="grid grid-cols-2 gap-3">
          {[clinicPhotos.reception, clinicPhotos.building].map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-xl border border-teal-700/40">
              <div className="relative aspect-[4/3]"><Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 896px) 28rem, 50vw" className="object-cover" /></div>
            </figure>
          ))}
        </div>

        <section aria-labelledby="faq-heading" data-faq>
          <h2 id="faq-heading" className="text-2xl font-bold text-heading mb-4">{page.ui.faq}</h2>
          <div className="space-y-4">
            {page.faqs.map((item) => (
              <div key={item.q} className="rounded-xl border border-slate-200 bg-surface p-5">
                <h3 className="font-bold text-heading mb-2">{item.q}</h3>
                <p className="text-slate-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <SourceList sources={getSources(page.sources)} heading={page.ui.sources} />

        {related.length > 0 && (
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="text-xl font-bold text-heading mb-4">{page.ui.related}</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {related.map((p) => (
                <li key={p!.path}><Link href={p!.path} hrefLang="en" className="block rounded-xl border border-slate-200 bg-surface p-4 font-semibold text-slate-900 hover:border-teal-600">{p!.h1} →</Link></li>
              ))}
            </ul>
          </section>
        )}

        <p className="text-xs text-slate-600 border-t border-slate-200 pt-6">{page.ui.disclaimer}</p>
      </div>
    </div>
  );
}
