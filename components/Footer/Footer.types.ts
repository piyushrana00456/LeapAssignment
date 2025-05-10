export interface FooterLinkItem {
    label: string
    href: string
  }
  
  export interface FooterLinkSection {
    title: string
    items: FooterLinkItem[]
  }
  
  export interface FooterLinksProps {
    links: FooterLinkSection[]
  }
  
  export interface OfficeAddress {
    title: string
    line: string
  }
  
  export interface FooterAddressProps {
    addresses: OfficeAddress[]
  }
  