"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Newsletter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  return (
    <section ref={containerRef} className="bg-[#ff1a5f] py-32 relative overflow-hidden flex justify-center items-center">
      {/* Decorative Circles */}
      <div className="absolute top-10 left-20 w-8 h-8 rounded-full border-4 border-white/20" />
      <div className="absolute bottom-10 left-[10%] w-24 h-24 rounded-full border-[8px] border-white/10" />
      <div className="absolute top-[20%] right-[15%] w-12 h-12 rounded-full border-4 border-white/20" />
      <div className="absolute bottom-20 right-[5%] w-16 h-16 rounded-full border-[6px] border-white/10" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-wide leading-tight mb-4">
            JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
          </h2>
          <p className="text-white/90 text-lg mb-10">
            Type your email down below and be young wild generation
          </p>

          <form className="max-w-md mx-auto relative flex items-center bg-white rounded-lg p-2 overflow-hidden shadow-2xl">
            <input 
              type="email" 
              placeholder="Add your email here" 
              className="w-full h-12 px-4 outline-none text-gray-900 bg-transparent"
              required
            />
            <button 
              type="submit"
              className="absolute right-2 px-8 py-3 bg-black text-white rounded-md font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors"
            >
              SEND
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
