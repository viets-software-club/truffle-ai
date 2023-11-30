import { Chart } from 'react-chartjs-2'
import type { ChartData } from 'chart.js'
import { Chart as ChartJS, registerables } from 'chart.js'
import 'chartjs-adapter-moment'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../../tailwind.config'
import chartOptions from './options'

ChartJS.register(...registerables)

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
}

/**
 * Linechart with one or more datasets
 */
const ChartComponent = ({ datasets }: ChartProps) => {
  const chartData: ChartData<'line'> = {
    datasets: datasets.map(({ name, data }, index) => ({
      data: data?.map(({ date, count }) => ({ x: new Date(date).getTime(), y: count })),
      backgroundColor: `${colors[index % colors.length]}30`,
      borderColor: colors[index % colors.length],
      label: name
    }))
  }

  return (
    <div className='mt-6 h-96 w-full'>
      <Chart type='line' data={chartData} options={chartOptions} className='!w-full' />
    </div>
  )
}

export default ChartComponent
