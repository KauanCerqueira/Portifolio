import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kauan Cerqueira — Criação de páginas que geram contato no WhatsApp";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#292b2d",
          color: "#f6f4f1",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "8px",
              backgroundColor: "#f6f4f1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#292b2d",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            K
          </div>
          <span style={{ fontSize: "22px", opacity: 0.7 }}>kauancerqueira.com.br</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              maxWidth: "900px",
            }}
          >
            Páginas que geram contato no WhatsApp.
          </div>
          <div
            style={{
              fontSize: "24px",
              opacity: 0.6,
              maxWidth: "700px",
              lineHeight: 1.4,
            }}
          >
            Páginas profissionais para negócios locais. Estrutura clara, visual
            limpo e caminho direto para o contato.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: "18px", opacity: 0.5 }}>
            Kauan Cerqueira · Web Designer
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#f6f4f1",
              color: "#292b2d",
              padding: "12px 28px",
              borderRadius: "9999px",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            Chamar no WhatsApp →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
