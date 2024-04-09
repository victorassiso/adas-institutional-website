import { Instagram } from 'lucide-react'
import Image from 'next/image'

import logo from '@/../public/logo.svg'

import { Button } from '../ui/button'

export function Footer() {
  return (
    <div className="mt-20 flex flex-col gap-8 bg-zinc-800 px-10 pb-2 pt-5 text-muted-foreground">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-center gap-1.5">
          <Image src={logo} alt="Logo" width={30} height={30} />
          <span className="font-title text-2xl font-bold">ADAS</span>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-2 text-sm text-muted-foreground md:flex-row md:gap-8">
          <div className="flex items-center gap-1">
            <Button
              variant="link"
              className="h-4 p-0 text-muted-foreground"
              asChild
            >
              <a
                href="https://www.instagram.com/adas.saquarema/"
                target="_blank"
              >
                <Instagram size={16} />
                adas-saquarema
              </a>
            </Button>
          </div>
        </div>
      </div>

      <span className="text-center text-sm">
        © ADAS | Todos os direitos reservados.
      </span>
    </div>
  )
}
