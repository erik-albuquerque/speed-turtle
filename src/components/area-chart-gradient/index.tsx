import { Area, AreaChart, XAxis } from 'recharts'

import colors from 'tailwindcss/colors'

import { Card, CardContent } from '::/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '::/components/ui/chart'

import type { ChartData } from '::/@types/chart-data'
import { chartConfig } from './chart-config'
import { CustomTooltipContent } from './custom-tooltip-content'
import { useTurtleAnimation } from '::/hooks/useTurtleAnimation'

type AreaChartGradientData = {
  data: ChartData
}

const AreaChartGradient = ({ data }: AreaChartGradientData) => {
  const { coordinates, startAnimation, stopAnimation, areaRef, isRunning } =
    useTurtleAnimation({ data })

  return (
    <Card className="-translate-x-1/2 -translate-y-1/2 fixed top-2/3 left-1/2 w-full opacity-50 xl:mt-16 dark:opacity-20">
      <CardContent className="p-0">
        <ChartContainer
          config={chartConfig}
          onMouseEnter={startAnimation}
          onMouseLeave={stopAnimation}
        >
          <AreaChart data={data}>
            <XAxis
              dataKey="data"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={value => value.slice(0, 3)}
            />

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  className="!rounded-xl"
                  hideLabel
                  formatter={(value, name) => (
                    <CustomTooltipContent value={value} name={name} />
                  )}
                />
              }
            />
            <defs>
              <linearGradient id="download" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#28a745" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#28a745" stopOpacity={0.1} />
              </linearGradient>

              <linearGradient id="upload" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1e90ff" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#1e90ff" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <Area
              dataKey="download"
              type="monotone"
              fill="url(#download)"
              stroke="#28a745"
              fillOpacity={0.4}
              ref={areaRef}
            />

            <Area
              dataKey="upload"
              type="monotone"
              fill="url(#upload)"
              stroke="#1e90ff"
              fillOpacity={0.4}
            />

            {isRunning && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="fill-none text-green-500"
                x={coordinates.x}
                y={coordinates.y}
              >
                <title>Turtle</title>
                <path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z" />
                <path d="M4.82 7.9 8 10" />
                <path d="M15.18 7.9 12 10" />
                <path d="M16.93 10H20a2 2 0 0 1 0 4H2" />
              </svg>
            )}
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export { AreaChartGradient }
