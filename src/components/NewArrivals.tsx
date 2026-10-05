"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const products = [
  { id: 1, name: "Hoodies & Sweetshirt", image: "/asset/Rectangle 20.png" },
  { id: 2, name: "Coats & Parkas", image: "/asset/Rectangle 49.png" },
  { id: 3, name: "Tees & T-Shirt", image: "/asset/Rectangle 50.png" },

];

export default function NewArrivals() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section ref={containerRef} className="py-20 rounded-4xl shadow-lg relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 relative inline-block"
        >
          <h3 className="text-[2.5rem] font-black text-gray-900 uppercase tracking-tight relative z-10">
            New Arrivals
          </h3>
          {/* Pink Slash */}
          <Image src="/asset/brands/Vector.png" loading="lazy" alt="pinkleaf" width={128} height={30} className="absolute right-0 bottom-1  -rotate-2 z-0 transform translate-x-2" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex justify-between items-center pr-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h4>
                  <p className="text-gray-500 font-medium group-hover:text-gray-900 transition-colors">Explore Now!</p>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition-colors transform group-hover:translate-x-2 duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
