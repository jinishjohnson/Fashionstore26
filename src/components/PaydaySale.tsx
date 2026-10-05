"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

export default function PaydaySale() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section ref={containerRef} className="bg-[#120404] py-12 px-6 md:py-20 md:px-20 relative overflow-hidden text-white flex flex-col md:flex-row min-h-[600px]">

      {/* Decorative stars */}
      <Star className="absolute top-10 left-10 text-yellow-600/50 w-8 h-8 rotate-12" fill="currentColor" />
      <Star className="absolute bottom-20 right-10 text-yellow-600/50 w-10 h-10 -rotate-12" fill="currentColor" />
      <Star className="absolute top-40 right-[40%] text-yellow-600/50 w-6 h-6 rotate-45" fill="currentColor" />

      <div className="flex-1 relative min-h-[400px]">
        <Image
          src="/asset/image 2.png"
          alt="Payday Sale Jewelry"
          fill
          className="object-contain object-bottom"

        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:hidden" />
      </div>

      <div className="flex-1 flex flex-col justify-center px-6 py-12 md:p-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-md"
        >
          <h2 className="text-5xl w-fit md:text-7xl lg:text-8xl font-black mb-6 leading-none tracking-tighter">
            <span className="bg-[#B78753] text-[#120404] px-4 pt-2 inline-block -rotate-2">PAYDAY</span>
            <br />
            <span className="text-white mt-2 inline-block whitespace-nowrap">SALE NOW</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-medium mb-6">
            Spend minimal $100 get 30% off voucher code for your next purchase
          </p>
          <div className="text-yellow-500 font-bold mb-2">
            1 June - 10 June 2021
          </div>
          <div className="text-sm text-gray-400 mb-8">
            *Terms & Conditions apply
          </div>
          <button className="px-10 py-4 bg-[#ff4b72] hover:bg-white hover:text-black text-white font-bold rounded-lg transition-colors">
            SHOP NOW
          </button>
        </motion.div>
      </div>
    </section>
  );
}
