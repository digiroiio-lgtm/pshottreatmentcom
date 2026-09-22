import { SITE_URL } from "@/lib/site-config";

const content = `# PShotTreatment.com

> Educational and commercial information about P-Shot/platelet-rich plasma (PRP), erectile dysfunction, treatment evidence, limitations, safety, pricing and treatment planning. Medical information does not replace an individual assessment.

## Evidence position

- PRP for erectile dysfunction is experimental.
- The 2026 European Association of Urology guideline states that intracavernosal PRP should be used only in a clinical-trial setting.
- Trials report mixed results and PRP preparation and injection protocols are not standardised.
- No cure, permanent-result, penile-enlargement or guaranteed-outcome claim is made.

## P-Shot and PRP

- ${SITE_URL}/how-it-works
- ${SITE_URL}/prp-fix-erectile-dysfunction-naturally
- ${SITE_URL}/side-effects
- ${SITE_URL}/price
- ${SITE_URL}/before-after
- ${SITE_URL}/is-p-shot-worth-it

## Erectile dysfunction

- ${SITE_URL}/ed-knowledge-hub
- ${SITE_URL}/ed-causes
- ${SITE_URL}/diabetes-erectile-dysfunction
- ${SITE_URL}/post-prostatectomy-ed
- ${SITE_URL}/testosterone-ed
- ${SITE_URL}/p-shot-venous-leak-ed

## Comparisons

- ${SITE_URL}/p-shot-vs-viagra
- ${SITE_URL}/prp-vs-stem-cell-erectile-dysfunction
- ${SITE_URL}/shockwave-therapy-ed

## Treatment planning and trust

- ${SITE_URL}/best-p-shot-clinic-turkey
- ${SITE_URL}/flying-to-turkey-ed-treatment
- ${SITE_URL}/about
- ${SITE_URL}/editorial-policy
- ${SITE_URL}/evidence-methodology
- ${SITE_URL}/contact

## Important provenance note

The repository does not currently publish a verified legal provider name, clinic licence, full treatment address or named medical reviewer. Users should request and independently verify clinician and clinic details before payment or travel.
`;

export function GET() {
  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
