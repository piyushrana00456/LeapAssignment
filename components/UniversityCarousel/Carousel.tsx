"use client"

import { useState } from "react"
import { MoveLeft, MoveRight } from "lucide-react"
import CarouselCard from "./CarouselCard"
import type { CarouselProps } from "./Carousel.types.ts"

export default function Carousel({ universities, title, description }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? universities.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % universities.length)
  }

  // Calculate indices for visible cards
  const getVisibleIndices = () => {
    const totalCards = universities.length

    // Previous card (to the left)
    const prevIndex = activeIndex === 0 ? totalCards - 1 : activeIndex - 1

    // Next card (to the right)
    const nextIndex = (activeIndex + 1) % totalCards

    return [prevIndex, activeIndex, nextIndex]
  }

  const visibleIndices = getVisibleIndices()

  return (
    <div className="w-full bg-blue-50 py-12 px-4 rounded-3xl">
      {/* Heading and Description */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Cards Container */}
        <div className="flex justify-center items-center h-[450px] overflow-hidden">
          {/* We only render the 3 visible cards for performance */}
          {visibleIndices.map((index, i) => {
            const position = i - 1

            return (
              <div
                key={universities[index].id}
                className={`absolute transition-all duration-300 ease-in-out ${
                  position === -1
                    ? "left-0 transform -translate-x-1/2"
                    : position === 0
                      ? "left-1/2 transform -translate-x-1/2"
                      : "right-0 transform translate-x-1/2"
                }`}
                style={{ zIndex: position === 0 ? 10 : 0 }}
              >
                <CarouselCard university={universities[index]} isActive={position === 0} />
              </div>
            )
          })}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Previous university"
          >
            <MoveLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Next university"
          >
            <MoveRight size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}
