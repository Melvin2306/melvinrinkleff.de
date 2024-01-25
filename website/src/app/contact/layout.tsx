import Head from "next/head";

export const metadata = {
  title: "Contact Melvin Rinkleff",
  description: "Contact Melvin Rinkleff",
  url: "https://melvinrinkleff.de/contact",
  keywords: [
    "Melvin Rinkleff",
    "Melvin",
    "Rinkleff",
    "Melvin Rinkleff Kontakt",
    "Melvin Rinkleff Contact",
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
      ;
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
