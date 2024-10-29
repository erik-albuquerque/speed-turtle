'use client'

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

type AreaChartGradientData = {
  data: ChartData
}

const AreaChartGradient = ({ data }: AreaChartGradientData) => {
  return (
    <Card className="-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 mt-4 w-full opacity-50 dark:opacity-20">
      <CardContent className="p-0">
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            margin={{
              left: 12,
              right: 12,
            }}
            data={data}
          >
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
                <stop
                  offset="5%"
                  stopColor={colors.green['500']}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={colors.green['500']}
                  stopOpacity={0.1}
                />
              </linearGradient>

              <linearGradient id="upload" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={colors.orange['500']}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={colors.orange['500']}
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>

            <Area
              dataKey="download"
              type="monotone"
              fill="url(#download)"
              stroke={colors.green['500']}
              fillOpacity={0.4}
            />

            <Area
              dataKey="upload"
              type="monotone"
              fill="url(#upload)"
              stroke={colors.orange['500']}
              fillOpacity={0.4}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export { AreaChartGradient }
