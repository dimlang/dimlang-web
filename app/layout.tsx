import type { Metadata } from "next";
import "./globals.scss";
import LayoutWrapper from "./components/shared/LayoutWrapper";
import GlobalProvider from "./components/shared/Provider";

export const metadata: Metadata = {
  title: "Dimlang - Enterprise Content Intelligence Platform",
  description: "Transform organizational content into institutional intelligence. Dimlang creates a living knowledge layer that helps teams search, understand, and build upon enterprise knowledge.",
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
