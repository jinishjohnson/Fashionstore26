import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import IconsSection from "@/components/IconsSection";
import NewArrivals from "@/components/NewArrivals";
import Categories from "@/components/Categories";
import OfferSection from "@/components/OfferSection";
import PaydaySale from "@/components/PaydaySale";
import LatestCollection from "@/components/LatestCollection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

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
