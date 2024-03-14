import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <div className="text-muted-foreground flex flex-col gap-8 bg-zinc-800 px-10 pb-2 pt-5">

      <div className="flex gap-8 flex-col">
        <div className="flex items-center gap-1.5 justify-center">
          <Image src={'logo.svg'} alt="Logo" width={30} height={30} />
          <span className="font-title text-2xl font-bold">ADAS</span>
        </div>

        <div className="text-muted-foreground flex gap-2 flex-col w-full md:flex-row md:gap-8 text-sm items-center justify-center">
          <div className="flex items-center gap-1 ">
            <Twitter size={16} />
            <span>ada-saquarema</span>
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
            <span>ada-saquarema</span>
          </div>
        </div>
      </div>

      <span className="text-center text-sm">
        © ADAS | Todos os direitos reservados.
      </span>
    </div>
  )
}
