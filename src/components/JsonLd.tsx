import { buildGraph, type GraphOptions } from "@/lib/schema";

/**
 * Renders one JSON-LD `@graph` per page.
 *
 * `<` is escaped to `<` so a value can never terminate the script element —
 * the standard hardening for JSON embedded in HTML.
 */
export default function JsonLd(props: GraphOptions) {
  const json = JSON.stringify(buildGraph(props)).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
