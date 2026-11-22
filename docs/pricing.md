# Pricing (approved 2026-11-22)

Source of truth: `src/lib/pricing.ts`. Every page, table, FAQ and the structured data read from it.

## Rules applied

- Standalone prices keep their approved source currency and amount exactly.
- Other currencies: source amount × source/TRY rate ÷ target/TRY rate, rounded **up** to the nearest 5.
- Reference rates (TRY per unit, fixed 22 Nov 2026, not live): USD 50.5697, EUR 55.5123, GBP 66.2223.
- Packages: sum of the individual cash prices in TRY, minus 5% (before rounding), converted, rounded **up** to the nearest 5.
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
| Biofiller 10 cc (not published) | GBP 1100 | £1,100 | €1,315 | $1,445 | £1,375.00 |
| Biofiller 15 cc (not published) | GBP 1200 | £1,200 | €1,435 | $1,575 | £1,500.00 |
| Biofiller 20 cc (not published) | GBP 1300 | £1,300 | €1,555 | $1,705 | £1,625.00 |

## Packages

| Package | Separate total | After 5% | GBP | EUR | USD | Card (GBP, hidden) |
| --- | --- | --- | --- | --- | --- | --- |
| Blood tests + penile Doppler | 23,938.14 TRY | 22,741.24 TRY | £345 | €410 | $450 | £431.25 |
| Blood tests + penile Doppler + G-Cell | 47,115.95 TRY | 44,760.15 TRY | £680 | €810 | $890 | £850.00 |
| 3 ESWT | 21,853.36 TRY | 20,760.69 TRY | £315 | €375 | $415 | £393.75 |
| 6 ESWT | 43,706.72 TRY | 41,521.38 TRY | £630 | €750 | $825 | £787.50 |
| 3 pelvic floor | 21,853.36 TRY | 20,760.69 TRY | £315 | €375 | $415 | £393.75 |
| Comprehensive ED: 2 G-Cell + 6 ESWT + 3 pelvic floor | 111,915.69 TRY | 106,319.90 TRY | £1,610 | €1,920 | $2,105 | £2,012.50 |

## Conflicts with the earlier package table (screenshot)

The written rule says "round upward to the nearest 5". The earlier table rounded to the nearest 5 in these cells, so the site shows 5 units more:

| Package | Currency | Exact after discount | Earlier table | Site (rule applied) |
| --- | --- | --- | --- | --- |
| Blood tests + penile Doppler + G-Cell | EUR | 806.31 | 805 | 810 |
| 3 ESWT | USD | 410.54 | 410 | 415 |
| 6 ESWT | USD | 821.07 | 820 | 825 |
| 3 pelvic floor | USD | 410.54 | 410 | 415 |
| Comprehensive ED: 2 G-Cell + 6 ESWT + 3 pelvic floor | GBP | 1,605.50 | 1,605 | 1,610 |

## Open items for the owner

1. **Card surcharge.** Publishing a 25% card surcharge described as "20% tax + 5% fee" implies that cash prices exclude VAT. In Turkey, consumer prices are generally expected to include VAT, and charging more for card payments may conflict with consumer rules. Card prices are calculated but hidden until an accountant or lawyer confirms. To publish, set `CARD_PRICES_PUBLISHED = true`.
2. **Biofiller.** Prices are stored unchanged but not shown: the site has no page explaining the procedure, its risks and its evidence. Approve a page first, or confirm price-only publication.
3. **Expired penile Doppler promotion.** No promotion was found in the repository or on the live pages, so nothing was removed. If it appears elsewhere (Google Business Profile, ads, social posts), remove it there.
4. **G-Cell Power P-Shot.** Shown by name and price only. No description or claims were added; send an approved description if one is wanted.
5. **Istanbul.** The same prices are stated for Istanbul and Antalya. Confirm the affiliated clinic uses the same price list.
6. **Package rounding.** If the earlier (nearest-5) figures are the intended prices, change the rounding rule in `pricing.ts`; every page updates automatically.
