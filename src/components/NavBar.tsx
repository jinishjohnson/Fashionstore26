"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Search, ShoppingBag, Heart, User, Home, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <button 
            aria-label="Menu" 
            onClick={() => setIsMenuOpen(true)}
            className="hidden md:block p-2 rounded-full hover:bg-black/5 transition-colors"
          >
            <Menu className="w-6 h-6 text-gray-900" />
          </button>

          {/* Center Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center pointer-events-none">
            <Link href="/" className="pointer-events-auto">
              <Image
                src="/asset/Logo-Nobackground_1.png"
                alt="ME MY FIT Logo"
                width={240}
                height={80}
                className="w-auto h-16 md:h-20 scale-[1.5] md:scale-[2] object-contain"
              />
            </Link>
          </div>

          {/* Right Icons (Desktop) */}
          <nav className="hidden md:flex items-center gap-2" aria-label="Main Navigation">
            <button aria-label="Search" className="p-2 rounded-full hover:bg-black/5 transition-colors">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <button aria-label="Shopping Bag" className="p-2 rounded-full hover:bg-black/5 transition-colors relative">
              <ShoppingBag className="w-5 h-5 text-gray-700" />
            </button>
            <button aria-label="Wishlist" className="p-2 rounded-full hover:bg-black/5 transition-colors relative">
              <Heart className="w-5 h-5 text-gray-700" />
            </button>
            <button aria-label="User Profile" className="p-2 rounded-full hover:bg-black/5 transition-colors relative">
              <User className="w-5 h-5 text-gray-700" />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Bottom Dock (Liquid Glass) */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm"
      >
        <nav className="flex items-center justify-between px-6 py-4 rounded-[2rem] bg-white/40 backdrop-blur-2xl border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]" aria-label="Mobile Navigation">
          <Link href="/" aria-label="Home" className="p-2 rounded-2xl hover:bg-white/50 active:bg-white/60 transition-all flex flex-col items-center">
            <Home className="w-6 h-6 text-gray-800" />
          </Link>
          <button 
            aria-label="Menu" 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 rounded-2xl hover:bg-white/50 active:bg-white/60 transition-all flex flex-col items-center"
          >
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
          <button aria-label="Shopping Bag" className="p-4 rounded-full bg-white/80 hover:bg-white border border-white/60 shadow-lg transition-all flex flex-col items-center -mt-10">
            <ShoppingBag className="w-7 h-7 text-[#f91054]" />
          </button>
          <button aria-label="Wishlist" className="p-2 rounded-2xl hover:bg-white/50 active:bg-white/60 transition-all flex flex-col items-center">
            <Heart className="w-6 h-6 text-gray-800" />
          </button>
          <button aria-label="User Profile" className="p-2 rounded-2xl hover:bg-white/50 active:bg-white/60 transition-all flex flex-col items-center">
            <User className="w-6 h-6 text-gray-800" />
          </button>
        </nav>
      </motion.div>

      {/* Slide-out Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white/90 backdrop-blur-2xl z-[110] shadow-2xl border-r border-white/50 flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-gray-200/50">
                <span className="font-black text-2xl tracking-tighter text-gray-900">MENU</span>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-black/5 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-gray-900" />
                </button>
              </div>
              
              <nav className="flex flex-col p-6 gap-6 text-xl font-semibold text-gray-800">
                <Link 
                  href="/shop" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="hover:text-[#f91054] hover:translate-x-2 transition-all"
                >
                  Shop
                </Link>
                <Link 
                  href="/jewelry" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="hover:text-[#f91054] hover:translate-x-2 transition-all"
                >
                  Jewelry
                </Link>
                <Link 
                  href="/clothing" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="hover:text-[#f91054] hover:translate-x-2 transition-all"
                >
                  Clothing
                </Link>
                <Link 
                  href="/contact" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="hover:text-[#f91054] hover:translate-x-2 transition-all"
                >
                  Contact Us
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
