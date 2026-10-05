"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const products = [
  { id: 1, name: "Trending on instagram", sub: "Explore Now", image: "/asset/image 2.png" },
  { id: 2, name: "All Under $40", sub: "Explore Now", image: "/asset/Rectangle 49.png" },
];

export default function LatestCollection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section ref={containerRef} className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 relative inline-block"
        >
          <h3 className="text-[2.5rem] font-black text-gray-900 tracking-tight leading-none relative z-10">
            LATEST
            <br />
            <span className="font-normal">
              Collection
            </span>
          </h3>
          {/* Pink Slash */}
          <Image src="/asset/brands/Vector.png" loading="lazy" alt="pinkleaf" width={128} height={30} className="absolute right-0 bottom-0 -rotate-2 z-0 transform translate-x-4 translate-y-2" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#1f1618] mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex justify-between items-center pr-4">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-1">{product.name}</h4>
                  <p className="text-gray-500 font-medium group-hover:text-gray-900 transition-colors">{product.sub}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
