import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abemasatoshi.com"),
  title: {
    default: "阿部勝寿 | Software Engineer",
    template: "%s | 阿部勝寿",
  },
  description:
    "ソフトウェア開発、EV充電ステーション配置最適化の研究に取り組む阿部勝寿のポートフォリオ。",
  authors: [{ name: "阿部勝寿", url: "https://www.abemasatoshi.com" }],
  creator: "阿部勝寿",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName: "Masatoshi Abe Portfolio",
    title: "阿部勝寿 | Software Engineer",
    description:
      "ソフトウェア開発、研究に取り組む阿部勝寿のポートフォリオ。",
  },
  twitter: {
    card: "summary_large_image",
    title: "阿部勝寿 | Software Engineer",
    description:
      "ソフトウェア開発、研究に取り組む阿部勝寿のポートフォリオ。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
