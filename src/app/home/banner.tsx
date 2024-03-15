'use client'
import { ChevronsRight } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { useMediaQuery } from '@/hooks/use-media-query'
import bannerDog from '~/public/banner-dog.png'
import decoratorFood from '~/public/decorator-food.svg'
import decoratorPaw from '~/public/decorator-paw.svg'
import decoratorRope from '~/public/decorator-rope.svg'
import decoratorToys from '~/public/decorator-toys.svg'

export function Banner() {
  const xs = useMediaQuery(470 - 1)
  const sm = useMediaQuery(640 - 1)
  const md = useMediaQuery(768 - 1)
  const lg = useMediaQuery(1024 - 1)
  const xl = useMediaQuery(1280 - 1)

  return (
    <div className="xs:p-8 flex flex-col gap-8 p-6">
      <div className="relative h-[340px] sm:flex sm:h-[380px] sm:flex-col sm:gap-4 md:gap-8 xl:h-[410px]">
        <div className="xs:text-4xl font-title text-3xl font-bold sm:text-5xl lg:text-6xl">
          <span className="block">ASSOCIAÇÃO DOS</span>
          <span className="block">DIREITOS DOS</span>
          <span className="block">ANIMAIS DE</span>
          <span className="block">SAQUAREMA</span>
        </div>

        {!sm && (
          <div className="flex w-72 flex-col gap-4 md:w-96 md:gap-8">
            <p>
              Bem vindo ao portal ADAS, descubra nossa missão de promover a{' '}
              <strong>adoção</strong> e o <strong>bem-estar animal</strong>!
            </p>
            {!md && (
              <div className="xs:justify-start xs:gap-4 flex items-center justify-between lg:gap-8">
                <Button
                  className="font-title text-xl font-bold lg:text-2xl"
                  size={lg ? 'default' : 'lg'}
                >
                  SAIBA MAIS
                </Button>

                <div className="flex items-center gap-1 border-b border-black">
                  <span className="text-sm font-bold">Seja um voluntário</span>
                  <ChevronsRight />
                </div>
              </div>
            )}
          </div>
        )}

        <div className="absolute bottom-8 right-[38%] hidden flex-col md:flex lg:-bottom-4 lg:right-[28%] xl:bottom-2">
          <span className="font-title text-4xl">200+</span>
          <span>animais resgatados</span>
        </div>

        <Image
          src={bannerDog}
          alt="Um cachorro fofo"
          height={xs ? 280 : sm ? 310 : lg ? 340 : xl ? 380 : 420}
          className="xs:right-3 absolute -right-5 bottom-0 md:right-0"
        />

        <Image
          src={decoratorFood}
          alt=""
          height={xs ? 45 : lg ? 55 : xl ? 65 : 75}
          className="xs:left-8 absolute bottom-28 left-3 sm:bottom-6 sm:left-24 md:bottom-40 md:left-auto md:right-[50%]"
        />

        <Image
          src={decoratorPaw}
          alt=""
          height={xs ? 45 : md ? 55 : lg ? 45 : 55}
          className="absolute bottom-2 left-2 sm:bottom-48 sm:left-72 md:bottom-60 md:left-64 lg:bottom-52 lg:left-80"
        />

        <Image
          src={decoratorRope}
          alt=""
          height={xs ? 25 : lg ? 35 : 45}
          className="xs:-left-8 xs:-top-8 absolute -left-5 -top-5"
        />

        <Image
          src={decoratorToys}
          alt=""
          height={xs ? 50 : md ? 60 : lg ? 70 : 85}
          className="absolute -top-8 right-0 md:right-64 md:top-10 lg:right-80 lg:top-3"
        />
      </div>

      {sm && (
        <p className="">
          Bem vindo ao portal ADAS, descubra nossa missão de promover a{' '}
          <strong>adoção</strong> e o <strong>bem-estar animal</strong>!
        </p>
      )}

      {md && (
        <div className="flex items-center justify-between">
          <Button className="font-title text-xl font-bold">SAIBA MAIS</Button>

          <div className="flex items-center gap-1 border-b border-black">
            <span className="text-sm">Seja um voluntário</span>
            <ChevronsRight />
          </div>
        </div>
      )}
    </div>
  )
}
