import * as Lucide from 'lucide-react'

import { useSpeedTurtle } from '::/hooks/use-speed-turtle'
import { Button } from '::/components/ui/button'
import { AreaChartGradient } from '::/components/area-chart-gradient'
import { Header } from '::/components/header'

const App = () => {
  const { summary, isLoading, onPlay, onRestart, onPauseResume, chartData } =
    useSpeedTurtle()

  return (
    <main className="relative mx-auto min-h-screen max-w-5xl">
      <Header />

      <div className="relative flex flex-col items-center">
        <div className="flex w-full flex-1 flex-col items-center pt-8">
          <div className="flex gap-2">
            <Button
              type="button"
              className="rounded-md border bg-green-50 px-4 py-2 text-green-500 transition-colors disabled:cursor-not-allowed disabled:border-transparent disabled:opacity-80 dark:bg-green-950 dark:disabled:opacity-60 [&:not(:disabled)]:border-green-500 [&:not(:disabled)]:hover:bg-green-200 dark:[&:not(:disabled)]:hover:bg-green-900"
              onClick={onPlay}
              disabled={isLoading}
            >
              {isLoading ? (
                <Lucide.Loader className="size-5 animate-spin" />
              ) : (
                <Lucide.Play className="size-5" />
              )}
            </Button>

            <Button
              type="button"
              className="rounded-md bg-orange-100 px-4 py-2 text-orange-500 transition-colors hover:bg-orange-200 dark:bg-orange-950 dark:hover:bg-orange-900"
              onClick={onRestart}
            >
              <Lucide.RotateCw className="size-5" />
            </Button>

            <Button
              type="button"
              className="rounded-md bg-red-100 px-4 py-2 text-red-500 transition-colors hover:bg-red-200 dark:bg-red-950 dark:hover:bg-red-900"
              onClick={onPauseResume}
            >
              {isLoading ? (
                <Lucide.Pause className="size-5" />
              ) : (
                <Lucide.StepForward className="size-5" />
              )}
            </Button>
          </div>

          {summary && (
            <div className="mt-4 flex flex-col gap-4">
              <div className="fixed bottom-[35%] left-16 flex flex-col gap-1">
                <p>Latency: {summary?.latency} ms</p>
                <p>Jitter: {summary?.jitter} ms</p>
                <p className="text-red-500">
                  Packet Loss: {summary.packetLoss || 0} %
                </p>
              </div>

              <div className="flex flex-col">
                <p className="font-bold text-3xl text-green-500">
                  ↓ {summary?.download} MB/s
                </p>
                <p className="font-bold text-3xl text-orange-500">
                  ↑ {summary?.upload} MB/s
                </p>
              </div>
            </div>
          )}
        </div>

        <AreaChartGradient data={chartData} />
      </div>
    </main>
  )
}

export { App }
