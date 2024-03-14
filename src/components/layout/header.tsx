'use client'
import Image from 'next/image'

import { NavMenu } from '../navigation/nav-menu'
import { useScreenSize } from '@/hooks/use-screen-size'

export function Header() {
  const { screenWidth } = useScreenSize()

  return (
    <header className="flex items-center justify-center px-4 py-5">
      <div className="flex items-center gap-2">
        <Image src={'logo.svg'} alt="Logo" width={screenWidth >= 768 ? 80 : 36} height={screenWidth >= 768 ? 80 : 36}/>
        <span className="font-title text-3xl md:text-6xl font-bold">ADAS</span>
      </div>

      <div className="flex w-full justify-end">
        <NavMenu />
      </div>
    </header>
  )
}
