import { ImageResponse } from "next/og";

export const alt = "Masatoshi Abe - Software Engineer, Researcher";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 82% 12%, #503f18 0%, transparent 30%), linear-gradient(135deg, #100f14 0%, #050507 100%)",
          color: "#f5f2ea",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.16)",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            padding: "58px",
            width: "100%",
          }}
        >
          <div style={{ color: "#ddc98b", display: "flex", fontSize: 22, letterSpacing: 8 }}>
            PORTFOLIO
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 76, fontWeight: 700 }}>
              Masatoshi Abe
            </div>
            <div style={{ color: "#b9b4aa", display: "flex", fontSize: 28, marginTop: 24 }}>
              Software Engineer / Researcher
            </div>
          </div>
          <div style={{ color: "#8e887d", display: "flex", fontSize: 20 }}>
            abemasatoshi.com
          </div>
        </div>
      </div>
    ),
    size
  );
}
