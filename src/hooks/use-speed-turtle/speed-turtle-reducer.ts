import type { ChartData } from '::/@types/chart-data'
import type { SummaryResponse } from '::/@types/summary-response'

export const initialState = {
  isLoading: false,
  errors: [] as string[],
  summary: null as SummaryResponse | null,
  chartData: [] as ChartData,
}

export const ACTIONS = {
  SET_LOADING: 'SET_LOADING',
  SET_ERRORS: 'SET_ERRORS',
  SET_SUMMARY: 'SET_SUMMARY',
  ADD_CHART_DATA: 'ADD_CHART_DATA',
  RESET: 'RESET',
}

const speedTurtleReducer = (
  state: typeof initialState,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  { type, payload }: { type: string; payload?: any }
) => {
  switch (type) {
    case ACTIONS.SET_LOADING:
      return { ...state, isLoading: payload }
    case ACTIONS.SET_ERRORS:
      return {
        ...state,
        errors: state.errors.includes(payload)
          ? state.errors
          : [...state.errors, payload],
      }
    case ACTIONS.SET_SUMMARY:
      return { ...state, summary: payload }
    case ACTIONS.ADD_CHART_DATA:
      return { ...state, chartData: [...state.chartData, payload] }
    case ACTIONS.RESET:
      return initialState
    default:
      return state
  }
}

export { speedTurtleReducer }
