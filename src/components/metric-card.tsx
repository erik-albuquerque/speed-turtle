import type { LucideProps } from 'lucide-react'
import { Tooltip } from '::/components/tooltip'
import { cn } from '::/lib/utils'
import { EmptyDots } from './empty-dots'

type MetricCardProps = {
  label: string
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >
  value?: number
  unit?: string
}

const MetricCard = ({ icon: Icon, ...metrics }: MetricCardProps) => {
  const actionType = metrics.label.toLowerCase().replace(' ', '')

  return (
    <Tooltip.Root>
      <Tooltip.Trigger>
        <div
          data-disabled={!metrics.value}
          data-action={actionType}
          className="group flex items-center gap-1"
        >
          <Icon
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
