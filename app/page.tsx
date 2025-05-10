import StudyAbroadCard from "@/components/StudyAbroadCard/StudyAbroadCard"
import Supports from "@/components/Supports/Supports"
import UniversityCarousel from "@/components/UniversityCarousel"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-md px-4 pt-8 pb-7 bg-[#F0ECFF] rounded-b-[24px]">
        <StudyAbroadCard />
      </div>
      <div className="w-full max-w-md px-4 pt-8 pb-7">
        <Supports />
      </div>
      <div className="w-full max-w-md px-4 pt-8 pb-7">
        <UniversityCarousel/>
      </div>
    </main>
  )
}
