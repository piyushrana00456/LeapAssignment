import FooterTop from "./FooterTop"
import FooterLinks from "./FooterLinks"
import FooterAddress from "./FooterAddress"
import { footerLinks, officeAddresses } from "./Footer.constants"

const Footer = () => {
  return (
    <footer className="w-full bg-[#141439] text-white py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FooterTop />
        <FooterLinks links={footerLinks} />
        <div className="my-6 border-t-2 border-gray-700 border-dashed" />
        <FooterAddress addresses={officeAddresses} />
      </div>
    </footer>
  )
}

export default Footer
