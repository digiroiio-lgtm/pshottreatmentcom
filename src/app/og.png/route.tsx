import { ImageResponse } from "next/og";
import { routeByPath, SITE_NAME } from "@/lib/site-config";

const DEFAULT_TITLE = "P-Shot and PRP for ED: Evidence, Limits and Cost";

// Social preview image. Only titles from the route registry are rendered, so arbitrary text cannot be injected via the query string.
export function GET(request: Request) {
  const path = new URL(request.url).searchParams.get("path") ?? "/";
  const title = routeByPath(path)?.title ?? DEFAULT_TITLE;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
          color: "#ffffff",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, fontWeight: 700, color: "#93c5fd" }}>{SITE_NAME}</div>
        <div style={{ display: "flex", fontSize: title.length > 55 ? 60 : 72, fontWeight: 800, lineHeight: 1.1 }}>{title}</div>
        <div style={{ display: "flex", fontSize: 28, color: "#cbd5e1" }}>
          Evidence-led information. PRP for ED is experimental.
        </div>
      </div>
    ),
    { width: 1200, height: 630, headers: { "Cache-Control": "public, max-age=86400, s-maxage=604800" } },
  );
}
