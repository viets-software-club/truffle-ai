import { useCallback, useEffect, useState } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
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
import { FiChevronDown } from 'react-icons/fi'
import CustomTooltip from '@/components/page/details/CustomTooltip'
import Button from '@/components/pure/Button'
import formatDate from '@/util/formatDate'
import formatNumber from '@/util/formatNumber'
import { Menu, Transition } from '@headlessui/react'
import tailwindConfig from '../../../../tailwind.config'

// The following 3 statements are needed in order to be able to use our Tailwind classes inside JS objects of the recharts library
const fullConfig = resolveConfig(tailwindConfig)

type ColorObject = {
  [key: string]: string
}

const singleColors = ['teal', 'red', 'mustard', 'yellow', 'orange', 'purple', 'blue', 'green']
const grayColors = fullConfig.theme?.colors?.gray as ColorObject
const indigoColors = fullConfig.theme?.colors?.indigo as ColorObject
const colorValues = ['300', '500']

let colors = colorValues.flatMap((value) =>
  [grayColors?.[value], indigoColors?.[value]].filter(Boolean)
)

// Add single colors to the array
const singleColorValues = singleColors
  .map((colorName) => fullConfig.theme?.colors?.[colorName] as string)
  .filter(Boolean)

colors = colors.concat(singleColorValues)

const TimeframeOptions = [
  { value: 1, label: '1 Month' },
  { value: 3, label: '3 Months' },
  { value: 6, label: '6 Months' },
  { value: 12, label: '1 Year' }
]

type ChartProps = {
  datasets: {
    id: string
    name: string
    data: {
      date: string
      count: number
    }[]
  }[]
  multipleLines: boolean
  selectedMetric: string
  setSelectedMetric: (metric: string) => void
}

type DataPoint = {
  date: string
  count: number
}

const filterDataByTimeframe = (data: DataPoint[], months: number) => {
  const now = new Date()
  const pastDate = now.setMonth(now.getMonth() - months)
  return data.filter((d) => new Date(d.date).getTime() >= pastDate)
}

/**
 * Linechart with one or more datasets
 * @param {ChartProps} datasets - The datasets to be displayed on the chart.
 * @param {boolean} multipleLines - Whether to display multiple lines or not.
 * @param {string} selectedMetric - The selected metric.
 */

const Chart = ({ datasets, multipleLines, selectedMetric, setSelectedMetric }: ChartProps) => {
  const [timeframeModalValue, setTimeframeModalValue] = useState('Select timeframe')

  const [chartDataOriginal] = useState<ChartProps['datasets']>([...datasets])
  const [chartData, setChartData] = useState(chartDataOriginal)

  const [isDataNormalized, setIsDataNormalized] = useState(false)

  // Mehtod to handle the click on the "Normalize data" button
  const handleDataNormalization = () => {
    if (isDataNormalized) {
      setChartData(chartDataOriginal)
      setIsDataNormalized(false)
      return
    }
    setIsDataNormalized(true)
    const earliestDate = Math.min(
      ...datasets.flatMap((dataset) => dataset.data.map((point) => new Date(point.date).getTime()))
    )

    const normalizedData = chartData.map((dataset) => ({
      ...dataset,
      data: dataset.data.map((point) => ({
        ...point,
        date: new Date(
          new Date(point.date).getTime() -
            (Math.min(...dataset.data.map((p) => new Date(p.date).getTime())) - earliestDate)
        ).toISOString()
      }))
    }))

    setChartData(normalizedData)
  }

  const handleTimeframeChange = useCallback(
    (value: number) => () => {
      const selectedOption = TimeframeOptions.find((option) => option.value === value)
      setTimeframeModalValue(selectedOption ? selectedOption.label : TimeframeOptions[0].label)

      const filteredData = chartDataOriginal.map((dataset) => ({
        ...dataset,
        data: filterDataByTimeframe(dataset.data, value)
      }))

      setChartData(filteredData)
    },
    [chartDataOriginal]
  )

  useEffect(() => {
    setChartData([...datasets])
  }, [datasets])

  return (
    <div className="flex w-full flex-row p-6">
      {datasets.length === 0 ? (
        <p>No data</p>
      ) : (
        <div className="flex w-full flex-col gap-3">
          <div className="flex flex-row gap-3 ">
            {multipleLines && (
              <>
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="flex h-[30px] flex-row items-center space-x-1 rounded-[5px] border border-gray-800 bg-gray-850 px-2 py-1.5 text-14 transition-colors duration-100 hover:bg-gray-700">
                    <FiChevronDown className="text-gray-500" />
                    <p className="leading-none">{timeframeModalValue}</p>
                  </Menu.Button>

                  <Transition.Child>
                    <Menu.Items
                      static
                      className="absolute z-10 mt-2 w-28 rounded-md bg-gray-700 shadow-lg focus:outline-none"
                    >
                      <div className="py-1">
                        {TimeframeOptions.map((metric) => (
                          <Menu.Item key={metric.label}>
                            <button
                              type="button"
                              onClick={handleTimeframeChange(metric.value)}
                              className="flex w-28 flex-row items-center space-x-2 px-4 py-2 hover:bg-gray-600"
                            >
                              <p>{metric.label}</p>
                            </button>
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition.Child>
                </Menu>

                <div>
                  <Button
                    variant="normal"
                    text="Normalize Data"
                    fullWidth
                    onClick={handleDataNormalization}
                  />
                </div>
              </>
            )}

            <Menu as="div" className="relative inline-block">
              <Menu.Button className="flex h-[30px] flex-row items-center space-x-1 rounded-[5px] border border-gray-800 bg-gray-850 px-2 py-1.5 text-14 transition-colors duration-100 hover:bg-gray-700">
                <FiChevronDown className="text-gray-500" />
                <p className="leading-none">{selectedMetric}</p>
              </Menu.Button>

              <Transition.Child>
                <Menu.Items
                  static
                  className="absolute z-10 mt-2 w-24 rounded-md bg-gray-700 shadow-lg focus:outline-none"
                >
                  <div className="py-1">
                    {['Stars', 'Forks'].map((metric) => (
                      <Menu.Item key={metric}>
                        <button
                          type="button"
                          onClick={() => setSelectedMetric(metric)}
                          className="flex w-24 flex-row items-center space-x-2 px-4 py-2 hover:bg-gray-600"
                        >
                          <p>{metric}</p>
                        </button>
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition.Child>
            </Menu>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              height={300}
              margin={{
                top: 25,
                right: 10,
                left: 0,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={grayColors['800']} />

              <XAxis
                dataKey="date"
                type="number"
                tick={{ fontSize: '12', fontWeight: 'light' }}
                tickFormatter={formatDate}
                stroke={grayColors['500']}
                allowDataOverflow
                domain={['dataMin', 'dataMax']}
              />

              <YAxis
                label={{ value: selectedMetric, dy: -125, dx: 25, fontSize: '12', fill: 'gray' }}
                tick={{ fontSize: '12', fontWeight: 'light' }}
                stroke={grayColors['500']}
                tickFormatter={formatNumber}
                domain={[0, 'dataMax']}
              />

              {!multipleLines && (
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ stroke: grayColors['100'], strokeWidth: 1 }}
                />
              )}

              <Legend wrapperStyle={{ fontSize: '12px' }} />

              {chartData
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
                        ? dataset.data.map((item) => ({
                            ...item,
                            date: new Date(item.date).getTime()
                          }))
                        : []
                    }
                    dataKey="count"
                    name={dataset.name}
                    type="monotone"
                    stroke={colors[index % colors.length]}
                    dot={false}
                    activeDot={{ r: 4 }}
                  />
                ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  )
}

export default Chart
