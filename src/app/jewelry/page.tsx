import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jewelry",
  description: "Discover our premium jewelry collection.",
};

export default function JewelryPage() {
  return (
    <main className="relative bg-[#f5f5f7] min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow pt-40 pb-16 px-6 max-w-7xl mx-auto w-full flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 tracking-tight">Jewelry</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Elevate your style with our exquisite jewelry pieces. Rings, necklaces, and bracelets crafted for perfection are arriving soon.
        </p>
      </div>
      <Footer />
    </main>
  );
}
