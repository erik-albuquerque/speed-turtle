import * as Lucide from 'lucide-react'

import { cn } from '::/lib/utils'
import { Button } from './ui/button'

type StartButtonProps = {
  onClick: () => void
  isLoading: boolean
}

const StartButton = ({ isLoading, onClick }: StartButtonProps) => {
  return (
    <Button
      type="button"
      className={cn(
        'rounded-md bg-neutral-900 px-4 py-2 transition-colors',
        'dark:bg-neutral-50 dark:disabled:opacity-50',
        'disabled:cursor-not-allowed disabled:opacity-80',
        '[&:not(:disabled)]:hover:bg-neutral-600',
        'dark:[&:not(:disabled)]:hover:bg-neutral-200'
      )}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <Lucide.Loader
          className={cn(
            'size-5 animate-spin text-white',
            'dark:text-neutral-900'
          )}
        />
      ) : (
        <Lucide.PlayIcon
          className={cn('size-5 text-white dark:text-neutral-900')}
        />
      )}
    </Button>
  )
}

export { StartButton }
