import { ImageResponse } from "next/og";

export const alt =
  "Facilitô! Labs — Teste de Clima Organizacional e Conformidade NR-1";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px 80px",
          background:
            "linear-gradient(135deg, #0e0e0e 0%, #1a1a2e 50%, #0e0e0e 100%)",
          color: "#e2e2e2",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "#0066cc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 700,
              color: "#fff",
              marginRight: "16px",
            }}
          >
            F
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#aac7ff",
            }}
          >
            Facilitô! Labs
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "52px",
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: "900px",
            marginBottom: "32px",
            color: "#e2e2e2",
          }}
        >
          Teste de Clima Organizacional e Conformidade NR-1
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "26px",
            lineHeight: 1.5,
            color: "#c1c6d5",
            maxWidth: "800px",
          }}
        >
          Adequação prática e definitiva para qualquer empresa
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "10px 24px",
              borderRadius: "999px",
              border: "1px solid rgba(0, 102, 204, 0.4)",
              background: "rgba(0, 102, 204, 0.1)",
              fontSize: "18px",
              color: "#aac7ff",
              marginRight: "24px",
            }}
          >
            Clima Organizacional
          </div>
          <div
            style={{
              display: "flex",
              padding: "10px 24px",
              borderRadius: "999px",
              border: "1px solid rgba(0, 102, 204, 0.4)",
              background: "rgba(0, 102, 204, 0.1)",
              fontSize: "18px",
              color: "#aac7ff",
              marginRight: "24px",
            }}
          >
            NR-1
          </div>
          <div
            style={{
              display: "flex",
              padding: "10px 24px",
              borderRadius: "999px",
              border: "1px solid rgba(0, 102, 204, 0.4)",
              background: "rgba(0, 102, 204, 0.1)",
              fontSize: "18px",
              color: "#aac7ff",
            }}
          >
            ATS Gratuito
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
