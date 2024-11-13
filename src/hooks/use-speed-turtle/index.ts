import { useCallback, useEffect, useRef, useReducer } from 'react'
import SpeedTest from '@cloudflare/speedtest'
import type { Results } from '@cloudflare/speedtest'
import { toast } from 'sonner'
import { bytesToMegabytes } from '::/utils/bytes-to-megabytes'
import type { SummaryResponse } from '::/@types/summary-response'
import {
  speedTurtleReducer,
  initialState,
  ACTIONS,
} from './speed-turtle-reducer'

const useSpeedTurtle = () => {
  const speedTurtleRef = useRef(
    new SpeedTest({
      autoStart: false,
      bandwidthFinishRequestDuration: 500,
    })
  )

  const [state, dispatch] = useReducer(speedTurtleReducer, initialState)

  const setLoading = useCallback((loading: boolean) => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: loading })
  }, [])

  const resetAndSetLoading = useCallback(() => {
    dispatch({ type: ACTIONS.RESET })
    setLoading(true)
  }, [setLoading])

  const formatSummary = useCallback(
    (summary: SummaryResponse) => ({
      download: summary.download ? bytesToMegabytes(summary?.download) : 0,
      upload: bytesToMegabytes(summary?.upload || 0),
      latency: Number(summary?.latency?.toFixed(1) || 0),
      jitter: Number(summary?.jitter?.toFixed(1) || 0),
      downLoadedLatency: Number(summary?.downLoadedLatency?.toFixed(1) || 0),
      upLoadedLatency: Number(summary?.upLoadedLatency?.toFixed(1) || 0),
      packetLoss: Number(summary?.packetLoss?.toExponential(1) || 0),
    }),
    []
  )

  const onPauseResume = useCallback(() => {
    const { isRunning, isFinished } = speedTurtleRef.current

    if (!isFinished) {
      isRunning ? speedTurtleRef.current.pause() : speedTurtleRef.current.play()
      setLoading(!isRunning)
    }
  }, [setLoading])

  const onRestart = useCallback(() => {
    speedTurtleRef.current.restart()

    resetAndSetLoading()
  }, [resetAndSetLoading])

  const onPlay = useCallback(() => {
    const { isRunning, isFinished } = speedTurtleRef.current

    if (isFinished) speedTurtleRef.current.restart()

    if (isRunning) return

    resetAndSetLoading()

    speedTurtleRef.current.play()
  }, [resetAndSetLoading])

  const handleFinish = useCallback(
    (results: Results) => {
      const summary = results.getSummary()

      dispatch({ type: ACTIONS.SET_SUMMARY, payload: formatSummary(summary) })
      setLoading(false)
    },
    [formatSummary, setLoading]
  )

  const handleOnResultsChange = useCallback(() => {
    const summary = speedTurtleRef.current.results.getSummary()

    const newEntry = {
      title: 'data',
      upload: bytesToMegabytes(summary.upload!) || 0,
      download: bytesToMegabytes(summary.download!) || 0,
    }

    const isDuplicate = state.chartData.some(
      entry =>
        entry.upload === newEntry.upload && entry.download === newEntry.download
    )

    if (!isDuplicate) {
      dispatch({ type: ACTIONS.ADD_CHART_DATA, payload: newEntry })
      dispatch({ type: ACTIONS.SET_SUMMARY, payload: formatSummary(summary) })
    }
  }, [state.chartData, formatSummary])

  const handleError = useCallback((error: string) => {
    toast.error(error)
    dispatch({ type: ACTIONS.SET_ERRORS, payload: error })
  }, [])

  useEffect(() => {
    const { current } = speedTurtleRef
    if (!current) return

    current.onFinish = handleFinish
    current.onResultsChange = handleOnResultsChange
    current.onError = handleError
  }, [handleFinish, handleOnResultsChange, handleError])

  return {
    speedTurtle: speedTurtleRef.current,
    ...state,
    onPauseResume,
    onRestart,
    onPlay,
  }
}

export { useSpeedTurtle }
