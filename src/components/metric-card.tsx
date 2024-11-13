import * as Lucide from 'lucide-react'
import { Tooltip } from '::/components/tooltip'
import { cn } from '::/lib/utils'

type MetricCardProps = {
  label: string
  icon: React.ForwardRefExoticComponent<
    Omit<Lucide.LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >
  value?: number
  unit?: string
}

const MetricCard = ({ icon: Icon, ...metrics }: MetricCardProps) => {
  const isPacketLoss = metrics.label === 'Packet Loss'

  return (
    <Tooltip.Root>
      <Tooltip.Trigger>
        <div
          data-disabled={!metrics.value}
          className="group flex items-center gap-1"
        >
          <Icon
            className={cn(
              'size-4 group-data-[disabled=true]:text-neutral-600',
              {
                'text-red-500': isPacketLoss,
              }
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
            <div className="-space-x-2 my-2 flex">
              {Array(3)
                .fill(null)
                .map(dot => (
                  <Lucide.Dot
                    key={dot}
                    className={cn(
                      'size-4 text-neutral-900 dark:text-white',
                      'group-data-[disabled=true]:text-neutral-600'
                    )}
                  />
                ))}
            </div>
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
