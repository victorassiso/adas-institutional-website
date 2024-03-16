'use client'
import Image from 'next/image'
import Link from 'next/link'

import { useMediaQuery } from '@/hooks/use-media-query'

import { NavMenu } from '../navigation/nav-menu'

export function Header() {
  const isBreakpoint = useMediaQuery(768 - 1)

  const imageSize = isBreakpoint ? 40 : 72

  return (
    <header className="flex items-center gap-2 px-4 py-5">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src={'logo.svg'}
          alt="Logo"
          width={imageSize}
          height={imageSize}
        />
        <span className="border-box block font-title text-3xl font-bold md:text-5xl">
          ADAS
        </span>
      </Link>

      <div className="flex flex-grow justify-end">
        <NavMenu />
      </div>
    </header>
  )
}
