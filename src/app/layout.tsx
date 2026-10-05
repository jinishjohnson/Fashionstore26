import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vogue - Premium Fashion Store",
  description: "Shop the latest fashion trends and new arrivals with seamless experience.",
  keywords: ["fashion", "shopping", "clothes", "trends", "e-commerce"],
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
