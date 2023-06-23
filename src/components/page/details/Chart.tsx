import { useCallback, useState } from 'react'
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
import { Menu } from '@headlessui/react'
import { AiOutlineCalendar } from 'react-icons/ai'
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
 */

const Chart = ({ datasets, multipleLines }: ChartProps) => {
  const [timeframeModalValue, setTimeframeModalValue] = useState('Select timeframe')
  //   const [modalValue, setModalValue] = useState('Select Value')
  //   const [isModalOpen, setIsModalOpen] = useState(false)

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
    // Updates state when modal value changes
    // const handleModalValueChange = useCallback((newValue: string) => {
    //   setModalValue(newValue)
    //   setIsModalOpen(false)
    // }, [])

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

  return (
    <div className="flex w-full flex-row px-7 py-8">
      {datasets.length === 0 ? (
        <p>No data</p>
      ) : (
        <div className="flex w-full flex-col gap-3">
          {multipleLines && (
            <div className="flex flex-row gap-3 ">
              <Menu as="div" className="relative">
                <Menu.Button as="div">
                  <Button
                    Icon={AiOutlineCalendar}
                    variant="normal"
                    text={timeframeModalValue}
                    order="ltr"
                  />
                </Menu.Button>

                <MenuItemsTransition>
                  <Menu.Items className="absolute left-0 z-30 mt-2 origin-top-right rounded-[5px] bg-gray-700 p-1 shadow-lg focus:outline-none">
                    {TimeframeOptions.map((option) => (
                      <Menu.Item
                        as="button"
                        key={option.label}
                        onClick={handleTimeframeChange(option.value)}
                        className="min-w-[150px] rounded-[5px] p-2 text-left text-14 text-gray-100 hover:bg-gray-600"
                      >
                        {option.label}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </MenuItemsTransition>
              </Menu>

              <Button variant="normal" text="Normalize Data" onClick={handleDataNormalization} />
            </div>
          )}

          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              height={310}
              margin={{
                top: 30,
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
                label={{ value: 'Stars', dy: -125, dx: 25, fontSize: '12', fill: 'gray' }}
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
                  const lastDataPointA = a.data[a.data.length - 1]?.count || 0
                  const lastDataPointB = b.data[b.data.length - 1]?.count || 0
                  return lastDataPointB - lastDataPointA
                })
                .map((dataset, index) => (
                  <Line
                    key={dataset.id}
                    data={dataset.data.map((item) => ({
                      ...item,
                      date: new Date(item.date).getTime()
                    }))}
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
