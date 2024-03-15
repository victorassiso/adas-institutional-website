import { Phone } from 'lucide-react'
import Image from 'next/image'

import { whatsAppRedirect } from '@/utils/whatsAppRedirect'

import { ProtectorProps } from '../animal'

export function Protector({ image, name, phone }: ProtectorProps) {
  return (
    <div className="flex items-center justify-between rounded-full">
      <div className="flex items-center gap-3">
        <div className="relative h-16 w-16">
          <Image
            src={image}
            alt="Foto de perfil do protetor"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col pt-3">
          <span className="text-xs text-muted-foreground">
            Protetor(a) responsável
          </span>
          <span>{name}</span>
        </div>
      </div>
      <button
        className="relative rounded-full border bg-colorful-june-bud-green p-2 hover:opacity-80"
        onClick={() => whatsAppRedirect(phone)}
      >
        <Phone color="white" className="" size={16} fill="white" />
      </button>
    </div>
  )
}
