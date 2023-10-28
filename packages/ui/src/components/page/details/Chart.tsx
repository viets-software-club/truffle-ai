import { useCallback, useEffect, useState } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import { FiChevronDown } from 'react-icons/fi'
import { Menu } from '@headlessui/react'
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
import CustomTooltip from '@/components/page/details/CustomTooltip'
import Button from '@/components/pure/Button'
import formatDate from '@/util/formatDate'
import formatNumber from '@/util/formatNumber'
import tailwindConfig from '../../../../tailwind.config'
import MenuItemsTransition from '../overview/MenuItemsTransition'

// Make Tailwind classes accessible inside JS objects of the recharts library
const fullConfig = resolveConfig(tailwindConfig)

type ColorObject = {
  [key: string]: string
}

const singleColors = ['teal', 'red', 'mustard', 'yellow', 'orange', 'purple', 'blue', 'green']
const grayColors = fullConfig.theme?.colors?.gray as ColorObject
const indigoColors = fullConfig.theme?.colors?.indigo as ColorObject
const colorValues = ['300', '500']

let colors = colorValues.flatMap(value =>
  [grayColors?.[value], indigoColors?.[value]].filter(Boolean)
)

// Add single colors to the array
const singleColorValues = singleColors
  .map(colorName => fullConfig.theme?.colors?.[colorName] as string)
  .filter(Boolean)

colors = colors.concat(singleColorValues)

const timeframeOptions = [
  { value: 1, label: '1 Month' },
  { value: 3, label: '3 Months' },
  { value: 6, label: '6 Months' },
  { value: 12, label: '1 Year' },
  { value: undefined, label: 'All Time' }
]

const dataOptions = ['Stars', 'Forks']

export type DataPoint = {
  date: string
  count: number
}

type ChartProps = {
  datasets: {
    id: string
    name: string
    data: DataPoint[]
  }[]
  multipleLines: boolean
  selectedMetric: string
  setSelectedMetric: (metric: string) => void
}

const filterDataByTimeframe = (data: DataPoint[], months: number) => {
  const now = new Date()
  const pastDate = now.setMonth(now.getMonth() - months)
  return data.filter(d => new Date(d.date).getTime() >= pastDate)
}

/**
 * Linechart with one or more datasets
 * @param {ChartProps} datasets - The datasets to be displayed on the chart.
 * @param {boolean} multipleLines - Whether to display multiple lines or not.
 * @param {string} selectedMetric - The selected metric.
 * @param {function} setSelectedMetric - The function to set the selected metric.
 */

const Chart = ({ datasets, multipleLines, selectedMetric, setSelectedMetric }: ChartProps) => {
  const [timeframeModalValue, setTimeframeModalValue] = useState<string>('All Time')
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
      ...datasets.flatMap(dataset => dataset.data.map(point => new Date(point.date).getTime()))
    )

    const normalizedData = chartData.map(dataset => ({
      ...dataset,
      data: dataset.data.map(point => ({
        ...point,
        date: new Date(
          new Date(point.date).getTime() -
            (Math.min(...dataset.data.map(p => new Date(p.date).getTime())) - earliestDate)
        ).toISOString()
      }))
    }))

    setChartData(normalizedData)
  }

  const handleTimeframeChange = useCallback(
    (value?: number) => () => {
      if (value) {
        const selectedOption = timeframeOptions.find(option => option.value === value)
        setTimeframeModalValue(selectedOption ? selectedOption.label : timeframeOptions[0].label)

        const filteredData = chartDataOriginal.map(dataset => ({
          ...dataset,
          data: filterDataByTimeframe(dataset.data, value)
        }))

        setChartData(filteredData)
      } else {
        setTimeframeModalValue('All Time')
        setChartData(chartDataOriginal)
      }
    },
    [chartDataOriginal]
  )

  useEffect(() => {
    setChartData([...datasets])
  }, [datasets])

  return (
    <div className='flex w-full flex-row p-6'>
      {datasets.length === 0 ? (
        <p>No data</p>
      ) : (
        <div className='flex w-full flex-col gap-3'>
          <div className='flex flex-row gap-3 '>
            <Menu as='div' className='relative'>
              <Menu.Button as='div'>
                <Button Icon={FiChevronDown} variant='normal' text={selectedMetric} order='ltr' />
              </Menu.Button>

              <MenuItemsTransition>
                <Menu.Items className='absolute left-0 z-30 mt-2 origin-top-left rounded-md bg-gray-700 p-1 shadow-lg focus:outline-none'>
                  {dataOptions.map(metric => (
                    <Menu.Item
                      as='button'
                      key={metric}
                      onClick={() => setSelectedMetric(metric)}
                      className='min-w-[150px] rounded-md p-2 text-left text-sm text-gray-100 hover:bg-gray-600'>
                      {metric}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </MenuItemsTransition>
            </Menu>

            <Menu as='div' className='relative'>
              <Menu.Button as='div'>
                <Button
                  Icon={AiOutlineCalendar}
                  variant='normal'
                  text={timeframeModalValue}
                  order='ltr'
                />
              </Menu.Button>

              <MenuItemsTransition>
                <Menu.Items className='absolute left-0 z-30 mt-2 origin-top-right rounded-md bg-gray-700 p-1 shadow-lg focus:outline-none'>
                  {timeframeOptions.map(option => (
                    <Menu.Item
                      as='button'
                      key={option.label}
                      onClick={handleTimeframeChange(option.value)}
                      className='min-w-[150px] rounded-md p-2 text-left text-sm text-gray-100 hover:bg-gray-600'>
                      {option.label}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </MenuItemsTransition>
            </Menu>

            {multipleLines && (
              <Button variant='normal' text='Normalize Data' onClick={handleDataNormalization} />
            )}
          </div>

          <ResponsiveContainer width='100%' height={300}>
            <LineChart
              height={310}
              margin={{
                top: 30,
                right: 10,
                left: 0,
                bottom: 5
              }}>
              <CartesianGrid strokeDasharray='3 3' vertical={false} stroke={grayColors['800']} />

              <XAxis
                dataKey='date'
                type='number'
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
