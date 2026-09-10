import { ImageResponse } from "next/og";
import { siteName } from "@/lib/site-config";

export const alt =
  "P-Shot Treatment — £300 / €300 / $300 all-inclusive at a certified clinic in Istanbul";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social and AI card image. The site previously had none, so every share and
 * every LLM-generated card rendered blank.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#bfdbfe",
            marginBottom: 24,
          }}
        >
          {siteName}
        </div>
        <div
          style={{
            fontSize: 92,
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: 18,
          }}
        >
          P-Shot Treatment
        </div>
        <div
          style={{
            fontSize: 74,
            fontWeight: 800,
            color: "#fde047",
            marginBottom: 30,
          }}
        >
          £300 / €300 / $300
        </div>
        <div style={{ fontSize: 34, color: "#dbeafe", lineHeight: 1.35 }}>
          All-inclusive · Certified clinic, Istanbul · Same-day procedure
        </div>
      </div>
    ),
    size,
  );
}
