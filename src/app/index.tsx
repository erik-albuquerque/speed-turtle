import * as Lucide from 'lucide-react'

import { useSpeedTurtle } from '../hooks/use-speed-turtle'

const App = () => {
  const { summary, isLoading, onPlay, onRestart, onPauseResume } =
    useSpeedTurtle()

  return (
    <main className="relative mx-auto min-h-screen max-w-5xl">
      <div className="flex flex-col items-center">
        <div className="flex flex-col pt-8">
          <Lucide.Turtle className="size-8 ml-3 text-green-600 animate-bounce" />

          <div className="flex gap-2">
            <button
              type="button"
              className="bg-green-950 px-4 py-2 rounded-md text-green-500 [&:not(:disabled)]:hover:bg-green-900 border [&:not(:disabled)]:border-green-500 disabled:opacity-60 disabled:border-transparent disabled:cursor-not-allowed transition-colors"
              onClick={onPlay}
              disabled={isLoading}
            >
              {isLoading ? (
                <Lucide.Loader className="size-5 animate-spin" />
              ) : (
                <Lucide.Play className="size-5" />
              )}
            </button>

            <button
              type="button"
              className="bg-orange-950 px-4 py-2 rounded-md text-orange-500 hover:bg-orange-900 transition-colors"
              onClick={onRestart}
            >
              <Lucide.RotateCw className="size-5" />
            </button>

            <button
              type="button"
              className="bg-red-950 px-4 py-2 rounded-md text-red-500 hover:bg-red-900 transition-colors"
              onClick={onPauseResume}
            >
              {isLoading ? (
                <Lucide.Pause className="size-5" />
              ) : (
                <Lucide.StepForward className="size-5" />
              )}
            </button>
          </div>

          {summary && (
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex flex-col gap-1">
                <p>Latency: {summary.latency} ms</p>
                <p>Jitter: {summary.jitter} ms</p>
                <p className="text-red-500">
                  Packet Loss: {summary.packetLoss || 0} %
                </p>
              </div>

              <div className="flex flex-col">
                <p className="text-3xl font-bold text-green-500">
                  ↓ {summary.download} MB/s
                </p>
                <p className="text-3xl font-bold text-orange-500">
                  ↑ {summary.upload} MB/s
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export { App }
