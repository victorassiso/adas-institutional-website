'use client'
import { NavMenuLink } from './nav-menu-link'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useMediaQuery } from '@/hooks/use-media-query'
import { Menu } from 'lucide-react'

export function NavMenu() {
  const isBreakpoint = useMediaQuery(768)
  console.log(isBreakpoint)

  return (
    <>
      {
        isBreakpoint ? (
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent>
            <div className="flex items-center flex-col gap-5 justify-start">
          <NavMenuLink to="/sobre">Sobre</NavMenuLink>
          <NavMenuLink to="/catalogo">Animais para adoção</NavMenuLink>
          <NavMenuLink to="/loja">Loja</NavMenuLink>
          <NavMenuLink to="/quero-ajudar">Quero ajudar</NavMenuLink>
        </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-2">
          <NavMenuLink to="/sobre">Sobre</NavMenuLink>
          <NavMenuLink to="/catalogo">Animais para adoção</NavMenuLink>
          <NavMenuLink to="/loja">Loja</NavMenuLink>
          <NavMenuLink to="/quero-ajudar">Quero ajudar</NavMenuLink>
        </div>
          
        )
      }
    </>
  )
}
