import * as Lucide from 'lucide-react'
import { MetricCard } from './metric-card'
import type { SummaryResponse } from '::/@types/summary-response'

type MeasurementMetricsProps = {
  summary: SummaryResponse | null
}

const MeasurementMetrics = ({ summary }: MeasurementMetricsProps) => {
  const metrics = [
    { label: 'Latency', icon: Lucide.ArrowLeftRight, value: summary?.latency },
    {
      label: 'Download Latency',
      icon: Lucide.ArrowDown,
      value: summary?.downLoadedLatency,
    },
    {
      label: 'Upload Latency',
      icon: Lucide.ArrowUp,
      value: summary?.upLoadedLatency,
    },
    {
      label: 'Packet Loss',
      icon: Lucide.PackageX,
      value: summary?.packetLoss,
      unit: '%',
    },
    { label: 'Jitter', icon: Lucide.PlugZap, value: summary?.jitter },
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
