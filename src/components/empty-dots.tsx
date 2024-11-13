import { cn } from '::/lib/utils'
import { nanoid } from 'nanoid'
import * as Lucide from 'lucide-react'

const EmptyDots = () => {
  return (
    <div className="-space-x-2 my-2 flex">
      {Array(3)
        .fill(null)
        .map(() => (
          <Lucide.Dot
            key={`dot-${nanoid(8)}`}
            className={cn(
              'size-4 text-neutral-900 dark:text-white',
              'dark:group-data-[disabled=true]:text-neutral-600',
              'group-data-[disabled=true]:text-neutral-300'
            )}
          />
        ))}
    </div>
  )
}

export { EmptyDots }
