import { useCallback, useEffect, useState } from 'react'
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

type ChartProps = {
  dataArray: { [key: string]: ChartData[] }
  dataTypeNames: string[]
}

const Chart = ({ dataArray, dataTypeNames }: ChartProps) => {
  const dataTypes = Object.keys(dataArray)
  const [showSecondLine, setShowSecondLine] = useState(false)
  const [dataType, setDataType] = useState(dataTypes[0])

  const [modalValue, setModalValue] = useState('Select Value')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [timeframe, setTimeframe] = useState(1) // 1 month
  const [timeframeModalOpen, setTimeframeModalOpen] = useState(false)
  const [timeframeModalValue, setTimeframeModalValue] = useState('Select Timeframe')

  const handleModalValueChange = useCallback((newValue: string) => {
    setModalValue(dataTypeNames[newValue])
    setIsModalOpen(false)
    setDataType(newValue)
  }, [])

  const handleTimeframeChange = useCallback((newTimeframe: number) => {
    setTimeframeModalValue(newTimeframe === 12 ? '1 Year' : `${newTimeframe} Months`)
    setTimeframeModalOpen(false)
    setTimeframe(newTimeframe)
  }, [])

  const [chartData, setChartData] = useState<ChartData[]>([])

  useEffect(() => {
    const filteredData = dataArray[dataType]
    const pastDate = subMonths(new Date(), timeframe)
    // Filter the data based on the timeframe
    const newFilteredData = filteredData.filter((dataPoint) => {
      const [day, month, year] = dataPoint.name.split('/').map(Number)
      const date = new Date(year, month - 1, day)
      return date >= pastDate
    })
    setChartData(newFilteredData)
  }, [dataType, dataArray, timeframe])

  const toggleModal = useCallback(() => {
    setIsModalOpen((prevState) => !prevState)
  }, [])

  const formatDate = (dateString: string) => {
    const [day, month, year] = dateString.split("/").map(str => parseInt(str, 10));
    const date = new Date(year, month - 1, day);
  
    const options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' };
    
    return date.toLocaleDateString(undefined, options);
  };

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
              {dataTypes.map((dataType) => (
                <Button
                  key={dataType}
                  variant="noBorderNoBG"
                  text={dataTypeNames[dataType]}
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
              <Button
                variant="noBorderNoBG"
                text="1 Month"
                fullWidth
                onClick={() => handleTimeframeChange(1)}
              />
              <Button
                variant="noBorderNoBG"
                text="3 Months"
                fullWidth
                onClick={() => handleTimeframeChange(3)}
              />
              <Button
                variant="noBorderNoBG"
                text="6 Months"
                fullWidth
                onClick={() => handleTimeframeChange(6)}
              />
              <Button
                variant="noBorderNoBG"
                text="1 Year"
                fullWidth
                onClick={() => handleTimeframeChange(12)}
              />
            </Modal>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            height={300}
            data={chartData}
            margin={{
              top: 35,
              right: 40,
              left: -15,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2C2D3C"/>
            <XAxis dataKey="name" tick={{ fontSize: '12', fontWeight: 'light' }} tickFormatter={formatDate}/>
            <YAxis label={{ value: dataTypeNames[dataType], dy: -130, dx: 25 }} tick={{ fontSize: '12', fontWeight: 'light' }}/>
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
