"use client";

import { motion } from "framer-motion";
import { Menu, Search, ShoppingBag, Heart, User, Home } from "lucide-react";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      {/* Top Navbar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[98%] md:max-w-[85%]"
      >
        <div className="flex items-center justify-between px-6 py-4 h-16 md:h-auto rounded-full bg-white/70 backdrop-blur-xl border border-white/40 shadow-sm">
          {/* Hamburger Menu (Desktop) */}
          <button className="hidden md:block p-2 rounded-full hover:bg-black/5 transition-colors">
            <Menu className="w-6 h-6 text-gray-900" />
          </button>

          {/* Center Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center pointer-events-none">
            <Image
              src="/asset/Logo-Nobackground_1.png"
              alt="ME MY FIT Logo"
              width={240}
              height={80}
              className="w-auto h-16 md:h-20 scale-[1.5] md:scale-[2] object-contain"
            />
          </div>

          {/* Right Icons (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-black/5 transition-colors">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2 rounded-full hover:bg-black/5 transition-colors relative">
              <ShoppingBag className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2 rounded-full hover:bg-black/5 transition-colors relative">
              <Heart className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2 rounded-full hover:bg-black/5 transition-colors relative">
              <User className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Bottom Dock (Liquid Glass) */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm"
      >
        <div className="flex items-center justify-between px-6 py-4 rounded-[2rem] bg-white/40 backdrop-blur-2xl border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
          <button className="p-2 rounded-2xl hover:bg-white/50 active:bg-white/60 transition-all flex flex-col items-center">
            <Home className="w-6 h-6 text-gray-800" />
          </button>
          <button className="p-2 rounded-2xl hover:bg-white/50 active:bg-white/60 transition-all flex flex-col items-center">
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
          <button className="p-4 rounded-full bg-white/80 hover:bg-white border border-white/60 shadow-lg transition-all flex flex-col items-center -mt-10">
            <ShoppingBag className="w-7 h-7 text-[#f91054]" />
          </button>
          <button className="p-2 rounded-2xl hover:bg-white/50 active:bg-white/60 transition-all flex flex-col items-center">
            <Heart className="w-6 h-6 text-gray-800" />
          </button>
          <button className="p-2 rounded-2xl hover:bg-white/50 active:bg-white/60 transition-all flex flex-col items-center">
            <User className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </motion.div>
    </>
  );
}
