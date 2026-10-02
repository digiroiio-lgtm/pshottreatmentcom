import { ImageResponse } from "next/og";
import { getPage } from "@/content";
import { SITE_NAME } from "@/lib/site-config";

const DEFAULT_TITLE = "Erectile Dysfunction & Penile Rehabilitation in Antalya";

// Social preview image. Only titles from the route registry are rendered, so arbitrary text cannot be injected via the query string.
export function GET(request: Request) {
  const path = new URL(request.url).searchParams.get("path") ?? "/";
  const title = getPage(path)?.h1 ?? DEFAULT_TITLE;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0f172a 0%, #0f766e 100%)",
          color: "#ffffff",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, fontWeight: 700, color: "#99f6e4" }}>{SITE_NAME}</div>
        <div style={{ display: "flex", fontSize: title.length > 50 ? 56 : 68, fontWeight: 800, lineHeight: 1.1 }}>{title}</div>
        <div style={{ display: "flex", fontSize: 28, color: "#cbd5e1" }}>
          Urologist-led assessment. Confidential enquiry.
        </div>
      </div>
    ),
    { width: 1200, height: 630, headers: { "Cache-Control": "public, max-age=86400, s-maxage=604800" } },
  );
}
