"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  { id: 1, name: "CLOTHING", image: "/asset/CRY.png" },
  { id: 2, name: "JEWELARY", image: "/asset/image 3.png" },
];

export default function Categories() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section ref={containerRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 relative inline-block"
        >
          <h3 className="text-[2.5rem] font-black text-gray-900 uppercase tracking-tight relative z-10 leading-none">
            Shop By
            <br />
            <span className="font-normal rounded-full px-2 py-1">
              CATAGORY
            </span>
          </h3>
          {/* Pink Slash */}
          <Image src="/asset/brands/Vector.png" loading="lazy" alt="pinkleaf" width={128} height={30} className="absolute right-0 bottom-0 -rotate-2 z-0 transform translate-x-4" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-20 md:gap-32">
          {categories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="flex flex-col items-center gap-6 cursor-pointer group"
            >
              <div
                className={`w-52 h-52 md:w-64 md:h-64 rounded-full p-2 transition-all duration-300 border-4 border-transparent hover:border-[#ff4b72]`}
              >
                <div className="w-full h-full relative rounded-full overflow-hidden bg-[#1f2329]">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                </div>
              </div>
              <span className={`text-xl tracking-wider text-black transition-colors font-bold group-hover:text-[#f91054]`}>
                {category.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
