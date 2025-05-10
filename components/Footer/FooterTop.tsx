import Link from "next/link"
import { Youtube, Twitter, Instagram, Linkedin } from "lucide-react"

const FooterTop = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-6">
      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-12">
        <Link href="/" className="inline-block">
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <img src="./Symbol.png" alt=""/>
            </div>
            <span className="text-xl font-bold tracking-tight">LEAPSCHOLAR</span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="https://youtube.com" aria-label="YouTube" className="bg-gray-200 p-2 rounded-full">
            <Youtube size={20} className="text-[#141439]" />
          </Link>
          <Link href="https://twitter.com" aria-label="Twitter" className="bg-gray-200 p-2 rounded-full">
            <Twitter size={20} className="text-[#141439]" />
          </Link>
          <Link href="https://instagram.com" aria-label="Instagram" className="bg-gray-200 p-2 rounded-full">
            <Instagram size={20} className="text-[#141439]" />
          </Link>
          <Link href="https://linkedin.com" aria-label="LinkedIn" className="bg-gray-200 p-2 rounded-full">
            <Linkedin size={20} className="text-[#141439]" />
          </Link>
        </div>
      </div>

      <div className="text-sm text-gray-300">© {new Date().getFullYear()} Leap Scholar. All rights reserved</div>
      <div className="my-2 border-t-2 border-gray-700 w-32" />
      <div className="w-[15rem] md:w-auto  md:mt-0">
        <Link
          href="/start-journey"
          className="block w-full md:w-auto text-center bg-[#4F46E5] hover:bg-[#4338CA] text-white font-medium py-3 px-8 rounded-md transition-colors"
        >
          Start your Journey
        </Link>
      </div>
    </div>
  )
}

export default FooterTop
