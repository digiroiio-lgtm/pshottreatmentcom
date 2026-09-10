import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

/** App icon, also referenced as the Organization logo in JSON-LD. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1d4ed8",
          color: "#ffffff",
          fontSize: 300,
          fontWeight: 800,
          letterSpacing: "-0.05em",
        }}
      >
        P
      </div>
    ),
    size,
  );
}
