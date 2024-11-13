import * as Lucide from 'lucide-react'

import type { SummaryResponse } from '::/@types/summary-response'
import { MeasureCard } from './measure-card'

type MeasurementsProps = {
  summary: SummaryResponse | null
}

const Measurements = ({ summary }: MeasurementsProps) => {
  const measurements = [
    {
      label: 'Download',
      icon: Lucide.ArrowDown,
      value: summary?.download,
    },
    {
      label: 'Upload',
      icon: Lucide.ArrowUp,
      value: summary?.upload,
    },
  ]
  return (
    <div className="flex gap-8">
      {measurements.map(measure => (
        <MeasureCard key={measure.label} {...measure} />
      ))}
    </div>
  )
}

export { Measurements }
