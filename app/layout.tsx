import type { Metadata } from "next";
import "./globals.scss";
import LayoutWrapper from "./components/shared/LayoutWrapper";

export const metadata: Metadata = {
  title: "Dimlang",
  description: "AI-Powered Storytelling at Scale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
