import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clothing",
  description: "Browse our latest clothing collections.",
};

export default function ClothingPage() {
  return (
    <main className="relative bg-[#f5f5f7] min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow pt-40 pb-16 px-6 max-w-7xl mx-auto w-full flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 tracking-tight">Clothing</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our seasonal drops and signature silhouettes. The full clothing catalog is launching shortly.
        </p>
      </div>
      <Footer />
    </main>
  );
}
