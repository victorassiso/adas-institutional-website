import { Dispatch, SetStateAction } from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { AnimalProps } from '../../animal'
import { AnimalCard } from './card'

interface AnimalCarouselProps {
  data: AnimalProps[]
  setSelectedAnimal: Dispatch<SetStateAction<AnimalProps | null>>
}
export function AnimalCarousel({
  data,
  setSelectedAnimal,
}: AnimalCarouselProps) {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="mx-10"
    >
      <CarouselContent>
        {data.map((animal, index) => {
          return (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <AnimalCard
                animal={animal}
                setSelectedAnimal={setSelectedAnimal}
              />
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
