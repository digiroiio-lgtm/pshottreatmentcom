# Pricing (approved 2026-11-22)

Source of truth: `src/lib/pricing.ts`. Every page, table, FAQ and the structured data read from it.

## Rules applied

- Standalone prices keep their approved source currency and amount exactly.
- Other currencies: source amount × source/TRY rate ÷ target/TRY rate, rounded **up** to the nearest 5.
- Reference rates (TRY per unit, fixed 22 Nov 2026, not live): USD 50.5697, EUR 55.5123, GBP 66.2223.
- Packages: published at the exact figures in the owner's approved package table (decision 2026-11-22). The table was derived from the separate prices in TRY minus 5%; its rounding is not one fixed rule, so the figures are stored as approved values.
- Card price = published cash price × 1.25. Calculated, **not shown on the site** (`CARD_PRICES_PUBLISHED = false`).

## Standalone cash prices

| Item | Approved source | GBP | EUR | USD | Card (GBP, hidden) |
| --- | --- | --- | --- | --- | --- |
| Penile Doppler ultrasound | EUR 300 | £255 | €300 | $330 | £318.75 |
| Standard P-Shot | GBP 300 | £300 | €360 | $395 | £375.00 |
| G-Cell Power P-Shot (list £400) | GBP 350 | £350 | €420 | $460 | £437.50 |
| Comprehensive blood tests | GBP 110 | £110 | €135 | $145 | £137.50 |
| ESWT, per session | GBP 110 | £110 | €135 | $145 | £137.50 |
| Pelvic floor therapy, per session | GBP 110 | £110 | €135 | $145 | £137.50 |
| Nano Therapy for ED (added 2026-11-28) | GBP 1490 | £1,490 | €1,780 | $1,955 | £1,862.50 |
| Biofiller 10 cc (not published) | GBP 1100 | £1,100 | €1,315 | $1,445 | £1,375.00 |
| Biofiller 15 cc (not published) | GBP 1200 | £1,200 | €1,435 | $1,575 | £1,500.00 |
| Biofiller 20 cc (not published) | GBP 1300 | £1,300 | €1,555 | $1,705 | £1,625.00 |

## Packages

| Package | Separate total | After 5% (exact) | GBP (approved) | EUR (approved) | USD (approved) | Card (GBP, hidden) |
| --- | --- | --- | --- | --- | --- | --- |
| Blood tests + penile Doppler | 23,938.14 TRY | 22,741.24 TRY | £345 | €410 | $450 | £431.25 |
| Blood tests + penile Doppler + G-Cell | 47,115.95 TRY | 44,760.15 TRY | £680 | €805 | $890 | £850.00 |
| 3 ESWT | 21,853.36 TRY | 20,760.69 TRY | £315 | €375 | $410 | £393.75 |
| 6 ESWT | 43,706.72 TRY | 41,521.38 TRY | £630 | €750 | $820 | £787.50 |
| 3 pelvic floor | 21,853.36 TRY | 20,760.69 TRY | £315 | €375 | $410 | £393.75 |
| Comprehensive ED: 2 G-Cell + 6 ESWT + 3 pelvic floor | 111,915.69 TRY | 106,319.90 TRY | £1,605 | €1,920 | $2,105 | £2,006.25 |

## Package figures

Resolved 2026-11-22: the site uses the approved table exactly (USD/EUR/GBP): blood tests + Doppler 450/410/345; + G-Cell 890/805/680; 3 ESWT 410/375/315; 6 ESWT 820/750/630; 3 pelvic floor 410/375/315; comprehensive 2,105/1,920/1,605.

## Open items for the owner

1. **Card surcharge.** Publishing a 25% card surcharge described as "20% tax + 5% fee" implies that cash prices exclude VAT. In Turkey, consumer prices are generally expected to include VAT, and charging more for card payments may conflict with consumer rules. Card prices are calculated but hidden until an accountant or lawyer confirms. To publish, set `CARD_PRICES_PUBLISHED = true`.
2. **Biofiller.** Prices are stored unchanged but not shown: the site has no page explaining the procedure, its risks and its evidence. Approve a page first, or confirm price-only publication.
3. **Expired penile Doppler promotion.** No promotion was found in the repository or on the live pages, so nothing was removed. If it appears elsewhere (Google Business Profile, ads, social posts), remove it there.
4. **G-Cell Power P-Shot.** Shown by name and price only. No description or claims were added; send an approved description if one is wanted.
5. **Istanbul.** The same prices are stated for Istanbul and Antalya. Confirm the affiliated clinic uses the same price list.
