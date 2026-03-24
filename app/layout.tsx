import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AmoiiKane — Systems & Backend Developer",
  description: "Portfolio of AmoiiKane — C, Rust, Python, Go, systems programming, backend APIs, automation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
