import { MapPin } from 'lucide-react'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

import maleIcon from '~/public/male-icon.svg'
import noImageIcon from '~/public/no-image-icon.jpg'

import { AnimalProps } from '../../animal'

interface AnimalCardProps {
  animal: AnimalProps
  setSelectedAnimal: Dispatch<SetStateAction<AnimalProps | null>>
}
export function AnimalCard({ animal, setSelectedAnimal }: AnimalCardProps) {
  return (
    <div
      className="h-full w-full rounded-3xl bg-white object-cover"
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
    </div>
  )
}
