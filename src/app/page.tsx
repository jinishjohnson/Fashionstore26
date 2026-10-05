import dynamic from "next/dynamic";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import IconsSection from "@/components/IconsSection";

// Dynamically import components that are below the fold to reduce initial JS payload
const NewArrivals = dynamic(() => import("@/components/NewArrivals"));
const Categories = dynamic(() => import("@/components/Categories"));
const OfferSection = dynamic(() => import("@/components/OfferSection"));
const PaydaySale = dynamic(() => import("@/components/PaydaySale"));
const LatestCollection = dynamic(() => import("@/components/LatestCollection"));
const Newsletter = dynamic(() => import("@/components/Newsletter"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="relative bg-[#f5f5f7]">
      <NavBar />
      <HeroSection />
      <IconsSection />
      <NewArrivals />
      <Categories />
      <OfferSection />
      <PaydaySale />
      <LatestCollection />
      <Newsletter />
      <Footer />
    </main>
  );
}
