import { ImageResponse } from "next/og";
import site from "@/constants/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#f4f1ea",
          color: "#0e0e0c",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="46" height="46" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="4" fill="#0e0e0c" />
            <rect x="13" y="10" width="4.6" height="21" rx="1.4" fill="#f4f1ea" />
            <path d="M17.6 10C24.6 10 27.6 12.6 27.6 16.3C27.6 20 24.6 22.4 17.6 22.4Z" fill="#f4f1ea" />
            <circle cx="28.8" cy="12" r="3" fill="#1c3a8c" />
          </svg>
          <div style={{ display: "flex", fontSize: 20, fontFamily: "monospace", letterSpacing: 2 }}>
            PARAMOUNT CONSULTANTS
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 82,
              fontFamily: "Georgia, serif",
              lineHeight: 0.98,
              letterSpacing: -2,
              maxWidth: 960,
            }}
          >
            AI-driven innovation, built for real business change.
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#514e46", maxWidth: 820 }}>
            {site.tagline} Applied AI and digital delivery.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(14,14,12,0.18)",
            paddingTop: 22,
            fontFamily: "monospace",
            fontSize: 16,
            letterSpacing: 1.5,
            color: "#6c685e",
          }}
        >
          <span>AGENTIC AI</span>
          <span>AEM</span>
          <span>AGILE DELIVERY</span>
          <span>ENGINEERING</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
