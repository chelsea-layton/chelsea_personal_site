import type { Metadata } from "next";
import { DM_Serif_Display, Poppins } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Chelsea Layton — Product Manager",
  description:
    "Chelsea Layton is a product manager who ships thoughtful products at the intersection of AI, design, and user behavior.",
  openGraph: {
    title: "Chelsea Layton — Product Manager",
    description:
      "Chelsea Layton is a product manager who ships thoughtful products at the intersection of AI, design, and user behavior.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${poppins.variable}`}>
      <body className="antialiased font-sans" style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
