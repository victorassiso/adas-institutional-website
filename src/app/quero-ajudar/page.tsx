import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function QueroAjudar() {
  return (
    <div className="flex flex-col items-center justify-center gap-16 px-6">
      <h2 className="font-title text-3xl font-semibold">
        Nos ajude a salvar vidas!
      </h2>
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col gap-4">
          <h3 className="font-title text-2xl">Seja um voluntário</h3>
          <p className="max-w-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            turpis quam, facilisis congue posuere vitae, varius non metus.
            Vestibulum id condimentum ex.
          </p>
          <div className="hidden md:flex">
            <Button className="w-full">Quero ser um voluntário</Button>
          </div>
        </div>
        <Image
          src={'/volunteer.jpg'}
          width={400}
          height={200}
          alt="A Woman holding a puppy"
        />
        <div className="w-full md:hidden">
          <Button className="w-full">Quero ser um voluntário</Button>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <Image
          src={'/dog-food-bag.jpg'}
          width={400}
          height={200}
          alt="A Woman holding a puppy"
          className="hidden md:flex"
        />
        <div className="flex flex-col gap-4">
          <h3 className="font-title text-2xl">Doe</h3>
          <p className="max-w-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            turpis quam, facilisis congue posuere vitae, varius non metus.
            Vestibulum id condimentum ex.
          </p>
          <div className="hidden md:flex">
            <Button className="w-full" asChild>
              <a
                href="https://donate.stripe.com/test_4gw00NbR92rc3HabII"
                target="_blank"
              >
                Quero doar
              </a>
            </Button>
          </div>
        </div>
        <Image
          src={'/dog-food-bag.jpg'}
          width={400}
          height={200}
          alt="A Woman holding a puppy"
          className="md:hidden"
        />
        <div className="w-full md:hidden">
          <Button className="w-full" asChild>
            <a
              href="https://donate.stripe.com/test_4gw00NbR92rc3HabII"
              target="_blank"
            >
              Quero doar
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
