import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Egypt Financial Compliance Dashboard | CBE Cybersecurity Framework",
  description: "Interactive self-assessment tool for CBE (Central Bank of Egypt) Cybersecurity Framework compliance. Track, assess, and report on 150+ controls across 6 domains.",
  keywords: ["CBE", "Compliance", "Cybersecurity", "Egypt", "Financial", "Assessment", "Framework"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
