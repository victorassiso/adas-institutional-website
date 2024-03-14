import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <div className="text-muted-foreground flex flex-col gap-2 bg-zinc-800 px-10 pb-2 pt-5">
      <div className="flex gap-4">
        <div className="flex items-center gap-1.5">
          <Image src={'logo.svg'} alt="Logo" width={30} height={30} />
          <span className="font-title text-2xl font-bold">ADAS</span>
        </div>

        <div className="text-muted-foreground flex w-full justify-center gap-8 text-sm">
          <div className="flex items-center gap-1">
            <Twitter size={16} />
            <span>@ada-saquarema</span>
          </div>

          <div className="flex items-center gap-1">
            <Linkedin size={16} />
            <span>/ada-saquarema</span>
          </div>

          <div className="flex items-center gap-1">
            <Facebook size={16} />
            <span>ada-saquarema</span>
          </div>

          <div className="flex items-center gap-1">
            <Instagram size={16} />
            <span>@ada-saquarema</span>
          </div>
        </div>
      </div>
      <span className="text-center text-sm">
        © ADAS | Todos os direitos reservados.
      </span>
    </div>
  )
}
