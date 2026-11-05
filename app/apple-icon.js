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
          backgroundColor: "#0e0e0c",
        }}
      >
        <svg width="112" height="112" viewBox="0 0 40 40" fill="none">
          <rect x="13" y="10" width="4.6" height="21" rx="1.4" fill="#f4f1ea" />
          <path d="M17.6 10C24.6 10 27.6 12.6 27.6 16.3C27.6 20 24.6 22.4 17.6 22.4Z" fill="#f4f1ea" />
          <circle cx="28.8" cy="12" r="3" fill="#1c3a8c" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
