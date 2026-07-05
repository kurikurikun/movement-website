import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "move-ment — Bilingual Video Production Japan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ACCENT = "#e95228";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          width: "1200px",
          height: "630px",
          backgroundColor: "#fafafa",
          padding: "60px 64px 60px 80px",
          borderLeft: `6px solid ${ACCENT}`,
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            left: 0,
            width: "1200px",
            height: "4px",
            backgroundColor: ACCENT,
          }}
        />

        {/* Mono label */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "28px",
              height: "2px",
              backgroundColor: ACCENT,
              marginRight: "14px",
            }}
          />
          <span
            style={{
              fontSize: "20px",
              color: "#a3a3a3",
              letterSpacing: "0.20em",
              textTransform: "uppercase",
            }}
          >
            Bilingual Video Production · Tokyo, Japan
          </span>
        </div>

        {/* Tagline line 1 */}
        <div
          style={{
            display: "flex",
            fontSize: "32px",
            fontWeight: 700,
            color: "#171717",
            letterSpacing: "-0.5px",
            marginBottom: "4px",
          }}
        >
          Stories of Japan to the world,
        </div>

        {/* Tagline line 2 — "made to +move" */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            marginBottom: "28px",
          }}
        >
          <span
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#171717",
              letterSpacing: "-0.5px",
            }}
          >
            made to
          </span>
          <span
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: ACCENT,
              letterSpacing: "-0.5px",
              marginLeft: "10px",
            }}
          >
            +
          </span>
          <span
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#171717",
              letterSpacing: "-0.5px",
            }}
          >
            move
          </span>
        </div>

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
          }}
        >
          <span
            style={{
              fontSize: "96px",
              fontWeight: 900,
              color: "#111111",
              letterSpacing: "-4px",
              lineHeight: "1",
            }}
          >
            move
          </span>
          <span
            style={{
              fontSize: "96px",
              fontWeight: 900,
              color: ACCENT,
              letterSpacing: "-4px",
              lineHeight: "1",
            }}
          >
            -
          </span>
          <span
            style={{
              fontSize: "96px",
              fontWeight: 900,
              color: "#111111",
              letterSpacing: "-4px",
              lineHeight: "1",
            }}
          >
            ment
          </span>
        </div>

        {/* Underline + CTA row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "16px",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "4px",
              backgroundColor: ACCENT,
            }}
          />

          {/* CTA pill */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: ACCENT,
              padding: "14px 32px",
              gap: "10px",
            }}
          >
            <span
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "0.05em",
              }}
            >
              www.move-ment.co
            </span>
            <span
              style={{
                fontSize: "18px",
                color: "#ffffff",
                opacity: 0.8,
              }}
            >
              →
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
