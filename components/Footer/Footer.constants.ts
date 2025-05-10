import type { FooterLinkSection, OfficeAddress } from "./Footer.types"

export const footerLinks: FooterLinkSection[] = [
  {
    title: "COUNTRIES",
    items: [
      { label: "USA", href: "/countries/usa" },
      { label: "UK", href: "/countries/uk" },
      { label: "Canada", href: "/countries/canada" },
      { label: "Australia", href: "/countries/australia" },
      { label: "Ireland", href: "/countries/ireland" },
    ],
  },
  {
    title: "OUR OFFERINGS",
    items: [
      { label: "Free IELTS", href: "/offerings/free-ielts" },
      { label: "Masterclass", href: "/offerings/masterclass" },
      { label: "IELTS Smart Tests", href: "/offerings/ielts-smart-tests" },
      { label: "Talk to a counsellor", href: "/offerings/talk-to-counsellor" },
      { label: "Twinning Programs", href: "/offerings/twinning-programs" },
      { label: "Scholarships", href: "/offerings/scholarships" },
    ],
  },
  {
    title: "COMPANY",
    items: [
      { label: "About Us", href: "/about-us" },
      { label: "Careers", href: "/careers" },
      { label: "Leap in the news!", href: "/news" },
    ],
  },
  {
    title: "OUR PRODUCTS",
    items: [
      { label: "LeapFinance", href: "/products/leap-finance" },
      { label: "LevelUp by Leap", href: "/products/level-up" },
      { label: "LeapAdvantage", href: "/products/leap-advantage" },
      { label: "IELTS by Leap", href: "/products/ielts-by-leap" },
    ],
  },
]

export const officeAddresses: OfficeAddress[] = [
  {
    title: "HQ- BANGALORE",
    line: "163/A, 9th Main Rd, Sector 6, HSR Layout, Bengaluru, Karnataka 560102",
  },
  {
    title: "SINGAPORE",
    line: "11 Collyer Quay #17-00 The Arcade, 049317, Singapore",
  },
]
