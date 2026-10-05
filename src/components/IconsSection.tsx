"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const icons = [
  "/asset/brands/Rectangle 38.png",
  "/asset/brands/Rectangle 41.png",
  "/asset/brands/Rectangle 43.png",
  "/asset/brands/Rectangle 44.png",
  "/asset/brands/Rectangle 45.png",
  "/asset/brands/icons.png"
];

export default function IconsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  return (
    <section ref={containerRef} className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-between items-center gap-8"
        >
          {icons.map((icon, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="relative w-28 h-12 transition-all duration-300  cursor-pointer"
            >
              <Image
                src={icon}
                alt={`Brand Icon ${idx + 1}`}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
