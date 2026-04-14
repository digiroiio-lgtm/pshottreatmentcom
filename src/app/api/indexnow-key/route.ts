import { NextResponse } from "next/server";

/**
 * Serves the IndexNow key verification file.
 * IndexNow expects to fetch a plain-text file at a known URL that contains
 * only the key. Set the INDEXNOW_KEY environment variable with the key you
 * generated at https://www.bing.com/indexnow/getstarted.
 *
 * Per IndexNow spec, point `keyLocation` to this URL:
 *   https://pshottreatment.com/api/indexnow-key
 */
export function GET() {
  const key = process.env.INDEXNOW_KEY ?? "";
  if (!key) {
    return new NextResponse("INDEXNOW_KEY environment variable is not set", {
      status: 500,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
  return new NextResponse(key, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
