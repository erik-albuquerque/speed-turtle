import type { PropsWithChildren } from 'react'
import * as Lucide from 'lucide-react'
import { ModeToggle } from './mode-toggle'

type HeaderProps = PropsWithChildren

const Header: React.FC<HeaderProps> = ({ children }: HeaderProps) => {
  return (
    <header className="flex w-full justify-between px-8 py-4">
      <Lucide.Turtle className="ml-3 size-8 text-neutral-950 dark:text-white" />

      {children}

      <ModeToggle />
    </header>
  )
}

export { Header }
