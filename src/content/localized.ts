// Non-English landing pages, created where Search Console shows real demand in that language:
// Dutch "priapus-shot behandeling" and Danish penile Doppler queries (Aug-Nov 2026).
// Each page is a faithful adaptation of its English source page: same evidence labels, risks and prices.
// The medical wording should be reviewed by a native speaker before it is promoted further.
import { formatPrice, itemPrice, packagePrice, REFERENCE_RATES_DATE } from "@/lib/pricing";
import type { FaqItem } from "./types";
import { DATE } from "./shared";

export type Lang = "nl" | "da";

export type LocalizedSection = { heading: string; id: string; paragraphs?: string[]; bullets?: string[]; steps?: { title: string; text: string }[] };

export type LocalizedPage = {
  lang: Lang;
  path: string;
  /** The English page this one adapts. Used for hreflang in both directions. */
  enPath: string;
  metaTitle: string;
  description: string;
  h1: string;
  /** Short breadcrumb label (32 characters or fewer). */
  breadcrumb: string;
  eyebrow: string;
  evidenceLabel: string;
  answer: { q: string; a: string };
  takeaways: string[];
  sections: LocalizedSection[];
  faqs: FaqItem[];
  sources: string[];
  whatsappMessage: string;
  modified: string;
  ui: {
    home: string;
    takeaways: string;
    faq: string;
    sources: string;
    cta: string;
    ctaText: string;
    whatsapp: string;
    englishVersion: string;
    englishLink: string;
    confidential: string;
    doctorHeading: string;
    doctorText: string;
    disclaimer: string;
    related: string;
  };
};

const eur = (n: number) => formatPrice(n, "EUR");
const gbp = (n: number) => formatPrice(n, "GBP");

const nlUi: LocalizedPage["ui"] = {
  home: "Home",
  takeaways: "In het kort",
  faq: "Veelgestelde vragen over de priapus-shot",
  sources: "Bronnen",
  cta: "Vraag een vertrouwelijke beoordeling aan",
  ctaText: "Stuur uw situatie via WhatsApp of het formulier. Een patiëntcoördinator neemt contact op en de uroloog beoordeelt of behandeling zinvol is.",
  whatsapp: "WhatsApp de kliniek",
  englishVersion: "Deze pagina is een Nederlandse samenvatting. De volledige Engelse gids:",
  englishLink: "P-Shot PRP treatment for erectile dysfunction",
  confidential: "Privé en vertrouwelijk. U hoeft niet te bellen.",
  doctorHeading: "Wie u beoordeelt: Op. Dr. Niyazi Umut Özdemir",
  doctorText: "Uroloog en urologisch chirurg in Antalya, oprichter van UZ Clinic. Opleiding geneeskunde aan de Ege Universiteit en registratie als uroloog bij de Turkse Vereniging voor Urologie. Focus: erectiestoornissen, penile revalidatie en mannelijke seksuele gezondheid.",
  disclaimer: "Deze pagina geeft algemene informatie en stelt geen diagnose. Geschiktheid en verwacht resultaat verschillen per patiënt en worden pas na medische beoordeling bepaald. Zoek dringend medische hulp bij pijn op de borst, plotselinge neurologische klachten, letsel aan de penis of een erectie die langer dan vier uur duurt.",
  related: "Meer informatie (Engels)",
};

const daUi: LocalizedPage["ui"] = {
  home: "Forside",
  takeaways: "Kort fortalt",
  faq: "Ofte stillede spørgsmål om penil Doppler-ultralyd",
  sources: "Kilder",
  cta: "Få en fortrolig vurdering",
  ctaText: "Send din historik og eventuelle tidligere rapporter via WhatsApp eller formularen. En patientkoordinator kontakter dig, og urologen vurderer, om en scanning er relevant.",
  whatsapp: "Skriv til klinikken på WhatsApp",
  englishVersion: "Denne side er et dansk resumé. Den fulde engelske guide:",
  englishLink: "Penile Doppler ultrasound for erectile dysfunction",
  confidential: "Privat og fortroligt. Du behøver ikke at ringe.",
  doctorHeading: "Hvem vurderer dig: Op. Dr. Niyazi Umut Özdemir",
  doctorText: "Urolog og urologisk kirurg i Antalya og grundlægger af UZ Clinic. Medicinsk uddannelse fra Ege Universitet og speciallæge i urologi godkendt af Det Tyrkiske Urologiske Selskab. Fokus: rejsningsproblemer, penil rehabilitering og mænds seksuelle sundhed.",
  disclaimer: "Denne side giver generel information og stiller ikke en diagnose. Egnethed og forventet udbytte varierer og afgøres først efter en lægelig vurdering. Søg akut lægehjælp ved brystsmerter, pludselige neurologiske symptomer, skade på penis eller en rejsning, der varer mere end fire timer.",
  related: "Læs mere (på engelsk)",
};

const pshotEur = eur(itemPrice("pshot", "EUR"));
const gcellEur = eur(itemPrice("gcell", "EUR"));
const dopplerEur = eur(itemPrice("doppler", "EUR"));
const bloodDopplerEur = eur(packagePrice("bloodDoppler", "EUR"));

export const localizedPages: LocalizedPage[] = [
  {
    lang: "nl",
    path: "/nl/priapus-shot",
    enPath: "/p-shot",
    metaTitle: "Priapus-shot behandeling in Antalya, Turkije | UZ Clinic",
    description: `Priapus-shot (P-Shot, PRP) bij erectiestoornissen: werkwijze, risico's, wat het onderzoek zegt en de prijs in Antalya (${pshotEur}). Door een uroloog beoordeeld.`,
    h1: "Priapus-shot (P-Shot) behandeling in Antalya, Turkije",
    breadcrumb: "Priapus-shot",
    eyebrow: "Behandelgids in het Nederlands",
    evidenceLabel: "Bewijsstatus: experimenteel",
    answer: {
      q: "Wat is de priapus-shot?",
      a: "De priapus-shot, ook P-Shot of penis-PRP genoemd, is een injectie met plaatjesrijk plasma (PRP) uit uw eigen bloed in het weefsel van de penis. Sommige klinieken gebruiken het als regeneratieve behandeling bij erectiestoornissen. Het is een experimentele behandeling: de Europese Vereniging voor Urologie (EAU) adviseert in haar richtlijn van 2026 PRP bij erectiestoornissen alleen binnen klinisch onderzoek te gebruiken. Of het voor u zinvol is, bepaalt een uroloog na beoordeling.",
    },
    takeaways: [
      "Uw eigen bloed wordt bewerkt tot plaatjesrijk plasma en na verdoving geïnjecteerd. U gaat dezelfde dag naar huis.",
      "Het bewijs is wisselend en de behandeling is experimenteel. Er worden geen resultaten gegarandeerd.",
      `Standaard P-Shot bij UZ Clinic Antalya: ${gbp(itemPrice("pshot", "GBP"))} (ca. ${pshotEur}).`,
    ],
    sections: [
      {
        heading: "Hoe verloopt een priapus-shot behandeling?",
        id: "werkwijze",
        steps: [
          { title: "Beoordeling en toestemming", text: "De uroloog bespreekt uw klachten en voorgeschiedenis, onderzoekt u en legt bewijs, risico's en alternatieven uit. U geeft schriftelijke toestemming vóór de behandeling." },
          { title: "Bloedafname", text: "Er wordt een kleine hoeveelheid bloed uit uw arm afgenomen, steriel." },
          { title: "PRP bereiden", text: "Het bloed wordt in een centrifuge gedraaid, zodat de bloedplaatjes worden geconcentreerd tot plaatjesrijk plasma." },
          { title: "Verdoving en injectie", text: "Na plaatselijke verdoving injecteert de arts het PRP in het weefsel van de penis. Het is een poliklinische behandeling." },
          { title: "Nazorg", text: "U krijgt schriftelijke nazorginstructies, waarschuwingssignalen en een contactpersoon voor vragen, ook na thuiskomst." },
        ],
      },
      {
        heading: "Voor wie kan het in aanmerking komen, en voor wie niet?",
        id: "geschiktheid",
        bullets: [
          "Mogelijk: mannen met een lichamelijke oorzaak van erectiestoornissen die begrijpen dat de behandeling experimenteel is en de bewezen opties al hebben besproken.",
          "Afhankelijk van de oorzaak: bij ernstige zenuwschade of gevorderde vaatziekte kan het effect beperkt zijn.",
          "Mogelijk niet geschikt: actieve infectie, stollingsstoornissen of bloedverdunners, laag aantal bloedplaatjes, kankerbehandeling of een verzwakt immuunsysteem.",
          "Eerst onderzoeken: pijn, kromming of een knobbel in de penis (mogelijk de ziekte van Peyronie) en onbehandelde hart- of suikerziekte.",
        ],
      },
      {
        heading: "Wat zegt het onderzoek?",
        id: "bewijs",
        paragraphs: [
          "Sommige gerandomiseerde studies melden betere scores op erectievragenlijsten na PRP dan na placebo. Een gerandomiseerde placebogecontroleerde studie uit 2023 vond echter geen verschil in effect en geen verandering in Doppler-metingen na zes maanden. Overzichtsstudies zien veelbelovende signalen, maar ook grote verschillen in bereiding, dosis en kwaliteit van de studies.",
          "Daarom bespreekt de kliniek PRP alleen als experimentele optie, na beoordeling. Een priapus-shot vergroot de penis niet en een blijvend effect kan niet worden beloofd.",
        ],
      },
      {
        heading: "Mogelijke bijwerkingen",
        id: "bijwerkingen",
        bullets: [
          "Vaak: tijdelijke pijn, gevoeligheid, blauwe plek, roodheid of zwelling op de injectieplek.",
          "Bloeding of bloeduitstorting, met meer risico bij bloedverdunners of stollingsstoornissen.",
          "Infectie, zoals bij elke injectie.",
          "Zoek direct hulp bij koorts, uitbreidende roodheid, pus, hevige of toenemende pijn, flinke bloeding, moeite met plassen of een erectie die langer dan vier uur duurt.",
        ],
      },
      {
        heading: "Wat kost een priapus-shot in Turkije?",
        id: "prijs",
        paragraphs: [
          `Bij UZ Clinic Antalya kost de standaard P-Shot ${gbp(itemPrice("pshot", "GBP"))} (ca. ${pshotEur}) en de G-Cell Power P-Shot ${gbp(itemPrice("gcell", "GBP"))} (ca. ${gcellEur}). Bloedonderzoek met een penis-Doppler-onderzoek kost samen ${bloodDopplerEur}.`,
          `Bedragen in euro zijn omgerekend met vaste referentiekoersen van ${REFERENCE_RATES_DATE}, niet met actuele wisselkoersen. Uw schriftelijke behandelplan bevestigt het totaal voordat u boekt. Een prijs zegt niets over het resultaat.`,
        ],
      },
      {
        heading: "Behandeling in Antalya: zo werkt het vanuit Nederland of België",
        id: "reizen",
        bullets: [
          "Begin met een vertrouwelijke beoordeling op afstand: stuur uw leeftijd, klachten, medicijnen en eventuele uitslagen.",
          "De coördinator plant de reis pas als de uroloog een plan zinvol vindt. Er zijn directe vluchten naar Antalya vanuit Nederland en België.",
          "De kliniek ligt in Kanyon Plaza, Bülent Ecevit Boulevard, Muratpaşa, Antalya. Er is ook een samenwerkende kliniek in Istanbul.",
          "Na thuiskomst blijft u contact houden voor vragen en nazorg.",
        ],
      },
    ],
    faqs: [
      { q: "Is de priapus-shot bewezen effectief bij erectiestoornissen?", a: "Nee. Sommige studies melden verbetering, andere vonden geen verschil met placebo. De EAU-richtlijn van 2026 adviseert PRP bij erectiestoornissen alleen binnen klinisch onderzoek te gebruiken." },
      { q: "Wat is het verschil tussen de priapus-shot, de P-Shot en PRP?", a: "Het gaat om dezelfde soort behandeling. Priapus-shot en P-Shot zijn merkachtige namen; de medische term is een injectie met plaatjesrijk plasma (PRP) in de penis." },
      { q: "Doet een priapus-shot pijn?", a: "Er wordt vooraf plaatselijk verdoofd. Veel mannen voelen een licht ongemak, maar ervaringen verschillen." },
      { q: "Vergroot de priapus-shot de penis?", a: "Nee. Het is geen behandeling om de penis te vergroten en de kliniek beweert dat ook niet." },
      { q: "Hoeveel kost een priapus-shot in Antalya?", a: `De standaard P-Shot kost ${gbp(itemPrice("pshot", "GBP"))} (ca. ${pshotEur}). Het behandelplan bevestigt het totaal vóór de boeking.` },
      { q: "Spreekt de kliniek Nederlands?", a: "Communicatie gaat in het Engels of Turks. U kunt uw vragen in het Engels via WhatsApp of het formulier sturen." },
    ],
    sources: ["eau2026", "aua2018", "masterson2023", "panunzio2024"],
    whatsappMessage: "Hello, I found you via the Dutch page and I am interested in P-Shot. I would like a confidential assessment.",
    modified: DATE,
    ui: nlUi,
  },
  {
    lang: "da",
    path: "/da/penil-doppler-ultralyd",
    enPath: "/penile-doppler-ultrasound",
    metaTitle: "Penil Doppler-ultralyd ved rejsningsproblemer | Antalya",
    description: `Penil Doppler-ultralyd måler blodgennemstrømningen i penis ved rejsningsproblemer. Hvad scanningen viser, risici og pris i Antalya (${dopplerEur}).`,
    h1: "Penil Doppler-ultralyd ved rejsningsproblemer",
    breadcrumb: "Penil Doppler-ultralyd",
    eyebrow: "Undersøgelse, guide på dansk",
    evidenceLabel: "Etableret undersøgelse",
    answer: {
      q: "Hvad er en penil Doppler-ultralydsscanning?",
      a: "En penil Doppler-ultralyd (duplex-scanning) måler, hvordan blodet strømmer ind i og ud af penis. Den hjælper urologen med at afgøre, om rejsningsproblemer skyldes nedsat blodtilførsel i arterierne eller et venøst læk, og det kan påvirke, hvilke behandlinger der er relevante. Scanningen bruges hos udvalgte mænd, ikke hos alle, og den behandler ikke i sig selv rejsningsproblemer.",
    },
    takeaways: [
      "Viser, hvor godt blodet strømmer ind i og bliver i penis.",
      "Kan skelne mellem nedsat arteriel tilførsel og venøst læk.",
      `Pris hos UZ Clinic Antalya: ${dopplerEur}.`,
    ],
    sections: [
      {
        heading: "Hvordan foregår scanningen?",
        id: "forloeb",
        steps: [
          { title: "Forberedelse", text: "Lægen gennemgår din sygehistorie og forklarer undersøgelsen. Du får besked, hvis medicin skal justeres." },
          { title: "Fremkaldt rejsning", text: "Som regel injiceres en lille dosis karudvidende medicin i penis for at fremkalde en rejsning." },
          { title: "Scanning", text: "En ultralydsprobe måler blodets hastighed i penis' arterier og vurderer, om blodet holdes tilbage." },
          { title: "Fortolkning", text: "Urologen vurderer resultaterne sammen med din sygehistorie og undersøgelse." },
        ],
      },
      {
        heading: "Hvad kan resultaterne vise?",
        id: "resultater",
        paragraphs: [
          "Lægen ser typisk på, hvor hurtigt blodet strømmer ind (peak systolic velocity), og hvor meget der strømmer i den diastoliske fase. En lav maksimal hastighed kan tyde på nedsat arteriel tilførsel, mens en høj diastolisk hastighed kan tyde på venøst læk. Grænseværdier og fortolkning afhænger af metoden og den samlede kliniske vurdering.",
        ],
      },
      {
        heading: "Gør det ondt, og hvad er risiciene?",
        id: "risici",
        bullets: [
          "Injektionen kan give et kort ubehag. Selve scanningen gør ikke ondt.",
          "Den injicerede medicin kan i sjældne tilfælde give en for langvarig rejsning. Søg akut hjælp, hvis en rejsning varer mere end fire timer.",
          "Nervøsitet under undersøgelsen kan begrænse rejsningen og målingerne, hvilket lægen tager højde for.",
          "Mange mænd behandles uden en Doppler-scanning. Den er mest nyttig, når der mistænkes et problem med blodgennemstrømningen.",
        ],
      },
      {
        heading: "Hvad koster en penil Doppler-ultralyd i Tyrkiet?",
        id: "pris",
        paragraphs: [
          `Hos UZ Clinic Antalya koster en penil Doppler-ultralyd ${dopplerEur}. Sammen med en omfattende blodprøve koster pakken ${bloodDopplerEur}. Samme priser gælder i Istanbul.`,
          `Dit skriftlige behandlingsforløb bekræfter totalen, før du booker. Priser i andre valutaer bruger faste referencekurser fra ${REFERENCE_RATES_DATE}.`,
        ],
      },
      {
        heading: "Scanning i Antalya: sådan foregår det fra Danmark",
        id: "rejse",
        bullets: [
          "Start med en fortrolig vurdering på afstand: send din historik, medicin og eventuelle tidligere scanningsrapporter.",
          "Urologen vurderer, om en ny scanning er nødvendig, eller om en tidligere rapport er nok.",
          "Scanningen kan foregå som en del af den personlige vurdering i Antalya, så den kræver ikke en ekstra rejse.",
          "Klinikken ligger i Kanyon Plaza, Bülent Ecevit Boulevard, Muratpaşa, Antalya. Der er også en samarbejdende klinik i Istanbul.",
        ],
      },
    ],
    faqs: [
      { q: "Gør en penil Doppler-scanning ondt?", a: "Injektionen kan give et kort ubehag. Selve scanningen gør ikke ondt. Oplevelsen varierer." },
      { q: "Hvad koster en penil Doppler-ultralyd i Antalya?", a: `En penil Doppler-ultralyd koster ${dopplerEur} hos UZ Clinic Antalya. Med en omfattende blodprøve koster pakken ${bloodDopplerEur}.` },
      { q: "Har jeg brug for en Doppler-scanning før behandling?", a: "Ikke altid. Scanningen er mest nyttig, når der mistænkes et problem med blodgennemstrømningen eller før visse behandlinger. Urologen afgør det." },
      { q: "Kan jeg sende en gammel Doppler-rapport?", a: "Ja. Send den med din sag, så vurderer urologen, om den er tilstrækkelig, eller om en ny scanning vil give mere information." },
      { q: "Taler klinikken dansk?", a: "Kommunikation foregår på engelsk eller tyrkisk. Du kan sende dine spørgsmål på engelsk via WhatsApp eller formularen." },
    ],
    sources: ["eau2026", "aua2018"],
    whatsappMessage: "Hello, I found you via the Danish page and I am interested in a penile Doppler ultrasound. I would like a confidential assessment.",
    modified: DATE,
    ui: daUi,
  },
];

export const getLocalizedPage = (path: string) => localizedPages.find((p) => p.path === path);

/** hreflang alternates for an English page that has translations: { "en-GB": "/p-shot", nl: "/nl/priapus-shot" }. */
export function hreflangFor(path: string): Record<string, string> | undefined {
  const localized = getLocalizedPage(path);
  const enPath = localized ? localized.enPath : path;
  const translations = localizedPages.filter((p) => p.enPath === enPath);
  if (!translations.length) return undefined;
  return { "en-GB": enPath, ...Object.fromEntries(translations.map((p) => [p.lang, p.path])), "x-default": enPath };
}

/** In-content links to the translated pages from closely related English pages (navigation only, not hreflang). */
export const languageLinks: Record<string, { lang: Lang; label: string; path: string }[]> = {
  "/p-shot": [{ lang: "nl", label: "Lees deze gids in het Nederlands", path: "/nl/priapus-shot" }],
  "/price": [{ lang: "nl", label: "Priapus-shot prijs in het Nederlands", path: "/nl/priapus-shot" }],
  "/p-shot-turkey": [{ lang: "nl", label: "Priapus-shot in Turkije (Nederlands)", path: "/nl/priapus-shot" }],
  "/p-shot-antalya": [{ lang: "nl", label: "Priapus-shot in Antalya (Nederlands)", path: "/nl/priapus-shot" }],
  "/penile-doppler-ultrasound": [{ lang: "da", label: "Læs denne guide på dansk", path: "/da/penil-doppler-ultralyd" }],
  "/penile-doppler-antalya": [{ lang: "da", label: "Penil Doppler-ultralyd i Antalya (dansk)", path: "/da/penil-doppler-ultralyd" }],
  "/venous-leak": [{ lang: "da", label: "Penil Doppler-ultralyd (dansk)", path: "/da/penil-doppler-ultralyd" }],
};
