import Explore from "@/components/ExploreCard"
import StudyAbroadCard from "@/components/StudyAbroadCard/StudyAbroadCard"
import Supports from "@/components/Supports/Supports"
import UniversityCarousel from "@/components/UniversityCarousel"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden flex min-h-screen flex-col items-center justify-center">
      <Header/>
      <div className="w-full max-w-md px-4 pt-[90px] pb-7 bg-[#F0ECFF] rounded-b-[24px]">
        <StudyAbroadCard />
      </div>
      <div className="w-full max-w-md px-4 pt-8 pb-7">
        <Supports />
      </div>
      <div className="w-full max-w-md px-4 pt-8 pb-7">
        <UniversityCarousel/>
      </div>
      <div className="w-full max-w-md px-4 pt-8 pb-7">
        <Explore/>
      </div>
      <Footer/>
    </main>
  )
}
