# AI-search visibility playbook

## What the site already provides to answer engines
- Answer-first block under every H1 (`data-direct-answer`, also marked `speakable` in schema), key takeaways, comparison tables, visible FAQs mirrored in `FAQPage`.
- `/llms.txt` (facts block, evidence position, every page with a description) and `/llms-full.txt` (full text, FAQs and sources), both generated from the page registry.
- `robots.txt` that explicitly allows OAI-SearchBot, ChatGPT-User, GPTBot, Claude-SearchBot, Claude-User, ClaudeBot, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended and CCBot.
- Entity data: `MedicalClinic` (address, phone, email), `Physician` (qualifications, memberships, public profile `sameAs`), `MedicalCondition`, `MedicalTherapy`, `DefinedTerm` mentions, review status linked to the doctor page.

## Do after each deploy
1. Set `INDEXNOW_KEY` (and redeploy so `/<key>.txt` is served), then run `npm run indexnow`. IndexNow feeds Bing, whose index also feeds ChatGPT search and Copilot. `npm run indexnow -- --dry-run` lists the URLs without sending.
2. Submit the sitemap in Google Search Console and Bing Webmaster Tools (set `GOOGLE_SITE_VERIFICATION` / `BING_SITE_VERIFICATION`).

## Off-page signals that answer engines weigh
- Complete the Google Business Profile (categories, services, photos, opening hours, website link, Q&A). Then set `CLINIC.googleProfileUrl`, `CLINIC.geo` and `CLINIC.openingHours` in `src/lib/clinic.ts`; they flow into schema and the rating badge.
- Keep name, address and phone identical everywhere (profile, directories, site footer).
- Claim and complete the doctor's directory profiles (the doktorsitesi.com listing is already in `DOCTOR.sameAs`) and add LinkedIn or professional-society pages when they exist.
- Earn citations from the societies the doctor belongs to, local Antalya health directories and international patient forums, where this is genuine and disclosed.

## Monthly prompt test
Run the same prompts in ChatGPT (with search), Perplexity, Gemini, Claude and Google AI Overviews; record whether the clinic or site is cited, which page, and whether the statement is accurate (especially evidence labels).

- "Best erectile dysfunction clinic in Antalya"
- "P-Shot Turkey, is it proven for ED?"
- "Shockwave therapy for ED in Turkey, how many sessions?"
- "Stem cell therapy for erectile dysfunction in Turkey"
- "Exosome therapy for erectile dysfunction, does it work?"
- "What is a venous leak and how is it treated?"

Fix inaccurate answers at the source page (clearer answer block, FAQ or table), then re-submit with IndexNow.
