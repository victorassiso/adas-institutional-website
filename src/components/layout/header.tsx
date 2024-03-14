import Image from 'next/image'

import { NavMenu } from '../navigation/nav-menu'

export function Header() {
  return (
    <header className="flex items-center justify-center px-4 py-5">
      <div className="flex items-center gap-2">
        <Image src={'logo.svg'} alt="Logo" width={80} height={80} />
        <span className="font-title text-6xl font-bold">ADA</span>
      </div>

      <div className="flex w-full justify-end">
        <NavMenu />
      </div>
    </header>
  )
}
