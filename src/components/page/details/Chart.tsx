import { useCallback, useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { FiChevronDown as ChevronDown } from 'react-icons/fi'
import { subMonths } from 'date-fns'

import Button from '@/components/pure/Button'
import Modal from '@/components/pure/Modal'

type ChartData = {
  name: string
  value: number
  value2: number
}

type ChartProps = {
  starData: ChartData[]
  forkData: ChartData[]
  issueData: ChartData[]
}

const Chart = ({ starData, forkData, issueData }: ChartProps) => {
  const [showSecondLine, setShowSecondLine] = useState(false)
  const [dataType, setDataType] = useState('Stars')

  const [modalValue, setModalValue] = useState('Select Value')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [timeframe, setTimeframe] = useState(1) // 1 month
  const [timeframeModalOpen, setTimeframeModalOpen] = useState(false)
  const [timeframeModalValue, setTimeframeModalValue] = useState('Select Timeframe')

  const handleModalValueChange = useCallback((newValue: string) => {
    setModalValue(newValue)
    setIsModalOpen(false)
    setDataType(newValue)
  }, [])

  const handleTimeframeChange = useCallback((newTimeframe: number) => {
    setTimeframeModalValue(newTimeframe === 12 ? '1 Year' : `${newTimeframe} Months`)
    setTimeframeModalOpen(false)
    setTimeframe(newTimeframe)
  }, [])

  const [data, setData] = useState<ChartData[]>([])

  useEffect(() => {
    let filteredData
    if (dataType === 'Stars') {
      filteredData = starData
    } else if (dataType === 'Forks') {
      filteredData = forkData
    } else {
      filteredData = issueData
    }
    const pastDate = subMonths(new Date(), timeframe)
    // Filter the data based on the timeframe
    const newFilteredData = filteredData.filter((dataPoint) => {
      const [day, month, year] = dataPoint.name.split('/').map(Number)
      const date = new Date(year, month - 1, day)
      return date >= pastDate
    })
    setData(newFilteredData)
  }, [dataType, starData, forkData, issueData, timeframe])

  const toggleModal = useCallback(() => {
    setIsModalOpen((prevState) => !prevState)
  }, [])

  return (
    <div className="flex flex-row px-7 py-8">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 30,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis label={{ value: dataType, dy: -130, dx: 25 }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        {showSecondLine && <Line type="monotone" dataKey="value2" stroke="#82ca9d" />}
      </LineChart>
      <div className="flex flex-col gap-3 ">
        <div>
          <Button
            variant="normal"
            text={showSecondLine ? 'Hide Second Line' : 'Show Second Line'}
            onClick={() => setShowSecondLine(!showSecondLine)}
          />
        </div>
        <div className="flex flex-row gap-3">
          <div className="flex flex-col">
            <Button
              variant="normal"
              text={modalValue}
              Icon={ChevronDown}
              order="rtl"
              onClick={() => {
                toggleModal()
              }}
            />
            <Modal isOpen={isModalOpen} onClose={toggleModal}>
              <Button
                variant="noBorderNoBG"
                text="Stars"
                fullWidth
                onClick={() => handleModalValueChange('Stars')}
              />
              <Button
                variant="noBorderNoBG"
                text="Forks"
                fullWidth
                onClick={() => handleModalValueChange('Forks')}
              />
              <Button
                variant="noBorderNoBG"
                text="Issues"
                fullWidth
                onClick={() => handleModalValueChange('Issues')}
              />
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
                fullWidth={false}
                onClick={() => handleTimeframeChange(1)}
              />
              <Button
                variant="noBorderNoBG"
                text="3 Months"
                fullWidth={false}
                onClick={() => handleTimeframeChange(3)}
              />
              <Button
                variant="noBorderNoBG"
                text="6 Months"
                fullWidth={false}
                onClick={() => handleTimeframeChange(6)}
              />
              <Button
                variant="noBorderNoBG"
                text="1 Year"
                fullWidth={false}
                onClick={() => handleTimeframeChange(12)}
              />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chart
