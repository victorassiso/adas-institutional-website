import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import decorator1 from '~/public/decorator-1.svg'
import decorator2 from '~/public/decorator-2.svg'
import streetDog from '~/public/street-dog.png'

export function Adopt() {
  return (
    <div className="relative mt-20 flex flex-col items-center justify-center gap-6 p-4 md:mt-10">
      <Image src={streetDog} alt="" width={300} />

      <span className="w-96 text-center font-title text-6xl font-bold text-colorful-milk-chocolate">
        NÃO COMPRE, ADOTE!
      </span>

      <p className="w-96 text-center">
        Dê a um animal abandonado a chance de amar e ser amado. Adote hoje!
      </p>

      <Button
        asChild
        variant="outline"
        size="lg"
        className="font-title text-xl"
      >
        <Link href={'/catalogo'}>VER CATÁLOGO</Link>
      </Button>

      <Image
        src={decorator1}
        alt=""
        width={300}
        className="absolute -left-[calc(-10%+12rem)] -top-[calc(70%-24rem)] -z-50 rotate-45 md:-top-[calc(70%-28rem)] lg:-left-[calc(-15%+12rem)] lg:-top-[calc(70%-31rem)]"
      />

      <Image
        src={decorator2}
        alt=""
        width={340}
        className="absolute -right-[calc(-10%+12rem)] -top-[calc(70%-24rem)] -z-50 md:-top-[calc(70%-26rem)] lg:-right-[calc(-15%+12rem)] lg:-top-[calc(70%-30rem)]"
      />

      <Image
        src={decorator2}
        alt=""
        width={340}
        className="absolute -bottom-[calc(70%-24rem)] -left-[calc(-10%+12rem)] -z-50 rotate-45 lg:-bottom-[calc(70%-28rem)] lg:-left-[calc(-15%+12rem)]"
      />

      <Image
        src={decorator1}
        alt=""
        width={300}
        className="absolute -bottom-[calc(70%-24rem)] -right-[calc(-10%+12rem)] -z-50 rotate-45 lg:-bottom-[calc(70%-28rem)] lg:-right-[calc(-15%+12rem)]"
      />
    </div>
  )
}
