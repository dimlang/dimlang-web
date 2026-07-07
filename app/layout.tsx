import type { Metadata } from "next";
import "./globals.scss";
import LayoutWrapper from "./components/shared/LayoutWrapper";
import GlobalProvider from "./components/shared/Provider";

export const metadata: Metadata = {
  title: "Dimlang - Institutional Knowledge Platform",
  description: "Make confident decisions. Never lose institutional context. Dimlang is the institutional knowledge platform for organizations where decisions and consistency matter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <GlobalProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </GlobalProvider>
      </body>
    </html>
  );
}
