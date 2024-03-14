'use client'
import Image from 'next/image'

import { NavMenu } from '../navigation/nav-menu'
import Link from 'next/link'
import { useMediaQuery } from '@/hooks/use-media-query'

export function Header() {
  const isBreakpoint = useMediaQuery(768)

  const imageSize = isBreakpoint ? 36 : 72

  return (
    <header className="flex items-center px-4 py-5 gap-2">
      <Link href='/'  className="flex items-center gap-2">
        <Image src={'logo.svg'} alt="Logo" width={imageSize} height={imageSize}/>
        <span className="block font-title text-3xl md:text-5xl font-bold border-box">ADAS</span>
      </Link>

      <div className="flex flex-grow justify-end">
        <NavMenu />
      </div>
    </header>
  )
}
