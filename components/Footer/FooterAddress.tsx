import type React from "react"
import type { FooterAddressProps } from "./Footer.types"

const FooterAddress: React.FC<FooterAddressProps> = ({ addresses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
      {addresses.map((address) => (
        <div key={address.title} className="space-y-2">
          <h3 className="text-lg font-semibold uppercase tracking-wider">{address.title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{address.line}</p>
        </div>
      ))} 
    </div>
  )
}

export default FooterAddress
