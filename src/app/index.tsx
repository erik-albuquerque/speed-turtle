import { useSpeedTurtle } from '::/hooks/use-speed-turtle'

import { Header } from '::/components/header'
import { AreaChartGradient } from '::/components/area-chart-gradient'
import { MeasurementMetrics } from '::/components/measurement-metrics'
import { Measurements } from '::/components/measurements'
import { StartButton } from '::/components/start-button'

const App = () => {
  const { summary, isLoading, onPlay, chartData } = useSpeedTurtle()

  return (
    <main className="relative mx-auto min-h-screen max-w-5xl">
      <Header />

      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-4">
          <div className="mt-2 flex flex-col items-center gap-4">
            <Measurements summary={summary} />

            <MeasurementMetrics summary={summary} />
          </div>

          <StartButton isLoading={isLoading} onClick={onPlay} />
        </div>

        <AreaChartGradient data={chartData} />
      </div>
    </main>
  )
}

export { App }
