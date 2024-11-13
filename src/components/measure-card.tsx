import { cn } from '::/lib/utils'
import * as Lucide from 'lucide-react'

type MeasureCardProps = {
  label: string
  icon: React.ForwardRefExoticComponent<
    Omit<Lucide.LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >
  value?: number
  unit?: 'Mbps' | 'Kbps'
}

const MeasureCard = ({
  icon: Icon,
  unit = 'Mbps',
  ...measure
}: MeasureCardProps) => (
  <div data-disabled={!measure.value} className="group flex flex-col">
    <strong className="text-neutral-900 text-sm dark:text-white">
      {measure.label}
    </strong>

    {measure.value ? (
      <span className="text-4xl text-neutral-900 dark:text-white">
        {measure.value}
      </span>
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

    <div className="flex items-center gap-1 self-end">
      <Icon
        className={cn('size-4 group-data-[disabled=true]:text-neutral-600', {
          'text-green-500': measure.label.toLowerCase() === 'download',
          'text-blue-500': measure.label.toLowerCase() === 'upload',
        })}
      />

      <span
        className={cn(
          'text-neutral-600 text-xs dark:text-neutral-400',
          'group-data-[disabled=true]:text-neutral-600'
        )}
      >
        {unit}
      </span>
    </div>
  </div>
)

export { MeasureCard }
