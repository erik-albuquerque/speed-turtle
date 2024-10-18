import { useCallback, useEffect, useRef, useState } from 'react'

import SpeedTest from '@cloudflare/speedtest'
import { bytesToMegabytes } from '../utils/bytes-to-megabytes'

import type { Results } from '@cloudflare/speedtest'
import type { SummaryResponse } from '../@types/summary-response'

const useSpeedTurtle = () => {
  const speedTurtleRef = useRef(
    new SpeedTest({
      autoStart: false,
      bandwidthFinishRequestDuration: 500,
    })
  )

  const [state, setState] = useState({
    isLoading: false,
    errors: [] as string[],
    summary: null as SummaryResponse | null,
  })

  const formatSummary = useCallback(
    (summary: SummaryResponse) => ({
      download: bytesToMegabytes(summary.download!),
      upload: bytesToMegabytes(summary.upload!),
      latency: Number(summary.latency!.toFixed(2)),
      jitter: Number(summary.jitter!.toFixed(2)),
    }),
    []
  )

  const onPauseResume = useCallback(() => {
    if (speedTurtleRef.current.isFinished) return

    const isRunning = speedTurtleRef.current.isRunning

    isRunning ? speedTurtleRef.current.pause() : speedTurtleRef.current.play()

    setState(prev => ({ ...prev, isLoading: !isRunning }))
  }, [])

  const onRestart = useCallback(() => {
    speedTurtleRef.current.restart()
    setState({ isLoading: true, errors: [], summary: null })
  }, [])

  const onPlay = useCallback(() => {
    if (speedTurtleRef.current.isRunning) return

    setState({ isLoading: true, errors: [], summary: null })
    speedTurtleRef.current.play()
  }, [])

  useEffect(() => {
    const handleFinish = (results: Results) => {
      const summary = results.getSummary()
      setState(prev => ({
        ...prev,
        summary: formatSummary(summary),
        isLoading: false,
        errors: [],
      }))
    }

    const handleError = (error: string) => {
      setState(prev => ({
        ...prev,
        errors: prev.errors.includes(error)
          ? prev.errors
          : [...prev.errors, error],
      }))
    }

    speedTurtleRef.current.onFinish = handleFinish
    speedTurtleRef.current.onError = handleError
  }, [formatSummary])

  return {
    speedTurtle: speedTurtleRef.current,
    ...state,
    onPauseResume,
    onRestart,
    onPlay,
  }
}

export { useSpeedTurtle }
