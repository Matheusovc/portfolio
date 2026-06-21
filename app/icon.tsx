import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0A0A0A",
        borderRadius: "6px",
      }}
    >
      <span
        style={{
          fontFamily: "serif",
          fontSize: 22,
          fontWeight: 700,
          color: "#D4AF37",
          lineHeight: 1,
          marginTop: 1,
        }}
      >
        M
      </span>
    </div>,
    { ...size }
  );
}
