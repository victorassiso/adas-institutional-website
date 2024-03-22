import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { DrawerContent } from '@/components/ui/drawer'
import noImageIcon from '~/public/no-image-icon.jpg'

import { AnimalProps } from '../animal'
import { Header } from './animal-details-components/header'
import { Properties } from './animal-details-components/properties'
import { Protector } from './animal-details-components/protector'

export function AnimalDetails({
  avatar,
  name,
  sex,
  size,
  weight,
  address,
  protectorName,
  contact,
}: AnimalProps) {
  return (
    <DrawerContent>
      <div className="flex flex-col gap-4  overflow-y-scroll px-4 pb-8 pt-4">
        <div>
          <div className="relative aspect-square w-full">
            <Image
              src={avatar || noImageIcon}
              alt="Foto de perfil do animal"
              className="rounded-3xl object-contain"
              fill
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 px-4">
          <Header
            name={name || ''}
            sex={sex || 'female'}
            address={address || ''}
          />
          <Properties
            size={size || 'big'}
            sex={sex || 'female'}
            weight={weight || 0}
          />
          <Protector
            image={noImageIcon}
            name={protectorName || ''}
            phone={contact || ''}
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
