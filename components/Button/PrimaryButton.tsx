"use client"

import type { ReactNode } from "react"

interface PrimaryButtonProps {
  children: ReactNode
  onClick?: () => void
}

export default function PrimaryButton({ children, onClick }: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full hover:bg-[#4338ca] text-white font-semibold py-4 px-6 rounded-[12px] transition-colors duration-200 text-lg"
      style={{
        "background": "linear-gradient(80.67deg, #3C3ACC 14.27%, #4A47FF 85.65%)"
      }}
    >
      {children}
    </button>
  )
}
