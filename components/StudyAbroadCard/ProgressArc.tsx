"use client"

import { motion } from "framer-motion"

interface ProgressArcProps {
  progress: number
}

export default function ProgressArc({ progress }: ProgressArcProps) {
  // SVG path for a curved arc - adjusted to be more subtle
  const arcPath = "M10,60 Q100,0 190,60"


  return (
    <div className="relative w-full h-16 flex justify-center">
      <svg width="80%" height="100%" viewBox="0 0 200 60" preserveAspectRatio="none" className="absolute top-0">
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y1="0%">
            <stop offset="0%" stopColor="#e0e7ff"  stopOpacity="0.1"/>
            <stop offset="20%" stopColor="#4f46e5" stopOpacity="1" />
            <stop offset="80%" stopColor="#4f46e5" stopOpacity="1"/>
            <stop offset="100%" stopColor="#e0e7ff" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y1="0%">
            <stop offset="0%" stopColor="#f5f5f5" />
            <stop offset="20%" stopColor="#E5E7EB" />
            <stop offset="80%" stopColor="#E5E7EB" />
            <stop offset="100%" stopColor="#f5f5f5" />
          </linearGradient>
        </defs>

        {/* Background path with gradient */}
        <path d={arcPath} fill="none" stroke="url(#backgroundGradient)" strokeWidth="2" strokeLinecap="round" />

        {/* Animated progress path with gradient */}
        <motion.path
          d={arcPath}
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: progress / 100 }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </svg>
    </div>
  )
}
