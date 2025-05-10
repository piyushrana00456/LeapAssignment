"use client"

import { motion } from "framer-motion"
import type { CarouselCardProps } from "./Carousel.types"

export default function CarouselCard({ university, isActive }: CarouselCardProps) {
  return (
    <motion.div
      className={`relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 border-[5px] border-white`}
      initial={false}
      animate={{
        scale: isActive ? 1 : 0.85,
        y: isActive ? -16 : 0,
        opacity: isActive ? 1 : 0.7,
        zIndex: isActive ? 10 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Card Image */}
      <div
        className="relative h-[400px] w-[280px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${university.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        {/* Country Flag Overlay */}
        <div className="absolute top-4 left-4 flex items-center bg-black/30 text-white px-3 py-1 rounded-full">
          <span className="mr-2 text-sm font-medium">{university.country}</span>
        </div>

        {/* University Name */}
        <div className="absolute bottom-16 left-0 right-0 px-4">
          <h3 className="text-white text-xl font-bold">{university.name}</h3>
        </div>

        {/* Admit Count */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center">
          <span className="text-white text-sm font-medium">{university.admitCount}+ Leap admits</span>
          <div className="flex ml-2">
            {/* Avatar circles */}
            <div className="w-6 h-6 rounded-full bg-blue-400 border-2 border-white -mr-1"></div>
            <div className="w-6 h-6 rounded-full bg-purple-400 border-2 border-white -mr-1"></div>
            <div className="w-6 h-6 rounded-full bg-green-400 border-2 border-white"></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
