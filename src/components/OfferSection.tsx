"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

export default function OfferSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section ref={containerRef} className="bg-[#facc15] relative">
      {/* Decorative stars */}
      <Star className="absolute top-10 left-[20%] text-white/50 w-8 h-8 rotate-12" />
      <Star className="absolute bottom-20 left-[10%] text-white/50 w-10 h-10 -rotate-12" />
      <Star className="absolute top-20 right-[30%] text-white/50 w-6 h-6 rotate-45" />

      <div className="max-w-7xl mx-auto  relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 h-full">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-right"
        >
          <h2 className="text-3xl md:text-6xl font-normal text-white drop-shadow-lg tracking-tighter uppercase">
            Shop Your Size
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
          className="flex-1 w-full max-w-md relative z-20"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: 1, ease: "easeInOut" }}
            className="w-full h-[400px] md:h-[500px] relative"
          >
            <Image
              src="/asset/fashion-shopping-beauty-7c773a5cd062f6b74bed23aacb06a21c (1).png"
              alt="Shop Your Size"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-contain object-center md:object-top md:-translate-y-40 drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] scale-110 md:scale-175"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white drop-shadow-lg tracking-tighter uppercase">
            Upto 30% Off
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
