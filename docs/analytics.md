# Analytics: events, GA4 setup and conversion reports (2026-11-23)

GA4 property: Pshottreatmentcom (532906670).

**Status:** the GA tag was not on the live site (no measurement ID set), so GA4 recorded 0 sessions. The ID goes in `src/lib/site-config.ts` (`GA_MEASUREMENT_ID`) or in the Vercel variable `NEXT_PUBLIC_GA_MEASUREMENT_ID`. Until it is set, no data is collected.

**Privacy rule:** no health information is ever sent. No age, symptoms, history, answers, name, phone or email. Form events carry only the step number and name, and the name of a field that failed validation (never its value). Consent Mode v2 is on, with analytics denied until the visitor accepts.

Every event also carries `page`, `device` (mobile/desktop) and first-touch `source`, `medium`, `campaign`, `landing_page`.

## Event dictionary

### Conversions

| Event | When | Parameters |
| --- | --- | --- |
| `generate_lead` | Form sent successfully, or any WhatsApp click | `method` (form / whatsapp), `treatment`, `placement` (WhatsApp), `seconds_in_form` (form) |
| `assessment_complete` | Form sent successfully | `treatment_interest`, `country` |
| `whatsapp_click` | Any WhatsApp link or button | `treatment`, `placement` (hero, mobile-bar, floating, mid, assessment-thanks…), `link_text` |
| `p_shot_lead`, `shockwave_lead`, … | Form sent, per treatment | `treatment_interest`, `country` |
| `phone_click`, `email_click` | Phone or email link | |

### Assessment form funnel (6 steps)

Step names: `about`, `ed_history`, `medical_history`, `interest`, `location_contact`, `details_consent`.

| Event | When | Parameters |
| --- | --- | --- |
| `assessment_start` | First answer given | `treatment_interest` |
| `form_step_view` | A step is shown | `step`, `step_name` |
| `form_step_complete` | "Continue" passes validation | `step`, `step_name`, `seconds_on_step` |
| `form_validation_error` | "Continue" or "Send" blocked | `step`, `step_name`, `field` |
| `form_back` | "Back" pressed | `step`, `step_name` |
| `form_submit_attempt` | "Send" pressed and valid | `step`, `treatment_interest` |
| `form_submit_error` | Send failed | `reason` (server / network) |
| `form_abandon` | Form started, page hidden or left before sending (once) | `last_step`, `step_name`, `seconds_in_form` |

### Engagement and user experience

| Event | When | Parameters |
| --- | --- | --- |
| `scroll_depth` | 25 / 50 / 75 / 90% of the page, once each | `percent` |
| `section_view` | A key section is 40% visible, once per page | `section` (price_table, doctor, faq, location, comparison, gallery, cta_block, cite_box, treatment_cards) |
| `faq_open` | A FAQ answer is opened | `question_index`, `question` |
| `currency_switch` | Price table currency changed | `currency` |
| `cite_copy` | "Cite this page" copy button | `type` (text / html) |
| `language_switch` | Link to the Dutch or Danish page | `lang`, `target` |
| `nav_open` | Header menu opened | `menu` |
| `exit_intent_shown`, `exit_intent_click` | Desktop exit prompt shown / clicked | |
| `outbound_click` | Link to another site (sources, Google Maps) | `domain`, `placement` |
| `consent_choice` | Cookie banner answered | `choice` |
| `cta_click` | Any assessment button | `treatment`, `placement`, `label` |

## GA4 setup (about 10 minutes, once)

1. **Measurement ID:** GA4 → Admin → Data streams → Web → copy "Measurement ID" (starts with `G-`). Send it to me, or set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel and redeploy.
2. **Key events:** Admin → Events → mark `generate_lead`, `whatsapp_click` and `assessment_complete` as key events. They appear after the first time they fire, so do this a day after go-live.
3. **Custom dimensions:** Admin → Custom definitions → Create custom dimension, scope "Event", one each for: `placement`, `treatment`, `method`, `step_name`, `field`, `section`, `percent`, `device`.
4. **Test:** open any page with `?debug_mode=1` at the end of the URL, then GA4 → Admin → DebugView.

## Reports to build (Explore)

| Report | Type | Setup | Question it answers |
| --- | --- | --- | --- |
| Form funnel | Funnel exploration | Steps: `form_step_view` step 1 → 2 → … → 6 → `generate_lead` (method = form) | Where do people drop out? |
| Form friction | Free form | Rows `step_name` × `field`, metric event count of `form_validation_error` | Which question causes errors? |
| WhatsApp by placement | Free form | Rows `placement`, metric `whatsapp_click` | Which button gets the chats? |
| Landing page conversion | Free form | Rows landing page, metrics sessions, `generate_lead`, key event rate | Which SEO pages bring leads? |
| Engagement | Free form | Rows page × `percent` (scroll_depth), `section` (section_view) | Do visitors reach the price table, doctor and CTA? |

## Conversion ideas to test once 2–4 weeks of data exist

| Hypothesis | Data that triggers it | Test |
| --- | --- | --- |
| The 6-step form is too long | High `form_abandon` on steps 3–5 | Merge medical history into step 2, or offer WhatsApp at the step with most drop-outs |
| One question causes most errors | `form_validation_error` concentrated on one `field` | Clearer wording, or make it optional |
| WhatsApp buttons below the fold are rarely seen | Low `section_view` for cta_block, most clicks from hero/mobile-bar | Add a WhatsApp button next to the price table and FAQ |
| Few visitors accept analytics | Low share of `consent_choice` = granted | Shorter banner text (never pre-ticked or forced) |
| Price table drives leads | Visitors who see price_table convert more | Link "See prices" from treatment page heroes |
