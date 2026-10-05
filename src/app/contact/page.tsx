import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Vogue team.",
};

export default function ContactPage() {
  return (
    <main className="relative bg-[#f5f5f7] min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow pt-40 pb-16 px-6 max-w-7xl mx-auto w-full flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 tracking-tight">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Have a question about your order or our collections? We'd love to hear from you.
        </p>
        
        <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md text-left">
          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
              <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f91054]/20 focus:border-[#f91054] transition-all" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f91054]/20 focus:border-[#f91054] transition-all" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
              <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f91054]/20 focus:border-[#f91054] transition-all resize-none" placeholder="How can we help?"></textarea>
            </div>
            <button type="button" className="mt-4 w-full bg-[#1f1618] hover:bg-black text-white font-bold py-4 rounded-xl transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
