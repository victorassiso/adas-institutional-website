'use client'

import { collection, getDocs } from 'firebase/firestore'
import { MapPin } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { db } from '@/../firebase'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Drawer, DrawerTrigger } from '@/components/ui/drawer'
// import gato1 from '~/public/gato1.png'
import maleIcon from '~/public/male-icon.svg'
import noImageIcon from '~/public/no-image-icon.jpg'

// import Pessoa1 from '~/public/pessoa1.jpg'
import { AnimalProps } from './animal'
import { AnimalDetails } from './components/animal-details'

// const animals: AnimalProps[] = [
//   {
//     name: 'Lucky',
//     location: 'Saquarema, RJ',
//     sex: 'male',
//     size: 'small',
//     weight: 2,
//     images: [gato1],
//     protector: {
//       name: 'Letícia Martins',
//       phone: '+5521995327044',
//       image: Pessoa1,
//     },
//   },
//   {
//     name: 'Dengo',
//     location: 'Saquarema, RJ',
//     sex: 'male',
//     size: 'big',
//     weight: 2,
//     images: [gato1],
//     protector: {
//       name: 'Letícia Martins',
//       phone: '+5521995327044',
//       image: Pessoa1,
//     },
//   },
//   {
//     name: 'Dengo',
//     location: 'Saquarema, RJ',
//     sex: 'male',
//     size: 'big',
//     weight: 2,
//     images: [gato1],
//     protector: {
//       name: 'Letícia Martins',
//       phone: '+5521995327044',
//       image: Pessoa1,
//     },
//   },
//   {
//     name: 'Dengo',
//     location: 'Saquarema, RJ',
//     sex: 'male',
//     size: 'big',
//     weight: 2,
//     images: [gato1],
//     protector: {
//       name: 'Letícia Martins',
//       phone: '+5521995327044',
//       image: Pessoa1,
//     },
//   },
//   {
//     name: 'Dengo',
//     location: 'Saquarema, RJ',
//     sex: 'male',
//     size: 'big',
//     weight: 2,
//     images: [gato1],
//     protector: {
//       name: 'Letícia Martins',
//       phone: '+5521995327044',
//       image: Pessoa1,
//     },
//   },
// ]

export default function Catalogo() {
  const [selectedAnimal, setSelectedAnimal] = useState<AnimalProps | null>(null)
  const [data, setData] = useState<AnimalProps[]>([])

  useEffect(() => {
    const fetchData = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const list: AnimalProps[] = []

      try {
        const querySnapshot = await getDocs(collection(db, 'animals'))
        querySnapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            ...doc.data(),
          })
        })
        setData(list)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [])

  return (
    <Drawer>
      <div className="scrol flex flex-col gap-6 p-10">
        <div className="flex flex-col gap-2">
          <span className="font-title text-xl font-bold">Categorias</span>
          <div className="flex gap-4">
            <Button size="sm" className="bg-colorful-bright-yellow">
              Gatos
            </Button>
            <Button size="sm" className="bg-colorful-celtic-blue">
              Cachorros
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-title text-xl font-bold">Adote um animal</span>
          <Carousel className="px-4 pb-2">
            <CarouselContent className="-ml-8">
              {data.map((animal, i) => {
                return (
                  <div key={i}>
                    <CarouselItem className="pl-8">
                      <DrawerTrigger
                        className="h-full w-52 rounded-3xl bg-white object-cover"
                        onClick={() => setSelectedAnimal(animal)}
                      >
                        <div className="rounded-3xl bg-colorful-june-bud-green">
                          <div className="relative aspect-square w-full">
                            <Image
                              src={animal.avatar || noImageIcon}
                              alt="Foto de perfil do animal"
                              fill
                              className="rounded-3xl object-contain"
                            />
                          </div>
                        </div>

                        <div className="p-4">
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-black text-primary">
                              {animal.name}
                            </span>
                            <Image
                              src={animal.sex === 'male' ? maleIcon : maleIcon}
                              alt="Foto de perfil"
                              height={20}
                              width={20}
                            />
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <MapPin size={14} />
                            <span className="text-xs">{animal.address}</span>
                          </div>
                        </div>
                      </DrawerTrigger>
                    </CarouselItem>
                  </div>
                )
              })}
            </CarouselContent>
            <CarouselPrevious className="ml-14" />
            <CarouselNext className="mr-14" />
          </Carousel>

          {/* </div> */}
        </div>
      </div>
      {selectedAnimal && <AnimalDetails {...selectedAnimal} />}
    </Drawer>
  )
}
