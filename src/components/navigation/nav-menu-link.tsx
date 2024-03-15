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
    <Button asChild variant="ghost" className="flex w-full flex-col gap-1 p-0">
      <Link
        href={to}
        className={cn(
          'w-full rounded-3xl px-4 py-2 text-muted-foreground',
          className,
        )}
      >
        <div className="group text-muted-foreground transition duration-300">
          {children}
          <div
            data-current={isActive}
            className={cn(
              'h-0.5 max-w-0 rounded-sm bg-primary transition-all duration-500 data-[current=true]:max-w-[80%]',
            )}
          />
        </div>
      </Link>
    </Button>
  )
}
