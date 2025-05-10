"use client"

import type { ReactNode } from "react"

interface SecondaryButtonProps {
  children: ReactNode
  onClick?: () => void
}

export default function SecondaryButton({ children, onClick }: SecondaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-6 border border-[#C6CBD2] rounded-[12px] transition-colors duration-200 text-lg"
    >
      {children}
    </button>
  )
}
