# SEO + GEO skorlaması ve H1/H2 iyileştirme planı (pshottreatment.com)

## Context
Amaç: ED sorununa çözüm arayan ve Türkiye/Antalya/İstanbul'a gelebilecek herkese maksimum görünürlük (Google SERP + AI yanıtları). Veri: GSC 22 Ağu–21 Kas 2026 (90 gün), canlı sayfa başlık yapısı, repo içeriği. Semrush API kredisi bitti (hacim verisi yok), AI görünürlüğü ölçülmüyor.

**Kritik bulgular (GSC, doğrulanmış):**
| Bulgu | Veri |
|---|---|
| 90 günde 0 tıklama | ~1.300 gösterim, ort. sıra ~45–70 |
| Marka sorgusu kayıp | "uz clinic antalya" 67 + "uz clinic" 65 gösterim, **sıra ~30** (1. olmalı) |
| Doktor adı kayıp | "niyazi umut özdemir" 15 gösterim, sıra 36 |
| Priapus Shot kümesi | "priapus shot"/"priapus-shot" **169 gösterim**, sıra 63–68; H1'de "Priapus" yok |
| Venous leak kümesi | ~150 gösterim, sıra 67–88 ("can venous leak be cured", "symptoms", "treatment options 2026") |
| TRT kümesi | ~80 gösterim (/testosterone-ed), sıra 60–78 |
| Fiyat kümesi | "p shot uk price" 74 gösterim sıra 9 ama **ana sayfa** sıralanıyor, /price değil (yamyamlık) |
| Yabancı dil | Hollandaca "priapus-shot behandeling" 49, Danca Doppler sorguları ~20 |
| Başlık yapısı | Her sayfada 4–7 kalıp H2 (CTA başlıkları, "Dr. ...", "Frequently asked questions", "Sources", "Related guides"); /p-shot'ta 18 H2'nin 6'sı kalıp |

## Skorlar (0–100, denetçi yargısı; ölçüm değil)
| Alan | Skor | Gerekçe |
|---|---|---|
| Teknik SEO | 92 | 58 sayfa, 0 hata; canonical, sitemap, şema tamam |
| On-page / H1-H2 | 64 | H1'ler sorgu dilini kaçırıyor (Priapus, TRT, venous leak); kalıp H2 kirliliği |
| İçerik / niyet kapsamı | 74 | Kümeler var; "cure", "surgery", "cost", "painful" soru niyetleri H2'de yok |
| Entity / Marka / Yerel | 45 | GBP linki, koordinat, saatler yok; marka sorgusunda 30. sıra |
| Otorite (backlink) | 20 | Tüm sayfalar 30+ sırada → asıl darboğaz |
| SERP CTR | 10 | 0 tık |
| **SEO genel** | **~55** | |
| GEO hazırlığı (yapı) | 80 | Answer-first blok, FAQ/MedicalClinic/Physician şeması, llms.txt, AI botlarına izin |
| GEO entity/atıf | 40 | sameAs zayıf, dış kaynaklarda klinik/doktor geçmiyor, YouTube bağlı değil |
| AI görünürlüğü | ölçülmüyor | NightWatch LLM takibi kurulmadı |
| **GEO genel** | **~60** | |

## Önerilen değişiklikler (karar sonrası uygulanacak)

### P0 — Marka ve entity (en hızlı kazanç)
- Ana sayfa title marka önde: `UZ Clinic Antalya | ED Treatment Turkey: P-Shot, Shockwave` (`src/content/pages/home.ts`).
- Organization `alternateName: ["UZ Clinic", "UZ Klinik Antalya"]`, Physician `alternateName: "Op. Dr. Niyazi Umut Özdemir"` (`src/components/JsonLd.tsx`, `src/lib/clinic.ts`).
- Doktor H1: `Op. Dr. Niyazi Umut Özdemir, Urologist in Antalya` (Türk arama biçimi).
- Senden: GBP linki + "Web sitesi" alanını pshottreatment.com yap, YouTube kanal linki (sameAs).

### P1 — H1/H2 (veriye göre, sayfa sayfa)
| Sayfa | Yeni H1 | Eklenecek/değişecek H2 (soru formatı, altında 40–60 kelime cevap) |
|---|---|---|
| / | ED Treatment in Antalya, Turkey: Urologist-Led P-Shot, Shockwave & Doppler | + "P-Shot price: from £300" kısa bölüm → /price linki (ana sayfa bu sorguda 9. sırada, korunur) |
| /p-shot | P-Shot (Priapus Shot): PRP Treatment for Erectile Dysfunction | "What is the Priapus Shot (P-Shot)?", "P-Shot procedure step by step", "How much does the P-Shot cost?" |
| /venous-leak | Venous Leak (Venogenic ED): Symptoms, Diagnosis and Treatment | "What is venous leak?", "Venous leak symptoms", "How is venous leak diagnosed?", "Venous leak treatment options in 2026", "Can venous leak be cured?", "Is venous leak surgery an option?" |
| /testosterone-ed | TRT and Erectile Dysfunction: Does Testosterone Help ED? | "Does TRT help with ED?", "ED on TRT: why erections may not improve", "Low testosterone ED treatment" |
| /price | P-Shot Price UK vs Turkey (2026): Costs in £, € and $ | "P-Shot price in Turkey (Antalya and Istanbul)", "Package prices", "P-Shot cost UK: why quotes vary" |
| /penile-doppler-ultrasound | Penile Doppler Ultrasound (Penile Duplex Scan) for ED | "Is a penile Doppler test painful?", "Penile Doppler side effects", "Private penile Doppler test cost" |
| /erectile-dysfunction-treatment-turkey | Erectile Dysfunction Treatment in Turkey (Türkiye) | "How much does ED treatment cost in Turkey?", "Antalya or Istanbul?" |
| /erectile-dysfunction-treatment-antalya | ED Clinic in Antalya: Urologist-Led Treatment at UZ Clinic | "Prices in Antalya", "Location: Kanyon Plaza, Muratpaşa" |
| /shockwave-therapy-ed | Shockwave Therapy for ED (Li-ESWT) in Antalya | "Does shockwave therapy work for ED?", "Shockwave therapy cost" |
| /p-shot-turkey | P-Shot in Turkey: Price, Process and Choosing a Clinic | "P-Shot price in Turkey" |
| /stem-cell-therapy-erectile-dysfunction, /exosome-therapy-* | aynı kalır | "Is stem cell therapy for ED approved?" (GEO soru) |

### P1 — Site geneli başlık temizliği (şablon)
- CTA blok başlıkları H2 → görsel olarak aynı `<p>` (`src/components/ContentPage.tsx` cta bloğu, `src/components/cta.tsx` AskUrologist kutusu).
- FAQ başlığı: `Frequently asked questions about {breadcrumb label}` (`src/components/Faq.tsx`, label: `src/content/breadcrumbs.ts`).
- Doktor kutusu H2: doktor sayfası dışında `Who assesses you: Dr. Niyazi Umut Özdemir` (`DoctorCredentials.tsx`).
- "Sources" / "Related guides" H2 kalır (AI atıfı için yararlı).

### P2 — GEO
- Her soru-H2 altına 1 cümlelik doğrudan cevap (AI alıntısı için) ve `speakable` mevcut cevap bloğu korunur.
- llms.txt / llms-full.txt'e fiyatlar, lokasyonlar (Antalya, İstanbul ortak klinik), doktor bilgisi (`src/lib/llms.ts`).
- NightWatch LLM takibi: 10 prompt (örn. "best P-Shot clinic in Turkey", "ED treatment Antalya", "venous leak treatment Turkey") — ChatGPT/Perplexity/Gemini görünürlüğü ölçülür.
- Dış atıf (sende): medikal turizm platformları, doktor profilleri, InCity röportaj linki, CİSED kongre sayfası, YouTube videoları → sameAs + VideoObject.

### P3 — Yeni pazar (karar sonrası)
- Hollandaca P-Shot sayfası (/nl/priapus-shot) ve Danca Doppler sayfası: GSC talep gösteriyor; hreflang ile tek sayfa/dil.

## ONAYLANAN KAPSAM (bu tur uygulanacak)
1. **P0 marka + entity**
   - `home.ts`: title `UZ Clinic Antalya | ED Treatment Turkey: P-Shot, Shockwave` (≤60), H1 `ED Treatment in Antalya, Turkey: Urologist-Led P-Shot, Shockwave & Doppler` (HomeSections Hero'daki sabit H1 de güncellenir — `src/components/HomeSections.tsx`).
   - `JsonLd.tsx` Organization `alternateName: ["UZ Clinic", "UZ Klinik Antalya", "UZ Clinic Antalya"]`; Physician `alternateName: "Op. Dr. Niyazi Umut Özdemir"` (`src/lib/clinic.ts` DOCTOR.alternateName).
   - Doktor sayfası H1 + title: `Op. Dr. Niyazi Umut Özdemir, Urologist in Antalya` (`src/content/pages/clinic.ts`).
2. **Hollandaca + Danca sayfalar**
   - `/nl/priapus-shot` (NL: "Priapus-shot behandeling in Antalya, Turkije") — /p-shot içeriğinin sadık uyarlaması: deneysel etiketi, EAU görüşü, riskler, fiyat (`priceText`), SSS, CTA'lar.
   - `/da/penil-doppler-ultralyd` (DA: "Penil Doppler-ultralyd ved rejsningsproblemer") — /penile-doppler-ultrasound + Antalya fiyatı/süreci.
   - `PageDef`'e `lang?: "nl" | "da"` ve `alternates?: Record<string,string>`; `buildMetadata` (`src/lib/seo.ts`) `alternates.languages` ile hreflang (en-GB ↔ nl ↔ da, x-default → en); İngilizce karşılık sayfalara ters hreflang.
   - İçerik sarmalayıcıya `lang` attribute (`ContentPage.tsx`), OG locale nl_NL / da_DK; route: `src/app/nl/[slug]` ve `src/app/da/[slug]` veya slug'lı path desteği (mevcut `[slug]` tek seviye — iç içe route eklenecek).
   - Sitemap'e otomatik girer (`pages` registry); breadcrumb etiketleri eklenir.
   - Not: tıbbi çeviri anadili konuşan biri tarafından gözden geçirilmeli (raporda belirtilecek).
3. P1 H1/H2 tablosu, şablon temizliği ve P2 GEO **bu turda yok** — sonraki karar için planda kalır.

## Kritik dosyalar
`src/content/pages/{home,pshot,conditions,clinic,core,diagnostics,shockwave}.ts`, `src/lib/articles.ts` (/testosterone-ed), `src/components/{ContentPage,Faq,DoctorCredentials,cta,JsonLd}.tsx`, `src/lib/{clinic,llms}.ts`, `docs/keyword-map.md`.
Yeniden kullanılacak: `breadcrumbLabels` (FAQ başlığı için), mevcut `answer` blokları, `priceText()` (`src/content/prices.ts`) fiyat H2 cevapları için.

## Doğrulama
- `npm run build`, `npm run seo:audit` (0 hata), canlı benzeri sunucuda H1/H2 dökümü (her sayfada 1 H1, kalıp H2 sayısı ≤2).
- `scripts/validate-site.mjs` keyword-map kontrolleri (title/H1 ifadeleri) güncellenir.
- Yayın sonrası: GSC'de 28 gün karşılaştırma (marka sırası, Priapus/venous leak/TRT sıraları), NightWatch AI görünürlük taban çizgisi.
