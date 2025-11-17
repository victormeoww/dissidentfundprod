import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  style: ["normal"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dissidentfund.org"),
  title: {
    default: "Dissident Fund",
    template: "%s | Dissident Fund",
  },
  description:
    "Supporting Iranian dissidents with rapid funding, visibility, and operational support.",
  openGraph: {
    title: "Dissident Fund",
    description:
      "Supporting Iranian dissidents with rapid funding, visibility, and operational support.",
    url: "https://dissidentfund.org",
    siteName: "Dissident Fund",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dissident Fund",
    description:
      "Supporting Iranian dissidents with rapid funding, visibility, and operational support.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${space.variable} ${plexMono.variable}`}>
      <body className="bg-black text-white antialiased">
        <div className="relative min-h-screen overflow-hidden bg-black">
          <NoiseDefinitions />
          {children}
        </div>
      </body>
    </html>
  );
}

const NoiseDefinitions = () => (
  <svg className="pointer-events-none absolute h-0 w-0" aria-hidden="true">
    <filter id="grain">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.9"
        numOctaves="4"
        stitchTiles="stitch"
      />
      <feColorMatrix type="saturate" values="0" />
    </filter>
  </svg>
);
