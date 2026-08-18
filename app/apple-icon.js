import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0c",
        }}
      >
        <svg width="112" height="112" viewBox="0 0 40 40" fill="none">
          <rect x="13" y="10" width="5" height="21" rx="2" fill="#ffffff" />
          <path d="M18 10C25 10 28 12.6 28 16.3C28 20 25 22.4 18 22.4Z" fill="#ffffff" />
          <circle cx="29" cy="12" r="3.2" fill="#2563eb" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
