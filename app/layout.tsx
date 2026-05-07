import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hasintha Dilshan | Portfolio",
  description: "Cyber-physical systems, AI agents, IoT, and backend engineering portfolio for Hasintha Dilshan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
