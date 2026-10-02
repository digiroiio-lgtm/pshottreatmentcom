# Keyword map

One primary page per search intent, with supporting pages. The exact phrases below are checked by `scripts/validate-site.mjs` (title, H1, a heading or the visible text, as noted). Phrases are worked in naturally; do not repeat them to hit a count.

| Cluster and query | Primary page | Supporting pages | Where checked |
| --- | --- | --- | --- |
| erectile dysfunction treatment, ED treatment, ED clinic, ED specialist, erectile dysfunction urologist | /erectile-dysfunction-treatment | /erectile-dysfunction, /ed-treatment-options, /dr-niyazi-umut-ozdemir | "erectile dysfunction specialist" in text; "erectile dysfunction urologist" on the doctor page |
| erectile dysfunction treatment Turkey, ED clinic Turkey, ED specialist Turkey, male sexual health clinic Turkey | /erectile-dysfunction-treatment-turkey | /international-patients, /about | title "erectile dysfunction treatment turkey"; "ed specialist in turkey" and "male sexual health clinic" in text |
| erectile dysfunction treatment Antalya | /erectile-dysfunction-treatment-antalya | /about, /dr-niyazi-umut-ozdemir | |
| P Shot, P-Shot Turkey, P-Shot Antalya, PRP erectile dysfunction, penile PRP, PRP penis injection | /p-shot | /p-shot-turkey, /p-shot-antalya, /prp-for-erectile-dysfunction, /side-effects, /price | titles "p-shot turkey", "p-shot antalya"; "prp penis injection" in text |
| shockwave therapy erectile dysfunction, ED shockwave therapy, Li-ESWT, EdSWT, ED1000, shockwave ED Turkey | /shockwave-therapy-ed | /edswt, /shockwave-therapy-erectile-dysfunction-turkey, /p-shot-vs-shockwave | H1 "shockwave therapy"; /edswt H1 "li-eswt" and text "ed1000"; Turkey page title |
| stem cell erectile dysfunction, stem cell ED treatment, penile stem cell therapy, regenerative erectile dysfunction treatment | /stem-cell-therapy-erectile-dysfunction | /stem-cell-treatment-ed-turkey, /p-shot-vs-stem-cell, /shockwave-vs-stem-cell | heading "regenerative erectile dysfunction treatment"; text "penile stem cell therapy" |
| exosome erectile dysfunction, exosome ED treatment, exosome therapy Turkey | /exosome-therapy-erectile-dysfunction | /exosome-therapy-turkey | heading "exosome ed treatment"; Turkey page title |
| venous leak treatment | /venous-leak | /vasculogenic-erectile-dysfunction, /penile-doppler-ultrasound | heading "venous leak treatment" |
| vasculogenic erectile dysfunction | /vasculogenic-erectile-dysfunction | /venous-leak, /shockwave-therapy-ed | |
| erectile dysfunction after prostate surgery | /erectile-dysfunction-after-prostate-surgery | /penile-rehabilitation, /penile-implant | |
| diabetic erectile dysfunction | /diabetes-erectile-dysfunction | /vasculogenic-erectile-dysfunction | heading "diabetic erectile dysfunction" |
| ED over 50 / over 60 | /erectile-dysfunction-over-50, /erectile-dysfunction-over-60 | /erectile-dysfunction, /testosterone-ed | |
| treatment comparisons | /ed-treatment-options | /p-shot-vs-shockwave, /p-shot-vs-stem-cell, /shockwave-vs-stem-cell, /p-shot-vs-viagra | |

Requested URLs folded into a stronger page (301): /li-eswt to /edswt, /penile-exosome-therapy to the exosome page, /penile-stem-cell-therapy to the stem-cell page. Their terms ("Li-ESWT", "penile exosome", "penile stem cell therapy") are covered on the target pages.

Internal linking rule: every sitemap page (except home, privacy, editorial policy and evidence methodology) must have at least 3 inbound links from the main content of other pages. The header and footer do not count. The validator enforces it.
