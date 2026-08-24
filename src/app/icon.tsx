import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

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
          borderRadius: 16,
          background: "linear-gradient(135deg, #6947ea 0%, #a78bfa 100%)",
          color: "#ffffff",
          fontSize: 30,
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
          letterSpacing: -1,
        }}
      >
        SB
      </div>
    ),
    { ...size },
  );
}
