import type { Metadata } from "next";
import { Playfair_Display, Poppins, Dancing_Script } from "next/font/google";
import "./globals.css";

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Natasya Artameivia Zulfi - Marketing & Communications Professional",
  description:
    "Portfolio website Natasya Artameivia Zulfi, seorang Marketing & Communications Professional dengan pengalaman di BNI, PLN Batam, dan Thamrin Group.",
  keywords: [
    "Natasya Artameivia Zulfi",
    "Marketing Professional",
    "Communications Specialist",
    "Public Relations",
    "Marketing Communications",
    "Corporate Communications",
    "Event Management",
    "Media Relations",
    "Content Strategy",
    "Brand Management",
    "PLN Batam",
    "BNI",
    "Thamrin Group",
  ],
  authors: [{ name: "Natasya Artameivia Zulfi" }],
  creator: "Natasya Artameivia Zulfi",
  publisher: "Natasya Artameivia Zulfi",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://natandkind.de",
    title: "Natasya Artameivia Zulfi - Marketing & Communications Professional",
    description:
      "Portfolio website Natasya Artameivia Zulfi, seorang Marketing & Communications Professional dengan pengalaman di BNI, PLN Batam, dan Thamrin Group.",
    siteName: "Natasya Artameivia Zulfi Portfolio",
    images: [
      {
        url: "/a.jpeg",
        width: 500,
        height: 600,
        alt: "Natasya Artameivia Zulfi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Natasya Artameivia Zulfi - Marketing & Communications Professional",
    description:
      "Portfolio website Natasya Artameivia Zulfi, seorang Marketing & Communications Professional dengan pengalaman di BNI, PLN Batam, dan Thamrin Group.",
    images: ["/a.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://natandkind.de",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${poppins.variable} ${dancing.variable} scroll-smooth`}
    >
      <head>
        <link rel="canonical" href="https://natandkind.de" />
        <meta name="theme-color" content="#EC4899" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${poppins.className} antialiased min-h-screen bg-white text-gray-900 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
