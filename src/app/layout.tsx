import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "조현우 — AI Product Engineer",
  description:
    "React, Next.js, React Native로 프로덕트를 만들고 AI를 핵심 기능으로 활용한 서비스를 개발합니다.",
  openGraph: {
    title: "조현우 — AI Product Engineer",
    description:
      "React, Next.js, React Native로 프로덕트를 만들고 AI를 핵심 기능으로 활용한 서비스를 개발합니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
