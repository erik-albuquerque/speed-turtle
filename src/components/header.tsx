import type { PropsWithChildren } from 'react'
import { ModeToggle } from './mode-toggle'
import { TurtleLogo } from './turtle-logo'

type HeaderProps = PropsWithChildren

const Header: React.FC<HeaderProps> = ({ children }: HeaderProps) => {
  return (
    <header className="flex w-full justify-between px-8 py-4">
      <TurtleLogo />

      {children}

      <ModeToggle />
    </header>
  )
}

export { Header }
