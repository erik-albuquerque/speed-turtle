import * as Lucide from 'lucide-react'

import { chartConfig } from './chart-config'

import type {
  ValueType,
  NameType,
} from 'recharts/types/component/DefaultTooltipContent'

type Label = 'Download' | 'Upload'

type CustomTooltipContentProps = {
  value: ValueType
  name: NameType
}

const MeasureIcon = {
  Download: <Lucide.TrendingDown className="size-4 text-green-500" />,
  Upload: <Lucide.TrendingUp className="size-4 text-orange-500" />,
}

const CustomTooltipContent = ({ name, value }: CustomTooltipContentProps) => {
  const label = chartConfig[name as keyof typeof chartConfig]?.label as Label

  return (
    <div className="flex min-w-[130px] items-center gap-2 text-xs">
      {MeasureIcon[label]}

      {label}

      <div className="flex items-baseline gap-0.5 font-medium font-mono tabular-nums">
        {value}
        <span className="font-normal text-neutral-600 dark:text-neutral-400">
          mb/s
        </span>
      </div>
    </div>
  )
}

export { CustomTooltipContent }
