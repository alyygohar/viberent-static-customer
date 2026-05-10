import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibrent – Find Your Perfect Stay in Dubai",
  description: "Handpicked holiday homes across Dubai's most coveted addresses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
