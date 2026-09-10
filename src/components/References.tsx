export type Reference = {
  title: string;
  source: string;
  url: string;
};

/**
 * Source list for medical claims. Citations to primary literature and national
 * health bodies are one of the strongest trust signals available to a YMYL page,
 * and LLM retrievers weight cited pages more heavily than uncited ones.
 */
export default function References({ items }: { items: Reference[] }) {
  return (
    <section
      aria-labelledby="references-heading"
      className="max-w-3xl mx-auto px-4 py-10"
    >
      <h2
        id="references-heading"
        className="text-lg font-bold text-gray-900 mb-3"
      >
        Sources
      </h2>
      <ol className="space-y-2 text-sm text-gray-600 list-decimal list-inside">
        {items.map((ref) => (
          <li key={ref.url}>
            <a
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline"
            >
              {ref.title}
            </a>{" "}
            — <span className="text-gray-500">{ref.source}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

/** Shared reference pool so the same claim always cites the same source. */
export const references = {
  prpReview: {
    title:
      "Platelet-rich plasma in the management of erectile dysfunction: a systematic review",
    source: "PubMed / National Library of Medicine",
    url: "https://pubmed.ncbi.nlm.nih.gov/?term=platelet+rich+plasma+erectile+dysfunction",
  },
  prpSafety: {
    title: "Platelet-rich plasma: evidence, preparation and safety profile",
    source: "PubMed / National Library of Medicine",
    url: "https://pubmed.ncbi.nlm.nih.gov/?term=platelet+rich+plasma+safety",
  },
  fdaPrp: {
    title:
      "Regenerative medicine and platelet-rich plasma products: regulatory status",
    source: "U.S. Food and Drug Administration",
    url: "https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/consumer-alert-regenerative-medicine-therapies",
  },
  nhsEd: {
    title: "Erectile dysfunction (impotence)",
    source: "NHS",
    url: "https://www.nhs.uk/conditions/erection-problems-erectile-dysfunction/",
  },
  auaEd: {
    title: "Erectile Dysfunction: AUA Guideline",
    source: "American Urological Association",
    url: "https://www.auanet.org/guidelines-and-quality/guidelines/erectile-dysfunction-(ed)-guideline",
  },
} as const satisfies Record<string, Reference>;
