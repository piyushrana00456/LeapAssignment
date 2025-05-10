import Carousel from "./Carousel"
import { universities } from "./data"

export default function UniversityCarousel() {
  return (
    <Carousel
      universities={universities}
      title="From India, to anywhere in the world"
      description="Access prestigious institutions around the world with expert-backed application support."
    />
  )
}
