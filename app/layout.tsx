import type { Metadata } from "next";
import "./globals.scss";
import LayoutWrapper from "./components/shared/LayoutWrapper";
import GlobalProvider from "./components/shared/Provider";

export const metadata: Metadata = {
  title: "Dimlang - The Organizational Intelligence Platform",
  description: "Your organization gets smarter with every document, meeting, and decision. Dimlang transforms accumulated knowledge into trusted intelligence that makes better decisions possible.",
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
