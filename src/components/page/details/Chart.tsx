import { useCallback, useEffect, useMemo, useState } from 'react'
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
import { FiChevronDown as ChevronDown } from 'react-icons/fi'
import { subMonths } from 'date-fns'

import Button from '../../pure/Button'
import Modal from '../../pure/Modal'

type ChartData = {
  name: string
  value: number
  value2: number
}

type Data = {
  name: string
  data: ChartData[]
}

type ChartProps = {
  data: Data[]
}

const TimeframeOptions = [
  { value: 1, label: '1 Month' },
  { value: 3, label: '3 Months' },
  { value: 6, label: '6 Months' },
  { value: 12, label: '1 Year' }
]

const Chart = ({ data }: ChartProps) => {
  const dataTypes = useMemo(() => data.map((d) => d.name), [data])
  const [showSecondLine, setShowSecondLine] = useState(false)
  const [dataType, setDataType] = useState(dataTypes[0])

  const [modalValue, setModalValue] = useState('Select Value')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [timeframe, setTimeframe] = useState(1) // 1 month
  const [timeframeModalOpen, setTimeframeModalOpen] = useState(false)
  const [timeframeModalValue, setTimeframeModalValue] = useState(TimeframeOptions[0].label)

  const handleModalValueChange = useCallback((newValue: string) => {
    setModalValue(newValue)
    setIsModalOpen(false)
    setDataType(newValue)
  }, [])

  const handleTimeframeChange = useCallback((newTimeframe: number) => {
    const selectedOption = TimeframeOptions.find((option) => option.value === newTimeframe)
    setTimeframeModalValue(selectedOption ? selectedOption.label : TimeframeOptions[0].label)
    setTimeframeModalOpen(false)
    setTimeframe(newTimeframe)
  }, [])

  const [chartData, setChartData] = useState<ChartData[]>([])

  useEffect(() => {
    const filteredData = data.find((d) => d.name === dataType)?.data || []
    const pastDate = subMonths(new Date(), timeframe)
    // Filter the data based on the timeframe
    const newFilteredData = filteredData.filter((dataPoint) => {
      const [day, month, year] = dataPoint.name.split('/').map(Number)
      const date = new Date(year, month - 1, day)
      return date >= pastDate
    })
    setChartData(newFilteredData)
  }, [dataType, data, timeframe])

  const toggleModal = useCallback(() => {
    setIsModalOpen((prevState) => !prevState)
  }, [])

  const formatDate = (dateString: string) => {
    const [day, month, year] = dateString.split('/').map((str) => parseInt(str, 10))
    const date = new Date(year, month - 1, day)

    const options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' }

    return date.toLocaleDateString(undefined, options)
  }

  return (
    <div className="flex w-full flex-row border-b border-gray-800 px-7 py-8">
      <div className="flex w-full flex-col gap-3">
        <div className="flex flex-row gap-3 ">
          <div>
            <Button
              variant="normal"
              text={showSecondLine ? 'Hide Second Line' : 'Show Second Line'}
              onClick={() => setShowSecondLine(!showSecondLine)}
            />
          </div>

          <div className="flex flex-col">
            <Button
              variant="normal"
              text={modalValue}
              Icon={ChevronDown}
              order="rtl"
              fullWidth
              onClick={() => {
                toggleModal()
              }}
            />
            <Modal isOpen={isModalOpen} onClose={toggleModal}>
              {dataTypes.map((item) => (
                <Button
                  key={dataType}
                  variant="noBorderNoBG"
                  text={item}
                  fullWidth
                  onClick={() => handleModalValueChange(dataType)}
                />
              ))}
            </Modal>
          </div>

          <div className="flex flex-col">
            <Button
              variant="normal"
              text={timeframeModalValue}
              Icon={ChevronDown}
              order="rtl"
              onClick={() => {
                setTimeframeModalOpen(true)
              }}
            />
            <Modal isOpen={timeframeModalOpen} onClose={() => setTimeframeModalOpen(false)}>
              {TimeframeOptions.map((option) => (
                <Button
                  key={option.value}
                  variant="noBorderNoBG"
                  text={option.label}
                  fullWidth
                  onClick={() => handleTimeframeChange(option.value)}
                />
              ))}
            </Modal>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            height={300}
            data={chartData}
            margin={{
              top: 30,
              right: 40,
              left: -15,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2C2D3C" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: '12', fontWeight: 'light' }}
              tickFormatter={formatDate}
              stroke="#858699"
            />
            <YAxis
              label={{ value: dataType, dy: -125, dx: 25, fontSize: '12', fill: '#858699' }}
              tick={{ fontSize: '12', fontWeight: 'light' }}
              stroke="#858699"
            />
            <Tooltip contentStyle={{ backgroundColor: '#191A23', color: 'white' }} />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
            {showSecondLine && <Line type="monotone" dataKey="value2" stroke="#82ca9d" />}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Chart
