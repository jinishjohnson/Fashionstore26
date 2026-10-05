import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: {
    default: "Vogue - Premium Fashion Store",
    template: "%s | Vogue",
  },
  description: "Shop the latest fashion trends and new arrivals with seamless experience. Explore our premium collection of clothes, shoes, and accessories.",
  keywords: ["fashion", "shopping", "clothes", "trends", "e-commerce", "premium clothing", "style"],
  authors: [{ name: "Vogue Team" }],
  creator: "Vogue",
  openGraph: {
    title: "Vogue - Premium Fashion Store",
    description: "Shop the latest fashion trends and new arrivals.",
    url: "/",
    siteName: "Vogue Fashion",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vogue Premium Fashion Store",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vogue - Premium Fashion Store",
    description: "Shop the latest fashion trends and new arrivals.",
    creator: "@voguefashion",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f5f5f7] text-gray-900 overflow-x-hidden">{children}</body>
    </html>
  );
}
