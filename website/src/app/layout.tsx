import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Melvin Rinkleff",
  description: "Website of Melvin Rinkleff",
  url: "https://melvinrinkleff.de",
  keywords: [
    "Melvin Rinkleff",
    "Melvin",
    "Rinkleff",
    "melvinrinkleff",
    "melvin rinkleff",
    "melvinrinkleff.de",
    "melvinrinkleff.com",
    "melvinrinkleff.dev",
    "melvinrinkleff.io",
    "melvinrinkleff.net",
    "melvinrinkleff.org",
    "melvinrinkleff.xyz",
    "melvinrinkleff.website",
    "melvinrinkleff.app",
    "melvinrinkleff.blog",
    "melvinrinkleff.design",
    "melvinrinkleff.info",
    "melvinrinkleff.me",
    "melvinrinkleff.shop",
    "melvinrinkleff.store",
    "melvinrinkleff.tech",
    "melvinrinkleff.work",
    "melvinrinkleff.live",
    "melvinrinkleff.online",
    "melvinrinkleff.space",
    "melvinrinkleff.world",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}
        bg-white
        container
        mx-2
        p-2`}
      >
        {children}
      </body>
      <Analytics />
    </html>
  );
}
