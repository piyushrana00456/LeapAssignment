import type React from "react"
import Link from "next/link"
import type { FooterLinksProps } from "./Footer.types"

const FooterLinks: React.FC<FooterLinksProps> = ({ links }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-6">
      {links.map((section) => (
        <div key={section.title} className="space-y-4">
          <h3 className="text-lg font-semibold uppercase tracking-wider">{section.title}</h3>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-gray-300 hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>  
      ))}
    </div>
  )
}

export default FooterLinks
