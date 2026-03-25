import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Poppins } from "next/font/google";
import { siteMetadataBase, siteUrlString } from "@/lib/site";
import { FaviconDebugProbe } from "./favicon-debug-probe";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FEFCFA",
};

const siteTitle = "Chelsea Layton — AI Product Manager";
const siteDescription =
  "Chelsea Layton is an AI product manager who ships thoughtful products at the intersection of AI, design, and user behavior.";

export const metadata: Metadata = {
  metadataBase: siteMetadataBase(),
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

function PersonJsonLd() {
  const base = siteUrlString();
  const githubUser = process.env.GITHUB_USERNAME ?? "chelsea-layton";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chelsea Layton",
    url: base,
    jobTitle: "AI Product Manager",
    sameAs: [
      "https://www.linkedin.com/in/hichelsea",
      `https://github.com/${githubUser}`,
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${poppins.variable}`}>
      <body
        className="antialiased font-sans min-h-dvh overflow-x-clip pb-[env(safe-area-inset-bottom)]"
        style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
      >
        <PersonJsonLd />
        <FaviconDebugProbe />
        {children}
      </body>
    </html>
  );
}
