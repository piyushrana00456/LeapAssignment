"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin } from "lucide-react"
import PrimaryButton from "../Button/PrimaryButton"
import SecondaryButton from "../Button/SecondaryButton"
import ProgressArc from "./ProgressArc"

// Sample student data - in a real app, this would come from an API or props
const students = [
  {
    id: 1,
    name: "Shivani Sharma",
    university: "University of Edinburgh",
    term: "Fall ‘25",
    quote: `“My counsellor made applying to universities so simple”`,
    image: "/BannerImg1.png",
    from: "Mohali",
    to: "London",
    logo: "/college1.png",
  },
  {
    id: 2,
    name: "Pranav Kumar",
    university: "Cornell University,",
    term: "Spring ‘25",
    quote: `“Found scholarships I didn’t know I was eligible for”`,
    image: "/BannerImg2.png",
    from: "Delhi",
    to: "New York",
    logo: "/college2.png",
  },
  {
    id: 3,
    name: "Apurva Yadav",
    university: "McGill University",
    term: "Summer ‘25",
    quote: `“Got my Canada admit in just 15 days”`,
    image: "/BannerImg3.png",
    from: "Kolkata",
    to: "Montreal",
    logo: "/college3.png",
  },
]

export default function StudyAbroadCard() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Handle the progress animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsAnimating(true)
          clearInterval(interval)

          // Reset progress and move to next card after animation completes
          setTimeout(() => {
            setProgress(0)
            setCurrentIndex((prev) => (prev + 1) % students.length)
            setIsAnimating(false)
          }, 1000) // Wait for card animation to complete

          return 100
        }
        return prev + 0.8 // Increment progress
      })
    }, 50)

    return () => clearInterval(interval)
  }, [currentIndex])

  const currentStudent = students[currentIndex]

  return (
    <div className="flex flex-col space-y-6">
      <div className="text-center px-4">
        <h1 className="text-[2rem] font-bold text-[#1a1a2e] leading-tight">
          Your study abroad
          <br />
          journey - simplified
        </h1>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStudent.id}
          initial={isAnimating ? { y: 100, opacity: 0 } : false}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="rounded-3xl py-3 overflow-hidden"
        >
          <div className="relative">
            {/* Progress Arc with Location Pins */}
            <div className="absolute w-full top-0 z-10">
              <div className="relative">
                <ProgressArc progress={progress} />

                {/* Location Pins */}
                <div className="flex justify-between absolute w-full top-6">
                  <div className="flex flex-col items-center">
                    <MapPin className="text-gray-500 mb-1" size={24} />
                    <span className="text-gray-600 font-medium">{currentStudent.from}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <MapPin className="text-[#4f46e5] mb-1" size={24} />
                    <span className="text-gray-800 font-medium">{currentStudent.to}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Image - centered and with fade at bottom */}
            <div className="flex justify-center relative z-50">
              <div className="w-full flex align-middle justify-center relative">
                <img
                  src={currentStudent.image || "/placeholder.svg"}
                  alt={currentStudent.name}
                  className="w-[9rem] h-[12.5rem] object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 h-[6rem] bg-gradient-to-t from-white to-transparent"></div> 
              </div>
            </div>
          </div>
          
          <div className="relative bg-white pb-7 rounded-b-[24px]">
          <div className="text-center px-8 pb-4">
            <p className="text-[1.25rem] font-normal text-gray-800">{currentStudent.quote}</p>
          </div>

          {/* Student Details */}
            <div className="flex flex-col">
              <div className="text-center">
                <h3 className="font-bold text-[1.25rem] text-gray-900">{currentStudent.name}</h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center">
                  {currentStudent.logo && (
                    <img
                      src={currentStudent.logo || "/placeholder.svg"}
                      alt="University logo"
                      className="w-[16px] h-5 object-contain"
                    />
                  )}
                </div>
                <div className="flex items-center justify-center pl-1">
                  <p className="text-gray-600">
                    {currentStudent.university}, {currentStudent.term}
                  </p>
                </div>
              </div>
            </div>
          </div>
         
        </motion.div>
      </AnimatePresence>

      {/* Buttons */}
      <div className="flex flex-col gap-4 mt-4">
        <PrimaryButton>Talk to an expert</PrimaryButton>
        <SecondaryButton>Make a personalised plan</SecondaryButton>
      </div>
    </div>
  )
}
