import * as Lucide from 'lucide-react'
import { useAnimation } from 'motion/react'

import { cn } from '::/lib/utils'
import { Button } from './ui/button'
import { Play } from './animated-icons/play'

type StartButtonProps = {
  onClick: () => void
  isLoading: boolean
}

const StartButton = ({ isLoading, onClick }: StartButtonProps) => {
  const controls = useAnimation()

  return (
    <Button
      type="button"
      className={cn(
        'rounded-md bg-neutral-900 px-4 py-2 transition-colors',
        'dark:bg-neutral-50 dark:disabled:opacity-50',
        'disabled:cursor-not-allowed disabled:opacity-80',
        '[&:not(:disabled)]:hover:bg-neutral-700',
        'dark:[&:not(:disabled)]:hover:bg-neutral-200'
      )}
      onClick={onClick}
      disabled={isLoading}
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      {isLoading ? (
        <Lucide.Loader
          className={cn(
            'size-5 animate-spin text-white',
            'dark:text-neutral-900'
          )}
        />
      ) : (
        <Play controls={controls} />
      )}
    </Button>
  )
}

export { StartButton }
