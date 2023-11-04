import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import resolveConfig from 'tailwindcss/resolveConfig'
import CustomTooltip from '@/components/shared/chart/CustomTooltip'
import formatDate from '@/util/formatDate'
import formatNumber from '@/util/formatNumber'
import tailwindConfig from '../../../../tailwind.config'

// Make Tailwind classes accessible inside JS objects of the recharts library
const fullConfig = resolveConfig(tailwindConfig)

type ColorObject = {
  [key: string]: string
}

const singleColors = ['teal', 'mustard', 'yellow', 'orange', 'purple', 'blue']
const indigoColors = fullConfig.theme?.colors?.indigo as ColorObject
const colorValues = ['300', '500']

const singleColorValues = singleColors
  .map(colorName => fullConfig.theme?.colors?.[colorName] as string)
  .filter(Boolean)

const colors = colorValues
  .flatMap(value => [indigoColors?.[value]].filter(Boolean))
  .concat(singleColorValues)

export type DataPoint = {
  date: string
  count: number
}

export type ChartProps = {
  datasets: {
    id: string
    name: string
    data: DataPoint[]
  }[]
  multipleLines?: boolean
  selectedMetric: string
}

/**
 * Linechart with one or more datasets
 * @param {ChartProps} datasets - The datasets to be displayed on the chart.
 * @param {boolean} multipleLines - Whether to display multiple lines or not.
 * @param {string} selectedMetric - The selected metric.
 */

const Chart = ({ datasets, multipleLines, selectedMetric }: ChartProps) => (
  <ResponsiveContainer width='100%' height={300}>
    <LineChart
      height={310}
      margin={{
        top: 30,
        right: 10,
        left: 0,
        bottom: 5
      }}>
      <CartesianGrid strokeDasharray='3 3' vertical={false} stroke='rgba(255,255,255,0.1)' />

      <XAxis
        dataKey='date'
        type='number'
        tick={{ fontSize: '12', fontWeight: 'light' }}
        tickFormatter={formatDate}
        stroke='rgba(255,255,255,0.5)'
        allowDataOverflow
        domain={['dataMin', 'dataMax']}
      />

      <YAxis
        label={{ value: selectedMetric, dy: -125, dx: 25, fontSize: '12', fill: 'gray' }}
        tick={{ fontSize: '12', fontWeight: 'light' }}
        stroke='rgba(255,255,255,0.5)'
        tickFormatter={formatNumber}
        domain={[0, 'dataMax']}
      />

      {!multipleLines && (
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ stroke: 'rgba(255,255,255,0.75)', strokeWidth: 1 }}
        />
      )}

      <Legend wrapperStyle={{ fontSize: '12px' }} />

      {datasets
        .sort((a, b) => {
          if (!a.data || !b.data) return 0
          const lastDataPointA = a.data[a.data.length - 1]?.count || 0
          const lastDataPointB = b.data[b.data.length - 1]?.count || 0
          return lastDataPointB - lastDataPointA
        })
        .map((dataset, index) => (
          <Line
            key={dataset.id}
            data={
              dataset.data
                ? dataset.data.map(item => ({
                    ...item,
                    date: new Date(item.date).getTime()
                  }))
                : []
            }
            dataKey='count'
            name={dataset.name}
            type='monotone'
            stroke={colors[index % colors.length]}
            dot={false}
            activeDot={{ r: 4 }}
            strokeWidth={2}
            strokeLinecap='round'
          />
        ))}
    </LineChart>
  </ResponsiveContainer>
)

export default Chart
