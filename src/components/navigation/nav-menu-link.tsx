'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

import { Button } from '../ui/button'

interface NavMenuLinkProps {
  to: string
  children: ReactNode
  className?: string
}
export function NavMenuLink({ to, children, className }: NavMenuLinkProps) {
  const pathName = usePathname()
  const isActive = pathName === to

  return (
    <Button variant="ghost" className="flex flex-col gap-1 p-0">
      <Link
        href={to}
        className={cn(
          'group p-4 text-muted-foreground transition duration-300',
          className,
        )}
      >
        <span className="text-muted-foreground">{children}</span>
        <div
          data-current={isActive}
          className={cn(
            'block h-0.5 max-w-0 rounded-sm bg-primary transition-all duration-500 data-[current=true]:max-w-[80%]',
          )}
        />
      </Link>
    </Button>
  )
}
