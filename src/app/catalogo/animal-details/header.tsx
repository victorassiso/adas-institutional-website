import { MapPin } from 'lucide-react'
import Image from 'next/image'

import femaleIcon from '~/public/female-icon.svg'
import maleIcon from '~/public/male-icon.svg'

interface HeaderProps {
  name: string
  sex: 'male' | 'female'
  location: string
}

export function Header({ name, sex, location }: HeaderProps) {
  return (
    <div>
      <div>
        <div className="flex items-center justify-between">
          <span className="text-2xl">{name}</span>
          <Image
            src={sex === 'male' ? maleIcon : femaleIcon}
            alt="Foto de perfil"
            height={40}
          />
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          <MapPin size={14} />
          <span className="text-xs">{location}</span>
        </div>
      </div>
    </div>
  )
}
