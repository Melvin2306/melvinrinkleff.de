import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Melvin Rinkleff",
  description: "Website of Melvin Rinkleff",
  url: "https://melvinrinkleff.de",
  keywords: [
    "Melvin Rinkleff",
    "Melvin",
    "Rinkleff",
    "Melvin2306",
    "Melvin Rinkleff Website",
    "Melvin Rinkleff Homepage",
    "Melvin Rinkleff Portfolio",
    "Melvin Rinkleff Projects",
    "Melvin Rinkleff Imprint",
    "Melvin Rinkleff Impressum",
    "Melvin Rinkleff Contact",
    "Melvin Rinkleff Kontakt",
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
      <Head>
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content={metadata.title} />
        <meta name="url" content={metadata.url} />
        <meta name="og:title" content={metadata.title} />
        <meta name="og:description" content={metadata.description} />
        <meta name="og:url" content={metadata.url} />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content={metadata.title} />
        <meta name="og:locale" content="de_GE" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body
        className={`${inter.className}
        bg-white
        mx-2
        p-2`}
      >
        <Navbar />
        <>{children}</>
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
