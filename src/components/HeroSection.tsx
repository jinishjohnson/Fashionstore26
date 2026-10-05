"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    id: 1,
    title1: "LET'S",
    title2: "EXPLORE",
    title3: "UNIQUE",
    title4: "CLOTHES.",
    bgText: "DIVINE PINK",
    image: "/asset/incendiary-fantastically-beautiful-girl-coat-eco-fur-moves-fun-picture-lovely-lady-pink-clothes-removebg-preview 1.png",
    bgColor: "bg-[#e8e8e8]",
  },
  {
    id: 2,
    title1: "NEW",
    title2: "SEASON",
    title3: "FRESH",
    title4: "LOOKS.",
    bgText: "VIBRANT",
    image: "/asset/fashion-shopping-beauty-7c773a5cd062f6b74bed23aacb06a21c (1).png",
    bgColor: "bg-[#e0d6ce]",
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const textRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (textRef.current && containerRef.current) {
      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: -150,
        opacity: 0.5,
      });
    }
  }, []);

  return (
    <div className="w-full mt-20 flex justify-center py-4 sm:py-8">
      <section ref={containerRef} className={`relative h-[85vh] min-h-[600px] max-h-[900px] w-[98%] max-w-[1600px] overflow-hidden ${slides[currentSlide].bgColor} flex flex-col items-center shadow-xl justify-center transition-colors duration-600 rounded-[1.5rem]`}>

        {/* Background Text */}
        <h1
          ref={textRef}
          className="absolute top-[45%] left-[2vw] w-full text-center text-[10vw] sm:text-[10vw] lg:text-[10vw] font-black text-black tracking-wide pointer-events-none select-none z-10 whitespace-nowrap"
        >
          {slides[currentSlide].bgText}
        </h1>

        <div className="relative w-full h-full z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Centered Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, type: "spring", stiffness: 60 }}
                className="absolute bottom-0 md:bottom-[10%] left-0 w-full h-[65%] md:h-[80%] max-h-[750px] pointer-events-none z-20"
              >
                <Image
                  src={slides[currentSlide].image}
                  alt="Hero"
                  fill
                  priority
                  className="object-contain object-bottom"
                />
              </motion.div>

              {/* Left Content (Text & Button) */}
              <div className="absolute inset-0 flex flex-col justify-start items-start z-30 pointer-events-none pl-6 sm:pl-16 lg:pl-24 pt-12 md:pt-48 lg:pt-20">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="pointer-events-auto"
                >
                  <h2 className="text-5xl md:text-[2.5rem] lg:text-[2rem] xl:text-[2.7rem] font-black leading-[0.95] tracking-tight">
                    <span className="block text-[#f91054]">{slides[currentSlide].title1}</span>
                    <span className="block text-[#f91054]">{slides[currentSlide].title2}</span>
                    <span className="block text-[#ff6b00]">{slides[currentSlide].title3}</span>
                    <span className="block text-[#f91054]">{slides[currentSlide].title4}</span>
                  </h2>

                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-8 px-8 py-3 bg-[#ff6b00] text-white rounded-2xl font-bold text-xl hover:scale-105 transition-transform"
                  >
                    Shop now
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
