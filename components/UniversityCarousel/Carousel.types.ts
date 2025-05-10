export interface University {
    id: number
    name: string
    country: string
    countryCode: string
    image: string
    admitCount: number
  }
  
  export interface CarouselProps {
    universities: University[]
    title: string
    description: string
  }
  
  export interface CarouselCardProps {
    university: University
    isActive: boolean
  }
  