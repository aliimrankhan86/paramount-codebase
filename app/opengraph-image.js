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
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0a0c",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(37,99,235,0.55), transparent 45%), radial-gradient(circle at 80% 80%, rgba(59,118,240,0.35), transparent 50%)",
        }}
      >
        <svg width="64" height="64" viewBox="0 0 40 40" fill="none" style={{ marginBottom: 32 }}>
          <rect width="40" height="40" rx="9" fill="#151519" />
          <rect x="13" y="10" width="5" height="21" rx="2" fill="#ffffff" />
          <path d="M18 10C25 10 28 12.6 28 16.3C28 20 25 22.4 18 22.4Z" fill="#ffffff" />
          <circle cx="29" cy="12" r="3.2" fill="#3b76f0" />
        </svg>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 700, color: "#fff", letterSpacing: -1.5 }}>
          Paramount Consultants
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "rgba(255,255,255,0.7)", marginTop: 16, maxWidth: 820 }}>
          {site.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
