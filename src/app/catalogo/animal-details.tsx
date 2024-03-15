import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { DrawerContent } from '@/components/ui/drawer'

import { AnimalProps } from './animal'
import { Header } from './animal-details/header'
import { Properties } from './animal-details/properties'
import { Protector } from './animal-details/protector'

export function AnimalDetails({
  images,
  location,
  name,
  protector,
  sex,
  size,
  weight,
}: AnimalProps) {
  return (
    <DrawerContent>
      <div className="flex flex-col gap-4  overflow-y-scroll px-4 pb-8 pt-4">
        <div className="">
          <Image
            src={images[0]}
            alt="Foto de perfil do animal"
            className="rounded-3xl"
          />
        </div>
        <div className="flex flex-col gap-4 px-4">
          <Header name={name} sex={sex} location={location} />
          <Properties size={size} sex={sex} weight={weight} />
          <Protector
            image={protector.image}
            name={protector.name}
            phone={protector.phone}
          />
          <div className="relative pb-24 text-justify">
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              rhoncus leo dolor, quis iaculis ipsum bibendum sit amet.
              Vestibulum sodales fringilla iaculis. Ut tincidunt tristique
              luctus. Morbi ornare efficitur lorem in venenatis. Morbi congue
              vitae nisl interdum vestibulum. Fusce ornare tellus id sapien
              tincidunt, sit amet iaculis ex facilisis. Maecenas egestas vel dui
              dapibus laoreet. Suspendisse condimentum magna et sapien sodales
              scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed rhoncus leo dolor, quis iaculis ipsum bibendum sit amet.
              Vestibulum sodales fringilla iaculis. Ut tincidunt tristique
              luctus. Morbi ornare efficitur lorem in venenatis. Morbi congue
              vitae nisl interdum vestibulum. Fusce ornare tellus id sapien
              tincidunt, sit amet iaculis ex facilisis. Maecenas egestas vel dui
              dapibus laoreet. Suspendisse condimentum magna et sapien sodales
              scelerisque.
            </p>
            <div className="absolute bottom-0 left-0 right-0 m-auto my-8 flex justify-center">
              <Button size="lg" className="font-title text-xl">
                ADOTE ME
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DrawerContent>
  )
}
