import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <div className="flex flex-col gap-8 bg-zinc-800 px-10 pb-2 pt-5 text-muted-foreground">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-center gap-1.5">
          <Image src={'logo.svg'} alt="Logo" width={30} height={30} />
          <span className="font-title text-2xl font-bold">ADAS</span>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-2 text-sm text-muted-foreground md:flex-row md:gap-8">
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
