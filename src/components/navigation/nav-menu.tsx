import { NavMenuLink } from './nav-menu-link'

export function NavMenu() {
  return (
    <div className="flex items-center gap-2">
      <NavMenuLink to="/sobre">Sobre</NavMenuLink>
      <NavMenuLink to="/catalogo">Animais para adoção</NavMenuLink>
      <NavMenuLink to="/loja">Loja</NavMenuLink>
      <NavMenuLink to="/quero-ajudar">Quero ajudar</NavMenuLink>
    </div>
  )
}
