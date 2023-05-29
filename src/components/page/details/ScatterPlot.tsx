import { useCallback, useEffect, useState } from 'react'
import { FiChevronDown as ChevronDown } from 'react-icons/fi'
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
  LabelList
} from 'recharts'
import Modal from '@/components/pure/Modal'
import Button from '@/components/pure/Button'

const names = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
const dataSets = {
  Stars: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  Forks: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
  Issues: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
}

type DataSetKeys = keyof typeof dataSets

const mapData = (xData: number[], yData: number[], zData: string[]) =>
  xData.map((_, i) => ({ x: xData[i], y: yData[i], z: zData[i] }))

const ScatterPlot = () => {
  const [isModalOpenX, setIsModalOpenX] = useState(false)
  const [isModalOpenY, setIsModalOpenY] = useState(false)
  const [xValue, setXValue] = useState<DataSetKeys>('Stars')
  const [yValue, setYValue] = useState<DataSetKeys>('Forks')
  const [modalValueX, setModalValueX] = useState('Select Value')
  const [modalValueY, setModalValueY] = useState('Select Value')

  const [state, setState] = useState({
    data: mapData(dataSets[xValue], dataSets[yValue], names)
  })

  useEffect(() => {
    const xData = dataSets[xValue]
    const yData = dataSets[yValue]
    const zData = names
    setState({ data: mapData(xData, yData, zData) })
  }, [xValue, yValue])

  const toggleModalX = useCallback(() => {
    setIsModalOpenX((prevState) => !prevState)
  }, [])
  const toggleModalY = useCallback(() => {
    setIsModalOpenY((prevState) => !prevState)
  }, [])

  const handleModalValueChangeX = useCallback(
    (newValue: DataSetKeys) => {
      setXValue(newValue)
      toggleModalX()
      setModalValueX(newValue)
    },
    [toggleModalX]
  )

  const handleModalValueChangeY = useCallback(
    (newValue: DataSetKeys) => {
      setYValue(newValue)
      toggleModalY()
      setModalValueY(newValue)
    },
    [toggleModalY]
  )

  return (
    <div className="p-7">
      <div className="flex flex-row gap-3">
        <div className="flex flex-col">
          <Button
            variant="normal"
            text={modalValueY}
            onClick={toggleModalY}
            Icon={ChevronDown}
            order="rtl"
          />
          <Modal isOpen={isModalOpenY} onClose={toggleModalY}>
            {Object.keys(dataSets).map((value) => (
              <Button
                variant="noBorderNoBG"
                text={value}
                fullWidth
                onClick={() => {
                  handleModalValueChangeY(value as DataSetKeys)
                }}
              />
            ))}
          </Modal>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 30,
            left: 20
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis type="number" dataKey="x" name={xValue} label={{ value: xValue, dy: 10 }} />

          <YAxis type="number" dataKey="y" name={yValue}>
            <Label value={xValue} angle={-90} position="insideLeft" dx={10} />
          </YAxis>

          <ZAxis type="number" dataKey="z" range={[60, 400]} name="name" />

          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />

          <Scatter name="Your data" data={state.data} fill="#8884d8">
            <LabelList dataKey="z" position="outside" />
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>

      <div className="flex flex-row justify-end gap-3">
        <div className="flex flex-col">
          <Button
            variant="normal"
            text={modalValueX}
            onClick={toggleModalX}
            Icon={ChevronDown}
            order="rtl"
          />

          <Modal isOpen={isModalOpenX} onClose={toggleModalX}>
            {Object.keys(dataSets).map((value) => (
              <Button
                variant="noBorderNoBG"
                text={value}
                fullWidth
                onClick={() => {
                  handleModalValueChangeX(value as DataSetKeys)
                }}
              />
            ))}
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default ScatterPlot
