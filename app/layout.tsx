import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neon Ranking Animation",
  description: "High-fidelity reconstruction of Neon's ranking animation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex items-center justify-center min-h-screen bg-[#e5e5e4]">
        {children}
      </body>
    </html>
  );
}
