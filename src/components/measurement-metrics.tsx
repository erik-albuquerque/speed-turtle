import { MetricCard } from './metric-card'
import type { SummaryResponse } from '::/@types/summary-response'
import { ArrowDown } from './animated-icons/arrow-down'
import { ArrowUp } from './animated-icons/arrow-up'
import { ChevronsLeftRight } from './animated-icons/chevrons-left-right'
import { Zap } from './animated-icons/zap'
import { PackageX } from './animated-icons/package-x'

type MeasurementMetricsProps = {
  summary: SummaryResponse | null
}

const MeasurementMetrics = ({ summary }: MeasurementMetricsProps) => {
  const metrics = [
    { label: 'Latency', icon: ChevronsLeftRight, value: summary?.latency },
    {
      label: 'Download Latency',
      icon: ArrowDown,
      value: summary?.downLoadedLatency,
    },
    {
      label: 'Upload Latency',
      icon: ArrowUp,
      value: summary?.upLoadedLatency,
    },
    {
      label: 'Packet Loss',
      icon: PackageX,
      value: summary?.packetLoss,
      unit: '%',
    },
    { label: 'Jitter', icon: Zap, value: summary?.jitter },
  ]

  return (
    <div className="flex justify-between gap-4">
      {metrics.map(metric => (
        <MetricCard key={metric.label} {...metric} />
      ))}
    </div>
  )
}

export { MeasurementMetrics }
