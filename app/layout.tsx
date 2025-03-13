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
  title: "Natya Paramita - Communication & PR Specialist",
  description:
    "Portfolio website Natya Paramita, seorang Communication & Public Relations Specialist dengan pengalaman di berbagai industri dan proyek.",
  keywords: [
    "Natya Paramita",
    "Communication Specialist",
    "Public Relations",
    "PR Specialist",
    "Marketing Communications",
    "Corporate Communications",
    "Event Management",
    "Media Relations",
    "Content Strategy",
    "Brand Management",
  ],
  authors: [{ name: "Natya Paramita" }],
  creator: "Natya Paramita",
  publisher: "Natya Paramita",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://natyaparamita.com",
    title: "Natya Paramita - Communication & PR Specialist",
    description:
      "Portfolio website Natya Paramita, seorang Communication & Public Relations Specialist dengan pengalaman di berbagai industri dan proyek.",
    siteName: "Natya Paramita Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Natya Paramita - Communication & PR Specialist",
    description:
      "Portfolio website Natya Paramita, seorang Communication & Public Relations Specialist dengan pengalaman di berbagai industri dan proyek.",
    creator: "@natyaparamita",
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
        <link rel="canonical" href="https://natyaparamita.com" />
        <meta name="theme-color" content="#EC4899" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <body
        className={`${poppins.className} antialiased min-h-screen bg-white text-gray-900 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
