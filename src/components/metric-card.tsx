import { useCallback } from 'react'
import { type AnimationControls, useAnimation } from 'framer-motion'
import { cn } from '::/lib/utils'
import { Tooltip } from '::/components/tooltip'
import { EmptyDots } from './empty-dots'

type MetricCardProps = {
  label: string
  icon: React.FC<
    { controls: AnimationControls } & React.ComponentPropsWithoutRef<'div'>
  >
  value?: number
  unit?: string
}

const MetricCard = ({ icon: Icon, ...metrics }: MetricCardProps) => {
  const controls = useAnimation()
  const isDisabled = !metrics.value

  const actionType = metrics.label.toLowerCase().replace(' ', '')

  const handleAnimation = useCallback(
    (animationName: 'animate' | 'normal') => {
      if (!isDisabled) {
        controls.start(animationName)
      }
    },
    [isDisabled, controls]
  )

  return (
    <Tooltip.Root>
      <Tooltip.Trigger>
        <div
          data-disabled={isDisabled}
          data-action={actionType}
          className="group flex items-center gap-1"
          onMouseEnter={() => handleAnimation('animate')}
          onMouseLeave={() => handleAnimation('normal')}
        >
          <Icon
            controls={controls}
            className={cn(
              'size-4 group-data-[disabled=true]:text-neutral-300',
              'dark:group-data-[disabled=true]:text-neutral-600',
              'group-data-[disabled=false]:group-data-[action=packetloss]:text-red-500'
            )}
          />

          {metrics.value ? (
            <strong
              className={cn(
                'text-neutral-900 text-sm dark:text-white',
                'group-data-[disabled=true]:text-neutral-600'
              )}
            >
              {metrics.value ?? 0}
            </strong>
          ) : (
            <EmptyDots />
          )}
        </div>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <span>
          {metrics.label} ({metrics.unit || 'ms'})
        </span>
      </Tooltip.Content>
    </Tooltip.Root>
  )
}

export { MetricCard }
