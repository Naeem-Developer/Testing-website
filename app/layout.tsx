import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diodona • Ristorante per eventi e Location per matrimoni a Varese",
  description:
    "Diodona è magia, sapori, natura, passione. Un ristorante raffinato e una location per matrimoni tra Como, Varese, Milano e la Svizzera.",
  keywords: "ristorante, matrimoni, eventi, Varese, Como, Milano, location",
  openGraph: {
    title: "Diodona • Ristorante ed Eventi",
    description: "Un ristorante raffinato e una location per matrimoni.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#F7F5F1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
