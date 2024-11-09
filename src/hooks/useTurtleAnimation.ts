import { useState, useEffect, useCallback, useRef } from 'react'
import type { ChartData } from '::/@types/chart-data'
import type { Area } from 'recharts'

type UseTurtleAnimationProps = {
  data: ChartData
}

const X_OFFSET = -24
const OFFSET = 20
const ANIMATION_INTERVAL_TIME = 250 // 250 ms

const useTurtleAnimation = ({ data }: UseTurtleAnimationProps) => {
  const areaRef = useRef<Area | null>(null)

  const [animationIndex, setAnimationIndex] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  const toggleAnimation = useCallback((shouldRun: boolean) => {
    if (areaRef.current?.state.curPoints?.length) setIsRunning(shouldRun)
  }, [])

  const startAnimation = () => toggleAnimation(true)
  const stopAnimation = () => toggleAnimation(false)

  useEffect(() => {
    if (!isRunning) return

    const animationInterval = setInterval(() => {
      setAnimationIndex(prevIndex => (prevIndex + 1) % data.length)
    }, ANIMATION_INTERVAL_TIME)

    return () => clearInterval(animationInterval)
  }, [isRunning, data.length])

  const getCoordinates = () => {
    if (!isRunning) {
      return { x: X_OFFSET, y: 0 }
    }

    const curPoint = areaRef.current?.state.curPoints![animationIndex]

    return {
      x: (curPoint?.x ?? 0) - OFFSET,
      y: (curPoint?.y ?? 0) - OFFSET,
    }
  }

  const coordinates = getCoordinates()

  return {
    isRunning,
    coordinates,
    startAnimation,
    stopAnimation,
    areaRef,
  }
}

export { useTurtleAnimation }
