'use client'
import Image from 'next/image'

import { NavMenu } from '../navigation/nav-menu'
import { useScreenSize } from '@/hooks/use-screen-size'
import Link from 'next/link'

export function Header() {
  const { screenWidth } = useScreenSize()

  return (
    <header className="flex items-center px-4 py-5 gap-2">
      <Link href='/'  className="flex items-center gap-2">
        <Image src={'logo.svg'} alt="Logo" width={screenWidth >= 768 ? 96 : 36} height={screenWidth >= 768 ? 96 : 36}/>
        <span className="block font-title text-3xl md:text-6xl font-bold border-box">ADAS</span>
      </Link>

      <div className="flex flex-grow justify-end">
        <NavMenu />
      </div>
    </header>
  )
}
