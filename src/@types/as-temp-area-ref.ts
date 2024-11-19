import type { Area } from 'recharts'

type AsTempAreaRefType =
  | ((string | ((instance: Area | null) => void) | React.RefObject<Area>) &
      (
        | string
        | ((instance: SVGElement | null) => void)
        | React.RefObject<SVGElement>
      ))
  | null
  | undefined

export type { AsTempAreaRefType }
