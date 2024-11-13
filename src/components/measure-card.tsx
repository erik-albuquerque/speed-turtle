import type { LucideProps } from 'lucide-react'
import { cn } from '::/lib/utils'
import { EmptyDots } from './empty-dots'

type MeasureCardProps = {
  label: string
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >
  value?: number
  unit?: 'Mbps' | 'Kbps'
}

const MeasureCard = ({
  icon: Icon,
  unit = 'Mbps',
  ...measure
}: MeasureCardProps) => (
  <div
    data-disabled={!measure.value}
    data-action={measure.label.toLowerCase()}
    className="group flex flex-col"
  >
    <strong className="text-neutral-900 text-sm dark:text-white">
      {measure.label}
    </strong>

    {measure.value ? (
      <span className="text-4xl text-neutral-900 dark:text-white">
        {measure.value}
      </span>
    ) : (
      <EmptyDots />
    )}

    <div className="flex items-center gap-1 self-end">
      <Icon
        className={cn(
          'size-4 group-data-[disabled=true]:text-neutral-300',
          'dark:group-data-[disabled=true]:text-neutral-600',
          'group-data-[disabled=false]:group-data-[action=download]:text-green-500',
          'group-data-[disabled=false]:group-data-[action=upload]:text-blue-500'
        )}
      />

      <span
        className={cn(
          'text-neutral-600 text-xs dark:text-neutral-400',
          'dark:group-data-[disabled=true]:text-neutral-600',
          'group-data-[disabled=true]:text-neutral-300'
        )}
      >
        {unit}
      </span>
    </div>
  </div>
)

export { MeasureCard }
