import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CoCriart — Marketing Holístico";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #1a0829 0%, #2d0e44 45%, #6d1f8d 100%)",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Glow blob */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 400,
            background:
              "radial-gradient(ellipse, rgba(109,31,141,0.45) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Logo / brand name */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 0,
            marginBottom: 20,
          }}
        >
          <span
            style={{
              fontSize: 90,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-2px",
            }}
          >
            CoCRI
          </span>
          <span
            style={{
              fontSize: 90,
              fontWeight: 400,
              color: "#d29ee1",
              fontStyle: "italic",
            }}
          >
            art
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(210,158,225,0.85)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginBottom: 36,
          }}
        >
          Marketing Holístico
        </div>

        {/* Slogan */}
        <div
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.55)",
            fontStyle: "italic",
            letterSpacing: "0.05em",
          }}
        >
          Desperte &amp; Cocrie.
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(to right, #c56428, #d29ee1)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
